// interface digunakan untuk type definition dengan meneptapkan properti-properti dan tipe data pada properti tersebut
// untuk penamaan interface bisa diawali dengan huruf kapital `I`, contoh: `IData` atau DataInterface ini agar tidak bingung ketika
// terdapat class atau nama variabel lain dengan nama yang sama.
enum Hobies {
  A = "Memancing",
  B = "Rebahan",
}
interface IData {
  nama: string
  umur: number
  // gunakan tanda `?` untuk properti yang opsional
  hobi?: Hobies
  isSudahMakan: boolean
  makan(): string
}

let data1: IData = {
  nama: "Andi",
  umur: 18,
  hobi: Hobies.B,
  isSudahMakan: true,
  makan() {
    return this.isSudahMakan
      ? `${this.nama} sudah makan`
      : `${this.nama} belum makan`
  },
}

console.log(data1)
console.log(data1.makan())
