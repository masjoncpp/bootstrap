AOS.init({
    duration: 1000, // Durasi animasi dalam milidetik
    once: true,     // Animasi hanya terjadi sekali
});

// Mengambil elemen navbar dan tombol back-to-top dari HTML
const navbar = document.querySelector('.navbar');
const backToTopBtn = document.getElementById('backToTopBtn');

// Menambahkan event listener saat window di-scroll
window.addEventListener('scroll', () => {
    // Fitur 1: Navbar Dinamis
    // Jika user scroll lebih dari 50px ke bawah
    if (window.scrollY > 50) {
        // Tambahkan class 'scrolled' ke navbar
        navbar.classList.add('scrolled');
    } else {
        // Hapus class 'scrolled' dari navbar
        navbar.classList.remove('scrolled');
    }

    // Fitur 2: Tombol Back to Top
    // Jika user scroll lebih dari 300px ke bawah
    if (window.scrollY > 300) {
        // Tampilkan tombol dengan menambahkan class 'show'
        backToTopBtn.classList.add('show');
    } else {
        // Sembunyikan tombol dengan menghapus class 'show'
        backToTopBtn.classList.remove('show');
    }
});

// Fitur 3: Fungsi Smooth Scroll saat tombol di-klik
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Mencegah link default
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Efek scroll halus
    });
});