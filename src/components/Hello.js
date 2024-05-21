const displayMessage = () => {
    return "I need help!";
}
function Hello() {
    return <h1>The message is: {displayMessage()}</h1>;
}


// es6
// const Hello = () => {
//     return <h1>Hello there!</h1>;
// }

export default Hello; // exporting default component