# Tutorial APAP

## Authors

* **Nur Fauziah Hasanah** - *1806147104* - *A*

---
## Tutorial 1
### What I have learned today

### Github
1. Apa itu Issue Tracker? Apa saja masalah yang dapat diselesaikan dengan Issue Tracker?
 (Tuliskan jawabanmu)
 Issue tracker adalah fitur yang ada di setiap repository di git. Fungsinya adalah untuk mencatat hal - hal yang perlu diimpelemntasi di source code nantinya. Hal - hal tersebut dapat berupa fitur baru, bug, dan banyak hal lainnya. Setiap issue mempunyai title, description, assignee, label, milestone, dan lain - lain. Setiap issue juga dapat dilihat historinya dan dapat ditutup ketika sudah diimplementasikan ke source code. Dengan adanya issue tracker, bug, fitur baru, dan perubahan - perubahan lain pada project  dapat terdokumentasi dengan baik. Pendeteksian dan perbaikan bug / error juga menjadi lebih efektif.

2. Apa perbedaan dari git merge dan git merge --squash?
Merge Biasa: Menggabungkan seluruh commit yangada di branch feature dan master sesuai dengan urutan waktunya
Merge Squash: Seluruh perubahan di branch feature disatukan commitnya menjadi 1 kemudian dimerge ke master (commit yang individual menjadi hilang)
Rebase: Seluruh perubahan di branch dan master tidak hilang namun ordernya diubah, commit yang paaling baru dilakukan diletakkan lebih diatas

3. Apa keunggulan menggunakan Version Control System seperti Git dalam pengembangan suatu
aplikasi?
1. Semua collaborator dapat mengubah source code kapanpun dan dimanapun. Version Control System akan memungkinkan adanya penggabungan file secara terpusat
2. Mudah mengidentifikasi versi app yang mana yang sekarang sedang ada di Development, QA, dan production.
3. Mampu memulihkan versi app yang lebih lama.
4. Version Control System akan mengharuskan pengubah untuk memberikan deskripsi terkait perubahan yang dilakukan. Dokumentasi source code menjadi lengkap.
5. Version Control System dapat berperan sebagai backup.
6. Memungkinkan kita untuk membandingkan file, mengidentifikasi perbedaan, dan menggabungkan perubahan.
7. Developer baru mereka dapat dengan mudah memahami dan mengunduh versi aplikasi.
8. Dapat melakukan pengembangan yang berbeda secara terpisah dari master dan digabungkan jika sudah siap.

### Spring
4. Apa itu library & dependency?
Library adalah program yang diciptakan untuk digunakan oleh program lain. Biasanya, library berisi isu - isu spesifik (co: Library Math, dll). Library dapat berupa library internal (co: library yang sudah disediakan dari developer java / python) ataupun third party. Biasanya,library tidak bisa diexecute, namun, dapat dimanfaatkan / digunakan oleh program lain.

Dependency adalah hubungan antara 2 buah source code. Code yang pertama memanggil code yang kedua untuk perform sebuah action atau me return sebuah informasi. Namun, code pertama tidak memiliki kontrol terhadap implementasi code kedua. Code kedua ini dapat berupa library, framework, database source, api call, ataupun fungsi lain. Apabila ada program dengan satu fungsi, kemudian dibreakdown menjadi 2 bagian. maka, bagian yang pertama memiliki dependensi terhadap bagian yang kedua.

5. Mengapa kita menggunakan Maven? Apakah ada alternatif dari Maven?
Maven biasanya digunakan pada java projects karena Maven me-manage builds, dependencies, dan versi2 dari dependecies beserta documentationnya. Maven juga bekerja baik dengan IDE. Maven seperti central repository untuk dependencies. Maven memungkinkan kita untuk me reuse berbagai macam code, sehingga kita tidak perlu menulis program from scratch.  Maven membuat kita mudah untuk membangun sebuah aplikasi serta menambah fitur baru di dalamnya.
Alternatif dari JSON salah satunya adalah Gradle yang biasanya digunakan pada project Android

6. Selain untuk pengembangan web, apa saja yang bisa dikembangkan dengan Spring framework?
Spring framewrok menyediakan pattern dan struktur untuk program kita. Spring framework biasanya digunakan pada:
1. Software Development
2. Web Development
3. Enterprise Development
Apapun yang sedang kita develop, spring akan menyediakan modul untuk kita. Permasalahan paling umum dalam emngembangkan aplikasi adalah permasalahan dependencies. Oleh karena itu, spring menyediakan IoC dan Dependency injection untuk mempemudah kita. Spring juga menyediakan modul MVC untuk web development. Spring juga menyediakan modul untuk koneksi ke database. Pengembangan aplikasi dengan spring project akan menggunakan build tool Maven.

7. Apa perbedaan dari @RequestParam dan @PathVariable? Kapan sebaiknya menggunakan
@RequestParam atau @PathVariable?

@RequestParam bisanyaa diguanakan dengan query string yaitu "?". Query string memungkinkan adanya pengiriman data ke server melalui url. "&" begruna untuk untuk menambah data yang dikim ke server. Contoh:
http://localhost:8080/onlineshopping/test?greeting=hi&key=value

Agar project kita lebih SEO friendly, kita harus membuat URLs project kita bersih. Sehingga, @PathVariable menggunakan tanda slash secara langsung
http://localhost:8080/onlineshopping/test/hi

@PathVariable berfungsi untuk mengekstrak nilai dari URI
@RequestParam berfungsi untuk mendaparkan parameter dari URI, atau pramaeter query. @RequestParam lebih berguna untuk aplikasi web tradisional dimana data sebagaian besar diteruskan dalam parameter query sementara, sedangkan @PathVariable lebih berguna untuk layanan web dengan framework RESTful.

### What I did not understand
(tuliskan apa saja yang kurang Anda mengerti, Anda dapat men-_check_ apabila Anda sudah mengerti
dikemudian hari, dan tambahkan tulisan yang membuat Anda mengerti)
- [ ] Konsep RESTful api
- [ ] Flow requestparam dan pathvariable


---
## Tutorial 2

Pertanyaan 1
Akan terjadi page service error karena controller megarah ke url /hotel/add mereturn html "add-hotel yang belum ada

Pertanyaan 2
Anotasi @autowire berguna untuk menghubungkan service dengan controller. Dengan anotasi tersebut, controller HotelController.java dapat menjalankan method - method yang ada di class HotelInMemoryService.java. HotelController.java mendeklarasi interface HotelService, kemudian spring akan membuat instansiasi dari interface tersebut sebagai bean sehingga controller dapat menjalankan method - methodnya. 

Pertanyaan 3
Akan muncul page error dengan status Bad Request 400. Hotel tidak dapat ditambahkan. Hal tersebut karena url tersebut tidak memberikan parameter  nomor telepon yang sifatnya required pada RequestParam.

Pertanyaan 4
Dengan pathvariable
http://localhost:8080/hotel/view?idHotel=1
Dengan requestparam

Pertanyaan 5
https://ibb.co/n3Vt2kr
