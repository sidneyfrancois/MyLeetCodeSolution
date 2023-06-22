export function groupAnagrams(strs) {
  var mapper = new Map()
  for (let str of strs) {
    let s = str.split('').sort().join('')
    if (!mapper.has(s)) {
      mapper.set(s, [])
    }
    mapper.get(s).push(str)
  }
  
  return [... mapper.values()]
}