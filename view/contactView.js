class View{
    static create(data){
        console.log(`${data[0].name} added to contact`)
    }

    static update(){
        console.log(`data update`)
    }
    
    static delContact(data){
        console.log(`${data[0].name} deleted`)
    }

    static showData(data){
        console.log(data)
    }
}

module.exports = View