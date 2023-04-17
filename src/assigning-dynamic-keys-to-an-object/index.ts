/**
 * Assigning Dynamic Keys to an Object
 * [link penting](https://www.totaltypescript.com/tutorials/beginners-typescript/beginner-s-typescript-section/assigning-dynamic-keys-to-an-object)
 */

const createCache = () => {
  //const cache = {};
  const cache: {
    [id: string]: string
  } = {}

  const add = (id: string, value: string) => {
    cache[id] = value
  }

  const remove = (id: string) => {
    delete cache[id]
  }

  return {
    cache,
    add,
    remove,
  }
}
