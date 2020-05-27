module.exports = rows => {
  return new Promise((resolve, reject) => {
    try {
      const words = rows
        .filter(filterValidRows)
        .map(removePunctuation)
        .map(removeTags)
      resolve(words)
    } catch (exception) {
      reject(exception)
    }
  })
}

const filterValidRows = row => {
  const notNumber = !parseInt(row.trim())
  const notEmpty = !!row.trim()
  const notInterval = !row.includes('-->')
  return notNumber && notEmpty && notInterval
}

const removePunctuation = row => row.replace(/[,?!.-]/g, '')

const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim()
