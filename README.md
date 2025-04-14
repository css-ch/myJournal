# 📝 MyJournal CLI - Weekly Journal Template Generator

**MyJournal CLI** is a simple command-line tool to help apprentices document their weekly reflections in a structured, interactive way. It generates a personalized journal template in Markdown format that encourages apprentices to track their progress, reflect on achievements, and set goals for the upcoming week.

## 🚀 Features

- **Easy-to-Use**: Generates a pre-formatted journal template with interactive checkboxes and prompts.
- **Customizable**: You can adjust the template content based on your needs.
- **Motivating & Interactive**: Helps apprentices stay on track with minimal effort, making journaling feel less like a chore.
- **German Support**: The journal template is in German to fit local needs.

## 📥 Installation

To install **MyJournal CLI**, you can either install it globally or as a local dependency in your project.

### Global Installation

```bash
npm install -g @css-ch/myjournal
```

### Local Installation

```bash
npm install @css-ch/myjournal --save-dev
```

## 🛠️ Usage

Once installed, you can use the CLI to generate your weekly journal template.

### Create a New Journal

Run the following command to generate a new journal for your apprentice:

```bash
myjournal generate journal
```

This will create a `journal-apprentice-name.md` file in your current directory with a pre-filled journal template.

### Customizing the Template

The default journal template is designed to help apprentices reflect on their week and plan ahead. You can modify the template contents in the `templates/journal-template.md` file to suit your needs.

## ✨ Example Journal Template

When you run the `myjournal create "name"` command, the following template will be generated:

```markdown
# 📝 Dein Journal für {{name}} – Deine Woche im Rückblick

---

## 🌟 Wie war deine Woche?

- [ ] 😄 **Sehr gut**
- [ ] 🙂 **Gut**
- [ ] 😐 **Okay**
- [ ] 😞 **Schlecht**
- [ ] 😞 **Sehr schlecht**

---

## 💪 Deine Erfolge der Woche
Was hast du erreicht? (Kurz und prägnant)

> ________________

---

## 💡 Deine Herausforderungen
Was war die größte Herausforderung?

> ________________

---

## 🚀 Deine Ziele für nächste Woche
Was möchtest du nächste Woche erreichen?

> ________________

---

## 🙌 Was hat dich motiviert?
Was hat dir geholfen, diese Woche durchzuhalten?

> ________________

---

💬 **Reflektiere und plane deine nächste Woche!**

> ________________

```

## 💡 Configuration

You can customize the journal template by editing the `templates/journal-template.md` file. Feel free to adjust the structure or content based on your team's needs.
