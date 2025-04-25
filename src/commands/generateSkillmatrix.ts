import fs from "fs";
import {input} from '@inquirer/prompts';
import {ChartConfiguration} from "chart.js";
import {ChartJSNodeCanvas} from "chartjs-node-canvas";

export async function createSkillMatrix() {
    // List of skills
    const skills = [
        'Angular', 'Vue', 'Lit.js', 'TypeScript', 'Node.js', 'SCSS',
        'Playwright', 'Cypress', 'Jest', 'Nest.js'
    ];

    const answers = {};

    for (const skill of skills) {
        answers[skill.toLowerCase().replace('.', '')] = await input({
            message: `${skill} rating (0-10):`,
            validate(input: string) {
                const value = parseInt(input, 10);
                return value >= 0 && value <= 10 ? true : `Please enter a number between 0 and 10 for ${skill}.`;
            }
        });
    }

    await generateRadarChartMarkdown(answers);
}

async function generateRadarChartMarkdown(answers: { [key: string]: number }) {
    const labels = Object.keys(answers);
    const data = Object.values(answers);

    const width = 800;
    const height = 800;
    const backgroundColour = 'white';
    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, backgroundColour });

    const configuration: ChartConfiguration = {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Skill Levels',
                data: data,
                fill: true,
                backgroundColor: 'rgba(179, 181, 198, 0.2)',
                borderColor: 'rgba(179, 181, 198, 1)',
                pointBackgroundColor: 'rgba(179, 181, 198, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179, 181, 198, 1)'
            }],
        },
    };

    const image = await chartJSNodeCanvas.renderToDataURL(configuration);

    const markdown = `
  # Skill Matrix

  Below is your skill matrix chart:

  ![Radar Chart](${image})
  `;

    // Save markdown
    fs.writeFileSync('skillmatrix.md', markdown);
    console.log('Markdown file with embedded image generated as "skillmatrix.md".');
}
