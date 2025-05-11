# Pull Request

## Deskripsi

_Berikan penjelasan singkat tentang tujuan pull request ini, termasuk konteks dan dampak utama dari perubahan yang Anda ajukan._

-   Contoh: "Menambahkan template portofolio baru untuk meningkatkan pengalaman pengguna."
-   Jika terkait dengan isu, tautkan menggunakan format: `Fixes #123`.

## Pratinjau UI

_Jika perubahan melibatkan antarmuka pengguna, sertakan screenshot untuk setiap tampilan yang Anda buat. Ini membantu reviewer memahami hasil visual dengan lebih baik._

-   Unggah screenshot dengan menyeret dan melepaskan gambar ke kolom deskripsi ini, atau gunakan sintaks Markdown: `![Deskripsi](URL-gambar)`.

## Jenis Perubahan

_Centang opsi yang sesuai dengan menandai [x]:_

-   [ ] Perbaikan Bug (mengatasi masalah tanpa mengubah fungsionalitas utama)
-   [ ] Fitur Baru (menambahkan fungsionalitas atau kapabilitas baru)
-   [ ] Refactor (memperbaiki struktur kode tanpa mengubah perilaku)
-   [ ] Dokumentasi (pembaruan atau penambahan dokumentasi)
-   [ ] Lainnya (jelaskan: )

## Cara Kerja Perubahan

_Jelaskan secara rinci bagaimana perubahan ini berfungsi atau apa yang telah diubah. Berikan informasi yang cukup agar reviewer dapat memahami implementasi Anda._

-   Contoh: "Menambahkan template portofolio baru di `src/templates/portfolio.js` untuk memungkinkan pengguna menampilkan proyek mereka."
-   Untuk perubahan UI, pastikan screenshot atau video disertakan di bagian Pratinjau UI.
-   Untuk perubahan API, sertakan contoh _request_ dan _response_ yang relevan.

## Langkah Pengujian

_Panduan langkah demi langkah untuk membantu reviewer menguji perubahan Anda. Pastikan langkah-langkahnya jelas dan mudah diikuti._

1. Clone repositori dan pindah ke branch ini: `git checkout nama-branch`.
2. Instal dependensi dengan perintah: `npm install`.
3. Jalankan aplikasi menggunakan: `npm start`.
4. Akses `http://localhost:3000/yourname` di browser untuk melihat hasilnya.
5. Verifikasi bahwa tidak ada bug atau error, dan pastikan tampilan sesuai dengan pratinjau UI.

## Checklist

_Pastikan semua poin berikut telah dipenuhi sebelum mengajukan PR untuk review. Ini membantu menjaga kualitas kode dan mempercepat proses review._

-   [ ] Kode telah diuji secara lokal dan lulus semua pengujian (`npm test` atau lainnya).
-   [ ] Tidak ada konflik dengan branch utama (`main` atau `develop`).
-   [ ] Kode mematuhi pedoman gaya proyek (misalnya, ESLint, Prettier).
-   [ ] Dokumentasi telah diperbarui jika diperlukan.
-   [ ] Dependensi baru (jika ada) telah dijelaskan dengan alasan yang jelas.
-   [ ] Tidak ada kerentanan keamanan baru (diperiksa dengan alat seperti Dependabot).
-   [ ] Kode bebas dari error atau ketidaksesuaian dengan aturan ESLint.

## Catatan untuk Reviewer

_Bagikan informasi tambahan yang dapat membantu reviewer, seperti area kode yang perlu perhatian khusus atau permintaan feedback tertentu._

-   Contoh: "Mohon tinjau apakah logika di `portfolio.js` sudah optimal dan apakah ada potensi bug yang terlewat."
-   Jika PR cukup besar, sarankan urutan file yang sebaiknya direview terlebih dahulu.
-   Jika ada tenggat waktu, sebutkan dengan sopan: "Saya harap PR ini dapat direview sebelum Jumat untuk mendukung jadwal rilis."

## Tautan Terkait

_Sertakan referensi yang relevan untuk memberikan konteks tambahan bagi reviewer._

-   Isu: `#123`
-   Dokumentasi: [Tautan ke dokumentasi proyek]
-   Desain: [Tautan ke Figma atau dokumen desain]

---

_Kami sangat menghargai waktu dan masukan Anda. Terima kasih atas kontribusi dalam membuat proyek ini lebih baik!_
