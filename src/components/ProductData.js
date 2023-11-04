const ProductData = [
  {
      id: 1,
      name: "iPhone 14 Pro Max",
      description: "Sihirli bir iPhone deneyimi. Hayat kurtarmak için tasarlanan bir güvenlik özelliği. İnovatif 48 MP Ana kamera. Ve gün ışığında 2 kata kadar daha parlak bir ekran. Yasal açıklama dipnotuna bakın, hepsi gücünü olağanüstü bir akıllı telefon çipinden alıyor.",
      price: 70.499,
      features: ["A16 Bionic İşlemci","120 Hz Ekran Yenileme Hızı", "6.7' Ekran Boyutu", "40-60 MP Ana Kamera", "4323 mAh Pil Gücü"],
      image: ["../img/iphonepm-1.jpg", "../img/iphonepm-2.jpg"],
      category: "phone"
  },
  {
      id: 2,
      name: "iPhone 14",
      description: "Karşınızda iPhone 14 ve daha büyük bir seçenek olan iPhone 14 Plus. Hayat kurtarmak için tasarlanan bir güvenlik özelliği. Her zamankinden daha uzun pil ömrü. Ve loş ışıkta daha da muhteşem fotoğraflar.",
      price: 47.999,
      features: ["A15 Bionic İşlemci","60 Hz Ekran Yenileme Hızı", "6.1' Ekran Boyutu", "12 MP Ana Kamera", "3279 mAh Pil Gücü"],
      image: ["../img/iphone14-1.jpg", "../img/iphone14-2.jpg"],
      category: "phone"
  },
  {
      id: 3,
      name: "Samsung Galaxy S23",
      description: "İnce çerçevesi, geniş ve dengeli bir görüntü sunmak için simetrik ve parlatılmış bir çerçeveyle birleşir. Kaplama olarak renksiz kamera yuvası doğrusal kamera sistemini çevreler. O kadar güzel ki…",
      price: 25.999,
      features: ["Qualcomm SM8450 Snapdragon 8 Gen 1","120 Hz Ekran Yenileme Hızı", "6.1' Ekran Boyutu", "50 MP+10 MP+12 MP Kamera Çözünürlüğü", "3700 mAh Pil Gücü"],
      image: ["../img/samsungs23-1.jpeg", "../img/samsungs23-2.jpeg"],
      category: "phone"
  },
  {
      id: 4,
      name: "MacBook Air M2",
      description: "Yeni nesil M2 çiple birlikte yeniden tasarlanan MacBook Air hem inanılmaz ince bir forma sahip hem de tümüyle alüminyumdan üretilen dayanıklı kasasında olağanüstü hız ve güç verimliliği sunuyor. Ultra portatif ve ultra yetenekli bu laptop dilediğiniz yerde çalışmanıza, eğlenmenize ve yaratıcılığınızı göstermenize olanak veriyor.",
      price: 29.999,
      features: ["8 Çekirdek M2 İşlemci","2560 x 1664 Ekran Çözünürlüğü", "13.6' Ekran Boyutu", "8GB Ram-256GB SSD", "1.24 Kg Ağırlık"],
      image: ["../img/macairm2-1.jpeg", "../img/macairm2-2.jpeg"],
      category: "laptop" 
  },
  {
      id: 5,
      name: "MacBook Pro M2",
      description: "Karşınızda Apple’ın en kolay taşınabilen profesyonel laptopu. Yeni M2 çiple şimdi daha da becerikli. Üstelik aynı kompakt tasarıma sahip. 20 saate kadar pil ömrü ve üst düzey performansın sürekliliğini sağlayan aktif soğutma sistemiyle gün boyunca zorlu iş akışlarının üstesinden gelmenizi kolaylaştırıyor.",
      price: 32.999,
      features: ["8 Çekirdek M2 İşlemci","2560 x 1600 Ekran Çözünürlüğü", "13.3' Ekran Boyutu", "8GB Ram-256GB SSD", "1.4 Kg Ağırlık"],
      image: ["../img/macprom2-1.jpeg", "../img/macprom2-2.jpeg"],
      category: "laptop"  
  },
  {
      id: 6,
      name: "iPad 9.Nesil",
      description: "Güçlü. Kullanımı kolay. Çok yönlü. Yapmayı sevdiğiniz her şey için tasarlandı. Çalışın, oyun oynayın, öğrenin, bağlantıda kalın ve çok daha fazlasını yapın. Bu güce sahip olmak artık hiç güç değil.",
      price: 8.999,
      features: ["A13 Bionic İşlemci","2160 x 1620 Ekran Çözünürlüğü", "10.2' Ekran Boyutu", "64GB Hafıza", "487 Gr Kg Ağırlık"],
      image: ["../img/ipad-1.jpeg", "../img/ipad-2.jpeg"],
      category: "tablet"  
  },
  {
      id: 7,
      name: "Asus Zenbook 14",
      description: "Güçlü ve kompakt Zenbook 14 yalnızca 16,9 mm inceliğinde ve 1,39 kg hafif, zarif, tamamen modern ve nefes kesici yeni bir tasarıma sahip. Geniş 16:10 2.5K ekrandan mükemmel görseller yaşayacaksınız2, %100 sRGB renk gamı sunan 400 nit'e kadar renk doğruluğu sağlayan bir ekran.",
      price: 35.999,
      features: ["Intel i7 1260P İşlemci","2880 x 1800 Ekran Çözünürlüğü", "14' Ekran Boyutu", "Intel® Iris Xe Graphics Ekran Kartı", "1.39 Kg Ağırlık"],
      image: ["../img/zenbook-1.jpeg", "../img/zenbook-2.jpeg"],
      category: "laptop"  
  },
  {
      id: 8,
      name: "PHILIPS 58' Android TV",
      description: "Sevdiğiniz içerikler için mükemmel görüntü kalitesi mi arıyorsunuz? Son derece pratik bağlantı seçenekleri ve Philips Ambilight'ın sizi içine çeken etkileyici havasını mı deneyimlemek istiyorsunuz? Sorunsuz bir TV deneyimi istiyorsanız The One tam size göre.",
      price: 22.349,
      features: ["Android İşletim Sistemi","4K Ultra HD", "58' Ekran Boyutu", "4xHDMI Bağlantısı", "Dahili Uydu Alıcı"],
      image: ["../img/philips-1.jpeg", "../img/philips-2.jpeg"],
      category: "television" 
  },
  {
      id: 9,
      name: "SAMSUNG 55' Smart TV",
      description: "İçerik seçimini ve keşfini optimize edin; içerik aramak için daha az zaman harcarken sevdiğiniz filmler, oyunlar ve dizilerle daha fazla vakit geçirin.",
      price: 37.599,
      features: ["Smart TV","4K Ultra HD QLED", "55' Ekran Boyutu", "Motion Xcelerator Turbo+", "Quantum HDR"],
      image: ["../img/samsungtv-1.jpeg", "../img/samsungtv-2.jpeg"],
      category: "television"  
  },
  {
      id: 10,
      name: "APPLE 27' Monitör",
      description: "Büyük ve büyüleyici 27 inç 5K Retina ekran. Ana sahne özellikli 12 MP Ultra Geniş kamera. Uzamsal Ses teknolojisine sahip alti hoparlörlü ses sistemi. Ve stüdyo kalitesinde mikrofonlar, Mac ile uyum içinde. Bir ekrandan çok ötede.",
      price: 71.175,
      features: ["5120 x 2880 Ekran Çözünürlüğü","16:9 Görüntü Formatı", "27' Ekran Boyutu", "Dahili Hoparlör ve Webcam", "6.3 Kg Ağırlık"],
      image: ["../img/apple-1.jpeg", "../img/apple-2.jpeg"],
      category: "monitor" 
  },
  {
      id: 11,
      name: "ASUS 27' Monitor",
      description: "TUF Gaming VG279QL1A, ultra yüksek 165Hz* yenileme hızına sahip 27 inç boyutunda bir Full HD (1920 x 1080) HDR IPS ekran. Oyuncular ve etkileyici oyun deneyimi arayan herkes için tasarlanan bu monitör iddialı özelliklerle donatıldı.",
      price: 7.109,
      features: ["1920 x 1080 Ekran Çözünürlüğü","165 Hz Ekran Yenileme Hızı", "27' Ekran Boyutu", "FreeSync / G-Sync Sync Teknolojisi", "1ms Gecikme"],
      image: ["../img/asus-1.jpeg", "../img/asus-2.jpeg"],
      category: "monitor" 
  },
  {
      id: 12,
      name: "ANKER Soundcore",
      description: "Küçük bir Bluetooth hoparlörünün, müzik zevkinizi karşılayamacağını mı düşünüyorsunuz? Tekrar düşünün.Motion B, 2 adet tam kapsamlı sürücü ve 12W'lık yoğun ses gücü sağlayabilen pasif bir bas radyatörü içerir.",
      price: 820,
      features: ["Taşınabilir Hoparlör","12W Hoparlör Gücü", "Bluetooth Bağlantı", "BassUp Teknolojisi", "12+ Saat Çalma Süresi"],
      image: ["../img/anker-1.jpeg", "../img/anker-2.jpg"],
      category: "speaker"  
  },
]

export default ProductData;