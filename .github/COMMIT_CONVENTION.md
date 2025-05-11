# Panduan Konvensi Commit

## Tujuan

Dokumen ini menetapkan format standar untuk menulis pesan commit dalam proyek ini. Pesan commit yang konsisten memudahkan pelacakan perubahan, meningkatkan kolaborasi tim, dan mendukung proses review yang efisien, sejalan dengan template Pull Request kami.

## Mengapa Mengikuti Konvensi Commit?

-   **Kejelasan**: Pesan commit yang terstruktur menjelaskan dengan jelas apa yang diubah dan mengapa.
-   **Pelacakan**: Menautkan commit ke isu membantu menghubungkan perubahan dengan tugas atau masalah tertentu.
-   **Otomatisasi**: Format standar memungkinkan pembuatan _changelog_ otomatis atau penutupan isu secara otomatis (misalnya, dengan `Fixes #123`).
-   **Konsistensi**: Memastikan semua kontributor menggunakan format yang sama, mendukung alur kerja yang rapi seperti pada template Pull Request.

## Format Pesan Commit

Setiap pesan commit harus mengikuti struktur berikut:

```
[tipe](lingkup): Deskripsi singkat (maksimal 50 karakter)

[Penjelasan rinci opsional. Jelaskan *mengapa* dan *bagaimana* perubahan dilakukan. Batasi setiap baris hingga 72 karakter.]

[Kaki opsional: Referensi isu atau PR, misalnya, `Fixes #123`]
```

### Komponen

1. **Tipe**: Menunjukkan jenis perubahan, sesuai dengan "Jenis Perubahan" di template Pull Request:
    - `feat`: Fitur baru (sesuai dengan "Fitur Baru").
    - `fix`: Perbaikan bug (sesuai dengan "Perbaikan Bug").
    - `refactor`: Perubahan kode tanpa mengubah perilaku (sesuai dengan "Refactor").
    - `docs`: Pembaruan dokumentasi (sesuai dengan "Dokumentasi").
    - `test`: Penambahan atau perubahan tes.
    - `chore`: Tugas rutin, seperti pembaruan dependensi.
    - `style`: Perubahan gaya atau format (misalnya, ESLint, Prettier).
    - `perf`: Peningkatan performa.
2. **Lingkup** (opsional): Menunjukkan modul atau area yang diubah (misalnya, `portfolio`, `ui`, `api`).
3. **Deskripsi Singkat**: Ringkasan perubahan dalam 50 karakter atau kurang.
4. **Penjelasan Rinci** (opsional): Konteks atau alasan perubahan, mendukung "Cara Kerja Perubahan" di PR.
5. **Kaki** (opsional): Referensi isu, seperti `Fixes #123`, selaras dengan "Tautan Terkait" di template PR.

### Contoh

1. Fitur baru untuk template portofolio:

    ```
    feat(portfolio): Tambah template portofolio baru

    Menambahkan komponen PortfolioTemplate di src/templates/portfolio.js
    dengan desain responsif menggunakan Tailwind CSS.

    Fixes #123
    ```

2. Perbaikan bug pada UI:

    ```
    fix(ui): Perbaiki tombol tidak sejajar di layar mobile

    Menyesuaikan CSS di button.css untuk layar < 768px.
    ```

3. Pembaruan dokumentasi:

    ```
    docs(readme): Perbarui panduan instalasi

    Menambahkan langkah pemecahan masalah untuk Node.js versi 16.
    ```

## Praktik Terbaik

-   **Jaga Kekonsistenan**: Gunakan tipe yang sesuai dengan "Jenis Perubahan" di template Pull Request untuk sinkronisasi.
-   **Tulis Secara Imperatif**: Gunakan kalimat perintah, misalnya, "Tambah fitur" bukan "Menambahkan fitur".
-   **Satu Perubahan per Commit**: Setiap commit harus mencerminkan satu perubahan logis, memudahkan penulisan deskripsi PR.
-   **Referensi Isu**: Sertakan `Fixes #123` atau `Terkait #123` untuk menghubungkan dengan isu, sesuai dengan "Tautan Terkait" di PR.
-   **Hindari Pesan Umum**: Pesan seperti "perbaikan" atau "update" tidak informatif.
-   **Periksa ESLint**: Pastikan kode bebas dari kesalahan ESLint, sesuai dengan checklist PR.

## Memulai

1. Sebelum commit, pastikan perubahan Anda sesuai dengan satu tipe dan lingkup.
2. Gunakan format di atas saat menjalankan `git commit -m "..."`.
3. Lihat contoh commit di riwayat repositori jika perlu panduan tambahan.

---

Terima kasih telah mengikuti konvensi ini untuk menjaga proyek tetap terorganisir dan mudah dikelola!
