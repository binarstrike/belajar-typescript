/**
 * Selectively Construct Types from other types
 * [link penting](https://www.totaltypescript.com/tutorials/beginners-typescript/beginner-s-typescript-section/selectively-construct-types-from-other-types)
 */
import { Expect, Equal } from "../helpers/type-utils"

interface User {
  id: string
  firstName: string
  lastName: string
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

/**
 * ada dua solusi bisa menggunakan Omit atau Pick
 * Omit untuk menghilangkan properti yang tidak akan digunakan
 * Pick digunakan untuk mengambil type properti yang dibutuhkan
 */
//type MyType = Omit<User, "id">;
type MyType = Pick<User, "firstName" | "lastName">

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>]
