import fs from 'fs/promises';

const list = async (pathToDir) => {
    try {
        const files = await fs.readdir(pathToDir);
        console.log(files);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw error;
        }
    }
};

await list('src/fs/files');
