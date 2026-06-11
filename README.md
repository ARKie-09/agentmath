# Research Group Wiki

A collaborative knowledge base for tracking research progress, findings, and papers.
Built with [MkDocs](https://www.mkdocs.org/) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme. The current website is available and active [here](https://arkie-09.github.io/agentmath/).

<!-- ---

-- ## First-Time Setup

### 1. Update placeholders

Open `mkdocs.yml` and replace the three occurrences of `YOUR-ORG` and `YOUR-REPO`
with your actual GitHub organisation (or username) and repository name.

### 2. Configure GitHub Pages (one-time)

After pushing for the first time, go to your repository on GitHub:

- **Settings → Pages**
- Set **Source** to **Deploy from a branch**
- Set **Branch** to `gh-pages` / `/ (root)`
- Click **Save**

The GitHub Actions workflow will create and maintain the `gh-pages` branch automatically. -->

---

## Local Development

**Prerequisites:** Python 3.8+, Git

```bash
# Clone the repo
git clone https://github.com/ARKie-09/agentmath.git
cd agentmath

# Install dependencies
pip install -r requirements.txt

# Start the live-reload dev server
mkdocs serve
```

Open your browser at `http://localhost:8000`. The site rebuilds automatically as you save files. If you're on Mac and run into issues after running the pip command, go down to the bottom for a potential fix.

---

## Making Changes

```bash
# Edit or create a file in docs/
# Then commit and push:
git add .
git commit -m "Brief description of what you changed"
git push
```

The GitHub Actions workflow (`deploy.yml`) rebuilds and deploys the site within ~1–2 minutes of every push to `main`.

> **Tip:** Every page has a pencil icon (top right) that opens the file directly in GitHub's web editor — no local setup required.

---

## Repository Structure

```
docs/
├── index.md            Home page
├── tags.md             Auto-generated tag index
├── progress/
│   └── index.md        Current research progress
├── findings/
│   └── index.md        Results, theorems, proof sketches
├── papers/
│   └── index.md        Reading list and references
├── javascripts/
│   └── mathjax.js      MathJax configuration
└── stylesheets/
    └── extra.css       Custom styles
.github/
└── workflows/
    └── deploy.yml      Auto-deployment workflow
mkdocs.yml              Site configuration
requirements.txt        Python dependencies
```

## Adding a New Page

1. Create a `.md` file in the relevant `docs/` subdirectory.
2. Add it to the `nav:` section of `mkdocs.yml`.
3. Push — done.

---

## Math Support

Inline: `\( f(x) = x^2 \)`

Display:
```
\[
  \sum_{i=1}^{n} i = \frac{n(n+1)}{2}
\]
```

## Potential Setup Issues on Mac

### Prerequisites

This project requires Python 3.8+. **Do not use Homebrew's Python** if you are 
on macOS Tahoe — there is a known ABI mismatch with `libexpat` that breaks `pip` 
entirely. Use [pyenv](https://github.com/pyenv/pyenv) instead.

### Installing Python via pyenv

```bash
brew install pyenv openssl readline sqlite3 xz zlib

echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
source ~/.zshrc

export LDFLAGS="-L$(brew --prefix expat)/lib"
export CPPFLAGS="-I$(brew --prefix expat)/include"
export PKG_CONFIG_PATH="$(brew --prefix expat)/lib/pkgconfig"

pyenv install 3.12.13
```

### Setting up the project

```bash
cd agentmath
pyenv local 3.12.13
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### Daily usage

```bash
source .venv/bin/activate   # activate venv
deactivate                  # exit venv
```
