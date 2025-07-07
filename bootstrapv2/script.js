AOS.init({ once: true, duration: 800 });

let count = 0;
const cartButtons = document.querySelectorAll('.btn-cart');
const cartCount   = document.getElementById('cartCount');

cartButtons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    count++;
    cartCount.textContent = count;
    btn.innerHTML = '<i class="bi bi-check-lg me-1"></i>Tersimpan!';
    btn.disabled  = true;
    setTimeout(()=>{ btn.disabled=false; btn.innerHTML='<i class="bi bi-cart-plus me-1"></i>Tambah ke Keranjang'; },2000);
  });
});

const nav = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled', window.scrollY > 50);
});
