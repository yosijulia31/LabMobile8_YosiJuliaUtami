import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AlertController } from '@ionic/angular'; // Import AlertController
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.page.html',
  styleUrls: ['./mahasiswa.page.scss'],
})
export class MahasiswaPage implements OnInit {
  dataMahasiswa: any;
  modalTambah: boolean = false;
  modalEdit: boolean = false;
  id: string = '';
  nama: string = '';
  jurusan: string = '';

  constructor(
    private api: ApiService, 
    private alertController: AlertController, // Tambahkan AlertController
    private router: Router // Tambahkan Router
  ) {}

  ngOnInit() {
    this.getMahasiswa();
  }

  getMahasiswa() {
    this.api.tampil('tampil.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.dataMahasiswa = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  resetModal() {
    this.id = '';
    this.nama = '';
    this.jurusan = '';
  }

  openModalTambah() {
    this.modalTambah = true;
    this.resetModal();
  }

  openModalEdit(item: any) {
    this.modalEdit = true;
    this.id = item.id;
    this.nama = item.nama;
    this.jurusan = item.jurusan;
  }

  cancel() {
    this.modalTambah = false;
    this.modalEdit = false;
    this.resetModal();
  }

  tambahMahasiswa() {
    if (this.nama !== '' && this.jurusan !== '') {
      let data = {
        nama: this.nama,
        jurusan: this.jurusan,
      };
      this.api.tambah(data, 'tambah.php').subscribe({
        next: () => {
          this.resetModal();
          this.getMahasiswa();
          this.modalTambah = false;
        },
        error: () => {
          console.log('gagal tambah mahasiswa');
        },
      });
    } else {
      console.log('gagal tambah mahasiswa karena masih ada data yg kosong');
    }
  }

  // Metode konfirmasi hapus
  async konfirmasiHapus(id: any) {
    const alert = await this.alertController.create({
      header: 'Konfirmasi',
      message: 'Apakah data ingin dihapus?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          handler: () => {
            console.log('Penghapusan dibatalkan');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            this.hapusMahasiswa(id); // Panggil metode hapusMahasiswa jika pilih 'Ya'
          }
        }
      ]
    });

    await alert.present();
  }

  private hapusMahasiswa(id: any) {
    this.api.hapus(id, 'hapus.php?id=').subscribe({
      next: () => {
        this.getMahasiswa();
      },
      error: () => {
        console.log('gagal');
      },
    });
  }

  editMahasiswa() {
    let data = {
      id: this.id,
      nama: this.nama,
      jurusan: this.jurusan,
    };
    this.api.edit(data, 'edit.php').subscribe({
      next: () => {
        this.resetModal();
        this.getMahasiswa();
        this.modalEdit = false;
      },
      error: () => {
        console.log('gagal edit Mahasiswa');
      },
    });
  }

  // Fungsi Logout
  logout() {
    localStorage.removeItem('isAuthenticated'); // Hapus autentikasi dari localStorage
    this.router.navigate(['/login']); // Arahkan ke halaman login
  }
}
