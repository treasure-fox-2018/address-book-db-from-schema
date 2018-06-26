class View {


  static add(data) {
    console.log(data + ' telah ditambahkan ke Kontak')
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
