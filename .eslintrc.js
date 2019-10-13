
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": [
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
    },
    "parser": "esprima",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
    ],
    "rules": {
        "prettier/prettier": "error"
    }
};