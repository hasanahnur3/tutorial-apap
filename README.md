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
## Tutorial 5

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
## Tutorial 6

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
**1. Apa itu user yang digenerate pada UserDetailsServiceImpl.java?
new User(userModel.getUsername(), userModel.getPassword(), grantedAuthorities);
apa bedanya dengan UserModel?**
2. Bagaimana cara mengakses authorized di html tanpa #httpServletRequest.userPrincipal ?

---
## Tutorial 7

1. Jelaskan apa yang Anda lakukan di latihan dalam satu paragraf per-soal. Berikan screenshot sebagai ilustrasi
dari apa yang Anda jelaskan.

**Latihan 1**
Pada soal no 1, saya menghilangkan checkbox yang ada pada section kiri. Namun, tidak diperbolehkan untuk membuat component baru. Checkbox tidak bisa dihilangkan begitu saja oleh component karena masih akan digunakan oleh section yang sebelah kiri. Oleh karena itu, saya mengatasinya dengan memberikan conditional pada tag input

```<input type={checked ?  "checkbox" : "hidden"} className="ml-2"
                            checked={checked}
                            onChange={handleChange} />
```

**Latihan 2** 
Pada soal kedua, saya membuat button clear all fav. Button ini tidak akan muncul apabila isi list favorite kosong.Untuk menyimpan state ditampilkan atau tidaknya button tersebut, saya membuat state clearButton
Berikut adalah code untuk menambah button
```            <button
                hidden={this.state.clearButton}
                className="btn btn-primary"
                onClick={this.clearAll}
              > Clear All Favorites </button>
```
Berikut adalah code dari clearAll, yang berfungsi untuk mengosongkan state list favorite
```  clearAll = () => {
    this.setState({ favItems: [], clearButton: true });
  };
```
Setiap ada yang dimasukkan ke list fav, saya juga mengupdate state clearButton menjadi false agar tidak di-hidden
```this.setState({favItems: newItems, clearButton: false});
```
Saya juga melakukan pengecekan apabila state list favorite isinya kosong, maka state clearButton saya ubah menjadi true agar di-hidden
```    if(newItems.length == 0){
      this.setState({clearButton: true});
    }
```

**Latihan 3** 
Pada soal ini, saya membuat item pada section sebelah kiri hanya bisa add ke section sebelah kanan, namun bida ditekan kembali, section di kanan tidak akan terdelete. untuk itu, saya memisahkan handler untul list section kiri dan kanan pada App.js. Lalu, untuk handler section yang kiri, sayang menghilangkan line code untuk menghapus item tersebut daru array state list favorite
```newItems.splice(targetInd, 1);
```

**Latihan 4** 
Pada soal ini, saya membuat input toggle untuk menyembunyikan section sebelah kanan. Untuk itu, saya membuat state baru untuk menyimpan state ditampilkan atau tidaknya section sebelah kanan, yaitu hideButton.
Berikut adalah code untuk menambahkan input toggle
```
                <input
                  type="checkbox"
                  checked={this.state.favHidden}
                  data-toggle="toggle"
                  onChange={this.handleToggle}
                  className="form-check-input"
                  id="exampleCheck1"
                />
```
Berikut adalah code dari handleToggle yang akan mengganti state dari hideButton
```  handleToggle = () => {
    const favHidden = this.state.hideButton;
    this.setState({ hideButton: !favHidden });
  };
```
Kemudian, pada bagian code html yang menampilkan section sebelah kanan, saya menambahkan conditional
```<div className="col-sm">
            {this.state.hideButton ? null :
                        
                        <List
                          title="My Favorites"
                          items={this.state.favItems}
                          onItemClick={this.handleItemClickRight}
                        />
                      
            }
            </div>
```
**Latihan 4** 
Pada latihan ini, saya menampilkan message apabila list section sebelah kanan masih kosong isinya. Berikut adalah potongan code conditional yang saya tambahkan pada index.js List
```            {items.length == 0 ? (
          <div className="text-center">
            <h4>Belum ada item yang dipilih</h4>
            <h5>Klik salah satu item di List Movies</h5>
          </div>
        ) : null}
```

2. Menurut pemahaman kamu selama pengerjaan tutorial ini, apa perbedaan antara state dan props?
State merupakan data yang disimpan pada component. State sifatnya private dan hanya relevan terhadap component itu sendiri. Sedangkan props adalah properti yang valuenya dilempar dari component lain. State justru dapat menyimpan dan mengubah datanya sendiri. State hanya dimiliki oleh class component.

3. Apa keuntungan menggunakan component (e.g. List, Item) di React? Berikan contohnya!
Keuntungan menggunakan component aspek reusabilitynya. Setiap component, seperti Item dan List memiliki logic dan mengontrol proses renderingnya sendiri. Dengan implementasi component, kita dapat mengembangkan app kita dengan mudah. Selain itu, kita juga dapat mengatasi perubahan yang terjadi dengan mudah apabila kita menggunakan component.


4. Menurut kamu, apa saja kelebihan menggunakan React dalam pengembangan web?
React dapat memberikan banyak kemudahan, salah satunya adalah Komponen yang reusable. Selain itu, virtual DOM yang dapat meningkatkan kecepatan rendering. Terdapat developer toolset yang sangat membantu seperti React Dev Tools pada Google Chrome, dan lain -lain.


