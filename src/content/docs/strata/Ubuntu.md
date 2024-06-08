---
title: Ubuntu on StratOS
---

# What is Ubuntu? 

Ubuntu is a Linux distribution developed by Canonical. It is one of the most popular distribution due to its simplicity and ease of use for people new to Linux.

The name "Ubuntu" is a South African word that means "I am becuase you are". This is meant to denote the spirit of the Linux distribution.

Ubuntu was one of the first Linux distributions to have a scheduled release cycle. A version of Ubuntu is released every six months starting from October 2004.

Ubuntu uses a Y.MM naming scheme for its version number. For example, Ubuntu 22.04 is meant to denote that this version of Ubuntu was released of the April of 2022.

# How to use Ubuntu in StratOS
StratOS has out-of-the-box (OOTB) support for Ubuntu :


```bash
sudo brl fetch ubuntu
```

After installing Ubuntu as an strata on StratOS, we can run an update on its repos for safety:


```bash
sudo apt update && sudo apt upgrade
```
