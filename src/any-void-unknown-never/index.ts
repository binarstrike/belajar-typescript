/**
 * terdapat banyak tipe data bawaan dari typescript, selain number dan string ada juga tipe data lain seperti
 * `any` `void` `unknown` `never`
 *
 * - sesuai nama nya tipe data `any` berarti bisa berbentuk tipe data apa saja.
 * - seperti bahasa pemrograman lain tipe data `void` berarti hampa atau tidak mengembalikan nilai apa pun
 *   ini biasa digunakan saat mambuat fungsi yang tidak memiliki nilai yang dikembalikan
 * - tipe data `unknown` dari artinya saja tidak dikenal, tipe data ini mulai di kenalkan pada Typescript 3.
 *   artikel bagus nih https://mainawycliffe.dev/blog/typescript-use-unknown-instead-of-any/
 *
 * - percakapan dari chat GPT
 *   me: can you provide me any use case to use `never` data type in typescript
 *   gpt: Yes, you can use a 'never' data type in Typescript when you want to make sure that a function should never return a value.
 *        It's particularly useful when dealing with errors or when you need to indicate that an operation should cause
 *        the program to crash.
 *   gpt: Ya, Anda bisa menggunakan tipe data 'never' di TypeScript saat Anda ingin memastikan bahwa suatu fungsi
 *        tidak boleh mengembalikan nilai. Ini sangat berguna ketika berhadapan dengan kesalahan atau ketika Anda
 *        perlu menunjukkan bahwa suatu operasi harus menyebabkan program menjadi macet.
 */
type type_bla = {
  nama: string
  umur: number
}

/**
 * Tipe data `unknown` sebenarnya mirip tipe data `any` namun dengan tipe data `unknown` kita tidak bisa langsung mengakses/membaca
 * nilai pada tipe data tersebut, dengan begitu maka diperlukan `casting`/`tipe assertion` yaitu mengubah nya menjadi
 * tipe data lain terlebih dahulu. Keyword `as` digunakan untuk type assertion atau casting tipe data
 */
let bla: unknown = {
  nama: "Ucup",
  umur: 18,
}
console.log((bla as { nama: string; umur: number }).nama)
console.log((bla as type_bla).nama)

/**
 * Tipe data `void` biasa digunakan untuk membuat fungsi yang tidak mengembalikan nilai ketika dipanggil
 */
type NAME = {
  fisrtname: string
  lastname?: string
}
function displayMyName(nama: NAME): void {
  console.log(
    `Nama ku adalah ${nama.fisrtname} ${!nama.lastname ? "" : nama.lastname}`
  )
}
displayMyName({ fisrtname: "Binar" })
