import readlineSync from 'readline-sync'

export const prompt = (msg) => {
  return readlineSync.question(`${msg}`)
}
