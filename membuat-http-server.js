// Membuat HTTP Server

// Mari kita mulai dengan membuat HTTP server menggunakan Hapi framework.

// Silakan pasang package @hapi/hapi dengan mengeksekusi perintah berikut pada Terminal proyek:

//     npm install @hapi/hapi

// Lanjut, buka berkas server.js dan ganti kode yang ada dengan kode dalam membuat server menggunakan Hapi seperti pada latihan sebelumnya.

const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
};

init();

// Anda sudah familier dengan kodenya kan? Silakan simpan perubahan kode pada berkas server.js, lalu jalankan server dengan nodemon melalui perintah npm run start.

// Biarkan nodemon tetap berjalan agar bila terjadi perubahan kode, kita tidak perlu menjalankan ulang server.

// Silakan buka browser dan coba akses url http://localhost:5000. Jika pada browser tampak seperti ini:

// Itu berarti server HTTP sudah terbuat dan berjalan.

// Sampai di sini Anda sudah bisa menghubungkan alamat localhost:5000 (web server) dengan aplikasi client. Silakan pilih “Change URL”.

// Lalu, isi dengan host beserta port dari web server yang Anda buat. Contohnya “localhost:5000”

// Setelah Anda melihat URL dari web server, maka web server dan aplikasi client sudah terhubung.

// Meskipun sudah terhubung, tapi halaman masih menampilkan “Error displaying notes! Make sure you have done with the back-end or correct url.” Hal itu wajar karena kita belum melakukan apa pun terhadap web server yang kita buat.

// Jika Anda menggunakan ESLint, ada satu hal yang perlu diperhatikan. Bila ada warning atau error yang diberikan oleh ESLint namun hal itu tidak Anda setujui atau ingin Anda hiraukan, maka Anda bisa menonaktifkan warning atau eror tersebut.

// Contohnya, bila Anda menggunakan code style AirBnB, maka penggunaan console akan dianggap warning.

// Anda bisa menonaktifkan aturan no-console pada berkas .eslintrc.json dengan menambahkan properti no-console dengan nilai off pada rules.

    .eslintrc.json

    {
        "env": {
            "commonjs": true,
            "es2021": true,
            "node": true
        },
        "extends": [
            "airbnb-base"
        ],
        "parserOptions": {
            "ecmaVersion": 12
        },
        "rules": {
            "no-console": "off"
        }
    }

// Dengan begitu, warning dari ESLint akan hilang untuk penggunaan console.