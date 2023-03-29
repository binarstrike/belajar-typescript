/**
 * type aliases dan union
 * union adalah cara untuk memebuat sebuah variabel saat di deklarasikan memilik lebih dari 1 tipe data
 */

// membuat variabel `data` dengan tipe data `number` dan `string` yang di pisahkan dengan simbol/tanda/karakter pipa `|`
let data: number | string
data = "Blabla.."
data = 17

interface IUser {
  nama: string
  umur: number
}
function greetUser(data: IUser): IUser | string {
  return data.umur > 17
    ? `Hi ${data.nama}, umur: ${data.umur}`
    : { nama: data.nama, umur: data.umur }
}
console.log(greetUser({ nama: "Ucup", umur: 18 }))
console.log(greetUser({ nama: "Andi", umur: 16 }))

// type aliases digunakan untuk membuat sebuah alias untuk nama tipe data baru dari tipe data yang sudah ada.
// gunakan keyword `type` untuk mendefinisikan alias pada sebuah tipe data, cara ini berguna agar kode lebih mudah dibaca.
type ID = number | string
type Name = string
type UserInterface = IUser

let ax: UserInterface = {
  nama: "Udin",
  umur: 18,
}

const id1: ID[] = [12, 34, 223, 14, 67, 81]
const id2: ID = "18"
