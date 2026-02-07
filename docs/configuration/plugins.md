# Plugins

## Plugin manager

- [lazy.nvim](https://github.com/folke/lazy.nvim) - *Plugin manager*

## Installed Plugins

### Autocomplete
- [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)  
  Completion engine that provides intelligent autocompletion from multiple sources (LSP, buffer, snippets).

- [LuaSnip](https://github.com/L3MON4D3/LuaSnip)  
  Snippet engine that allows defining and expanding reusable code snippets.

### LSP and Tools
- [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)  
  Simplifies configuration and setup of Language Server Protocol (LSP) servers.

- [mason.nvim](https://github.com/williamboman/mason.nvim)  
  Manages installation of LSP servers, debuggers, linters, and formatters.

- [mason-tool-installer.nvim](https://github.com/WhoIsSethDaniel/mason-tool-installer.nvim)  
  Automatically installs and keeps Mason tools up to date.

- [fidget.nvim](https://github.com/j-hui/fidget.nvim)  
  Displays LSP progress and status messages in a non-intrusive UI.

- [conform.nvim](https://github.com/stevearc/conform.nvim)  
  Flexible and fast code formatter with support for multiple formatters.

- [trouble.nvim](https://github.com/folke/trouble.nvim)  
  Provides a structured, persistent list for LSP diagnostics, references, and quickfix/location lists.

### Debugging (DAP)
- [mason-nvim-dap.nvim](https://github.com/jay-babu/mason-nvim-dap.nvim)  
  Integrates Mason with nvim-dap to manage debugger installations.

- [nvim-dap-ui](https://github.com/rcarriga/nvim-dap-ui)  
  Provides a full-featured user interface for debugging with nvim-dap.

- [nvim-dap-virtual-text](https://github.com/theHamsta/nvim-dap-virtual-text)  
  Shows inline variable values and expressions while debugging.

- [nvim-dap-vscode-js](https://github.com/mxsdev/nvim-dap-vscode-js)  
  Adds support for debugging JavaScript and TypeScript using VS Code adapters.

- [nvim-nio](https://github.com/nvim-neotest/nvim-nio)  
  Async I/O library required by several plugins, including debugging tools.

### File Explorer
- [oil.nvim](https://github.com/stevearc/oil.nvim)  
  Lightweight file manager that lets you edit directories like regular buffers.

### Coloring and Syntax
- [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)  
  Advanced syntax highlighting and code parsing based on Tree-sitter.

- [nvim-colorizer.lua](https://github.com/norcalli/nvim-colorizer.lua)  
  Displays color values directly in the editor (hex, rgb, hsl, etc.).

### Search and Navigation
- [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim)  
  Highly extensible fuzzy finder for files, buffers, symbols, and more.

- [flash.nvim](https://github.com/folke/flash.nvim)  
  Enhanced motion plugin for fast and precise navigation within buffers.

### Interface
- [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim)  
  Fast and customizable status line with rich contextual information.

- [which-key.nvim](https://github.com/folke/which-key.nvim)  
  Displays available keybindings in a popup as you type.

- [dashboard-nvim](https://github.com/nvimdev/dashboard-nvim)  
  Fancy and Blazing Fast start screen plugin of neovim.

### Edition
- [Comment.nvim](https://github.com/numToStr/Comment.nvim)  
  Quickly toggle line and block comments with simple keybindings.

- [nvim-autopairs](https://github.com/windwp/nvim-autopairs)  
  Automatically inserts matching brackets, quotes, and pairs.

- [mini.surround](https://github.com/nvim-mini/mini.surround)  
  Easily add, delete, or replace surrounding characters like quotes or brackets.

- [treesj](https://github.com/Wansmer/treesj)  
  Splits and joins code blocks (arrays, arguments, objects) using Tree-sitter.

- [yanky.nvim](https://github.com/gbprod/yanky.nvim)  
  Enhances yank and paste with history, cycling, and better registers.

- [mynotes.nvim](https://github.com/okivim/mynotes.nvim)  
  Simple note-taking plugin integrated directly into Neovim.

- [phantom.nvim](https://github.com/okivim/phantom.nvim)  
  Session manager for saving and restoring Neovim workspaces.

### Git
- [gitsigns.nvim](https://github.com/lewis6991/gitsigns.nvim)  
  Shows Git change indicators in the sign column and provides Git actions.

### Themes
- [catppuccin](https://github.com/catppuccin/nvim)
- [gruvbox](https://github.com/ellisonleao/gruvbox.nvim)
- [kanagawa](https://github.com/rebelot/kanagawa.nvim)
- [tokyonight](https://github.com/folke/tokyonight.nvim)
- [rose-pine](https://github.com/rose-pine/neovim)
- [nightfox](https://github.com/EdenEast/nightfox.nvim)

:::info
Easy to configure: add your themes in `plugins/colorscheme.lua` and switch the active one by changing the **colorscheme** option.
:::
