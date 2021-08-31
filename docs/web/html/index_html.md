---
sidebar_position: 1
---

# Pengenalan HTML

HTML (Hypertext Markup Language) merupakan bahasa markup yang digunakan untuk membangun sebuah halaman website, jika diibaratkan kita membangun rumah maka HTML sama dengan pondasi dari sebuah web, tata letak dan dokumen yang ingin ditampilkan pada website akan diletakkan pada elemen-elemen pada HTML. Dalam mempelajari HTML kita akan sering mendengar istilah tag, elemen dan juga atribut.

## Struktur Penulisan HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    
</body>
</html>
```

Pada struktur HTML diatas bisa kita perhatikan, terdapat 3 element utama :

* Element `<html>`, dimana merupakan element utama dari setiap pembuatan halaman website, elemen ini akan menandakan bahwa sebuah file merupakan dokument HTML
* Element `<head>`, element ini menampung  tag yang berhubungan dengan header dari sebuah alamat, beberapa tag biasa diletakkan pada element `<head>` ini, seperti, `<title>`, `<meta>`,`<link>` dan masih banyak yang lainnya yang akan dibahas secara terpisah
* Element `<body>`, pada element ini kita bisa mengisikan tentang apapun yang ingin kita tampilkan pada halaman web, bedanya dengan element `<head>` adalah jika meletakkan sebuah tag pada element `<head>` maka tidak akan ditampilkan pada halaman web yang kita akses pada sebuah browser, sedangkan jika kita meletakkan sebuah tag pada element `<body>` maka kana dimunculkan dan bisa dilihat pada halaman browser