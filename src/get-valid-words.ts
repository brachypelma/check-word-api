import { dictionary } from './dictionary'

export default function getValidWords(arr: string[]) {
  return (arr.length) ? arr.filter(str => isWord(str)) : []
}

function isWord(str: string) {
  if (!str.length) return false

  const strStart = str.length === 1 ? str : str[0] + str[1]
  const entry = dictionary.find(({ start }) => start === strStart)
  
  return !!entry?.words.includes(str)
}
