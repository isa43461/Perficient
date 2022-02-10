let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'max';

if(typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message: string, code: number): never{
    throw { message: MessageChannel, errorCode: code}
}

generateError('An error has ocurred!', 200);