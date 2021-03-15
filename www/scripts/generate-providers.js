const path = require('path')
const fs = require('fs')

const providersPath = path.join(process.cwd(), '/docs/providers')

const files = fs.readdirSync(providersPath, 'utf8')

const result = files.reduce((acc, file) => {
  const provider = fs.readFileSync(path.join(providersPath, file), 'utf8')
  try {
    const { id, title } = provider.match(/id: (?<id>.+)\ntitle: (?<title>.+)\n/).groups
    acc[id] = title
    return acc
  } catch (error) {
    console.error('Could not read provider header', { file: provider, fileName: file })
    throw error
  }
}, {})

fs.writeFileSync(path.join(process.cwd(), 'providers.json'), JSON.stringify(result, null, 2))
