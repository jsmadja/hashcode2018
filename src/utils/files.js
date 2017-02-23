import fs from 'fs';

export function fileReader(filePath) {
    
    // const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});
    // let splittedContent = fileContent.split('\n');
    // {...ARGS} = splittedContent[0].split(' ').map((number) => parseInt(number));
    // splittedContent = splittedContent.slice(1, splittedContent.length);

    // return ARGS;
}

export function fileWriter(fileName, content) {
    
    fs.writeFileSync(fileName, content);

}
