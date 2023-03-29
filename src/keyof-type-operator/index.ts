/**
 * [Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
 * The keyof operator takes an object type and produces a string or numeric literal union of its keys.
 * The following type P is the same type as “x” | “y”
 */

type obj = {
  a: number
  b: string
  c: boolean
}
type keyobj = keyof obj // "a" | "b" | "c"

const foo: keyobj = "b"

type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish

// type A = number

type Mapish = { [k: string]: boolean }
type M = keyof Mapish

// type M = string | number
