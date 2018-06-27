
class View {
    
    static insertContact(dataInsert) {
        
        if(dataInsert.phone.length >= 17) {
            console.log('Phone number equals to or more than 17. DANGER!')
        }
        console.log('Succeed add to Table Contact : ',dataInsert)
    }

    static insertGroup(dataGroup) {
        console.log('Succeed add to Table Group : ',dataGroup)
    }

    static updateContact(dataUpdate) {
        console.log('Succeed update to Table Contact : ', dataUpdate)
    }

    static updateGroup(dataGroup) {
        console.log('Succeed update to Table Group : ', dataGroup)
    }

    static showContact(dataContact) {
        console.log('Available Contact data : ', dataContact)
    }
    
    static showGroup(groupData) {
        console.log('Available Groyp data : ', groupData)
    }

    static deleteContact(removedContact) {
        console.log(removedContact, 'has been deleted')
    }

    static deleteGroup(removedGroup) {
        console.log(removedGroup, 'has been deleted')
    }
}

module.exports = View