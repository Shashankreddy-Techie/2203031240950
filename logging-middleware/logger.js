const fs = require('fs')
const path = require('path')

const logPath = path.join(__dirname, 'logs.json')

function logger(action, data) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    action,
    data,
  }

  let logs = []
  if (fs.existsSync(logPath)) {
    const existing = fs.readFileSync(logPath, 'utf8')
    logs = existing ? JSON.parse(existing) : []
  }

  logs.push(logEntry)
  fs.writeFileSync(logPath, JSON.stringify(logs, null, 2))
}

module.exports = logger
