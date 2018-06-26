class View{

    static create(data){
        console.log(`group ${data[0].name} added`)
    }
    static update(){
        console.log('update')
    }

    static delete(data){
        console.log(`group ${data[0].name} has been deleted`)
    }

    static show(data){
        console.log(data)
    }
}

module.exports = View