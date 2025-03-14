import fs from 'fs';
import path from 'path';

const createCommand = (name: string) => {
    const templatePath = path.join(__dirname, '../../templates/journal-template.md');
    const outputFolder = path.join(process.cwd(), 'journals');

    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true });
    }

    fs.readFile(templatePath, 'utf-8', (err, templateContent) => {
        if (err) {
            console.error('Error reading template file:', err);
            return;
        }

        const journalContent = templateContent.replace('{{name}}', name);

        const fileName = `${name}.md`;
        const filePath = path.join(outputFolder, fileName);

        fs.writeFile(filePath, journalContent, (err) => {
            if (err) {
                console.error('Error writing the journal file:', err);
            } else {
                console.log(`Journal file created: ${fileName}`);
            }
        });
    });
};

export default createCommand;
