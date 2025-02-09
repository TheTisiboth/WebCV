const fs = require('fs')
const path = require('path')

const sourceFolder = '../../../WebCV_backend/types'
const destinationFolder = '../types'
const skipFolders = ['generated']

const files = [
    {
        src: path.join(__dirname, `./${sourceFolder}`),
        dest: path.join(__dirname, `./${destinationFolder}`),
    }
]

function copyFile(src, dest) {
    const destinationDir = path.dirname(dest)

    // Check if source file exists
    if (!fs.existsSync(src)) {
        console.error(`Source file does not exist: ${src}`)
        process.exit(1)
    }

    // Ensure destination directory exists or create it
    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true })
    }

    // Read the source file, modify its content and write to the destination file
    const content = fs.readFileSync(src, 'utf8')

    fs.writeFile(dest, content, (err) => {
        if (err) {
            console.error(`Error writing to destination file: ${err}`)
            process.exit(1)
        } else {
            console.log(`File ${src} copied and modified successfully!`)
        }
    })
}

function copyFolder(src, dest) {
    // Ensure destination directory exists or create it
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true })
    }

    // Read all items in the source directory
    const items = fs.readdirSync(src)

    items.forEach(item => {
        const srcPath = path.join(src, item)
        const destPath = path.join(dest, item)

        // Skip folders in the skipFolders list
        if (fs.lstatSync(srcPath).isDirectory() && skipFolders.includes(item)) {
            console.log(`Skipping folder: ${item}`)
            return
        }

        if (fs.lstatSync(srcPath).isDirectory()) {
            copyFolder(srcPath, destPath)
        } else {
            copyFile(srcPath, destPath)
        }
    })
}

files.forEach(({ src, dest }) => {
    if (!fs.existsSync(src)) {
        console.error(`Source path does not exist: ${src}`)
        process.exit(1)
    }

    if (fs.lstatSync(src).isDirectory()) {
        copyFolder(src, dest)
    } else {
        copyFile(src, dest)
    }
})
