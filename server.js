const hotelRouter = require("./hotel");

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.use("/hotel", hotelRouter);

const destinations = [
  {
    id: 1,
    name: "Bali",
    description: "Pulau yang dikenal dengan pantai dan budayanya.",
    activities: ["Surfing", "Hiking", "Diving"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Pura_Ulun_Danu_Bratan%2C_2022.jpg/576px-Pura_Ulun_Danu_Bratan%2C_2022.jpg", // Gambar Bali
    price: 150,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Labuan Bajo",
    description: "Gerbang menuju Taman Nasional Komodo.",
    activities: ["Island Hopping", "Diving"],
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ_6o2tC9D6h3Vg4XZMPZ5Uvc_DEk9sQC9sKhholVBaXIxDCriTuMvGFgiFx-sLbxXrDHHqI1wo3TtEryB-br6QaXW1E_nQB_37EuEZaA", // Gambar Labuan Bajo
    price: 120,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Banda Neira",
    description: "Sejarah yang kaya dan kehidupan laut yang menakjubkan.",
    activities: ["Snorkeling", "Historical Tours"],
    image:
      "https://mengenalindonesia.com/wp-content/uploads/2023/02/Banda-Neira-Uang-Seribu.webp", // Gambar Banda Neira
    price: 100,
    rating: 4.6,
  },
  {
    id: 4,
    name: "Yogyakarta",
    description: "Pusat budaya Jawa, terkenal dengan warisannya.",
    activities: ["Temple Tours", "Culinary Experiences"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg/576px-Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg", // Gambar Yogyakarta
    price: 90,
    rating: 4.8,
  },
  {
    id: 5,
    name: "Komodo Island",
    description: "Rumah bagi komodo yang terkenal.",
    activities: ["Wildlife Watching", "Snorkeling"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Komodo_Island_north_aerial.jpg/520px-Komodo_Island_north_aerial.jpg", // Gambar Komodo Island
    price: 200,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Lombok",
    description: "Dikenal karena pantai dan air terjunnya yang menakjubkan.",
    activities: ["Surfing", "Hiking Mount Rinjani"],
    image:
      "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/bali-nusa-tenggara/west-nusa-tenggara/lombok/lombok1.jpg", // Gambar Lombok
    price: 110,
    rating: 4.5,
  },
  {
    id: 7,
    name: "Raja Ampat",
    description:
      "Surga bagi penyelam dengan keanekaragaman laut yang luar biasa.",
    activities: ["Diving", "Snorkeling"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Raja_Ampat_Islands_-_journal.pbio.1001457.g001.png", // Gambar Raja Ampat
    price: 250,
    rating: 4.9,
  },
  {
    id: 8,
    name: "Sumba",
    description: "Pulau yang dikenal dengan budaya dan pemandangan alamnya.",
    activities: ["Surfing", "Cultural Tours"],
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTtTfWWzN61AUQKM0FopTy1aooG3fZlBxZO1I8xKik6bSt3Sb-_SvScJuHiwW2GatFzg_G8vdM46eaW_hlNs_iK25LvHxO3QYcIsAKPtA", // Gambar Sumba
    price: 180,
    rating: 4.6,
  },
  {
    id: 9,
    name: "Flores",
    description: "Dikenal dengan danau tiga warna di Kelimutu.",
    activities: ["Hiking", "Cultural Tours"],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPcqO7MtsqXHkuLS8lvZ6G7DewSQKcIY29qB84r=w1080-h624-n-k-no", // Gambar Flores
    price: 130,
    rating: 4.7,
  },
  {
    id: 10,
    name: "Tanjung Lesung",
    description: "Pantai indah dengan berbagai aktivitas air.",
    activities: ["Beach Activities", "Water Sports"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Tanjung_Lesung_in_the_Morning.jpg/1920px-Tanjung_Lesung_in_the_Morning.jpg", // Gambar Tanjung Lesung
    price: 110,
    rating: 4.5,
  },
  {
    id: 11,
    name: "Maluku",
    description: "Dikenal dengan keindahan laut dan budayanya.",
    activities: ["Diving", "Cultural Tours"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Bukit_Desa_Kaibobo.jpg/576px-Bukit_Desa_Kaibobo.jpg", // Gambar Maluku
    price: 140,
    rating: 4.8,
  },
  {
    id: 12,
    name: "Sulawesi Islands",
    description: "Pulau-pulau terluas di Indonesia.",
    activities: ["Hiking", "Cultural tours"],
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS35IS9-6g_MMNA4KZ1xJzq8vMq8l4UdNs81FtT6tHCpjXzcj25ufq6T6XNAtOxzDSAOAXZ07dYyf2zTvwTOghhovU3kwJlRtLNX6gGVg", // Gambar Sulawesi
    price: 70,
    rating: 4.2,
  },
  {
    id: 13,
    name: "Gili Islands",
    description: "Tiga pulau kecil yang indah dan populer.",
    activities: ["Diving", "Snorkeling"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Gili_Islands_%26_Gunung_Rinjiani%2C_Lombok%2C_Indonesia.jpg/520px-Gili_Islands_%26_Gunung_Rinjiani%2C_Lombok%2C_Indonesia.jpg", // Gambar Gili Islands
    price: 160,
    rating: 4.5,
  },
  {
    id: 14,
    name: "Jakarta",
    description: "Ibukota Indonesia dengan banyak tempat menarik.",
    activities: ["Shopping", "Sightseeing"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Jakarta_Skyline_Part_2.jpg", // Gambar Jakarta
    price: 80,
    rating: 4.0,
  },
  {
    id: 15,
    name: "Surabaya",
    description: "Kota terbesar kedua di Indonesia.",
    activities: ["Culinary Tours", "Shopping"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Taman_suroboyo.jpg/284px-Taman_suroboyo.jpg", // Gambar Surabaya
    price: 75,
    rating: 4.1,
  },
  {
    id: 16,
    name: "Bandung",
    description: "Kota yang dikenal dengan cuaca sejuk dan pemandangan.",
    activities: ["Shopping", "Nature Tours"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Gedung_Sate_Bandung_Jawa_Barat.jpg/280px-Gedung_Sate_Bandung_Jawa_Barat.jpg", // Gambar Bandung
    price: 70,
    rating: 4.3,
  },
  {
    id: 17,
    name: "Semarang",
    description: "Kota dengan banyak bangunan bersejarah.",
    activities: ["Cultural Tours", "Shopping"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lawang_Sewu_in_Semarang_City.jpg/2560px-Lawang_Sewu_in_Semarang_City.jpg", // Gambar Semarang
    price: 60,
    rating: 4.2,
  },
  {
    id: 18,
    name: "Baliem Valley",
    description: "Lembah yang indah dengan budaya Papua yang kaya.",
    activities: ["Hiking", "Cultural Tours"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/20170903_Papouasie_Baliem_valley_15.jpg/400px-20170903_Papouasie_Baliem_valley_15.jpg", // Gambar Baliem Valley
    price: 150,
    rating: 4.8,
  },
  {
    id: 19,
    name: "Bunaken",
    description: "Tempat menyelam terbaik di Sulawesi.",
    activities: ["Diving", "Snorkeling"],
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPZHByBQ6uqqh8eke5rkTx4f36Goehz1eJBRvhb=w1080-h624-n-k-no", // Gambar Bunaken
    price: 130,
    rating: 4.7,
  },
  {
    id: 20,
    name: "Sunda Kelapa",
    description: "Pelabuhan bersejarah di Jakarta.",
    activities: ["Sightseeing", "Cultural Tours"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Pinisi_Sunda_Kelapa.jpg/560px-Pinisi_Sunda_Kelapa.jpg", // Gambar Sunda Kelapa
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
