class View{
    static create(name){
        console.log(`Successfully create new group ${name}`)
    }

    static error(message){
        console.log(message)
    }

    static update(idGroup){
        console.log(`Group name id ${idGroup} has been updated!`)
    }

    static delete(id){
        console.log(`Group ${id} has been deleted!`);
    }

    static show(groups){
        console.log(groups);
    }
}

module.exports = View