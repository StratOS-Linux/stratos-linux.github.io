---
title: Configuring Stratmacs
---
## Assigning variables
Use the `setq` Elisp function to assign variables.
```lisp
(setq use-short-answers t) ;; this lets us use y/n instead of having to type yes/no.
(setq initial-major-mode 'org-mode) ;;make the scratch buffer open in Org mode by default (convenience)
```
Multiple `setq` statements can _also_ be represented like this:
```lisp
(setq use-short-answers t
      initial-major-mode 'org-mode)
```
## How to use Major and Minor modes
:::note
A buffer can have multiple _minor_ modes enabled, but only *1* _major_ mode can be enabled inside a buffer.
:::
## How to install new packages
Stratmacs comes with [`straight`](https://github.com/radian-software/straight.el) configured out of the box. New packages can be installed via `use-package`:

```lisp
(use-package name_of_package
    ; :defer 3 ;; load this package after a delay of 3s
    ; :straight t ;; IF you want to use straight to manage this package (Straight grants access to GitHub repos)
	:init (config that must be run before loading the package)
	:config (package configuration))
```

We can now apply this knowledge and install new packages. As an example, let's install the [GPTel](https://github.com/karthink/gptel) package from GitHub:
```lisp
(use-package gptel
  :straight t ;; you don't need to specify this if you're not ins
  :config
  ;; OPTIONAL configuration
  (setq
   gptel-model "neural-chat:latest"
   gptel-backend (gptel-make-ollama "Ollama"
                   :host "localhost:11434"
                   :stream t
                   :models '("neural-chat:latest"))))
```

