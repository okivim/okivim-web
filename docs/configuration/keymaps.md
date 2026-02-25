# Keymaps

This documentation contains all keymaps configured in the Neovim setup, organized by categories.

## Generic Keymaps

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader>,` | Normal | First buffer |
| `<leader>.` | Normal | Last buffer |
| `<Tab>` | Normal | Next buffer |
| `<S-Tab>` | Normal | Previous buffer |
| `<leader>bq` | Normal | Close other buffers |
| `<leader>bl` | Normal | Buffer list |
| `<leader>bx` | Normal | Close buffer |
| `<leader>alb` | Normal | Insert empty line below |
| `<leader>sl` | Normal | Select line *(no newline)* |
| `<leader>yl` | Normal | Copy line *(no newline)* |
| `<leader>a` | Normal | Select entire file |
| `<leader>d` | Normal/Visual | Delete (keep clipboard) |
| `<leader>;` | Normal | Add a semicolon (;) to the end of the line |
| `<leader>dy` | Normal | Show diagnostics |
| `<leader>f` | Normal | Search forward |
| `<` | Visual | Indent left (keep selection) |
| `>` | Visual | Indent right (keep selection) |
| `<A-j>` | Normal | Move line down |
| `<A-k>` | Normal | Move line up |
| `<A-j>` | Visual | Move selection down |
| `<A-k>` | Visual | Move selection up |
| `<C-h>` | Normal | Go to the left window |
| `<C-j>` | Normal | Go to the down window |
| `<C-k>` | Normal | Go to the up window |
| `<C-l>` | Normal | Go to the right window |
| `<C-Up>` | Normal | Increase window height |
| `<C-Down>` | Normal | Decrease window height |
| `<C-Left>` | Normal | Decrease window width |
| `<C-Right>` | Normal | Increase window width |
| `<leader>w` | Normal | Split window |
| `<leader>wv` | Normal | Split window vertically |
| `<leader>wq` | Normal | Quit a window |
| `<leader>t` | Normal | Split terminal |
| `<leader>tv` | Normal | Split terminal vertically |

## Plugin Keymaps

### LSP

These keymaps are available in buffers with LSP enabled.

| Keymap | Mode | Description |
|--------|------|-------------|
| `gd` | Normal | Go to definition |
| `gD` | Normal | Go to declaration |
| `gi` | Normal | Go to implementation |
| `gr` | Normal | Find references |
| `K` | Normal | Hover documentation |
| `<leader>rn` | Normal | Rename symbol |
| `<leader>ca` | Normal/Visual | Code actions |
| `[d` | Normal | Previous diagnostic |
| `]d` | Normal | Next diagnostic |
| `<leader>e` | Normal | Show diagnostic float |

### Telescope

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader><Space>` | Normal | Command palette |
| `<leader>ff` | Normal | Find files |
| `<leader>fg` | Normal | Live grep (search text in project) |
| `<leader>fb` | Normal | Find buffers |
| `<leader>fh` | Normal | Help tags |
| `<leader>fr` | Normal | Recent Files |
| `<leader>fc` | Normal | Find config files |
| `<leader>ffh` | Normal | Find files + hidden |
| `<leader>ffa` | Normal | Find all files |
| `<leader>ld` | Normal | LSP definitions |
| `<leader>lD` | Normal | LSP type definitions |
| `<leader>li` | Normal | LSP implementations |
| `<leader>lr` | Normal | LSP references |
| `<leader>ls` | Normal | LSP document symbols |
| `<leader>lS` | Normal | LSP workspace symbols |

### Yanky

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader>h` | Normal | Yank history |

### Aerial

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader>o` | Normal | Toggle outline |

### NvimTree

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader>-` | Normal | Toggle explorer |

### Oil

| Keymap | Mode | Description |
|--------|------|-------------|
| `-` | Normal | Open parent directory |
| `g.` | Normal | Toggle hidden files and directories |

### Flash

| Keymap | Mode | Description |
|--------|------|-------------|
| `zk` | Normal/Visual/Operator | Flash jump |
| `Zk` | Normal/Visual/Operator | Flash Treesitter |
| `r` | Operator | Remote flash |
| `R` | Operator/Visual | Treesitter search |
| `<C-s>` | Command | Toggle flash search |

### Mini Surround

| Keymap | Mode | Description |
|--------|------|-------------|
| `sa` | Visual | Add surrounding |
| `sd` | Visual | Delete surrounding |
| `sf` | Visual | Find surrounding |
| `sF` | Visual | Find surrounding (left) |
| `sh` | Visual | Highlight surrounding |
| `sr` | Visual | Replace surrounding |
| `sn` | Visual | Update search range |

### TreeSJ

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader>j` | Normal | Combine several lines into one |
| `<leader>s` | Normal | Separate into several lines |
| `<leader>m` | Normal | Toggle between split ↔ join |

### Lazygit

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader>gg` | Normal | Open panel |

### Diffview

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader>do` | Normal | Open panel |
| `<leader>dH` | Normal | File history (current file) |
| `<leader>dc` | Normal | Close panel |

### Gitsigns

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader>gp` | Normal | Preview hunks in popup |
| `<leader>gs` | Normal | Stage hunk |
| `<leader>gr` | Normal | Reset hunk |
| `<leader>gb` | Normal | Toggle current line blame |
| `<leader>gi` | Normal | Show info about the commit |
| `<leader>gd` | Normal | Diff against HEAD |
| `<leader>gn` | Normal | Toggle number highlighting for changes |
| `<leader>gl` | Normal | Toggle line highlighting for changes |

### Mynotes

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader>\` | Normal | Show window with my notes |

### Phantom

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader>sls` | Normal | Show sessions panel |

### Trouble

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader>xx` | Normal | Toggle diagnostics |
| `<leader>xX` | Normal | Toggle buffer diagnostics |
| `<leader>cs` | Normal | Toggle symbols |
| `<leader>cl` | Normal | Toggle LSP list |
| `<leader>xQ` | Normal | Toggle quickfix list |
| `<leader>xL` | Normal | Toggle location list |

### DAP (Debug Adapter Protocol)

| Keymap | Mode | Description |
|--------|------|-------------|
| `<F5>` | Normal | Continue debugging |
| `<F10>` | Normal | Step over |
| `<F11>` | Normal | Step into |
| `<F12>` | Normal | Step out |
| `<leader>db` | Normal | Toggle breakpoint |
| `<leader>dB` | Normal | Set conditional breakpoint |
| `<leader>dr` | Normal | Open REPL |
| `<leader>dl` | Normal | Run last debug session |

---

#### Notes

- `<leader>` is configured as the space key (`<Space>`)
- LSP keymaps are only available in buffers where there is an active LSP server
- Some keymaps may require certain plugins to be loaded or configured
