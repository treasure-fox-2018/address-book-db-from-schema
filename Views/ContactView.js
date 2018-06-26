class View {


  static add(data) {
    console.log(data + ' telah ditambahkan ke Kontak')
  }

  static Help() {
    console.log("contacts command")
    console.log("adding contact          : contact add <name>   <company>   <phone>   <email>  ")
    console.log("update contact        : contact update <id>  <param>  <value>")
    console.log("show contact            : contact view")
    console.log("delete contact          : contact delete <id>")
  }


  static update(data) {
    console.log('data dengan id ' + data + ' telah diupdate')
  }


  static delete(data) {
    console.log('data dengan nama ' + data + ' berhasil dihapus')
  }

  static ShowContact(data) {
    console.log(data)
  }



}
module.exports = View
