# Dünya Saatleri – React (Vite) Projesi

Kullanıcının bulunduğu **ülkenin resmi zaman dilimini ve tarihini** açılışta otomatik gösteren; altında **arama çubuğu** ve **tüm ülkelerin listesi** olan, bir ülke seçildiğinde o ülkenin **güncel saatini ve tarihini** gösteren tek sayfalık bir web uygulaması.

> **Tech stack:** React 19 • Vite • React Router v7 • Bootstrap 5 • Reactstrap

---

## Özellikler

- 🕒 **Otomatik konum saati:** Açılışta kullanıcının ülkesine ait resmi saat ve tarih.
- 🔎 **Canlı arama:** Ülke listesinde hızlı filtreleme.
- 🌍 **Tüm ülkeler listesi:** Her ülkede saat/tarih görüntüleme.
- ⚡ **Hızlı geliştirme:** Vite ile hızlı dev sunucusu ve üretim derlemesi.
- 💅 **UI:** Bootstrap 5 + Reactstrap bileşenleri.
- 🧭 **Yönlendirme:** React Router v7 ile temiz rotalar.

---

## Ekran Akışı

1. **Ana ekran:** Üstte “Bulunduğun Ülke – Resmi Saat/Tarih”, altında **arama çubuğu**, onun altında **ülkeler listesi**.  
2. **Detay:** Listeden ülkeye tıklandığında o ülkenin **güncel saat/tarihi** gösterilir.

> Not: Saat/tarih hesabı için tarayıcı `Intl` API’si veya seçtiğiniz bir zaman servisi kullanılabilir.

---

## Kurulum

### Gereksinimler
- Node.js (önerilen: LTS)
- npm veya pnpm/yarn

### Başlangıç

```bash
# Depoyu klonla
git clone <repo-url>
cd <proje-klasoru>

# Bağımlılıkları kur
npm install

# Geliştirme sunucusu (Vite)
npm run dev
