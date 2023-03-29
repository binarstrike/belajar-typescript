/**
 * [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types)
 * Menurut Izumi-chan(bot dc): Penggunaan `generic type` pada TypeScript memungkinkan Anda untuk mendefinisikan
 * sebuah fungsi yang menerima nilai atau parameter dengan berbagai tipe dan fungsi tersebut dapat mengembalikan
 * nilai yang dapat dipilih menjadi berbagai tipe lainnya.
 */

interface bio {
  nama: string
  umur: number
}

interface data<T> {
  id: T
  nama: string
  hobies?: Array<string> | string
}

function identity<T>(...arg: Array<T>): Array<T> {
  return arg
}
console.log(
  identity<bio>({ nama: "Andi", umur: 18 }, { nama: "Dika", umur: 17 })
)

console.log(
  identity<data<number>>(
    { id: 1, nama: "Ucup", hobies: ["Coding", "Memancing"] },
    { id: 2, nama: "Ani", hobies: "Menari" }
  )
)

// Generic constraints

interface Lengthwise {
  length: number
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length) // Now we know it has a .length property, so no more error
  return arg
}
console.log(loggingIdentity<Array<number>>([1, 2, 3]))

function getProperty<Type, Key extends keyof Type>(obj: Type, ...key: Key[]) {
  let array = []
  for (const iterator of key) {
    array.push(obj[iterator])
  }
  return array
}

let x = { a: 1, b: 2, c: 3, d: 4 }

console.log(getProperty(x, "a"))
console.log(getProperty(x, "a", "b", "d"))

// Using Class Types in Generics

class BeeKeeper {
  hasMask: boolean = true
}

class ZooKeeper {
  nametag: string = "Mikle"
}

class Animal {
  numLegs: number = 4
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper()
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper()
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}

console.log(createInstance(Lion).keeper.nametag)
console.log(createInstance(Bee).keeper.hasMask)
console.log(createInstance(Bee).numLegs)
