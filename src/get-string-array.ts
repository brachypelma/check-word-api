export default function getStringArray(uri: string) {
  const slice = uri.slice(uri.indexOf('?s=') + 3)
  const strings = slice.length ? slice.split(',') : []
  return strings.map(s => s.toLowerCase()).filter(s => s.match(/^[a-zA-Z]*$/))
}
