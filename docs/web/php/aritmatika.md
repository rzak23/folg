---
title: Operator Aritmatika
---

Sama halnya dengan bahasa pemrograman pada umumnya, pada PHP juga memiliki operator aritmatika. operator aritmatika ini, bisa kita gunakan untuk melakukan suatu perhitungan matematis. Ada 5 operator aritmatika yang bisa digunakan yang terdiri dari `+;-;*;/;%`. Berikut contoh penggunaannya :

```php title=aritmatika.php
<?php  
$n1 = 8;
$n2 = 4;

// operator tambah
$total = $n1 + $n2;
// operator pengurangan
$total = $n1 - $n2;
// operator perkalian
$total = $n1 * $n2;
// operator pembagian
$total = $n1 / $n2;
// operator modulus
$total = $n1 % $n2;

echo $total;
```