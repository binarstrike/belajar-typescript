/**
 * array
 * jika mendeklarasikan array pada typescript tipe data pertama yang di buat/tetapkan adalah nilai yang terdapat pada array tersebut,
 * jadi jika elemen di dalam array berupa string maka array tersebut hanya dapat di isi dengan tipe data string.
 * terdapat sintaks khusus untuk menetapkan tipe data elemen pada array
 */
const a: Array<number | string> = []
a.push("bla", 90, 76, "Udin")
console.log(a)

/**
 * object
 */

let b: object = {
  nama: "Andi",
  umur: 18,
  hobi: "memancing",
}
console.log(b)
// tidak bisa menmabahkan properti baru
// b.isSudahMakan = true

// explicit types atau mendeklarasikan sebuah object dengan meneptakan tipe data pada setiap properti yang terdapat pada object
enum Hobies {
  A1 = "Memancing",
  A2 = "Anything",
}

// interface digunakan untuk type definition dengan meneptapkan properti-properti dan tipe data pada properti tersebut
// untuk penamaan interface bisa diawali dengan huruf kapital `I`, contoh: `IData` atau DataInterface ini agar tidak bingung ketika
// terdapat class atau nama variabel lain dengan nama yang sama.
interface IData {
  nama: string
  umur: number
  // gunakan tanda `?` untuk properti yang opsional
  hobi?: Hobies
  isSudahMakan: boolean
  makan(): string
}

let c: IData = {
  nama: "Andi",
  umur: 18,
  hobi: Hobies.A1,
  isSudahMakan: true,
  makan() {
    return this.isSudahMakan
      ? `${this.nama} sudah makan`
      : `${this.nama} belum makan`
  },
}

console.log(c)
console.log(c.makan())
