---
title: Setup Pertama Kali Repository
---

# Setup Pertama Kali Repository

Setelah [membuat repository github](buat-repo), repo yang baru dibuat masih kosong. Dan jika ingin mengupload file pada repo yang sudah dibuat, pertama bisa langsung klik `createing new file` pada halaman repo Github yang sudah dibuat. Namun pada penjelasan kali ini kita akan membahas menggunakan CLI (Command Line Interface).

1. Silahkan buat repository kosong terlebih dahulu, 
2. Kemudian buat sebuah folder pada device yang digunakan dan berikan nama bebas (contoh disini nama folder `tutor-github-folg`)
3. Buka terminal / cmd dan arahkan ke folder yang tadi sudah dibuat
4. Jalankan perintah berikut untuk initialisasi git
```bash
git init
```
5. Jika sudah jalankan perintah berikut untuk menyambungkan direktori local dengan direktori pada Github
```bash
git remote add origin <url-repo-github>
```
6. Jalankan perintah berikut untuk membuat branch utama atau master dari repo Github kita
```bash
git branch -M main
```
7. Buat file baru misal `readme.md`, kemudian jalankan perintah berikut untuk menambahkan file yang sudah dibuat pada git
```bash
git add <nama-file.ext>
```
8. Jalankan perintah berikut untuk menambahkan keterangan commit yang ingin dilakukan
```bash
git commit -m "keterangan commit yang disertakan"
```
9. Terakhir, jalankan proses berikut untuk upload file yang sudah ditambahkan pada git
```bash
git push -u origin <nama-branch>
```

:::info Informasi Tambahan
Untuk langkah dari no. 4 s/d 6 hanya dilakukan sekali pada saat pertama kali membuat repository (keadaan isi dari repository masih kosong), dan langkah tersebut tidak perlu dilakukan lagi jika repository sudah terisi dan memiliki branch
:::