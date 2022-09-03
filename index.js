const promptUser = require('./src/prompts');
const generateHTML = require('./src/page-template');
const writeFile = require('./src/generate-file');

function init() {
    promptUser()
    .then(teamData => {
        return generateHTML(teamData);
    })
    .then(pageHTML => {
        return writeFile('./dist/index.html', pageHTML)
    }).then(writeFileResponse => {
        console.log(writeFileResponse);
    });
}

init();