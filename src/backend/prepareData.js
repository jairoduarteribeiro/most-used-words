module.exports = rows => {
  return new Promise((resolve, reject) => {
    try {
      const words = rows
        .filter(filterValidRows)
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
