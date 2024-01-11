function strongPassword(S) {
  const hasLowerCase = /[a-z]/.test(S);
  const hasUpperCase = /[A-Z]/.test(S.slice(1,-1));
  const hasDigit = /[0-9]/.test(S.slice(1,-1));
  const hasSymbol = /[@#%&!^$?]/.test(S.slice(1,-1));

  return (S.length > 9 && hasLowerCase && hasUpperCase && hasDigit && hasSymbol) ? 'SECURE' : 'NOT SECURE';
}

console.log(strongPassword('abcHD@e1rgsdddd'));
 