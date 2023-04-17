/**
 * [Typeof Type Operator](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)
 * JavaScript already has a typeof operator you can use in an expression context.
 * TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property
 */

// Prints "string"
console.log(typeof "Hello world")

let s = "hello"
let n: typeof s

// let n: string

/**
 * This isn’t very useful for basic types, but combined with other type operators, you can use typeof to conveniently
 * express many patterns. For an example, let’s start by looking at the predefined type ReturnType<T>.
 * It takes a function type and produces its return type
 */
function f() {
  return { x: 10, y: 3 }
}
type P = ReturnType<typeof f>
/**
 * ✅
  type P = {
    x: number;
    y: number;
  }
*/

type Q = typeof f
/**
  type Q = () => {
    x: number;
    y: number;
  }
*/
const alphabet: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

function reverseWord(word: string): string {
  const revWord = word.split("")
  let actualWord: string = ""
  for (const w of revWord) {
    if (w.includes(" ")) {
      actualWord += " "
      continue
    }
    const wordIndex = alphabet.indexOf(w)
    actualWord += alphabet[alphabet.length - wordIndex - 1]
  }
  return actualWord
}

console.log(reverseWord("svool tfbh"))
console.log(reverseWord("hello guys"))
