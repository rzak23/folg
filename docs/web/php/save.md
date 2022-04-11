---
title: Simpan dan Menjalankan file ".php"
---

Sebelum memulai pembelajaran PHP, maka pertama yang harus diingat dimana kita menyimpan file `.php` yang sudah kita buat dan bisa dijalankan (running) pada local server kita.

Namun sebelum itu pastikan kalian sudah install local server pada device yang digunakan. Jika belum, silahkan buka materi sebelumnya [Install Laragon](laragon/index_laragon). Jika sudah bisa lanjut ke tahap berikutnya :

1. Pastikan kita sudah menyiapkan sebuah file untuk disimpan, dan selalu simpan file dengan format `.php`
2. File `.php` akan disimpan di dalam folder `root` yang ada pada local server

:::info Note
* Jika menggunakan Laragon lokasi folder root untuk lokal server terdapat di `laragon/www/`
* Jika menggunakan XAMPP lokasi folder root untuk lokal server berada di `xampp/htdocs/`
:::

Kemudian untuk cara menjalankannya adalah :

:::tip
1. Pastikan komputer yang akan digunakan sudah ter-install browser
2. Ada 2 cara pemganggilan :
    * Jika menyimpan file `.php` tepat di dalam folder root, maka pemanggilan pada browser adalah `localhost/nama_file.php`
    * Jika menyimpan file `.php` diletakkan di dalam sebuah sub folder di dalam folder root, maka pemanggilannya adalah `localhost/nama_folder/nama_file.php`
:::