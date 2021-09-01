---
sidebar_position: 3
---

# Paragraf

## Penulisan Paragraf
Pada dokumen HTML kita juga membuat sebuah paragraf, dimana berfungsi untuk merapikan sebuah teks yang ingin kitam tampilkan layaknya membuat sebuah tesk pada aplikasi pengolah kata. Untuk membuat paragraf maka kita membutuhkan tag `<p></p>`. Perhatikan syntax berikut

```html
<p>Ini merupakan paragraf pertama</p>
<p>Ini merupakan paragraf kedua</p>
<p>Ini merupakan paragraf ketiga</p>
```

Output :

![paragraf](../../../img/html/paragraf.jpg)

Sama seperti halnya tag heading, tag paragraf dimasukkan setelah tag `<body>`

## Line Break
Selain menggunakan tag `<p>` untuk memberikan jarak atau line break kita juga bisa menggunakan tag `<br>`. Tag tersebut merupakan salah satu tag khusus, dimana tag khusus ini hanya membutuhkan tag pembuka dan tidak memerlukan tag penutup. Untuk lebih jelasnya perhatikan syntax berikut 

```html
<p>Menggunakan tag paragraf</p>
<p>
    Menggunakan tag paragraf dan line break
    <br>
    Ini teks yang sudah digunakan line break
</p>
```

Output :

![line-break](../../../img/html/line-break.jpg)

## Horizontal Rules
Pada dokument HTML kita juga disediakan membuat garis horizontal dengan menggunakan tag `<hr>`, berikut penggunaanya

```html
<p>Paragraf 1</p>
<hr>
<p>Paragra 2</p>
```

Output :

![horizontal-rule](../../../img/html/horizontal-rule.jpg)