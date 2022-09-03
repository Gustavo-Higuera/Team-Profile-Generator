const fs = require('fs');

const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve('File created! Check the "dist" folder for your new HTML file.')
        })
    });
}

module.exports = writeFile;