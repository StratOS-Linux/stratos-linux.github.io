---
title: Installing StratVIM
---

## Prerequisites:
- Install [Neovim v0.9+](https://github.com/neovim/neovim).
- Make sure you have [npm](https://npmjs.com/), [node](https://nodejs.org/), [cargo](https://www.rust-lang.org/tools/install), [pip](https://pypi.org/project/pip/), [python](https://www.python.org/), [git](https://git-scm.com/) and [lazygit](https://github.com/jesseduffield/lazygit) installed in your system.

## How to install ?

- Clone the [StratVIM](https://github.com/StratOS-Linux/StratVIM) git repository into the .config folder:

```bash
git clone https://github.com/lugvitc/StratVIM.git ~/.config/nvim
```

## Updating plugins in StratVIM :
To update plugins in StratVIM, use the `:Lazy` command inside StratVIM: 

```bash
:Lazy sync
```

## Uninstalling StratVIM :
To uninstall StratVIM and its plugins:

- First remove the nvim folder from the .config directory :
```bash
rm -r ~/.config/nvim
```

- Remove the plugins located in `.local/share/nvim` aswell :
```bash
rm -rf ~/.local/share/nvim
```
