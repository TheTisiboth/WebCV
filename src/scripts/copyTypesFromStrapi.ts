import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import prettier from 'prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceFolder = path.resolve(__dirname, '../../../WebCV_backend/types')
const destinationFolder = path.resolve(__dirname, '../types/generated')

// SCRIPT INPUTS: items to skip (folders or files), and folders to copy
const skipItems = new Set(['generated', 'User.ts', 'Payload.ts'])
const copyFolders = new Set([
    { src: sourceFolder, dest: destinationFolder }
])
// SCRIPT INPUTS END

const ensureDirExists = (dir: string) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
}

const copyFile = async (src: string, dest: string) => {
    ensureDirExists(path.dirname(dest))
    const content = '// Generated based on Strapi inner types. Please do not modify.\n' +
        fs.readFileSync(src, 'utf8')

    const formattedContent = await prettier.format(content, { parser: 'typescript', tabWidth: 4, semi: false, singleQuote: true })
    fs.writeFileSync(dest, formattedContent)
    console.log(`File ${src} copied and modified successfully!`)
}

const copyFolder = (src: string, dest: string) => {
    ensureDirExists(dest)
    fs.readdirSync(src).forEach(item => {
        const srcPath = path.join(src, item)
        const destPath = path.join(dest, item)
        if (skipItems.has(item)) {
            console.log(`Skipping item: ${item}`)
        } else if (fs.lstatSync(srcPath).isDirectory()) {
            copyFolder(srcPath, destPath)
        } else {
            void copyFile(srcPath, destPath)
        }
    })
}

copyFolders.forEach(({ src, dest }) => {
    if (fs.existsSync(src)) {
        if (fs.lstatSync(src).isDirectory()) {
            copyFolder(src, dest)
        } else {
            void copyFile(src, dest)
        }
    } else {
        console.error(`Source path does not exist: ${src}`)
        process.exit(1)
    }
})
