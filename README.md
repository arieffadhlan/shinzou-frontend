## Kolaborasi Final Project
## Clone Repository
Untuk melakukan clone repository ikuti langkah berikut:
1. Clone repository fhs-management.
```console
git clone https://github.com/arieffadhlan/shinzou-frontend.git
```

2. Install package yang diperlukan dan jalankan aplikasi.
```console
yarn install
yarn dev
```

3. Buat branch baru sesuai nama kalian dan silakan kerjakan jobdesc kalian di branch kalian masing-masing.
```console
// Membuat branch [git branch <nama-branch>]
git branch arief

// Pindah branch [git checkout <nama-branch>]
git checkout arief
```

## Cara Kontribusi
Untuk melakukan Kontribusi ikuti langkah berikut:
1. Buat kodingan sesuai jobdesc yang telah diberikan.
2. Pastikan kodingan **tidak ada eror** dan **tidak mempengaruhi kodingan lain secara fatal**.
3. Menambahkan file dari working directory ke staging index.
```console
git add .

// Menambahkan file tertentu
git add page.jsx 
```

4. Mengecek status dari repository.
```console
git status
```

5. Commit file [Standar commit message](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/).
```console
git commit -m "Pesan Commit anda (misal: feat: slicing homepage UI and add button component)"
```

6. Push ke repository di branch kalian masing-masing.
```console
git push -u origin arief
```

7. Setelah push ke repository, silakan buat pull request di Github.

## Cara mengambil kodingan dari branch main
1. Pindah ke branch main.
```console
git checkout main
```

2. Pull kodingan kodingan terbaru dari branch main repository.
```console
git pull origin main
```

3. Pindah ke branch kalian masing-masing dan pull kodingan dari branch main di local laptop kalian.
```console
git checkout arief
git pull origin main
```