---
title: Spark Command
---

# Perintah Spark

Jika pada framework Laravel kita mengenal perintah artisan, maka pada Codeigniter 4 kita bisa menggunakan perintah spark, berikut beberapa perintah spark yang secara default sudah disediakan dan bisa kita gunakan. Untuk melihat listnya sendiri kita cukup jalankan perintah
```bash
php spark
```

## Daftar Perintah Spark
Untuk lebih detailnya akan dituliskan disini berdasarkan kelompoknya :

### Cache
* `cache:clear`: Untuk membersihkan cache pada sistem
* `cache:info`: Menampilkan informasi cache pada sistem

### Database
* `db:create`: Untuk membuat database baru
* `db:seed`: Untuk menjalankan seeder
* `db:table`: Menampilkan informasi table yang dipilih
* `migrate`: Menjalankan migrasi
* `migrate:refresh`: Menghapus semua migrasi yang ada dan melakukan migrasi ulang
* `migrate:rollback`: Membatalkan migrasi terakhir atau batch tertentu
* `migrate:status`: Menampilkan informasi status migrasi

### Encryption
* `key:generate`: Membuat kunci enkripsi yang nantinya akan disimpan di file `.env` dengan nama `encryption.key`

### Generator
* `make:cell`: Membuat file Controller Cell dan tampilannya
* `make:command`: Membuat file spark command baru
* `make:config`: Membuat file config baru
* `make:controller`: Membuat file controller baru
* `make:entity`: Membuat file entity baru
* `make:filter`: Membuat file filter baru
* `make:migration`: Membuat file migrasi
* `make:model`: Membuat file model baru
* `make:scaffold`: Menghasilkan satu set file scaffold yang lengkap
* `make:seeder`: Membuat file seeder
* `make:test`: Membuat file test
* `make:validation`: Membuat file validasi

### Housekeeping
* `debugbar:clear`: Menghapus semua file JSON debugbar
* `logs:clear`: Menghapus semua file logs yang ada

### Translation
* `lang:find`: Menemukan dan menyimpan frasa yang tersedia untuk diterjemahkan

## Cara Menjalankan Perintah Spark

Untuk cara menjalankan perintahnya, silahkan buka terminal / cmd pada perangakat dan pastikan direktori sudah diarahkan ke root projek Codeigniter 4, kemudian silahkan perintah
```bash
php spark perintah-spark
```