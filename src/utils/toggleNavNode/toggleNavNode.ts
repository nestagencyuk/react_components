/**
 * Toggle a node open or closed
 *
 * @param {Object} nodes
 * The nodes object
 */
const toggleNavNode = (nodes: any, key: string) => {
  const clone = JSON.parse(JSON.stringify(nodes))

  const rec = (obj: any, item: any) => {
    Object.keys(item).forEach((x) => {
      if (typeof item[x] === 'object') {
        obj = item
        obj[x] = item[x]
        if (x === key) {
          obj[key].open = !item[key].open
        }
        if (obj[key] && x !== key && obj[x].depth == obj[key].depth) {
          obj[x].open = false
        }

        rec(obj[x], item[x])
      } else {
        obj = { ...obj, [x]: obj[x] }
      }
    })

    return obj
  }

  return rec({}, clone)
}

export default toggleNavNode
