# How to Add a New Update

## Quick Start

1. Create a new Markdown file in `/content/updates/`
   - Example: `/content/updates/2025-11-20-my-new-paper.md`

2. Add frontmatter at the top:

```yaml
---
date: "2025-11-20"
tags: ["Paper"]  # Options: Paper, Talk, Note, Research
title: "My New Paper Title"
link: "https://arxiv.org/abs/..."  # Optional: external link
summary: "A short description of this update."
---
```

3. Write your content in Markdown below the frontmatter

4. That's it! The update will automatically appear on the homepage and /updates page

## Frontmatter Fields

- **date**: Publication date in YYYY-MM-DD format
- **tags**: Single tag for display (e.g., [Paper], [Talk], [Note])
- **title**: Title of the update
- **link**: (Optional) External URL - if provided, clicking the update goes to this link
- **summary**: Brief description (1-2 sentences)

## Tips

- Use the `link` field for papers hosted elsewhere (arXiv, conference sites, etc.)
- Keep titles concise and descriptive
- One tag per update for clean display
- Updates are automatically sorted by date (newest first)

## Common Tags

Use consistent tags for better organization:
- **Paper** - Published papers or preprints
- **Talk** - Conference presentations or seminars
- **Note** - Research notes and observations
- **Research** - Research updates and progress reports

## Example

```markdown
---
date: "2025-11-20"
tags: ["Paper"]
title: "Fast Decoding for Surface Codes"
link: "https://arxiv.org/abs/2511.12345"
summary: "A new approach to reduce decoding latency in quantum error correction."
---

Optional content here if you want a detailed post on your site.
If you include a `link` field, users clicking on this will be redirected to the external URL.
```