5. Menurut kamu, apa saja kekurangan menggunakan React dalam pengembangan web?
Kekurangan dari react salah satunya adalah ukuran library yang besar. Selain itu, saya sulit memahami alur dan juga syntax pemrograman yang digunakan pada react karena belum familiar dengan javascript sebelumnya.

### What i have learned today:
React adalah library Javascript terpopuler untuk membuat user interface (UI). React bukan framework MVC. React adalah library yang bersifat composable user interface, yang artinya kita dapat membuat berbagai UI yang bisa kita bagi menjadi beberapa komponen.

### What i dont understand:
1. Saya masih kurang familiar dengan component function

 > <input type={checked ?  "checkbox" : "hidden"} className="ml-2"
 >                           checked={checked}
 >                        onChange={handleChange} />'''

```javascript
var preview = new Box.Preview();
preview.show('FILE_ID', 'ACCESS_TOKEN', {
  container: '.preview-container',
  showAnnotations: true,
});
```
---
## Tutorial 7

1. Ceritakan langkah - langkah yang kalian lakukan untuk solve LATIHAN no.1, dan mengapa kalian
melakukan langkah - langkah tersebut?
Hal yang saya lakukan adalah menambahkan fungsi handleCancel menjadi seperti berikur
```handleCancel(event) {
    event.preventDefault();
    this.setState({ isCreate: false, isEdit: false });
    this.setState({ namaHotel: "" });
    this.setState({ alamat: "" });
    this.setState({ nomorTelepon: "" });
}
```
Seluruh state yang berhubungan dengan field hotel di set kembali menjadi "" karena setiap kali kita membuat hotel / mengedit hotel,
fungsi handleCancel akan dipanggil juga. Sehingga, bila kita mengakses form kembali, data yang sebelumnya tidak akan muncul.

2. Jelaskan fungsi dari async dan await!
Async adalah metode untuk membuat code asinkronus di javascript. Pada tutorial ini, saya mengimplementasi hal tersebut menggunakan Promise-based HTTP client Axios. Promise-based HTTP client me-returns promises, bukan accepting callbacks. Awalnya hanya ada callback untuk menghandle pemanggilan asinkronus, namun callback dapat membuat code menjadi messy dan sulit untuk dimengerti sehingga terbuatlah promise. Fungsi dengan async didepannya akan mereturn sebuah promise, dan memuat objek non-promise didalamnya.
Fungsi dengan async juga dapat memiliki await didalamnya. Fungsi dari await adalah menunggu promise agar terkumpul secara komplit baru fungsi async akan me return promise tersebut.
Pada tutorial ini, promise yang dimaksud adalah listhotel yang diambil dari api yang telah dibuat pada tutorial sebelumnya


3. Masukkan jawaban dari Screenshot yang diperintahkan di halaman 7 pada Component Lifecycle
pada pertanyaan ini.
![alt text](https://i.ibb.co/6sWR8vD/tutor8.png)
Pada step ini, ketika component dirender, componentDidMount akan diapnggil. Ketika state diubah, sehingga component harus dirender ulang, maka method
shouldComponentUpdate akan dipanggil untuk mengetahui apakah component perlu dirender ulang atau tidak. shouldComponentUpdate akan return true apabila component harus diupdate

4. Jelaskan fungsi dari componentDidMount, shouldComponentUpdate,
componentDidUpdate, componentWillReceiveProps,
componentWillUnmount.
Notes : Penjelasan harus mencantumkan “kapan fungsi dipanggil” dan “use case apa saja
yang biasanya menggunakan lifecycle method tersebut”.

componentDidmount adalah fase siklus react ketika pertama kali DOM di render. Pada fase ini, kita dapat melakukan operasi sebelum elemen js dimuat. Pada tutorial ini, saya menggunakan componentDidmount untu menampilkan list hotel
```componentDidMount() {
    console.log("componentDidMount()");
    this.loadData();
}```

componentWillMount adalah fase di mana semua data atau operasi di destroy. Misal ada sebuah interval pada halamn A. Saat user pergi ke halaman B, maka interval A harus di destroy dengan componentWillMount. Jika tidak, maka operasi tersebut akan berjalan di screen atau page lain.

componentDidUpdate dipanggil setelah fungsi render setelah mengganti sebuah objek. Fungsi ini dapat digunakan untuk melakukan operasi DOM setelah data telah diperbaharui.

shouldComponentUpdate mempercepat proses render sehingga suatu component tidak perlu render ulang di step selanjutnya. Jika di beberapa kejadian program menemukan bahwa component tidak perlu diupdate, method ini dapat mereturn nilai false sehingga component tidak akan mengalami proses render kembali.

componentWillReceiveProps method jika ingin memperbarui nilai status dengan nilai props baru. Method ini akan dipanggil setiap kali akan terjadi perubahan pada nilai props

componentWillUnmount method ini menghilangkan suatu komponen karena ada perubahan pada state. Method ini mengatur unmounting dari component yang akan dihilangkan. Method ini dipanggil saat komponen akan dihilangkan dari DOM. Pada method ini dapat diimplementasi penghapusan objek lainnya.


### What i have learned today:
Saya menjadi paham bagaimana cara frontend berinteraksi dengan backend. Salah satu caranya adalah dengan menggunakan http post, get, dsb menggunakan axios. Saya juga belajar untuk menambahkan cors untuk memungkinkan transfer data antara frontend dan backend. Tutorial kali ini juga membuat saya menjadi lebih paham syntax dari javascript.

### What i dont understand
1. Bagaimana cara membuat pagination tanpa react pagination?


















