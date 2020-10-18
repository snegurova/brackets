module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.reduce((res, it) => res.concat(it));
    let stack = [];
    for (let el of str) {
        let bracketConfigIndex = bracketsConfig.indexOf(el);
        if (bracketConfigIndex % 2 === 0 && el !== stack[stack.length - 1]) {
            stack.push(bracketsConfig[bracketConfigIndex + 1]);
        } else if (stack.pop() !== bracketsConfig[bracketConfigIndex]) {
            return false;
        }
    }
    return stack.length === 0;
}


