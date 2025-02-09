import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceFolder = path.resolve(__dirname, '../../../WebCV_backend/types')
const destinationFolder = path.resolve(__dirname, '../types/generated')

// SCRIPT INPUTS: folders to skip, and folders to copy
const skipFolders = new Set(['generated']) // TODO: Add files to skip, like User and Payload
const copyFolders = new Set([
    { src: sourceFolder, dest: destinationFolder }
])
// SCRIPT INPUTS END

const ensureDirExists = (dir: string) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
}

const copyFile = (src: string, dest: string) => {
    ensureDirExists(path.dirname(dest))

    const content = fs.readFileSync(src, 'utf8')
        .replace(/;$/gm, '')  // Remove semicolons at the end of lines
        .replace(/"/g, '\'')  // Replace double quotes with single quotes

    fs.writeFileSync(dest, content)
    console.log(`File ${src} copied and modified successfully!`)
}

const copyFolder = (src: string, dest: string) => {
    ensureDirExists(dest)
    fs.readdirSync(src).forEach(item => {
        const srcPath = path.join(src, item)
        const destPath = path.join(dest, item)
        if (fs.lstatSync(srcPath).isDirectory()) {
            if (skipFolders.has(item)) {
                console.log(`Skipping folder: ${item}`)
            } else {
                copyFolder(srcPath, destPath)
            }
        } else {
            copyFile(srcPath, destPath)
        }
    })
}

copyFolders.forEach(({ src, dest }) => {
    if (fs.existsSync(src)) {
        if (fs.lstatSync(src).isDirectory()) {
            copyFolder(src, dest)
        } else {
            copyFile(src, dest)
        }
    } else {
        console.error(`Source path does not exist: ${src}`)
        process.exit(1)
    }
})
