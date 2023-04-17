/**
 * menggabungkan 2 atau lebih types
 * [link penting](https://www.totaltypescript.com/tutorials/beginners-typescript/beginner-s-typescript-section/combining-types-to-create-new-types/)
 */

interface User {
  id: string
  firstName: string
  lastName: string
}

interface Post {
  id: string
  title: string
  body: string
}

/**
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }
 *
 * tanda `&` digunakan untuk menggabungkan types beda dengan `extends`. jika `extends` digunakan untuk mewarisi types
 * ini juga berlaku saat mendeklarasikan interface
 */
export const getDefaultUserAndPosts = (): User & { posts: Post[] } => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  }
}

const userAndPosts = getDefaultUserAndPosts()

console.log(userAndPosts.posts[0])
