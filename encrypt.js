const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

const crypto = require('crypto-js')

let encryptionKey

const getKey = () => {
  return new Promise((resolve, reject) => {
    readline.question('Input encryption key \n', (key) => {
      console.log('Got it.')
      encryptionKey = key
      resolve()
    })
  })
}

const encryptStuff = (close) => {
  return new Promise((resolve, reject) => {
    readline.question(
      `Input data to encrypt or type 'exit' to close. \n`,
      (data) => {
        if (data === 'exit') {
          close()
        } else {
          const encrypted = crypto.AES.encrypt(data, encryptionKey)
          console.log(encrypted.toString())
        }
        resolve()
      }
    )
  })
}

const main = async () => {
  await getKey()
  do {
    await encryptStuff(readline.close)
  } while (true)
}

main()
