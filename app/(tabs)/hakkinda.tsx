import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/colors";

const C = Colors.light;

function InfoRow({ icon, text }: { icon: string; text: string }) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoIconBg}>
        <Ionicons name={icon as any} size={20} color={C.primary} />
      </View>
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
}

export default function HakkindaScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#A8D8F0", "#D6EEFA", "#EAF5FD"]}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.3, y: 1 }}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + (Platform.OS === "web" ? 67 : 0) + 8,
            paddingBottom: insets.bottom + (Platform.OS === "web" ? 34 : 0) + 100,
          },
        ]}
      >
        <Text style={styles.screenTitle}>Hakkında</Text>

        <View style={styles.heroCard}>
          <LinearGradient
            colors={[C.primary, "#0D5FA0"]}
            style={styles.heroGrad}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.heroBadge}>
              <Ionicons name="medical" size={32} color="#fff" />
            </View>
            <Text style={styles.heroTitle}>Gastrostomi Rehberi</Text>
            <Text style={styles.heroSub}>Ebeveyn Eğitim Uygulaması</Text>
          </LinearGradient>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Uygulama Hakkında</Text>
          <Text style={styles.bodyText}>
            Değerli Ebeveynler,{"\n\n"}
            Çocuklarda gastrostomi bakımı ve beslenmesi konusunun kapsamlı bir şekilde ele alındığı bu mobil uygulama{" "}
            <Text style={styles.bold}>Prof. Dr. Emine EFE</Text>'nin danışmanlığında{" "}
            <Text style={styles.bold}>Arş. Gör. Yahya ERGEZEN</Text>'in doktora tezi kapsamında hazırlanmıştır.
          </Text>
          <Text style={[styles.bodyText, { marginTop: 12 }]}>
            Bu mobil uygulama ile gastrostomisi olan çocukların bakımına yönelik ebeveynlerin ihtiyaç duydukları bilgiye erişebilmeleri amaçlanmaktadır.
          </Text>
          <Text style={[styles.bodyText, { marginTop: 12 }]}>
            Geliştirdiğimiz mobil uygulamada gastrostomi bakımı ve beslenmesine yönelik{" "}
            <Text style={styles.bold}>16 eğitim videosu</Text> ve literatüre dayalı eğitim içeriği yer almaktadır. Eğitim içeriği kanıta dayalı rehberler doğrultusunda uzmanlardan görüş alınarak ebeveynlerin kullanabileceği şekilde hazırlanmıştır.
          </Text>
          <Text style={[styles.bodyText, { marginTop: 12 }]}>
            Bu uygulamayı ebeveynlerin kullanımına sunmaktan büyük mutluluk duyarız.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Geliştiriciler</Text>
          <View style={styles.devCard}>
            <View style={styles.devAvatar}>
              <Ionicons name="person" size={22} color="#fff" />
            </View>
            <View style={styles.devInfo}>
              <Text style={styles.devName}>Arş. Gör. Yahya ERGEZEN</Text>
              <Text style={styles.devRole}>Doktora Öğrencisi</Text>
            </View>
          </View>
          <View style={[styles.devCard, { marginTop: 10 }]}>
            <View style={[styles.devAvatar, { backgroundColor: "#27AE60" }]}>
              <Ionicons name="person" size={22} color="#fff" />
            </View>
            <View style={styles.devInfo}>
              <Text style={styles.devName}>Prof. Dr. Emine EFE</Text>
              <Text style={styles.devRole}>Danışman</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Teşekkür</Text>
          <Text style={styles.bodyText}>
            Bu çalışmayı Doktora Tez projesi olarak destekleyen{" "}
            <Text style={styles.bold}>"Koç Üniversitesi Semahat Arsel Hemşirelik Eğitim ve Araştırma Merkezi (SANERC)"</Text>{" "}
            Vehbi Koç Vakfı Hemşirelik Fonu Proje Destekleme Programı birimine teşekkür ederiz.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>İçerik Özellikleri</Text>
          <InfoRow icon="play-circle" text="16 Eğitim Videosu" />
          <InfoRow icon="book" text="Literatüre dayalı içerik" />
          <InfoRow icon="checkmark-circle" text="Uzman görüşüyle doğrulanmış bilgiler" />
          <InfoRow icon="grid" text="Etkileşimli bulmaca" />
          <InfoRow icon="phone-portrait" text="Kolay kullanım için mobil tasarım" />
        </View>

        <View style={styles.versionBadge}>
          <Text style={styles.versionText}>Versiyon 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 20 },
  screenTitle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 26,
    color: C.text,
    marginBottom: 16,
  },
  heroCard: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 4,
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  heroGrad: {
    padding: 28,
    alignItems: "center",
  },
  heroBadge: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  heroTitle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
    marginBottom: 4,
  },
  heroSub: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
    color: "rgba(255,255,255,0.82)",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
  },
  cardTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 17,
    color: C.text,
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  bodyText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
    color: C.text,
    lineHeight: 22,
  },
  bold: {
    fontFamily: "Nunito_700Bold",
  },
  devCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  devAvatar: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: C.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  devInfo: {},
  devName: {
    fontFamily: "Nunito_700Bold",
    fontSize: 15,
    color: C.text,
  },
  devRole: {
    fontFamily: "Nunito_400Regular",
    fontSize: 13,
    color: C.textSecondary,
    marginTop: 1,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: C.border + "60",
  },
  infoIconBg: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: C.accentLight,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 14,
    color: C.text,
    flex: 1,
  },
  versionBadge: {
    alignItems: "center",
    paddingVertical: 12,
  },
  versionText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 13,
    color: C.textLight,
  },
});
