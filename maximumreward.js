function maximumReward(n, tasks) {
    tasks.sort((a, b) => a[0] - b[0]);
    let time= 0;
    let totalReward = 0;

    for (const task of tasks) {
        time += task[0]
        totalReward += task[1] - time
    }

    return totalReward;
}
 
const n = 3;
const tasks = [
    [6, 10],
    [8, 15],
    [5, 12]
];

const result = maximumReward(n, tasks);
console.log(result);
