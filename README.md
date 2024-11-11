Nama : Yosi Julia Utami
NIM : H1D021022

Berikut adalah penjelasan proses dari setiap bagian gambar pada aplikasi CRUD_mhs (Create, Read, Update, Delete):

1. Login
   ![Alt Text](https://github.com/username/repository-name/raw/main/screenshots/login.png)
   - Proses Login : Ketika pengguna menekan tombol Login, aplikasi mengirimkan data username dan password ke server untuk divalidasi.
   - Server akan memeriksa apakah kredensial yang dimasukkan cocok dengan data yang ada di database.
   - Jika data valid, server mengirimkan respons yang memungkinkan akses ke halaman atau fitur yang dilindungi.
   - Jika data tidak valid, server mengirimkan pesan error, dan pengguna diminta untuk mengulangi proses login dengan data yang benar.
2. Create (Tambah Data):
   ![Alt Text](https://github.com/username/repository-name/raw/main/screenshots/login.png)
   - Proses: Proses ini melibatkan menambahkan data baru ke dalam database.
   - Tahapan:
     1. Form Input: Pengguna mengisi formulir dengan data yang ingin ditambahkan, seperti nama, alamat, jurusan, atau atribut lain yang relevan.
     2. Validasi Data: Setelah pengguna mengisi formulir, data diperiksa untuk memastikan semua bidang yang wajib diisi sudah lengkap dan valid.
     3. Kirim ke Server/API: Setelah data divalidasi, data dikirim ke server atau API dengan metode POST, yang akan menyimpan data tersebut ke dalam database.
     4. Respon dan Feedback: Jika penambahan data berhasil, server akan mengembalikan respons dan memperbarui tampilan dengan data terbaru.

3. Read (Baca Data):
   ![Alt Text](https://github.com/username/repository-name/raw/main/screenshots/login.png)
   - Proses: Bagian ini bertujuan untuk menampilkan data yang sudah ada di database sehingga pengguna bisa melihat atau mengaksesnya.
   - Tahapan:
     1. Permintaan Data ke Server/API: Aplikasi mengirim permintaan ke server menggunakan metode GET untuk mendapatkan data.
     2. Menampilkan Data: Data yang diterima dari server ditampilkan dalam bentuk daftar, tabel, atau kartu (card) di antarmuka pengguna.
     3. Pembaruan Data Secara Berkala: Aplikasi mungkin memperbarui data secara berkala atau setelah melakukan aksi lain, sehingga data yang tampil selalu up-to-date.
   - Fungsi: Memberikan informasi yang akurat dan terbaru kepada pengguna.

4. Update (Perbarui Data):
   ![Alt Text](https://github.com/username/repository-name/raw/main/screenshots/login.png)
   - Proses: Proses ini memungkinkan pengguna untuk mengedit atau memperbarui data yang sudah ada di database.
   - Tahapan:
     1. Pilih Data yang Akan Diperbarui: Pengguna memilih data spesifik yang ingin diperbarui, biasanya dengan mengklik tombol "Edit" pada item data.
     2. Tampilkan Data di Form: Data yang akan diedit ditampilkan kembali dalam formulir sehingga pengguna bisa melakukan perubahan.
     3. Validasi dan Kirim ke Server/API: Setelah pengguna mengubah data, aplikasi memvalidasi data tersebut, lalu mengirimnya ke server dengan metode PUT atau PATCH.
     4. Respon dan Feedback: Server merespons setelah memperbarui data, dan aplikasi menampilkan pesan sukses atau memperbarui tampilan untuk mencerminkan perubahan.
   - Catatan: Pembaruan data mungkin dilakukan langsung tanpa meninggalkan halaman daftar data, tergantung pada desain antarmuka.

5. Delete (Hapus Data):
   ![Alt Text](https://github.com/username/repository-name/raw/main/screenshots/login.png)
   - Proses: Proses ini digunakan untuk menghapus data yang tidak diperlukan lagi dari database.
   - Tahapan:
     1. Pilih Data yang Akan Dihapus: Pengguna memilih data tertentu yang ingin dihapus, biasanya dengan mengklik tombol "Hapus" pada item data.
     2. Konfirmasi Penghapusan: Biasanya, aplikasi menampilkan kotak dialog konfirmasi untuk memastikan pengguna benar-benar ingin menghapus data tersebut.
     3. Permintaan Hapus ke Server/API: Jika pengguna mengonfirmasi, aplikasi mengirim permintaan DELETE ke server.
     4. Respon dan Feedback: Jika data berhasil dihapus, server merespons, dan aplikasi memperbarui tampilan dengan menghapus item yang telah dihapus dari daftar.
   - Catatan: Penghapusan data bersifat permanen dalam banyak aplikasi, jadi penting untuk memastikan pengguna tidak menghapus data secara tidak sengaja.
