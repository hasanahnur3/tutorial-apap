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

---
## Tutorial 3
1. Pada class KamarDb, terdapat method findAllByHotelId, apakah kegunaan dari method tersebut?
Mehod tersebur bergunaa untuk mengambil seluruh kamar dengan hotel id yang sama pada database lalu dimasukkan ke dalam sebuah list List<KamarModel> lalu me return list tersebut agar dapat digunakan di service dan controller project.

2. Pada class HotelController, jelaskan perbedaan method addHotelFormPage dan addHotelSubmit?
addHotelForm page adalah method yang menghandle getmapping dari add hotel (@GetMapping("/hotel/add")) sedangkan addHotelSubmit adalah method yang menghandle postmapping dari add hotel (@PostMapping("/hotel/add")).

@GetMapping("/hotel/add") dan addHotelFormPage berfungsi untuk men-generate html berisi form untuk membuat sebuah hotel. Setiap field di form sudah diberikan name sesuai dengan nama atribut ada HotelModels. Form tersebut juga diberikan action untuk direct ke "/hotel/add" ketika button submit dipencet.

@PostMapping("/hotel/add") dan addHotelSubmitberfungsi untuk menerima field2 yang diisi oleh user kemudian membuat instance HotelModel berdasarkan field2 tersebu dan memasukkannya ke database.

3. Jelaskan kegunaan dari JPA Repository!
Jpa adalah modul yang dimiliki oleh Spring Data. Jpa memungkinkan kita untuk mengambil data dari database melalui query secara manual ssebagai string atau mengambil data secara otomatis melalui nama method. ada banyak Supported keywords dalam nama method seperti and, or, between, lessthan, greaterthan, equals, isnull, isnotnull, orderby, dll. Selain itu, jpa juga menyediakan namedqueries. Untuk menggunakan jpa, kita cukup membuat file respository yaitu interface untuk setiap model yang disimpan di database. Oleh karena itu, pada tutorial kai ini saya membuat file HotelDb.java dan KamarDb.java. Selain itu, jpa juga memungkinkan kita untuk melakukan advanced query dengan bantuan expresion
Referensi: https://docs.spring.io/spring-data/jpa/docs/1.3.4.RELEASE/reference/html/jpa.repositories.html

4. Sebutkan dan jelaskan di bagian kode mana sebuah relasi antara HotelModel dan KamarModel dibuat?
Di HotelModel.java
@OneToMany(mappedBy = "hotel", fetch = FetchType.LAZY, cascade = CascadeType.ALL )
Di KamarModel.java 
@ManyToOne(fetch = FetchType.EAGER, optional = false)

Kedua code tersebut memberi tahu database bahwa relationship antara hotel dan kamar adalah one to many. Sebuah hotel bisa memiliki banyak kamar. mapped by menandakan objek parent atau objek yang memiliki objek yang lainnya. fetch menandakan join antara kedua model tabel (inner join atau left join)
Referensi: https://www.logicbig.com/tutorials/java-ee-tutorial/jpa/fetch-join.html

5. Jelaskan kegunaan FetchType.LAZY, CascadeType.ALL, dan FetchType.EAGER!
Pada tutorial ini, saya memiliki dua model yaitu hotel dan kamar. satu hotel bisa memiliki banyak kamar. hotel memiliki atribut untuk hotel dan kamar juga memiliki atribut untuk kamar. Ketika program me load objek hotel dengan FetchType.EAGER, maka program akan meload hotel dengan seluruh kamar yang dimilikinya sekaligus

Jika menggunakan FetchType.LAZY, ketika hotel diload dari database, seluruh kamar yang ia miliki tidak akan ikut diload juga. Tetapi, kamar2 tersebut akan diload apabila dibutuhkan dengan memanggil method yang akan mentrigger query kamar2 dari database dengan id hotel tersebut

Pada JPA, apabila kita melakukan perubahan pada sebuah objek, maka yang hanya berubah hanyalah objek tersebut. Objek lain yang memiliki reationship dengan objek tersebut tidak akan ikut terubah. leh karena itu,  jpa menyediakan javax.persistence.CascadeType yang gunanya adalah menciptakan dependency diantara objek yang berhubungan dengan tipe relationship One-to-One, One-to-Many, Many-to-One, Many-to-Many. CascadeType.ALL menandakan bahwaseluruh operasi atau perubahan yang dilakukan pada class parentnya, akan diaplikasikan juga pada class childnya.

Referensi: https://stackoverflow.com/questions/2990799/difference-between-fetchtype-lazy-and-eager-in-java-persistence-api
https://www.javatpoint.com/jpa-cascading-operations

