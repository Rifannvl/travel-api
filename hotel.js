// hotel.js
const express = require("express");
const router = express.Router();

const hotels = [
  {
    id: 1,
    name: "Hotel Bali",
    destinationId: 1,
    price: 150,
    rating: 4.5,
    description: "Hotel mewah dengan pemandangan pantai.",
    image: "https://picsum.photos/seed/bali/400/300",
  },
  {
    id: 2,
    name: "Hotel Labuan Bajo",
    destinationId: 2,
    price: 120,
    rating: 4.7,
    description: "Hotel dengan akses mudah ke taman nasional.",
    image: "https://picsum.photos/seed/labuan-bajo/400/300",
  },
  {
    id: 3,
    name: "Hotel Yogyakarta",
    destinationId: 4,
    price: 90,
    rating: 4.8,
    description: "Penginapan nyaman dekat dengan candi.",
    image: "https://picsum.photos/seed/yogyakarta/400/300",
  },
  {
    id: 4,
    name: "Hotel Bandung",
    destinationId: 16,
    price: 100,
    rating: 4.6,
    description: "Penginapan dengan pemandangan yang indah.",
    image: "https://picsum.photos/seed/bandung/400/300",
  },
  {
    id: 5,
    name: "Hotel Surabaya",
    destinationId: 15,
    price: 80,
    rating: 4.4,
    description: "Penginapan dengan fasilitas lengkap.",
    image: "https://picsum.photos/seed/surabaya/400/300",
  },
  {
    id: 6,
    name: "Hotel Sampan",
    destinationId: 1,
    price: 130,
    rating: 4.5,
    description: "Hotel unik dengan konsep perahu.",
    image: "https://picsum.photos/seed/sampan/400/300",
  },
  {
    id: 7,
    name: "Hotel Komodo",
    destinationId: 2,
    price: 140,
    rating: 4.6,
    description: "Hotel dekat dengan Pulau Komodo.",
    image: "https://picsum.photos/seed/komodo/400/300",
  },
  {
    id: 8,
    name: "Hotel Raja Ampat",
    destinationId: 7,
    price: 200,
    rating: 4.9,
    description: "Hotel mewah di surga bawah laut.",
    image: "https://picsum.photos/seed/raja-ampat/400/300",
  },
  {
    id: 9,
    name: "Hotel Lombok",
    destinationId: 6,
    price: 110,
    rating: 4.5,
    description: "Hotel dengan akses ke pantai yang indah.",
    image: "https://picsum.photos/seed/lombok/400/300",
  },
  {
    id: 10,
    name: "Hotel Sumba",
    destinationId: 8,
    price: 180,
    rating: 4.6,
    description: "Hotel dengan budaya dan pemandangan alam yang kaya.",
    image: "https://picsum.photos/seed/sumba/400/300",
  },
  {
    id: 11,
    name: "Hotel Flores",
    destinationId: 9,
    price: 130,
    rating: 4.7,
    description: "Hotel dekat dengan danau tiga warna.",
    image: "https://picsum.photos/seed/flores/400/300",
  },
  {
    id: 12,
    name: "Hotel Tanjung Lesung",
    destinationId: 10,
    price: 110,
    rating: 4.5,
    description: "Hotel tepi pantai dengan aktivitas air.",
    image: "https://picsum.photos/seed/tanjung-lesung/400/300",
  },
  {
    id: 13,
    name: "Hotel Maluku",
    destinationId: 11,
    price: 140,
    rating: 4.8,
    description: "Hotel dengan keindahan laut yang menakjubkan.",
    image: "https://picsum.photos/seed/maluku/400/300",
  },
  {
    id: 14,
    name: "Hotel Sulawesi",
    destinationId: 12,
    price: 70,
    rating: 4.2,
    description: "Hotel dengan akses ke budaya dan alam.",
    image: "https://picsum.photos/seed/sulawesi/400/300",
  },
  {
    id: 15,
    name: "Hotel Gili Islands",
    destinationId: 13,
    price: 160,
    rating: 4.5,
    description: "Hotel di pulau kecil yang indah.",
    image: "https://picsum.photos/seed/gili/400/300",
  },
  {
    id: 16,
    name: "Hotel Jakarta",
    destinationId: 14,
    price: 80,
    rating: 4.0,
    description: "Hotel di ibukota dengan berbagai tempat menarik.",
    image: "https://picsum.photos/seed/jakarta/400/300",
  },
  {
    id: 17,
    name: "Hotel Semarang",
    destinationId: 17,
    price: 60,
    rating: 4.2,
    description: "Hotel dengan banyak bangunan bersejarah.",
    image: "https://picsum.photos/seed/semarang/400/300",
  },
  {
    id: 18,
    name: "Hotel Baliem Valley",
    destinationId: 18,
    price: 150,
    rating: 4.8,
    description: "Hotel di lembah dengan budaya Papua yang kaya.",
    image: "https://picsum.photos/seed/baliem-valley/400/300",
  },
  {
    id: 19,
    name: "Hotel Bunaken",
    destinationId: 19,
    price: 130,
    rating: 4.7,
    description: "Hotel dekat dengan tempat menyelam terbaik di Sulawesi.",
    image: "https://picsum.photos/seed/bunaken/400/300",
  },
  {
    id: 20,
    name: "Hotel Sunda Kelapa",
    destinationId: 20,
    price: 50,
    rating: 4.3,
    description: "Hotel dekat dengan pelabuhan bersejarah di Jakarta.",
    image: "https://picsum.photos/seed/sunda-kelapa/400/300",
  },
];

// Rute untuk mendapatkan semua hotel
router.get("/", (req, res) => {
  res.json(hotels);
});

// Rute untuk mendapatkan hotel berdasarkan ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const hotel = hotels.find((h) => h.id === id);

  if (hotel) {
    res.json(hotel);
  } else {
    res.status(404).json({ message: "Hotel tidak ditemukan" });
  }
});

// Rute untuk mendapatkan hotel berdasarkan destinasi
router.get("/destination/:destinationId", (req, res) => {
  const destinationId = parseInt(req.params.destinationId);
  const filteredHotels = hotels.filter(
    (h) => h.destinationId === destinationId
  );

  if (filteredHotels.length > 0) {
    res.json(filteredHotels);
  } else {
    res.status(404).json({ message: "Tidak ada hotel untuk destinasi ini" });
  }
});

module.exports = router;
