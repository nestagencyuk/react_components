/**
 * Create an object of nodes for toggling nav node state
 *
 * @param {Array} links
 * The array of links to process
 */
const createNavNodes = (links: any) => {
  const rec = (arr: any, obj: any, depth: any) => {
    depth++
    arr.forEach((x: any) => {
      if (!x) return
      if (x.children) {
        obj[x.text] = { open: false, depth }
        rec(x.children, obj[x.text], depth)
      }
    })
    return obj
  }

  return rec(links, {}, 0)
}

export default createNavNodes
