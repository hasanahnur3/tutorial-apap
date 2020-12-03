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

### What i have learned today
Saya menjadi memahami bahwa menggunakan database pada program mudah dengan JPA module. JPA module mempermudah proses CRUD model saya walaupun harus berinteraksi dengan database



1. Jelaskan perbedaan th:include dan th:replace!

th:insert:  memasukkan fragment ke dalam tag host
th:replace: mengganti tag host dengan konten fragment
th:include: seperti insert namun hanya memasukkan konten fragmentnya

Contoh Penggunaan:

<body>

<div th:insert="fragments/components :: header"></div>

<div th:replace="fragments/components :: header"></div>

<div th:include="fragments/components :: header"></div>

</body>


<body>
    
    <div>
        <header>
            <h1>Welcome to My Blog</h1>
        </header>
    </div>
    
    <header>
        <h1>Welcome to My Blog</h1>
    </header>
    
    <div>
        <h1>Welcome to My Blog</h1>
    </div>

</body>

---
## Tutorial 4

2. Jelaskan apa fungsi dari th:object!

th:action digunakan untuk menyediakan URL untuk POST form dan th:object digunakan untuk mendefinisikan objek apa yang akan disubmit oleh form. Fields yang terdapat pada form tersebut masing-masing didefinisikan dengan th:field=”*{nama}” dimana nama tersebut sama dengan nama atribut objek


3. Jelaskan perbedaan dari * dan $ pada saat penggunaan th:object! Kapan harus dipakai?
${...} adalah variable expression digunakan untuk memasukkan variable di tag html. *{...} adalah selection expression, sama sepertivariabel expression namun mengacu ke objek yang di refer sebelumnya. Selection expression sama saja seperti variable expression kecuali jika digunakan dengan thLobject. Misalnya, <form th: object = "$ {form}">, maka ekspresi * {field} diselesaikan menjadi $ {form.field}. Ini sebagian besar digunakan saat menggunakan atribut th: field saat membuat formulir.



4. Bagaimana kamu menyelesaikan latihan nomor 3?
Saya menyelesaikan question nomot 3 dengan cara mengubah tag fragment menjadi menerima parameter kemudian menaruh variabel yang akan digantikan pada konten fragment. Setelah itu, html yang memanggil fragment tersebut juga dimasukkan parameternya
contoh di fragment:
<nav th:fragment="navbar(pagename)" class="navbar navbar-expand-lg bg-light">

contoh di html lain:
<nav th:replace="fragments/fragment :: navbar('Home')"></nav>


Referensi 
https://attacomsian.com/blog/thymeleaf-fragments



### What I have learned today:
Thymeleaf
Thymeleaf adalah open-source java library yang berfungsi untuk engine untuk template HTML dan XML. Thymeleaf adalah server-side template untuk pembuatan web. Thymeleaf ini terintegrasi penuh dengan framework spring. 

Source code html dapat direuse dengan menggunakan fragments. Fragments dapat disematkan di html lain memlalui 3 cara yaitu include, replace, dan insert. Fragments juga memiliki fitur2 lain seperti inclusion expression, flexible layouts, layout inheritance, dll.

Apa perbedaan lab kemarin dengan sekarang?
Pada lab kali ini saya belajar pada sisi client side untuk membuat tampilan baik. Saya menggunakan bantuan thymeleaf untuk  merancang  template HTML.

### What i dont understand
1. Bagaimana controller dapat membaca dan membedakan params?
2. Bagaimana cara memanggil params di dalam method controller?
3. Bagaimana cara tahu row yang diselect di html dan memberitahukannya ke controller?

---
## Tutorial 4

1. Apa itu Postman? Apa kegunaannya?
Postman adalah sebuat tool yang dapat digunakan untuk memakai / mengetes RESTful API yang dibuat orang lain atau dibuat oleh kita sendiri. Postman menyediakan user interface untuk membuat HTML request tanpa kita harus menulis kode - kode untuk mengetes fungsionalitas sebuah API. Selain itu, postman juga menyediakan user interface untuk membaca response yang didapat. Request yang dapat dilakukan pada postman adalah GET, POST, PUT, DELETE, dan - lain lain. Postman juga dapat mensupport request dengan parameter.
Referensi:
https://seesparkbox.com/foundry/api_testing_with_postman
https://www.guru99.com/postman-tutorial.html

2. Jelaskan fungsi dari anotasi @JsonIgnoreProperties dan @JsonProperty

@JsonIgnoreProperty digunakan dalam class untuk menandakan sebuah properti untuk di ignore. Pada tutorial ini, saya meng-ignore atribut hotel pada objek kamar ketika saya men-serialize sebuah kamar ke dalam benntuk JSON
@JsonIgnoreProperties(value={"hotel"},allowSetters = true)

@JsonProperty digunakan untuk men - serialize/deserialize sebuah properti ketika kita bekerja dengan non-standard setter getter. @JsonProperty(name) memberitahu ObjectMapper untuk memetakan nama JSON property terhadap nama field di program java (yang dikenakan anotasi)
https://www.baeldung.com/jackson-ignore-properties-on-serialization

