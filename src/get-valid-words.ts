import dictionary from './dictionary'

export default function getValidWords(arr: string[]) {
  return (arr.length) ? arr.filter(str => isWord(str)) : []
}

function isWord(str: string) {
  if (!str.length) return false
  const entry = dictionary.find(({ firstLetter }) => firstLetter === str[0])
  
  return entry?.words.includes(str)
}
