import fs from 'fs';
import path from 'path';

const getCurrentCalendarWeek = (): string => {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    const weekNumber = Math.ceil((days + 1) / 7);
    return weekNumber.toString();
};

const getCurrentYear = (): number => {
    const currentDate = new Date();
    return currentDate.getFullYear();
};

const generateJournal = () => {
    const weekNumber = getCurrentCalendarWeek();
    const name = `KW-${weekNumber}`;

    const templatePath = path.join(__dirname, '../templates/journal-template.md');
    const outputFolder = path.join(process.cwd(), `journals/${getCurrentYear()}`);

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
                console.log(`Journal file created for ${name}: ${fileName}`);
            }
        });
    });
};

export default generateJournal;
