var userInput;
var userName;
userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: MessageChannel, errorCode: code };
}
generateError('An error has ocurred!', 200);
