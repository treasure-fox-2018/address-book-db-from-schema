class View {


  static add(data) {
    console.log(data + ' telah ditambahkan ke nama Group')
  }

  static update(data) {
    console.log('GROUP dengan id ' + data + ' telah diupdate')
  }


  static delete(data) {
    console.log('GROUP dengan nama ' + data + ' berhasil dihapus')
  }

  static ShowGroup(data) {
    console.log(data)
  }



}
module.exports = View
