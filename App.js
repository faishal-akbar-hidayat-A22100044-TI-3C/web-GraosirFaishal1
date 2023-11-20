// Data produk
const products = [
    { id: 1, name: 'Beras', price: 15000 },
    { id: 2, name: 'Minyak Goreng', price: 20000 },
    { id: 3, name: 'Gula', price: 12000 },
    { id: 4, name: 'Garam', price: 13000 },
    { id: 3, name: 'mie instan', price: 2000 },
    // Tambahkan produk lainnya
];

// Variabel global untuk menyimpan item keranjang
let cartItems = [];

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);

    if (selectedProduct) {
        cartItems.push(selectedProduct);
        updateCart();
    }
}

// Fungsi untuk mengupdate tampilan keranjang
function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Hapus konten lama
    cartItemsList.innerHTML = '';

    // Render item keranjang
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Rp. ${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    // Hitung total harga
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = `Rp. ${total}`;
}

// Fungsi untuk proses checkout
function checkout() {
    // Logika checkout bisa ditambahkan di sini
    alert('Proses Checkout: Total Pembayaran Rp. ' + calculateTotal());
    // Reset keranjang setelah checkout
    cartItems = [];
    updateCart();
}

// Fungsi untuk menghitung total harga keranjang
function calculateTotal() {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
}
// ... (Kode sebelumnya)

// Fungsi untuk menampilkan hasil checkout
function showCheckoutResult(result) {
    const resultElement = document.getElementById('checkout-result');
    resultElement.textContent = result;
}

// Fungsi untuk proses checkout
function checkout() {
    // Logika checkout bisa ditambahkan di sini

    const total = calculateTotal();
    const checkoutResult = `Proses Checkout: Total Pembayaran Rp. ${total}`;
    
    showCheckoutResult(checkoutResult);

    // Reset keranjang setelah checkout
    cartItems = [];
    updateCart();
}

// ... (Kode setelahnya)


// Event listener untuk memuat produk saat dokumen di-load
document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products');

    // Render produk di halaman
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            
            <h3>${product.name}</h3>
            <p class="price">Rp. ${product.price}</p>
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
        `;
        productsContainer.appendChild(productElement);
    });
});
