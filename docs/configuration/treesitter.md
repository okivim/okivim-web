# Treesitter

This configuration uses the new `nvim-treesitter` API, where syntax highlighting is enabled per filetype using `ftplugin`.

Treesitter is not started globally. Instead, it is explicitly activated when a buffer with a supported filetype is opened.

---

## Adding a new language (parser)

To add support for a new Treesitter language parser:

1. Open the following file:

   `./lua/okivim/plugins/treesitter.lua`

2. Add the language name to the `treesitter.install({ ... })` list.

   Example:

   ```lua
   treesitter.install({
     -- ...
     "go",
   })
   ```

3. Install or update the parsers:
   - Run `:TSUpdate`, or
   - Restart Neovim if your setup installs parsers automatically.

You can find the full list of officially supported Treesitter languages here:

https://github.com/nvim-treesitter/nvim-treesitter/blob/main/SUPPORTED_LANGUAGES.md

---

## Enabling Treesitter for a filetype (ftplugin)

Treesitter is activated per filetype using Neovim’s `ftplugin` mechanism.

To enable Treesitter for a given filetype, create a file at:

`./ftplugin/<filetype>.lua`

Example:

`./ftplugin/go.lua`

With the following minimal content:

```lua
vim.treesitter.start()
```

### Common examples

- `./ftplugin/typescriptreact.lua` (for `.tsx` files)
- `./ftplugin/javascriptreact.lua` (for `.jsx` files)
- `./ftplugin/python.lua`

:::tip
You can use any existing file in `ftplugin/` as a template.  
Simply duplicate it and rename the file to match the new filetype you want to support.
:::

---

## Verifying the filetype

To check which filetype Neovim is using for the current buffer, run:

```vim
:set ft?
```

The returned value (for example, `typescriptreact`) must match the filename used in `ftplugin/`.

---

## Summary

To add support for a new language in Treesitter:

1. Add the language to `treesitter.install()` in:
   `./lua/okivim/plugins/treesitter.lua`
2. Create a matching `ftplugin/<filetype>.lua` file.
3. Call `vim.treesitter.start()` inside that file.

This keeps the configuration simple, explicit, and aligned with modern Neovim practices.
