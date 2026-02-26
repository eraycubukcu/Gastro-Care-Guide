# Gastrostomi Rehberi - Ebeveyn Eğitim Uygulaması

## Proje Açıklaması
Gastrostomisi olan çocukların bakımına yönelik ebeveynler için mobil eğitim uygulaması. Prof. Dr. Emine EFE danışmanlığında Arş. Gör. Yahya ERGEZEN tarafından doktora tezi kapsamında geliştirilmiştir.

## Mimari

### Frontend (Expo React Native)
- **Framework:** Expo Router (file-based routing)
- **Port:** 8081
- **Fonts:** Nunito (Google Fonts via @expo-google-fonts/nunito)
- **Colors:** Mavi tonlar (#1A7DC4 primary, #D6EEFA background)

### Backend (Express)
- **Port:** 5000
- Statik landing page ve API sunucu

## Ekranlar

### Sekmeler (Tabs)
1. **Ana Sayfa** (`app/(tabs)/index.tsx`) - Hoş geldiniz ekranı, kategoriler, öne çıkan konular
2. **Eğitim** (`app/(tabs)/egitim.tsx`) - 16 eğitim konusu listesi, filtreleme ve arama
3. **Bulmaca** (`app/(tabs)/bulmaca.tsx`) - İnteraktif çapraz bulmaca
4. **Hakkında** (`app/(tabs)/hakkinda.tsx`) - Uygulama ve geliştirici bilgileri

### Yığın Ekranlar (Stack)
- **Konu Detay** (`app/konu/[id].tsx`) - Video thumbnail, eğitim içeriği, önceki/sonraki gezinme

## Veri
- `data/topics.ts` - 16 gastrostomi eğitim konusu (başlık, içerik, kategori, okuma süresi)
- Kategoriler: Temel Bilgiler, Bakım, Beslenme, Komplikasyonlar

## Bulmaca İçeriği
Çapraz bulmaca cevapları:
- Down 1: ARALIKLI
- Down 2: ENTERAL
- Across 1: GASTROSTOMİ
- Across 2: NAZOGASTRİK
- Across 3: PEG
- Across 4: STERİL

## Kurulu Paketler
- expo-linear-gradient, expo-haptics, @expo-google-fonts/nunito
- @tanstack/react-query, react-native-reanimated
- expo-router, expo-glass-effect (liquid glass tabs on iOS 26+)

## Renk Paleti
- Primary: #1A7DC4
- Background gradient: #A8D8F0 → #D6EEFA → #EAF5FD
- Text: #0D3B6E
- Card: #FFFFFF