3. Apa kegunaan atribut WebClient?
WebClient memungkinkan kita menggunakan object mock yang dibutuhkan untuk memverifikasi request URI. WebClient adalah interface yang disediakan oleh Spring Framework berfungsi untuk poin akses utama dari HTTP requests. Modul ini berfungsi untuk membuat akses poin URL dan mengelola request dan response.

4. Apa itu ResponseEntity dan BindingResult? Apa kegunaannya?
ResponseEntity menggambarkan respon HTTP yang berisi kode status, header, dan isi. ResponseEntity memungkinkan kita untuk mengirim pesan atas sebuah request. Contoh ResponseEntity yang saya buat pada tutorial ini:
ResponseEntity.ok("Hotel with ID " + String.valueOf(idHotel) + " Deleted!")

 BindingResult merupakan objek Spring yang menyimpan hasil dari validasi, binding, dan error atas model objek yang divalidasikan. BindingResult diletakkan setelah parameter objek validasi di Controller sebagai argumen untuk melakukan validasi dari Validator.
Referensi : 
https://www.baeldung.com/spring-response-entity
https://stackoverflow.com/questions/10413886/what-is-the-use-of-bindingresult-interface-in-spring-mvc

### What I have learned today:
RESTful Api
REST (Representional State Transfer) adalah suatu arsitektur metode komunikasi yang menggunakan protokol HTTP untuk pertukaran data (sering digunakan dalam pengembangan aplikasi). REST memanfaatkan metode - metode di HTTP seperti get, post, dan lain - lain

### What i dont understand
1. Apa fungsi example di postman?
2. Bagaimana cara memberikan interface / frontend pada tutorial ini?

---
## Tutorial 5

1. Jelaskan secara singkat perbedaan Otentikasi dan Otorisasi! Di bagian mana (dalam kode yang telah anda
buat) konsep tersebut diimplementasi?
Otentikasi adalah proses memverifikasi siapa yang masuk ke sistem. Saat user masuk ke sistem dengan username dan password, sistem sedang melakukan otentikasi. Otorisasi adalah proses memverifikasi bahwa user memiliki akses ke sesuatu halaman / method.
Otentikasi diimplementasikan pada halaman login dimana verifikasi username dengan password di check menggunakan configAuthentication, sedangkan otorisasi diatur menggunakan .hasAuthority pada WebSecurityConifg.java.

 2. Apa itu BCryptPasswordEncoder? Jelaskan secara singkat cara kerja dan tujuannya. 
BCryptPasswordEncoder disediakan oleh Spring Security. BCryptPasswordEncoder menyediakan fungshi hashing BCrypt untung mengenkripsi password. Jadi, id dan password user tidak akan terlihat raw di database, tetapu yang terlihat adalah hasil enkripsinya. Proses ini melibatkan algoritma "one-way-hasing" atau pengenkripsian satu arah, yang artinya ketika password sudah dienkripsi, maka tidak dapat lagi dikembalikan ke bentuk semula atau didekripsi. 


3. Jelaskan secara singkat apa itu UUID beserta penggunaannya!
Universally Unique Identifiers atau UUID adalah angka 128 bit, yang terdiri dari 16 octets dan direpresentasikan dalam 32 base-16 karakter. UUID bersifat unique dan memiliki kemungkinan duplikasi yang rendah. Dalam waktu singkat saja, jika di-generate ribuan UUID, kecil kemungkinan ada UUID yang sama sehingga UUID cocok untuk digunakan sebagai Primary Key. Pada tutorial ini, UUID diimplementasikan untuk penambahan role. Ketika kita menambahkan user,  sistem generate id dengan sistem UUID. 

4.  Apa kegunaan class UserDetailsServiceImpl.java? Mengapa harus ada class tersebut padahal kita sudah memiliki class UserRoleServiceImpl.java?
UserDetailsServiceImpl.java berguna untuk menyediakan informasi otentikasi dan otorisasi user. Spring Boot Security menggunakan class ini untuk otorisasi user yang melakukan login sesuai dengan role yang sudah terdaftar di database. UserDetailsServiceImpl.java juga berguna untuk mengatur aksesibilitas setiap user. Pada UserDetailsService didefinisikan
    Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
    grantedAuthorities.add(new SimpleGrantedAuthority(userModel.getRole().getRole()));
Sehingga, kita dapat membatasi akses user di WebSecurityConfig.java
        .antMatchers("/hotel/**").hasAuthority("RECEPTIONIST")
        .antMatchers("/kamar/addMultiple").hasAuthority("RECEPTIONIST")
        .antMatchers("/user/addUser").hasAuthority("ADMIN")

### What i have learned today:
Spring Security sendiri adalah salah satu project dari framework Spring dengan banyak fitur-fitur menarik: key authentication dengan LDAP, SSO, JAAS dan lain-lain. Fitur yang dimanfaatkan pada tutorial kali ini adalah authentication dan authorization. Pada tutorial ini saya belajar bagaimana cara mengintegrasikan Spring Security dengan Spring MVC web untuk mengamankan akses ke sebuah URL. 

### What i dont understand:
1. Apa itu user yang digenerate pada UserDetailsServiceImpl.java?
new User(userModel.getUsername(), userModel.getPassword(), grantedAuthorities);
apa bedanya dengan UserModel?
2. Bagaimana cara mengakses authorized di html tanpa #httpServletRequest.userPrincipal ?















