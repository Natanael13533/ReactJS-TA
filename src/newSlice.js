import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    product_name: 'Baju Jamur',
    date: '1 Juli 2024',
    sub_description: 'Baju ini adalah baju yang memiliki motif jamur',
    price: 'Rp.150.000,00',
    image: '/images/baju-jamur.jpg',
    content: 'Baju dengan motif jamur adalah pakaian yang menampilkan desain gambar jamur dalam berbagai bentuk dan ukuran, mulai dari ilustrasi sederhana hingga desain artistik yang detail. Motif ini biasanya menggunakan warna-warna cerah dan kontras, namun ada juga yang menggunakan warna-warna lembut untuk tampilan lebih elegan. Jenis baju dengan motif jamur bisa berupa kaos, kemeja, hoodie, sweater, dan gaun, dengan gaya kasual dan santai yang cocok untuk penggunaan sehari-hari atau acara informal. Baju ini sering dibuat dari bahan katun, polyester, atau campuran keduanya untuk kenyamanan dan daya tahan, memberikan kesan unik dan playful pada penampilan.',
  },
  {
    id: 2,
    product_name: 'Baju Batik',
    date: '30 Agustus 2021',
    sub_description: 'Baju ini adalah baju yang memiliki motif batik',
    price: 'Rp.250.000,00',
    image: '/images/baju-batik.jpg',
    content: 'Baju batik adalah pakaian yang menampilkan desain tradisional khas Indonesia yang dibuat dengan teknik pewarnaan khusus menggunakan malam (wax). Motif batik bervariasi dari yang sederhana hingga yang sangat rumit, sering kali mencerminkan simbolisme budaya dan nilai-nilai tradisional. Motif-motif ini dapat berupa pola geometris, flora, fauna, atau motif-motif lainnya yang kaya akan makna dan sejarah. Baju batik biasanya dibuat dari kain katun atau sutra, memberikan kenyamanan dan kesan elegan. Warna-warna yang digunakan pada batik juga bervariasi, mulai dari warna-warna alami yang lembut hingga warna-warna yang lebih cerah dan mencolok. Baju batik dapat ditemukan dalam berbagai bentuk pakaian seperti kemeja, blus, gaun, rok, dan setelan. Baju ini sering dikenakan pada acara formal dan semi-formal, serta dianggap sebagai simbol identitas dan kebanggaan budaya Indonesia.',
  },
  {
    id: 3,
    product_name: 'Sepatu',
    date: '4 Februari 2019',
    sub_description: 'Ini adalah sebuah sepatu untuk berlari',
    price: 'Rp.1.000.000,00',
    image: '/images/sepatu.jpg',
    content: 'Sepatu lari adalah jenis sepatu yang dirancang khusus untuk aktivitas berlari, menawarkan kombinasi kenyamanan, dukungan, dan performa. Sepatu ini biasanya memiliki sol yang ringan dan fleksibel dengan bantalan yang memadai untuk menyerap benturan saat berlari. Bagian atas sepatu terbuat dari bahan yang dapat bernapas seperti mesh atau knit untuk menjaga kaki tetap sejuk dan kering. Sol luar sepatu lari sering kali memiliki pola tapak yang dirancang untuk memberikan traksi yang baik di berbagai permukaan, baik di jalan raya maupun lintasan. Selain itu, sepatu lari memiliki fitur-fitur tambahan seperti tumit yang diperkuat, dukungan lengkung, dan teknologi penstabil untuk mengurangi risiko cedera dan meningkatkan efisiensi lari. Desain sepatu lari juga bervariasi, tersedia dalam berbagai warna dan gaya untuk memenuhi preferensi estetika serta kebutuhan fungsional pelari.',
  },
];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Add your reducers here if needed
  },
});

export default productSlice.reducer;

