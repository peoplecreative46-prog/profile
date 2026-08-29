# CV & Portfolio Website

Ini adalah repositori untuk website portofolio profesional dan Curriculum Vitae (CV). Proyek ini dibangun menggunakan HTML5, CSS3, dan JavaScript vanilla untuk memberikan pengalaman yang cepat, responsif, dan interaktif.

## Fitur Utama

- **Desain Responsif**: Tampilan yang menyesuaikan dari layar desktop hingga smartphone.
- **8 Bagian Konten**: Termasuk Hero, Tentang, Pengalaman Kerja, Pendidikan, Keahlian, Portofolio Proyek, Sertifikasi, dan Kontak.
- **Animasi Modern**: Transisi halus, efek hover, dan animasi *scroll-to-reveal* yang muncul ketika halaman digulir.
- **Validasi Formulir**: Validasi input formulir kontak dengan simulasi pengiriman menggunakan JavaScript.

## Struktur Direktori

```text
cv-portfolio/
├── index.html            # Kerangka utama yang memuat 8 bagian konten CV
├── README.md             # Dokumentasi untuk halaman depan repositori GitHub
├── .gitignore            # File konfigurasi untuk mengabaikan file sistem
└── assets/               # Folder pusat untuk seluruh sumber daya web
    ├── css/
    │   └── style.css     # Tata letak responsif, skema warna, dan animasi transisi modern
    ├── js/
    │   └── main.js       # Logika interaktif (animasi scroll, validasi form, efek hover)
    ├── img/
    │   ├── hero/         # Foto profil profesional dengan resolusi tinggi (Bagian 1)
    │   ├── projects/     # Tangkapan layar dari hasil kerja atau portofolio (Bagian 6)
    │   └── icons/        # Ikon kustom untuk kontak, sertifikasi, atau alat (Bagian 5, 7, 8)
    └── docs/
        └── CV AHMAD.pdf  # File dokumen fisik untuk CTA "Download CV" (Bagian 1)
```

## Cara Menjalankan

Proyek ini menggunakan file statis murni. Anda dapat langsung membuka file `index.html` di web browser apapun (Google Chrome, Firefox, Safari, Edge) dengan cara double-click tanpa perlu menginstal server web khusus.

## Teknologi yang Digunakan

- **HTML5**: Semantik dan aksesibilitas.
- **CSS3**: Variabel CSS untuk kemudahan *theming*, Flexbox & Grid untuk layout.
- **JavaScript**: ES6+, *Intersection Observer API* untuk mendeteksi elemen saat digulir.
- **FontAwesome**: Pustaka ikon (via CDN).

## Kostumisasi

- **Warna Utama**: Ubah variabel `--primary-color` dan `--secondary-color` di bagian paling atas file `assets/css/style.css`.
- **Konten CV**: Semua teks dapat diubah langsung melalui file `index.html`.
- **Gambar & Aset**: Letakkan foto profil Anda di `assets/img/hero/` dan file CV PDF Anda di `assets/docs/`.
