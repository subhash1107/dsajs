function formatList(items) {
  if (items.length === 0) return ''
  if (items.length === 1) return items[0]
  if (items.length === 2) return items[0] +' and '+items[1]
  return items.slice(0,items.length-1).join(', ')+ ' and '+items[items.length-1]
}