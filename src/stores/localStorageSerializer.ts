import CryptoJs from 'crypto-js'

export default {
  read: (value: any) => {
    return JSON.parse(CryptoJs.AES.decrypt(value, import.meta.env.VITE_LOCALSTORAGE_SECRET_KEY).toString(CryptoJs.enc.Utf8))
  },
  write: (value: any) => {
    return CryptoJs.AES.encrypt(JSON.stringify(value), import.meta.env.VITE_LOCALSTORAGE_SECRET_KEY).toString()
  },
}
