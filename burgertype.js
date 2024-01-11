function typesOfBurger(X, Y, N, R) {
    if (X >= Y) {
        // Handle the case where X is greater than or equal to Y
        return [-1];
    }

    if (R < N * X) {
        return [-1];
    }

    if (R >= N * Y) {
        return [0, N];
    }

    const maxPremiumBurgers = Math.floor((R - N * X) / (Y - X));

    if (maxPremiumBurgers < 0) {
        return [N, 0];
    }

    const premiumBurgers = Math.min(maxPremiumBurgers, N);
    const normalBurgers = N - premiumBurgers;

    return [normalBurgers, premiumBurgers];
}

// Example usage:
const result = typesOfBurger(2, 5, 10, 40);
console.log(result);

// 
// function typesOfBurger(X, Y, N, R) {
//     const maxNormalBurgers = Math.min(Math.floor(R / X), N);
//     let remainingBudget = R - maxNormalBurgers * X;
    
//     const premiumBurgers = Math.floor(remainingBudget / Y);
//     remainingBudget -= premiumBurgers * Y;
    
//     const totalNormalBurgers = maxNormalBurgers + Math.floor(remainingBudget / X);
    
//     return [totalNormalBurgers, premiumBurgers];
// }

// // Example usage:
// const result = typesOfBurger(2, 5, 10, 40);
// console.log(result);  // ANS=[10,4]



