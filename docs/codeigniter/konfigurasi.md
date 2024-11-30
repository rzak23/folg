---
title: Konfigurasi Projek
---

# Konfigurasi Projek Codeigniter 4

Pada Codeigniter 4 terdapat dua metode konfigurasi untuk menjalankan projek Codeginiter 4 ini, secara manual dan via environtment

## Manual

Untuk konfigaris manual disini, kita bisa langsung edit file yang ada pada folder `app\Config`, disini silahkan sesuaikan dengan keperluan masing-masing, contoh :

* disini kita bisa edit pada `app\Config\App.php`, pada file ini kita bisa mengubah beberapa yang dibutuhkan seperti `$baseURL`, `$indexPage`, `$appTimeZone` dan lain sebaginya
* Sedangkan untuk database bisa di edit pada `app\Config\Database.php`, dengan mengatur berbagai konfigurasi menyesuaikan dengan apa yang dibutuhkan

## Environtment

:::info
Cara ini lebih direkomendasikan karena kemudahan dan fleksibilitasnya
:::

Cara kedua kita bisa menggunakan environtment dengan hanya membuat file `.env` pada root direktori projek kita, untuk yang pernah belajar framework Laravel pasti akan familiar dengan penggunaan environtment ini. Pada materi ini kita akan menggunakan file `env` yang sudah disediakan defaultnya dari Codeigniter 4 itu sendiri, kedepannya bisa kalian tambah dan modifikasi sesuai kebutuhan dan penggunaanya.

1. Pertama silahkan buat file `.env` terlebih dahulu
2. Buka file `env` dan copy semua isi ke `.env` yang sudah kita buat
3. Berikut hal-hal dasar yang perlu diaktifkan atau digunakan pada `.env` yang dibuat
   * `CI_ENVIRONTMENT` bisa diisi dengan `production` untuk keperluan rilis atau `development` untuk keperluan developing
   * `app.baseURL` bisa diisi dengan base url kita, misal `http://localhost:8081`
   * Jika kalian menggunakan database, silahkan aktifkan pada bagian `database.default.nama-parameter` dan isi sesuai dengan konfigurasi yang kalian gunakan