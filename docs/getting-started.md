# Getting started

## Features

- ⚡ Minimal, clean, and distraction-free setup
- 🎯 Thoughtful defaults that respect core Neovim behavior
- 🧩 Fully modular configuration, easy to customize
- 🧭 Clean navigation — no tabs, no file tree, no distractions
- 🛠 Carefully curated plugins, no unnecessary bloat

## Requirements

### Basics
- **[Neovim](https://neovim.io/)** >= 0.11.2
- **[Git](https://git-scm.com/)** >= 2.19.0
- a **[Nerd Font](https://www.nerdfonts.com/)** to display some icons (optional)

### Required for full functionality
- **[ripgrep](https://github.com/BurntSushi/ripgrep)** and **[fd](https://github.com/sharkdp/fd)** used by `Telescope` *(more info on <a href="#dependencies">dependencies</a>)*
- **[nvim-treesitter-cli](https://github.com/tree-sitter/tree-sitter/blob/master/crates/cli/README.md)** and **C compiler** for `nvim-treesitter` *(more info on <a href="#dependencies">dependencies</a>)*
- and a **terminal that support true color and undercurl**:
  - [kitty](https://sw.kovidgoyal.net/kitty/) - (Linux / macOS)
  - [wezterm](https://wezterm.org/) - (Linux / macOS / Windows)
  - [alacritty](https://alacritty.org/) - (Linux / macOS / Windows)
  - [iterm2](https://iterm2.com/) - (macOS)
  - [ghostty](https://ghostty.org/) - (Linux / macOS / Windows)

### Dependencies

These tools must be installed for the setup to work properly.

#### 1. Node.js

Required for the TypeScript LSP.

Using **fnm** *(Node version manager)*
https://github.com/Schniz/fnm *(You can use another method to install Node)*

``` bash
fnm install --lts
```

---

#### 2. Prettier

Required for projects that use it.

``` bash
npm install -g prettier
```

---

#### 3. TypeScript

Required for TypeScript language server.

``` bash
npm install -g typescript typescript-language-server
```

---

#### 4. Ripgrep (Telescope dependency)

Used by Telescope for project-wide text search.

**Linux**
``` bash
sudo apt install ripgrep
```
**macOS**
``` bash
brew install ripgrep
```
**Windows**
``` bash
scoop install ripgrep
or
choco install ripgrep
```

---

#### 5. fd (Telescope dependency)

Used by Telescope for fast file search.

**Linux**
``` bash
sudo apt install fd-find
```
**macOS**
``` bash
brew install fd
```
*If you want create a symlink (Optional)*

``` bash
ln -s $(which fdfind) ~/.local/bin/fd
```
**Windows**
``` bash
scoop install fd
or
choco install fd
```

---

#### 6. nvim-treesitter (dependencies)

**1- Required nvim-treesitter-cli:**

With npm
``` bash
npm install -g tree-sitter-cli
```
With cargo
``` bash
cargo install --locked tree-sitter-cli
```

*And after check it*
``` bash
tree-sitter --version
```

...

**2- Required a C compiler:**

**Install on Linux / macOS**

Ubuntu / Debian
``` bash
sudo apt install build-essential
```
Arch
``` bash
sudo pacman -S base-devel
```
Fedora
``` bash
sudo dnf groupinstall "Development Tools"
```

macOS
``` bash
xcode-select --install
```

**Install on Windows**

By download link (✔ Select Desktop development with C++)
``` bash
https://visualstudio.microsoft.com/es/downloads/
```
Git Bash / MSYS2 / WSL
``` bash
sudo dnf groupinstall "Development Tools"
```

Final check if tree-sitter-cli and C compiler is installed
``` bash
cc --version
```
``` bash
tree-sitter --version
```

---

#### 7. Clipboard support

Neovim requires an external tool to integrate with the system clipboard.

##### Linux:

First, check which display server you are using:

```bash
echo $XDG_SESSION_TYPE
```

- If it returns `wayland` - you are using Wayland
- If it returns `x11` - you are using X11

**For Wayland (wl-clipboard)**
```bash
sudo apt install wl-clipboard
```

**Fow X11 (xclip)**
```bash
sudo apt install xclip
```
