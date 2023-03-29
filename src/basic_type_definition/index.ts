/**
 * dasar deklarasi variabel pada typescript
 * typescript akan secara otomatis memberitahu jika variabel hello mempunyai tipe data `string` namun sebaiknya pada saat deklarasi
 * variabel lebih baik langsung definisi kan tipe data nya
 */
let hello = "hello"
let world: string = "world"
console.log(hello, world)

/**
 * pada typescript variabel yang di deklarasikan dengan keyword const maka variabel tersebut benar-benar sebuah variabel konstanta
 * atau tidak bisa diubah nilai nya maupun nilai dengan tipe data yang berbeda
 */
const nama: string = "Ucup"
// nama = "Udin"  // tidak bisa
console.log(nama)
