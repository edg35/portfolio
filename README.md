# Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with vanilla HTML, CSS, and JavaScript, and deployed on AWS infrastructure with analytics tracking.

## 🌐 Live Site

[ethandgreen.com](https://ethandgreen.com)

## ✨ Features

- **Responsive Design** - Optimized for all devices with mobile-first approach
- **Analytics Tracking** - Real-time page view tracking using AWS DynamoDB
- **Resume Downloads** - Track resume downloads with DynamoDB integration
- **Clean UI/UX** - Modern interface with smooth animations and transitions
- **SEO Optimized** - Properly structured HTML and meta tags for search engines

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3 (with media queries for responsiveness)
- Vanilla JavaScript

### Backend & Infrastructure

- **AWS S3** - Static website hosting
- **AWS DynamoDB** - Analytics data storage (page views, resume downloads)
- **AWS Route 53** - Custom domain management
- **GitHub Actions** - CI/CD pipeline for automatic deployments

## 📁 Project Structure

```
portfolio/
├── index.html           # Main HTML file
├── style.css           # Main stylesheet
├── mediaqueries.css    # Responsive design styles
├── script.js           # JavaScript for interactivity & analytics
├── assets/             # Images, icons, and documents
└── .github/
    └── workflows/
        ├── deploy.yml   # S3 deployment automation
        └── release.yml  # Semantic versioning & changelog
```

## 🚀 Deployment

This project uses automated CI/CD with GitHub Actions:

1. **Automatic Deployment** - On every push to `master`, the site is automatically deployed to S3
2. **Semantic Versioning** - Releases are automatically generated based on commit messages
3. **Changelog Generation** - `CHANGELOG.md` is automatically updated with each release

## 📊 Analytics

The website tracks the following metrics using AWS DynamoDB:

- **Page Views** - Total visits to the portfolio
- **Resume Downloads** - Number of times the resume has been downloaded

Data is collected via JavaScript and sent to DynamoDB through AWS API.

## 🔧 Local Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser or use a local server:

```bash
python3 -m http.server 8000
# or
npx serve
```

3. Visit `http://localhost:8000`

## 📝 Making Changes

To maintain semantic versioning and automatic changelog generation, use these commit message prefixes:

### Commit Message Prefixes

| Prefix             | Description             | Version Bump              | Example                            |
| ------------------ | ----------------------- | ------------------------- | ---------------------------------- |
| `feat:`            | New feature             | **Minor** (1.0.0 → 1.1.0) | `feat: add contact form`           |
| `fix:`             | Bug fix                 | **Patch** (1.0.0 → 1.0.1) | `fix: correct mobile navigation`   |
| `docs:`            | Documentation only      | **Patch**                 | `docs: update README`              |
| `style:`           | Code style/formatting   | **Patch**                 | `style: fix indentation`           |
| `refactor:`        | Code refactoring        | **Patch**                 | `refactor: simplify script logic`  |
| `perf:`            | Performance improvement | **Patch**                 | `perf: optimize image loading`     |
| `test:`            | Adding tests            | No release                | `test: add validation tests`       |
| `chore:`           | Maintenance tasks       | No release                | `chore: update dependencies`       |
| `BREAKING CHANGE:` | Breaking changes        | **Major** (1.0.0 → 2.0.0) | `feat!: redesign portfolio layout` |

**Note:** Breaking changes can also be indicated by adding `!` after the type (e.g., `feat!:`) or by including `BREAKING CHANGE:` in the commit body.

### Commit Examples

```bash
# New feature (minor version bump)
git commit -m "feat: add project filtering by category"

# Bug fix (patch version bump)
git commit -m "fix: resolve image loading issue on Safari"

# Documentation update (patch version bump)
git commit -m "docs: add deployment instructions"

# Breaking change (major version bump)
git commit -m "feat!: migrate to new analytics system

BREAKING CHANGE: The old analytics API is no longer supported"
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

Feel free to reach out through the contact form on the website or connect with me on [LinkedIn](https://linkedin.com/in/yourprofile).
