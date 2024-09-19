---
title: Routing
---

# Routing Codeigniter 4

Pada Codeigniter 4 Route bisa diakses pada folder `app\Config\Routes.php`. Jika pada Codeigniter 3 route yang disupport hanya `post` dan `get`, berbeda dengan Codeigniter 4 yang secara nativ sudah mendukung restserver langsung. Kita bisa menggunakan metode `get`, `post`, `put`, `patch`, `delete`

```php
$routes->get('nama-route-get');
$routes->post('nama-route-post');
$routes->put('nama-route-put');
$routes->patch('nama-route-patch');
$routes->delete('nama-route-delet');
```

## Pendefinisian Route

Untuk menuliskan route terdapat beberapa cara penulisan yang bisa digunakan, secara default kita menuliskan route seperti
```php
$routes->get('nama-route', 'NamaController::nama_function');
```

Kita juga bisa menuliskan route dengan menggunakan metode Array Callable Syntax, berikut contoh penerapannya
```php
$routes->post('nama-route', [NamaController::nama_function]);
```

## Paramater Route

Pada route disini, kita juga bisa menyisipkan parameter tertentu, sebagai contoh
```php
$routes->get('nama-route/(:any)', 'NamaController::nama_function');
```

dimana pada `(:any)` ini nantinya akan dijadikan parameter pada function yang yang dihubungkan, untuk menyisipkan parameter untuk lebih spesifik ada beberapa opsi yang bisa digunakan :

* `(:any)` ini akan mengambil semua karakter yang disisipkan
* `(:num)` ini akan mengambil dan mendifinisikan parameter bertipe int
* `(:alpha)` ini akan mengambil dan mendifinisikan parameter bertipe string dan hanya support huruf saja
* `(:alphanum)` ini akan mengambil dan mendifinisikan paramater bertipe string dengan komobinasi huruf dan angka

## Pengelompokan Route

Pada Codeigniter 4 kita juga bisa mengelompokan route, misalnya jika pada projek memiliki pemanggilan uri route 1 yang sama, maka kita bisa gunakan method `group()`. Berikut contoh penerapannya
```php
$routes->group('nama-route', function(){
    $routes->get('list', 'NamaController::nama_function');
    $routes->post('add', 'NamaController::nama_function');
});
```

kemudian nantinya pada url kita bisa panggil `http://localhost:8081/nama-route/list` atau `http://localhost:8081/nama-route/add`;