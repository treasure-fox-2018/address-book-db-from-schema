class ViewHelp{
    static help(){
        console.log('node index.js help')
        console.log('node index.js create contact || group <name> <company> <phone> <email>')
        console.log('node index.js update contact || group <id> <coloumn> <newValue>')
        console.log('node index.js delete contact || group <id>')
        console.log('node index.js show contact || group <noInputId>||<inputId>')
        console.log('node index.js assign <phoneNumber> <groupName>')
    }
}

module.exports = ViewHelp