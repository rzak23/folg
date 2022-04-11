---
title: Variabel
---

Seperti bahasa pemrograman lainnya, PHP juga memiliki variabel. Fungsi variabel disini sebagai penampung sebuah data baik yang nantinya dapat dibaca dan diolah dengan menggunakan bahasa pemrograman.

Variabel pada php selalu ditandai dengan simbol `$`, contoh `$kata ="Hi";`, yang artinya terdapat variabel kata yang menampung nilai sebuah string Hi.

:::info Catatan
Penulisan variabel harus tersambung atau berhubungan dan tidak boleh ada karakter spasi :
* $kata
* $kalimat_satu

PHP merupakan salah satu bahasa pemrograman yang bersifat Case Sensitive, yang artinya huruf besar dan kecil akan dianggap berbeda, dengan sifat ini kita bisa menggunakan kata yang sama sebagai variabel dan membedakannya menggunakan huruf besar atau kecil, contoh :
`$kata="Hi"; $Kata="Budi";`
:::

Untuk praktenya, silahkan buat syntax berikut 

```php
<?php

$nama = "Adli";

echo "Nama Saya ".$nama;
```

Simpan, dan jalankan pada browser untuk melihat hasilnya