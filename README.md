# 📱 Gastro Care Guide

Gastro Care Guide, gastrostomisi olan çocukların bakımına yönelik ebeveynlerin ihtiyaç duydukları güvenilir ve literatüre dayalı bilgiye kolay erişimini sağlamak amacıyla geliştirilmiş bir mobil uygulamadır.

---

## 🎯 Projenin Amacı

Bu uygulama, ebeveynlerin:

- Gastrostomi tüpü bakımı hakkında doğru bilgiye ulaşmasını  
- Beslenme süreçlerini güvenli şekilde yönetebilmesini  
- Hijyen ve uygulama adımlarını öğrenmesini  
- Eğitim videoları aracılığıyla görsel destek almasını  
- Etkileşimli içeriklerle bilgilerini pekiştirmesini  

amaçlamaktadır.

---

## 🚀 Kullanılan Teknolojiler

- React Native  
- Expo  
- React Navigation (Bottom Tabs)  
- Functional Components & React Hooks  
- FlatList  
- Modal  
- Expo Vector Icons (Ionicons)  

---

## 🎥 Uygulama Tanıtım Videosu

Uygulamanın demo videosunu buradan izleyebilirsiniz:

👉 **[YouTube Demo Linki](https://www.youtube.com/shorts/HiL1aQXj0c4)**

---

## 📂 Uygulama Özellikleri

### 🏠 Ana Sayfa
- Gastrostomi tüpü ile beslenme gereksinimi hakkında bilgilendirici içerik  
- Modern kart tasarımı  
- Sağlık temalı arayüz  

### 🎥 Eğitim Videoları
- 16 adet eğitim videosu  
- Scroll edilebilir liste yapısı  
- Modal içerisinde video gösterimi  

### 🧩 Bulmaca
- Gastrostomi ile ilgili kavramlara yönelik etkileşimli kelime bulmaca  
- Doğru / yanlış kontrol sistemi  
- Anlık görsel geri bildirim  

### ℹ️ Hakkında
- Uygulamanın amacı  
- Literatüre dayalı içerik bilgisi  
- Akademik danışman bilgisi  

---

## 📦 APK Dosyası

Android APK dosyasını indirmek için:

👉 **[APK İndir](https://drive.google.com/drive/folders/1bblcSvKE3UKzETRg4-5oT90ntMzNRJQt?usp=drive_link)**

---

# 🛠 Kurulum ve Çalıştırma

## 1️⃣ Projeyi Klonlama

```bash
git clone https://github.com/eraycubukcu/Gastro-Care-Guide.git
cd Gastro-Care-Guide
npm install
```

---

## 2️⃣ Expo ile Çalıştırma (Geliştirme Modu)

```bash
npx expo start
```

- QR kod ile fiziksel Android cihazda çalıştırabilirsiniz.
- Web preview üzerinden tarayıcıda test edebilirsiniz.
- Android emulator açıkken terminalde **a** tuşuna basarak uygulamayı başlatabilirsiniz.

---

## 3️⃣ Android Studio Emulator ile Çalıştırma

### Gereksinimler

- Android Studio kurulu olmalı  
- Android SDK yüklü olmalı  
- En az bir Android Virtual Device (AVD) oluşturulmuş olmalı  

### Emulator Oluşturma

1. Android Studio’yu açın  
2. Device Manager sekmesine girin  
3. Create Device butonuna tıklayın  
4. Bir cihaz seçin (örneğin Pixel)  
5. Bir sistem imajı indirip kurulumu tamamlayın  
6. Emulator’u başlatın  

### Emulator Üzerinde Çalıştırma

Emulator açıkken proje klasöründe:

```bash
npx expo start
```

Ardından terminalde:

```bash
a
```

tuşuna basın.

Uygulama emulator üzerinde otomatik olarak açılacaktır.

---

## 4️⃣ Android Studio İçinde Native Olarak APK Oluşturma

Android Studio üzerinden imzalı APK oluşturmak için:

1. Önce android klasörü oluşturun:

```bash
npx expo prebuild
```

2. Android Studio ile `android` klasörünü açın  
3. Üst menüden:

```
Build > Generate Signed Bundle / APK
```

4. APK seçin  
5. Keystore oluşturun veya mevcut keystore'u seçin  
6. Build Type olarak **release** seçin  
7. Finish

Oluşan APK yolu:

```
android/app/build/outputs/apk/release/app-release.apk
```

---

## 📸 Ekran Görüntüleri

<img width="480" height="600" alt="hafta2_anasayfa" src="https://github.com/user-attachments/assets/bbc4c8df-ad08-4e07-941d-02b8e8f8d454" />

---

## 👨‍💻 Geliştirici

Eray Çubukçu
