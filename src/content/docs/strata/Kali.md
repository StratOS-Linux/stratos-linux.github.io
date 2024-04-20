---
title: Kali on StratOS
---
## What is Kali?
Kali Linux, the go-to OS for cybersecurity enthusiasts, is like a digital Swiss Army knife. It's packed with a vast arsenal of tools for hacking, testing, and securing networks. Whether you're a seasoned white-hat hacker or a curious beginner, Kali provides the tools and resources you need to sharpen your skills and protect your digital assets. From penetration testing to digital forensics, Kali's comprehensive suite of applications empowers users to explore the depths of cybersecurity with confidence.
## How to use Kali in StratOS
:::note 
Bedrock doesn't support Kali directly, and so we import it  from an existing `rootfs` image.
:::
```bash
curl -fsSL https://kali.download/nethunter-images/current/rootfs/kalifs-amd64-minimal.tar.xz -o kali.tar.xz
tar xf kali.tar.xz
mv kali-amd64 kali
sudo brl import kali
```

After the stratum has been fetched, users can run an upgrade:
```bash
sudo apt update 
sudo apt upgrade
```

