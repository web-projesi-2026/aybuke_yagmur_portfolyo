# Aybüke Yağmur – Kişisel Portfolyo Sitesi

Mor tema ve çizgili kağıt arka planlı kişisel portfolyo sitesi. HTML, CSS ve JavaScript ile geliştirilmiştir.

🌐 **Canlı Site:** [web-projesi-2026.github.io/aybuke_yagmur_portfolyo](https://web-projesi-2026.github.io/aybuke_yagmur_portfolyo/)

---

## 🗂 Dosya Yapısı

```
aybuke_yagmur_portfolyo/
├── auth.html              # Giriş / Kayıt sayfası
├── index.html             # Ana sayfa
├── favicon.svg            # Site ikonu
├── assests/
│   ├── css/
│   │   └── style.css      # Tüm stiller
│   ├── js/
│   │   └── jScript.js     # JavaScript (oturum, menü, dark mode vb.)
│   └── data/
│       └── projects.json  # Proje verileri (JSON)
└── pages/
    ├── about.html         # Hakkımda
    ├── project.html       # Projeler
    └── contact.html       # İletişim
```

---

## ✨ Özellikler

### Kullanıcı Deneyimi
- 🔍 **Arama kutusu** — proje başlığı, açıklama ve etiketlerde anlık arama
- 🗂 **Kategori filtreleme** — Web, JavaScript, CSS kategorilerine göre filtreleme
- ⭐ **Favoriler sistemi** — projeleri favoriye ekle/çıkar
- 🌙 **Dark mode** — localStorage ile tema tercihi kaydedilir
- 📱 **Mobil hamburger menü** — responsive tasarım
- ⬆️ **Yukarı çık butonu** — scroll sonrası görünür

### Veri Yönetimi
- 📄 **JSON veri** — projeler `projects.json` dosyasından dinamik olarak yüklenir
- 💾 **localStorage** — favoriler, tema ve oturum bilgisi kalıcı olarak saklanır

### Kullanıcı Sistemi
- 🔐 **Kayıt ol** — ad, e-posta, şifre ile yeni hesap oluşturma
- 🔑 **Giriş yap** — e-posta ve şifre doğrulama
- 👤 **Oturum yönetimi** — giriş yapılmadan siteye erişilemez
- 🗑 **Kullanıcı silme** — kayıtlı kullanıcılar listelenebilir ve silinebilir

### Form & Doğrulama
- 📬 **İletişim formu** — e-posta regex kontrolü, boş alan uyarısı, başarı mesajı
- ✅ **Form validation** — tüm alanlarda anlık hata mesajları

### Profesyonellik
- 🎨 Caveat + Lora font çifti
- 📐 Çizgili defter arka plan
- 🔖 Favicon
- 📜 Scroll reveal animasyonları
- ⌨️ Typewriter efekti (hero metni)

---

## 🛠 Kullanılan Teknolojiler

| Teknoloji | Kullanım |
|-----------|----------|
| HTML5 | Sayfa yapısı |
| CSS3 | Stil, animasyon, responsive |
| JavaScript (Vanilla) | Etkileşim, veri yönetimi |
| JSON | Proje verileri |
| localStorage | Kullanıcı ve oturum verisi |
| Google Fonts | Caveat, Lora |
| GitHub Pages | Yayınlama |

---

## 🚀 Kurulum

```bash
git clone https://github.com/web-projesi-2026/aybuke_yagmur_portfolyo.git
```

Sonra `auth.html` dosyasını tarayıcıda aç. Kayıt ol veya giriş yap — site açılır.

---

© 2026 Aybüke Yağmur
