const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
const destinations = [
  {
    id: 1,
    name: "Bali",
    description: "Pulau yang dikenal dengan pantai dan budayanya.",
    activities: ["Surfing", "Hiking", "Diving"],
    image: "https://picsum.photos/600/400?random=1", // Gambar Bali
    price: 150,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Labuan Bajo",
    description: "Gerbang menuju Taman Nasional Komodo.",
    activities: ["Island Hopping", "Diving"],
    image: "https://picsum.photos/600/400?random=2", // Gambar Labuan Bajo
    price: 120,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Banda Neira",
    description: "Sejarah yang kaya dan kehidupan laut yang menakjubkan.",
    activities: ["Snorkeling", "Historical Tours"],
    image: "https://picsum.photos/600/400?random=3", // Gambar Banda Neira
    price: 100,
    rating: 4.6,
  },
  {
    id: 4,
    name: "Yogyakarta",
    description: "Pusat budaya Jawa, terkenal dengan warisannya.",
    activities: ["Temple Tours", "Culinary Experiences"],
    image: "https://picsum.photos/600/400?random=4", // Gambar Yogyakarta
    price: 90,
    rating: 4.8,
  },
  {
    id: 5,
    name: "Komodo Island",
    description: "Rumah bagi komodo yang terkenal.",
    activities: ["Wildlife Watching", "Snorkeling"],
    image: "https://picsum.photos/600/400?random=5", // Gambar Komodo Island
    price: 200,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Lombok",
    description: "Dikenal karena pantai dan air terjunnya yang menakjubkan.",
    activities: ["Surfing", "Hiking Mount Rinjani"],
    image: "https://picsum.photos/600/400?random=6", // Gambar Lombok
    price: 110,
    rating: 4.5,
  },
  {
    id: 7,
    name: "Raja Ampat",
    description:
      "Surga bagi penyelam dengan keanekaragaman laut yang luar biasa.",
    activities: ["Diving", "Snorkeling"],
    image: "https://picsum.photos/600/400?random=7", // Gambar Raja Ampat
    price: 250,
    rating: 4.9,
  },
  {
    id: 8,
    name: "Sumba",
    description: "Pulau yang dikenal dengan budaya dan pemandangan alamnya.",
    activities: ["Surfing", "Cultural Tours"],
    image: "https://picsum.photos/600/400?random=8", // Gambar Sumba
    price: 180,
    rating: 4.6,
  },
  {
    id: 9,
    name: "Flores",
    description: "Dikenal dengan danau tiga warna di Kelimutu.",
    activities: ["Hiking", "Cultural Tours"],
    image: "https://picsum.photos/600/400?random=9", // Gambar Flores
    price: 130,
    rating: 4.7,
  },
  {
    id: 10,
    name: "Tanjung Lesung",
    description: "Pantai indah dengan berbagai aktivitas air.",
    activities: ["Beach Activities", "Water Sports"],
    image: "https://picsum.photos/600/400?random=10", // Gambar Tanjung Lesung
    price: 110,
    rating: 4.5,
  },
  {
    id: 11,
    name: "Maluku",
    description: "Dikenal dengan keindahan laut dan budayanya.",
    activities: ["Diving", "Cultural Tours"],
    image: "https://picsum.photos/600/400?random=11", // Gambar Maluku
    price: 140,
    rating: 4.8,
  },
  {
    id: 12,
    name: "Batam",
    description: "Destinasi liburan dekat Singapura.",
    activities: ["Shopping", "Water Sports"],
    image: "https://picsum.photos/600/400?random=12", // Gambar Batam
    price: 70,
    rating: 4.2,
  },
  {
    id: 13,
    name: "Gili Islands",
    description: "Tiga pulau kecil yang indah dan populer.",
    activities: ["Diving", "Snorkeling"],
    image: "https://picsum.photos/600/400?random=13", // Gambar Gili Islands
    price: 160,
    rating: 4.5,
  },
  {
    id: 14,
    name: "Jakarta",
    description: "Ibukota Indonesia dengan banyak tempat menarik.",
    activities: ["Shopping", "Sightseeing"],
    image: "https://picsum.photos/600/400?random=14", // Gambar Jakarta
    price: 80,
    rating: 4.0,
  },
  {
    id: 15,
    name: "Surabaya",
    description: "Kota terbesar kedua di Indonesia.",
    activities: ["Culinary Tours", "Shopping"],
    image: "https://picsum.photos/600/400?random=15", // Gambar Surabaya
    price: 75,
    rating: 4.1,
  },
  {
    id: 16,
    name: "Bandung",
    description: "Kota yang dikenal dengan cuaca sejuk dan pemandangan.",
    activities: ["Shopping", "Nature Tours"],
    image: "https://picsum.photos/600/400?random=16", // Gambar Bandung
    price: 70,
    rating: 4.3,
  },
  {
    id: 17,
    name: "Semarang",
    description: "Kota dengan banyak bangunan bersejarah.",
    activities: ["Cultural Tours", "Shopping"],
    image: "https://picsum.photos/600/400?random=17", // Gambar Semarang
    price: 60,
    rating: 4.2,
  },
  {
    id: 18,
    name: "Baliem Valley",
    description: "Lembah yang indah dengan budaya Papua yang kaya.",
    activities: ["Hiking", "Cultural Tours"],
    image: "https://picsum.photos/600/400?random=18", // Gambar Baliem Valley
    price: 150,
    rating: 4.8,
  },
  {
    id: 19,
    name: "Bunaken",
    description: "Tempat menyelam terbaik di Sulawesi.",
    activities: ["Diving", "Snorkeling"],
    image: "https://picsum.photos/600/400?random=19", // Gambar Bunaken
    price: 130,
    rating: 4.7,
  },
  {
    id: 20,
    name: "Sunda Kelapa",
    description: "Pelabuhan bersejarah di Jakarta.",
    activities: ["Sightseeing", "Cultural Tours"],
    image: "https://picsum.photos/600/400?random=20", // Gambar Sunda Kelapa
    price: 50,
    rating: 4.3,
  },
];

// Rute untuk root
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Travel API! Use /destinations to see the available destinations."
  );
});

// Endpoint untuk mendapatkan semua destinasi
app.get("/destinations", (req, res) => {
  res.json({ destinations });
});
app.get("/destinations/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("Received request for destination ID:", id);

  const foundDestination = destinations.find((dest) => dest.id === id);
  console.log("Found destination:", foundDestination);

  if (foundDestination) {
    res.json({ destination: foundDestination });
  } else {
    res.status(404).json({ message: "Destination not found" });
  }
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
