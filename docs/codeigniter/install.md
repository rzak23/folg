---
title: Install Codeigniter 4
---

# Instalasi & Jalankan Projek

## Proses Instalasi

1. Buka terminal / cmd dan arahkan ke folder dimana ingin dipasang projek Codeigniter 4
2. Jalankan perintah
```bash
composer create-project codeigniter4/appstarter project-root
```
3. Tunggu proses instalasi sampai selesai

:::info
Untuk `project-root` bisa diganti namanya sesuai dengan nama projek yang ingin dibuat
:::

## Jalankan Projek

1. Masih pada terminal / cmd yang sama pindah (arahkan) ke direktori projek yang sudah dibuat, contoh disini adalah `project-root`, maka tinggal jalankan perintah
```bash
cd project-root
```
2. Jalankan perintah server
```bash
php spark serve
```
3. Codeigniter akan otomatis dijalankan melalui url default `http://localhost:8081`

### Variasi Serve

Untuk menjalankan projek Codeigniter 4 ini ada beberapa variasi yang bisa di custom untuk kalian jalankan

#### --host

Jika kalian ingin menggunakan host (domain) pada local atau server kalian, bisa tambahkan perintah `--host`, berikut contohnya
```bash
php spark serve --host=example.test
```

#### --port

Jika kalian ingin mengganti port default yang dijalankan, bisa ditambahkan perintah `--port`, berikut contohnya
```bash
php spark serve --port=8085
```