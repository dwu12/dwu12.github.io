# Di Wu's Personal Website

A modern personal website showcasing notes and work as a Data & Machine Learning Scientist.

## Sections

- **Home** - Personal introduction and social links
- **Notes** - Comprehensive technical notes covering:
  - Python (Data Science, Algorithms, Interview Prep)
  - Machine Learning & Deep Learning
  - AI Agents & Reinforcement Learning
  - System Design & MLOps
  - And more...

## Tech Stack

- Pure HTML, CSS, and JavaScript (vanilla)
- [marked.js](https://github.com/markedjs/marked) for Markdown rendering
- [Prism.js](https://prismjs.com/) for syntax highlighting
- No build step required — deploys directly to GitHub Pages

## Adding Content

### Simple Topic
1. Create a markdown file: `notes/topic-name/topic-name.md`
2. Update `notes/topic-name/manifest.json`:

```json
{
  "topic": "Topic Name",
  "items": [
    {
      "name": "Topic Name",
      "folder": "topic-name",
      "children": []
    }
  ]
}
```

### Nested Topics (like Deep Learning)
1. Create folder structure: `notes/deep-learning/computer-vision/object-detection/r-cnn/`
2. Add markdown file: `r-cnn/r-cnn.md`
3. Update manifest with children

**Note:** Each folder must contain a `{folder-name}.md` file.

## Local Development

```bash
python3 -m http.server 8000
# Open http://localhost:8000/notes/notes.html
```

## Deploy

Push to the `main` branch — GitHub Pages deploys automatically.
