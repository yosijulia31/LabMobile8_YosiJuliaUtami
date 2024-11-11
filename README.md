Nama : Yosi Julia Utami
NIM : H1D021022

Berikut adalah penjelasan proses dari setiap bagian gambar pada aplikasi CRUD_mhs (Create, Read, Update, Delete):

1. Login
   ![Alt Text](https://github.com/yosijulia31/LabMobile8_YosiJuliaUtami/blob/master/screenshoot/Screenshot%20(170).png)
   - Proses Login : Ketika pengguna menekan tombol Login, aplikasi mengirimkan data username dan password ke server untuk divalidasi.
   - Server akan memeriksa apakah kredensial yang dimasukkan cocok dengan data yang ada di database.
   - Jika data valid, server mengirimkan respons yang memungkinkan akses ke halaman atau fitur yang dilindungi.
   - Jika data tidak valid, server mengirimkan pesan error, dan pengguna diminta untuk mengulangi proses login dengan data yang benar.
2. Create (Tambah Data):
 ![Alt Text](https://github.com/yosijulia31/LabMobile8_YosiJuliaUtami/blob/master/screenshoot/Screenshot%20(171).png)
![Alt Text](https://github.com/yosijulia31/LabMobile8_YosiJuliaUtami/blob/master/screenshoot/Screenshot%20(174).png)
   - Proses: Proses ini melibatkan menambahkan data baru ke dalam database.
   - Tahapan:
     1. Form Input: Pengguna mengisi formulir dengan data yang ingin ditambahkan, seperti nama, alamat, jurusan, atau atribut lain yang relevan.
     2. Validasi Data: Setelah pengguna mengisi formulir, data diperiksa untuk memastikan semua bidang yang wajib diisi sudah lengkap dan valid.
     3. Kirim ke Server/API: Setelah data divalidasi, data dikirim ke server atau API dengan metode POST, yang akan menyimpan data tersebut ke dalam database.
     4. Respon dan Feedback: Jika penambahan data berhasil, server akan mengembalikan respons dan memperbarui tampilan dengan data terbaru.

4. Read (Baca Data):
   ![Alt Text](https://github.com/yosijulia31/LabMobile8_YosiJuliaUtami/blob/master/screenshoot/Screenshot%20(175).png)
   - Proses: Bagian ini bertujuan untuk menampilkan data yang sudah ada di database sehingga pengguna bisa melihat atau mengaksesnya.
   - Tahapan:
     1. Permintaan Data ke Server/API: Aplikasi mengirim permintaan ke server menggunakan metode GET untuk mendapatkan data.
     2. Menampilkan Data: Data yang diterima dari server ditampilkan dalam bentuk daftar di antarmuka pengguna.
     3. Pembaruan Data Secara Berkala: Aplikasi mungkin memperbarui data secara berkala atau setelah melakukan aksi lain, sehingga data yang tampil selalu up-to-date.

5. Update/Edit (Perbarui Data):
    ![Alt Text](https://github.com/yosijulia31/LabMobile8_YosiJuliaUtami/blob/master/screenshoot/Screenshot%20(176).png)
    ![Alt Text](https://github.com/yosijulia31/LabMobile8_YosiJuliaUtami/blob/master/screenshoot/Screenshot%20(177).png)
   - Proses: Proses ini memungkinkan pengguna untuk mengedit atau memperbarui data yang sudah ada di database.
   - Tahapan:
     1. Pilih Data yang Akan Diperbarui: Pengguna memilih data spesifik yang ingin diperbarui, dengan mengklik tombol "Edit" pada item data.
     2. Tampilkan Data di Form: Data yang akan diedit ditampilkan kembali dalam formulir sehingga pengguna bisa melakukan perubahan.
     3. Validasi dan Kirim ke Server/API: Setelah pengguna mengubah data, aplikasi memvalidasi data tersebut.
     4. Respon dan Feedback: Server merespons setelah memperbarui data.

6. Delete (Hapus Data):
   ![Alt Text](https://github.com/yosijulia31/LabMobile8_YosiJuliaUtami/blob/master/screenshoot/Screenshot%20(179).png)
    ![Alt Text](https://github.com/yosijulia31/LabMobile8_YosiJuliaUtami/blob/master/screenshoot/Screenshot%20(173).png)
   - Proses: Proses ini digunakan untuk menghapus data yang tidak diperlukan lagi dari database.
   - Tahapan:
     1. Pilih Data yang Akan Dihapus: Pengguna memilih data tertentu yang ingin dihapus, dengan mengklik tombol "Hapus" pada item data.
     2. Konfirmasi Penghapusan: Biasanya, aplikasi menampilkan kotak dialog konfirmasi untuk memastikan pengguna benar-benar ingin menghapus data tersebut.
     3. Permintaan Hapus ke Server/API: Jika pengguna mengonfirmasi, aplikasi mengirim permintaan DELETE ke server.
     4. Respon dan Feedback: Jika data berhasil dihapus, server merespons, dan aplikasi memperbarui tampilan dengan menghapus item yang telah dihapus dari daftar.
