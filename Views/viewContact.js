class View{
    static create(inputContact){
        console.log(inputContact);
    }
    
    static error(message){
        console.log(message)
    }

    static update(id){
        console.log(`ID ${id} has been updated!`)
    }

    static delete(id){
        console.log(`ID ${id} has been deleted from contact!`)
    }

    static show(dataContact){
        console.log(dataContact)
    }
}

module.exports = View