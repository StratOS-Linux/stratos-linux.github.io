---
title: Gentoo on StratOS
---
## What is Gentoo?
Gentoo Linux, the ultimate DIY distro, isn't for the faint-hearted.
It's like building your dream car from scratch, where every nut and bolt is handpicked to fit your ride.
With Gentoo, you're not just a user; you're an architect, crafting a system tailored precisely to your needs.

But be warned: this level of customization comes with a price.
Compiling everything from source means long **hours** of _tweaking_ and _troubleshooting_. 
However, for those who relish the challenge and crave absolute control over their system, Gentoo delivers unparalleled performance and flexibility.
## How to use Gentoo in StratOS
StratOS supports Gentoo OOTB:
```bash
sudo brl fetch gentoo
```

After the stratum has been fetched, run an upgrade just to be safe:
```bash
sudo emerge -avDuN world
```

