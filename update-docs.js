const jsdoc2md = require('jsdoc-to-markdown');
const fsPath = require('fs-path');
const { exec } = require('child_process');

const getRepoUrlCommands = 'definedrepo=$(git config --get remote.origin.url) && definedrepo=${definedrepo#*@} && REPO="${definedrepo%.*}" && PATTERN="\/" && REPO_URL=$(echo "${REPO//$PATTERN/\/}") && echo $REPO_URL';
exec(getRepoUrlCommands, (err, stdout, stderr) => {
  let setBadge = true;
  if ((err && err.code !== 0) || (stderr && stderr.code)) {
    setBadge = false;
    console.error('Something went wrong while attempting to extract repo badge. But this is not a show stopper...', err, stderr);
  }

  jsdoc2md.render({ files: './src/*.js' }).then((result) => {
    let header = '# Vuetify Google Autocomplete';

    // Add the badge
    if (setBadge) {
      header = `${header}\n\n[![build status](${stdout.trim()}/badges/master/build.svg)](${stdout.trim()}/commits/master)`;
    }

    header = `${header}\n\nFor more detailed HTML output of the JSDocs, refer to the \`\`./docs\`\` directory.\n\n`;

    const finalResult = `${header}${result}`;
    fsPath.writeFile('./JSDOCS.md', finalResult, (writeError) => {
      if (writeError) {
        console.error('Error updating JSDocs: ', writeError);
      }
      console.log('✅', ' JSDOCS.md Updated Successfully!');
    });
  });
});
