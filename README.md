# Project NestJS

## Kenapa Menggunakan MVC

Saya memilih arsitektur Model-View-Controller (MVC) dengan framework NestJS karena memberikan pemisahan tanggung jawab yang jelas antara logika bisnis (Service) dan logika kontrol (Controller). Ini membantu menjaga kode tetap terorganisir, memudahkan pengujian unit, dan meningkatkan skalabilitas serta reusabilitas komponen. Dengan MVC, saya dapat mengembangkan dan mengelola aplikasi dengan lebih efisien, serta mengurangi redundansi kode. Selain itu, NestJS menyediakan dukungan bawaan untuk arsitektur ini, mempercepat proses pengembangan dan meningkatkan produktivitas.

Menggunakan arsitektur MVC dengan NestJS memberikan banyak keuntungan, seperti pemisahan tanggung jawab, skalabilitas, reusabilitas, kemudahan pengujian, dan dukungan framework yang kuat. Semua ini berkontribusi pada pengembangan aplikasi yang lebih baik, lebih terorganisir, dan mudah dikelola.

## Deskripsi

ini adalah Project NestJS dengan 2 Operasi CRUD, dibuat dengan menggunakan NestJS dan MySQL

## Instalasi

1. Clone repositori ini:
   ```sh
   git clone https://github.com/your-repo-url.git
   ```
2. Masuk ke direktori proyek:
   ```sh
   cd nama-direktori-proyek
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Konfigurasikan database Anda di file `.env`:
   ```
   DATABASE_URL="your-database-connection-string"
   ```
5. Jalankan migrasi database dengan Prisma:
   ```sh
   npx prisma migrate dev
   ```
6. Jalankan aplikasi:
   ```sh
   npm run start
   ```
7. Buka di browser:
   ```
   http://localhost:3000
   ```

## Dokumentasi

```
https://documenter.getpostman.com/view/29250153/2sA3rwNEco
```
