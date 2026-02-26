export interface Topic {
  id: number;
  title: string;
  shortTitle: string;
  category: string;
  categoryIcon: string;
  youtubeId: string;
  thumbnailDescription: string;
  content: string;
  readTime: number;
}

export const CATEGORIES = [
  { id: "temel", label: "Temel Bilgiler", color: "#1A7DC4" },
  { id: "bakim", label: "Bakım", color: "#27AE60" },
  { id: "beslenme", label: "Beslenme", color: "#E67E22" },
  { id: "komplikasyon", label: "Komplikasyonlar", color: "#E74C3C" },
];

export const TOPICS: Topic[] = [
  {
    id: 1,
    title: "Gastrostomi Nedir?",
    shortTitle: "Gastrostomi Nedir?",
    category: "temel",
    categoryIcon: "information-circle",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Gastrostomi tüpünün anatomik gösterimi",
    content: `Gastrostomi, karın duvarından mideye açılan cerrahi bir açıklıktır. Bu açıklık aracılığıyla yerleştirilen tüp, ağız yoluyla yeterli beslenemeyen çocuklara doğrudan mideye besin verilmesini sağlar.

Gastrostomi tüpü, çocuğunuzun ihtiyaç duyduğu kalori, protein, yağ, vitamin ve mineralleri almasına yardımcı olur. Bu tüp sayesinde çocuğunuz büyüme ve gelişim için gerekli tüm besinleri güvenli biçimde alabilir.

Gastrostomi tüpleri genellikle şu durumlarda kullanılır:
• Yutma güçlüğü yaşayan çocuklar
• Nörolojik bozuklukları olan çocuklar
• Kronik hastalıklar nedeniyle yeterli beslenemeyen çocuklar
• Prematüre bebekler
• Yapısal anomalileri olan çocuklar

Tüp, güvenli ve etkili bir yöntemle yerleştirilir. Bakımı düzenli yapıldığında çocuğunuz rahat ve sağlıklı bir yaşam sürdürebilir.`,
    readTime: 3,
  },
  {
    id: 2,
    title: "Çocuğunuzun Gastrostomi Tüpü ile Beslenmeye Neden Gereksinimi Vardır?",
    shortTitle: "Neden Gastrostomi Gerekir?",
    category: "temel",
    categoryIcon: "help-circle",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Gastrostomi beslenme ihtiyacı",
    content: `Çocukların büyüme ve gelişmeleri için ağız yoluyla aldıkları gıdalar ile kalori ihtiyaçlarının karşılanamadığı durumlarda çocuğunuzun diğer beslenme yollarıyla bu kalori açığının kapatılması gerekir.

Çocuğunuzun ağız yoluyla yeterli beslenemediği durum 6 haftadan uzun sürecekse gastrostomi tüpü ile beslenme yolu tercih edilir.

Gastrostomi tüpü şu durumlarda önerilir:
• Ağız ve yutma problemleri
• Solunum sistemi hastalıkları
• Nörolojik gelişim geriliği
• Kalp hastalıkları
• Onkolojik tedaviler sırasında
• Yeterli büyüme-gelişmenin sağlanamadığı durumlar

Gastrostomi tüpü çocuğunuzun sağlıklı büyümesi için güvenli ve etkili bir çözümdür. Düzenli bakım ve doğru beslenme programıyla çocuğunuz normal gelişimini sürdürebilir.`,
    readTime: 4,
  },
  {
    id: 3,
    title: "Gastrostomi Tüpü Nasıl Yerleştirilir?",
    shortTitle: "Tüp Yerleştirme",
    category: "temel",
    categoryIcon: "medkit",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Gastrostomi tüpü yerleştirme prosedürü",
    content: `Gastrostomi tüpü yerleştirme işlemi genellikle iki yöntemle gerçekleştirilir:

PEG (Perkütan Endoskopik Gastrostomi):
Bu yöntemde genel anestezi altında, ağızdan mideye endoskop adı verilen esnek bir kamera yerleştirilir. Karın duvarından kılavuzlu iğne ile tüp yerleştirilir. İşlem yaklaşık 20-30 dakika sürer.

Cerrahi Gastrostomi:
Genel anestezi altında küçük bir karın kesisi yapılarak tüp yerleştirilir. Bu yöntem özellikle anatomik zorunluluk olduğunda tercih edilir.

İşlem sonrası:
• İlk 24-48 saat hastanede gözlem yapılır
• Stoma bölgesi iyileşinceye kadar dikkatli bakım gerekir
• Beslenmeye genellikle 24 saat sonra başlanır
• Taburculuk sonrası düzenli takip randevuları planlanır

Endişelerinizi doktorunuzla paylaşmaktan çekinmeyin.`,
    readTime: 3,
  },
  {
    id: 4,
    title: "Gastrostomi Bölgesi Bakımı",
    shortTitle: "Stoma Bakımı",
    category: "bakim",
    categoryIcon: "heart",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Gastrostomi stoma bakımı",
    content: `Gastrostomi bölgesinin (stoma) düzenli bakımı enfeksiyonu önlemek ve sağlıklı iyileşmeyi desteklemek açısından çok önemlidir.

Günlük Bakım Adımları:
1. Ellerinizi iyice yıkayın
2. Tüpün çevresini steril gazlı bez veya pamukla temizleyin
3. Normal salin solüsyonu veya doktorunuzun önerdiği temizleyiciyi kullanın
4. Bölgeyi dairesel hareketlerle temizleyin
5. Tamamen kurutun
6. Gerekirse yeni gazlı bez koyun

Dikkat Edilmesi Gerekenler:
• Tüpü her gün 360° döndürün (yapışmaları önlemek için)
• Tüpün doğru derinlikte olduğunu kontrol edin
• Cilt kızarıklığı veya akıntıya dikkat edin
• Tüpü gereğinden fazla hareket ettirmeyin

Hemen Doktora Başvurun:
• Kızarıklık, şişlik, ısı artışı
• Kötü kokulu veya pürülan akıntı
• Tüpün çıkması veya yer değiştirmesi
• Ateş`,
    readTime: 5,
  },
  {
    id: 5,
    title: "Gastrostomi Tüpünün Temizlenmesi",
    shortTitle: "Tüp Temizliği",
    category: "bakim",
    categoryIcon: "water",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Gastrostomi tüpü temizlik prosedürü",
    content: `Gastrostomi tüpünün düzenli temizlenmesi tıkanıklıkları önler ve enfeksiyon riskini azaltır.

Her Beslenme Sonrası:
• Tüpü 5-10 mL ılık su ile yıkayın
• Şırıngayı yavaşça iterek suyu verin
• Bu işlem tüp içinde besin artıklarının kalmasını önler

Günlük Temizlik:
• Sabah uyandığında ve gece yatmadan önce yıkayın
• Steril su veya kaynatılıp soğutulmuş su kullanın
• Tüpü çeviren vidaları kontrol edin

Tıkanıklık Durumunda:
1. Sıcak (ılık) su ile yavaş basınçla yıkayın
2. Birkaç dakika bekleyin ve tekrarlayın
3. Kesinlikle iğne veya sert cisim kullanmayın
4. Tıkanıklık geçmezse sağlık ekibinizi arayın

Şırınga Bakımı:
• Şırıngaları her kullanım sonrası yıkayın
• Haftada bir değiştirin
• Steril şırınga kullanımı tercih edilir`,
    readTime: 4,
  },
  {
    id: 6,
    title: "Beslenme Yöntemleri: Genel Bakış",
    shortTitle: "Beslenme Yöntemleri",
    category: "beslenme",
    categoryIcon: "nutrition",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Gastrostomi beslenme yöntemleri",
    content: `Gastrostomi ile beslenme farklı yöntemlerle yapılabilir. Doktorunuz çocuğunuzun ihtiyacına en uygun yöntemi belirleyecektir.

Üç Temel Yöntem:

1. Bolüs Beslenme:
Günde 4-6 kez belirli miktarda besin verilir. Şırınga veya beslenme şişesi kullanılır. Ev yaşamı için pratiktir.

2. Aralıklı Beslenme:
Belirli bir zaman aralığında (örn. 30-60 dakika) beslenme pompası veya şırıngayla sabit hızda verilir. Sindirim için daha kolaydır.

3. Sürekli Beslenme:
Beslenme pompasıyla 16-24 saat boyunca sürekli düşük hızda verilir. Genellikle gece yapılır. Sindirim problemi olan çocuklar için idealdir.

Hangi Yöntem Uygun?
Her çocuğun ihtiyacı farklıdır. Doktorunuz:
• Çocuğunuzun sindirim kapasitesini
• Günlük yaşam düzeninizi
• Tıbbi durumunu değerlendirerek en uygun yöntemi önerir.`,
    readTime: 4,
  },
  {
    id: 7,
    title: "Şırınga ile Bolüs Beslenme",
    shortTitle: "Bolüs Beslenme",
    category: "beslenme",
    categoryIcon: "flask",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Şırınga ile bolüs beslenme tekniği",
    content: `Bolüs beslenme, en yaygın kullanılan gastrostomi beslenme yöntemidir. Şırınga ile yapıldığında pratik ve etkilidir.

Gerekli Malzemeler:
• Uygun boyutta şırınga (genellikle 60 mL)
• Hazır beslenme ürünü veya ev yapımı mama
• Gazlı bez
• Su

Adım Adım Uygulama:
1. Ellerinizi sabunla yıkayın
2. Beslenme ürününü oda sıcaklığına getirin
3. Tüp bağlantı noktasını temizleyin
4. Şırıngayı besin ile doldurun
5. Şırıngayı tüpe bağlayın
6. Besini yavaşça (5-10 dakikada) verin
7. Bitince 10 mL su ile yıkayın

Önemli Noktalar:
• Besini çok hızlı vermeyin (kusma/rahatsızlık)
• Oda sıcaklığında mama kullanın
• Beslenme sırasında çocuğunuzu oturur pozisyonda tutun
• Beslenme sonrası 30 dakika dik tutun`,
    readTime: 5,
  },
  {
    id: 8,
    title: "Pompa ile Sürekli Beslenme",
    shortTitle: "Pompa ile Beslenme",
    category: "beslenme",
    categoryIcon: "pulse",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Beslenme pompası kullanımı",
    content: `Beslenme pompası, besini sabit hızda ve kontrollü biçimde veren elektronik bir cihazdır.

Pompa Kullanımının Avantajları:
• Sabit hız ile rahatsızlık riski azalır
• Reflü ve kusma daha az görülür
• Gece beslenme için idealdir
• Uzun süre hassas kontrol sağlar

Pompa Kullanımı:
1. Beslenme setini hazırlayın ve pompaya takın
2. Hazneye beslenme ürününü doldurun
3. Seti tüpe bağlamadan önce havasını alın
4. Doktorun belirlediği hızı ayarlayın (mL/saat)
5. Beslenmeyi başlatın
6. Bitince 10 mL su ile yıkayın

Pompa Alarmları:
• Tıkanıklık alarmı: Seti ve tüpü kontrol edin
• Boş alarm: Hazneyi doldurun
• Pil alarmı: Şarj edin veya pil değiştirin

Temizlik:
• Her kullanım sonrası seti yıkayın
• Seti günde bir kez değiştirin
• Pompayı ıslak bezle silin`,
    readTime: 5,
  },
  {
    id: 9,
    title: "Aralıklı Beslenme Yöntemi",
    shortTitle: "Aralıklı Beslenme",
    category: "beslenme",
    categoryIcon: "time",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Aralıklı beslenme tekniği",
    content: `Aralıklı beslenme yönteminde besin, belirli bir süre zarfında (genellikle 20-60 dakika) düzenli aralıklarla verilir.

Bu Yöntemin Özellikleri:
• Günde 4-8 kez uygulanır
• Her seferinde belirli miktarda besin verilir
• Şırınga veya yerçekimiyle (gravity) yapılır
• Sindirim sistemine nazik bir yöntemdir

Yerçekimi Yöntemi (Gravity):
1. Şırıngayı ters çevirerek tüpe bağlayın
2. Besini şırıngaya doldurun
3. Besinin kendi ağırlığıyla yavaşça akmasına izin verin
4. Akış hızını şırıngayı kaldırarak ayarlayın

Pompa ile Aralıklı Beslenme:
1. Pompayu belirli mL/saat hızına ayarlayın
2. Beslenme süresini programlayın (örn. 30 dakika)
3. Set ederek beslenmeyi başlatın

İpuçları:
• Beslenme saatlerini düzenli tutun
• Beslenme sırasında aktiviteyi sınırlayın
• Her beslenmeden önce mide içeriğini kontrol edin
• Günlük beslenme miktarını kaydedin`,
    readTime: 4,
  },
  {
    id: 10,
    title: "Mide Tüpü Tıkanıklığı",
    shortTitle: "Tıkanıklık Yönetimi",
    category: "komplikasyon",
    categoryIcon: "warning",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Tıkanıklık durumunda yapılacaklar",
    content: `Mide tüpünün tıkanması önlenebilir bir komplikasyondur. Doğru bakımla büyük ölçüde engellenebilir.

Tıkanıklık Belirtileri:
• Tüpe sıvı verememe
• Beslenme pompasında tıkanıklık alarmı
• Tüpten geri akış

Tıkanıklık Önleme:
• Her beslenme sonrası 10 mL su ile yıkayın
• İlaçları iyice eritin veya eziştirin
• Yoğun besinleri seyreltik kullanın
• Tüpü düzenli döndürün

Tıkanıklığı Açma:
1. Ilık su ile yavaş basınçla yıkayın
2. 5 dakika bekleyin ve tekrarlayın
3. Kola (diet değil) kullanılabilir (doktor onayı ile)
4. Pankreatik enzim solüsyonu (doktor önerisi ile)

ASLA yapılmaması gerekenler:
• İğne veya tel kullanmayın
• Aşırı güç uygulamayın
• Tel enjektör kullanmayın

Tıkanıklık 2-3 denemede açılmazsa sağlık ekibinizle iletişime geçin.`,
    readTime: 4,
  },
  {
    id: 11,
    title: "Olası Komplikasyonlar",
    shortTitle: "Komplikasyonlar",
    category: "komplikasyon",
    categoryIcon: "alert-circle",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Gastrostomi komplikasyonları",
    content: `Gastrostomi komplikasyonlarının büyük çoğunluğu erken fark edildiğinde kolayca yönetilebilir.

Erken Komplikasyonlar (İlk 1-4 Hafta):
• Stoma bölgesinde enfeksiyon
• Cilt tahrişi
• Tüp yerinden çıkması
• Mide içeriğinin stoma çevresine sızması

Geç Komplikasyonlar:
• Granülom (fazla büyüyen doku)
• Cilt çökmesi veya genişlemesi
• Tüp kırılması veya bozulması
• Büf düğmesinin ilerlemesi

Günlük Kontrol Listesi:
□ Stoma bölgesi temiz ve kuru mu?
□ Kızarıklık, şişlik, ısı artışı var mı?
□ Anormal akıntı var mı?
□ Tüp doğru derinlikte mi?
□ Çocuk rahatsız görünüyor mu?

Acil Durumlar:
Şu belirtilerde hemen tıbbi yardım alın:
• Yüksek ateş (38.5°C üzeri)
• Karın ağrısı veya şişliği
• Tüpün tamamen çıkması
• Kanlı akıntı`,
    readTime: 5,
  },
  {
    id: 12,
    title: "Cilt Bakımı ve Granülom Yönetimi",
    shortTitle: "Cilt Bakımı",
    category: "bakim",
    categoryIcon: "bandage",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Stoma cilt bakımı",
    content: `Stoma çevresindeki cildin sağlıklı tutulması enfeksiyonu önler ve çocuğunuzun konforunu artırır.

Normal Cilt Görünümü:
• Açık pembe veya normal cilt rengi
• Kuru ve temiz
• Tüpün etrafında minimal boşluk

Cilt Bakımı Ürünleri:
• Hafif sabun ve su (günlük temizlik)
• Salin solüsyonu (stoma temizliği)
• Bariyer krem (cilt tahrişi için)
• Steril gazlı bez

Granülom Nedir?
Stoma çevresinde oluşan küçük, kırmızı, nemli doku parçasıdır. Tehlikeli değildir ancak rahatsızlık verebilir.

Granülom Tedavisi:
• Doktorunuz tuz kristali veya gümüş nitrat uygulayabilir
• Bölgeyi kuru tutmak önemlidir
• Nemli gazlı bez değiştirme sıklığını artırın
• Tüp pozisyonunu kontrol ettirin

Cilt Tahrişi Belirtileri:
• Kızarıklık ve kaşıntı
• Islak veya pul döken cilt
• Ağrı veya hassasiyet

Bu belirtilerde doktorunuza başvurun.`,
    readTime: 4,
  },
  {
    id: 13,
    title: "Enfeksiyon Belirtileri ve Önleme",
    shortTitle: "Enfeksiyon Önleme",
    category: "komplikasyon",
    categoryIcon: "shield-checkmark",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Gastrostomi enfeksiyon önleme",
    content: `Gastrostomi bölgesinde enfeksiyon nadir görülür ancak düzenli bakım ve temizlikle büyük ölçüde önlenebilir.

Enfeksiyon Belirtileri:
• Stoma çevresinde kızarıklık ve şişlik
• Sıcaklık artışı
• Sarı, yeşil veya kötü kokulu akıntı
• Ateş (38°C üzeri)
• Çocuğun huzursuzluğu veya ağlaması

Enfeksiyon Önleme Kuralları:
1. El hijyeni: Her işlem öncesi ve sonrası elleri yıkayın
2. Steril malzeme: Steril gazlı bez ve malzeme kullanın
3. Günlük bakım: Stoma bölgesini her gün temizleyin
4. Kuru tutun: Nemli ortam bakteri üremesini artırır
5. Tüp rotasyonu: Tüpü düzenli döndürün

Banyo ve Yüzme:
• Stoma iyileşince banyo güvenlidir
• Deniz veya havuz için doktorunuza danışın
• Banyodan sonra bölgeyi iyice kurulayın

Beslenme Hijyeni:
• Beslenme ürünlerinin son kullanma tarihini kontrol edin
• Açık beslenme ürünlerini buzdolabında 24 saat saklayın
• Hazneyi her gün temizleyin`,
    readTime: 4,
  },
  {
    id: 14,
    title: "Tüpün Çıkması Durumunda Ne Yapmalı?",
    shortTitle: "Tüp Çıkması",
    category: "komplikasyon",
    categoryIcon: "medical",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Tüp çıkması acil durumu",
    content: `Gastrostomi tüpünün yerinden çıkması endişe verici görünse de sakin kalarak doğru adımları uygulamak önemlidir.

Stoma Kapanması Riski:
Stoma açıklığı tüp çıktıktan sonra hızla kapanabilir:
• İlk 6 ay içinde: 1-2 saat içinde kapanabilir
• Sonrasında: Birkaç saat içinde daralabilir

Hemen Yapılacaklar:
1. Panik yapmayın
2. Stomayi temiz ve nemli tutun
3. Doktorunuzu veya acil servisi hemen arayın
4. Mümkünse steril gazlı bezle örtün

Acil Servise Gitme Zamanı:
• Yedek tüp yoksa veya yerleştiremiyorsanız
• Stoma bölgesi kanıyorsa
• Çocuk ağrı veya rahatsızlık çekiyorsa

Yedek Tüp Evinizde Bulunmalı:
• Doktorunuzdan aynı boy ve tipte yedek tüp isteyin
• Acil durumda nasıl takılacağını öğrenin
• Tüp tipini (Foley, Mic-Key, Peg-J) öğrenin

Eğitim Alın:
Hastaneden taburculuk öncesi tüp değişimini mutlaka öğrenin. Bu konuda hemşireleriniz size yardımcı olacaktır.`,
    readTime: 5,
  },
  {
    id: 15,
    title: "Okul ve Sosyal Hayat",
    shortTitle: "Günlük Yaşam",
    category: "temel",
    categoryIcon: "people",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Gastrostomili çocukların sosyal hayatı",
    content: `Gastrostomi tüpü olan çocuklar normal ve aktif bir sosyal hayat sürdürebilir.

Okul Hayatı:
• Okul hemşiresini veya öğretmeni bilgilendirin
• Beslenme saatlerini okul programına uydurun
• Gerekli malzemeleri okul çantasında bulundurun
• Acil durum planını okul yönetimiyle paylaşın

Sosyal Aktiviteler:
• Spor ve oyun aktivitelerine katılım genellikle mümkündür
• Havuz veya deniz için doktordan onay alın
• Tüpü koruyucu önlemler alın (yapışkanlı bant, koruyucu örtü)

Akranlar ve Açıklama:
• Çocuğunuza yaşına uygun açıklamalar yapın
• Arkadaşlarına basit ve pozitif anlatım teşvik edin
• "Tüpüm bana yemek yememe yardımcı oluyor" gibi

Seyahat:
• Yeterli malzeme hazırlayın (fazladan tüp, şırınga, set)
• Beslenme ürünlerini ulaşabileceğiniz yerlerden temin edin
• Doktorunuzun iletişim bilgilerini ve tıbbi özeti yanınızda bulundurun
• Uçak seyahatinde sıvı kurallarına dikkat edin

Unutmayın: Tüp çocuğunuzun yaşamını kısıtlamaz, destekler!`,
    readTime: 4,
  },
  {
    id: 16,
    title: "Sık Sorulan Sorular",
    shortTitle: "Sık Sorulan Sorular",
    category: "temel",
    categoryIcon: "chatbubbles",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailDescription: "Ebeveynlerin sık sorulan soruları",
    content: `Ebeveynlerin en çok merak ettiği sorular ve yanıtları:

S: Gastrostomi tüpü kalıcı mı?
C: Her çocuğa göre değişir. Bazı çocuklar ağızdan yeterince beslenmeye başladığında tüp çıkarılabilir. Kesin süreyi doktorunuz belirler.

S: Tüp ağrıya neden olur mu?
C: İlk yerleştirme sonrası hafif rahatsızlık olabilir. İyileştikten sonra genellikle ağrı olmaz. Süregelen ağrı doktora bildirilmelidir.

S: Çocuğum yine ağızdan yiyebilir mi?
C: Altta yatan nedene bağlıdır. Ağız motor becerilerini desteklemek için yutma terapisi uygulanabilir. Hedef mümkün olduğunda oral beslenmeye geçiştir.

S: Tüpü ne sıklıkla değiştirmeliyim?
C: Tüp tipine göre değişir. PEG tüpü genellikle 6-12 ayda, düğme tüpü 3-6 ayda değiştirilir.

S: Uyku sırasında tüp zarar görür mü?
C: Tüpü dışarıdan görünmeyecek şekilde sabitlemek mümkündür. Uyku kıyafeti seçiminde dikkatli olun.

S: Kardeşler ve aile tüp hakkında ne bilmeli?
C: Aile üyelerine bakımın temellerini öğretin. Sağlık ekibiniz aile eğitimi konusunda destek sağlayabilir.

Daha fazla sorunuz varsa sağlık ekibinizle paylaşmaktan çekinmeyin!`,
    readTime: 5,
  },
];
