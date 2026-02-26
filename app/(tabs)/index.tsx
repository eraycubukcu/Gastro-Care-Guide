import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/colors";
import { TOPICS, CATEGORIES } from "@/data/topics";

const C = Colors.light;

function CategoryCard({ cat, count }: { cat: (typeof CATEGORIES)[0]; count: number }) {
  const iconMap: Record<string, string> = {
    temel: "information-circle",
    bakim: "heart",
    beslenme: "nutrition",
    komplikasyon: "alert-circle",
  };

  return (
    <TouchableOpacity
      style={[styles.catCard, { borderLeftColor: cat.color }]}
      onPress={() => router.push({ pathname: "/egitim" as any, params: { filter: cat.id } })}
      activeOpacity={0.7}
    >
      <View style={[styles.catIconBg, { backgroundColor: cat.color + "20" }]}>
        <Ionicons name={iconMap[cat.id] as any} size={22} color={cat.color} />
      </View>
      <View style={styles.catText}>
        <Text style={styles.catLabel}>{cat.label}</Text>
        <Text style={styles.catCount}>{count} konu</Text>
      </View>
      <Ionicons name="chevron-forward" size={16} color={C.textLight} />
    </TouchableOpacity>
  );
}

function RecentCard({ topic }: { topic: (typeof TOPICS)[0] }) {
  const catColors: Record<string, string> = {
    temel: "#1A7DC4",
    bakim: "#27AE60",
    beslenme: "#E67E22",
    komplikasyon: "#E74C3C",
  };
  return (
    <TouchableOpacity
      style={styles.recentCard}
      onPress={() => router.push({ pathname: "/konu/[id]", params: { id: topic.id } })}
      activeOpacity={0.75}
    >
      <View style={[styles.recentIconBg, { backgroundColor: catColors[topic.category] + "15" }]}>
        <Ionicons name={topic.categoryIcon as any} size={28} color={catColors[topic.category]} />
      </View>
      <View style={styles.recentContent}>
        <Text style={styles.recentTitle} numberOfLines={2}>{topic.shortTitle}</Text>
        <View style={styles.recentMeta}>
          <Ionicons name="time-outline" size={12} color={C.textLight} />
          <Text style={styles.recentReadTime}>{topic.readTime} dk okuma</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const categoryCounts = CATEGORIES.map((cat) => ({
    ...cat,
    count: TOPICS.filter((t) => t.category === cat.id).length,
  }));

  const featuredTopics = TOPICS.slice(0, 4);

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
        style={{ flex: 1 }}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + (Platform.OS === "web" ? 67 : 0),
            paddingBottom: insets.bottom + (Platform.OS === "web" ? 34 : 0) + 90,
          },
        ]}
      >
        <View style={styles.header}>
          <View style={styles.logoRow}>
            <View style={styles.logoBadge}>
              <Ionicons name="medical" size={22} color="#fff" />
            </View>
            <View>
              <Text style={styles.appName}>Gastrostomi</Text>
              <Text style={styles.appSub}>Ebeveyn Rehberi</Text>
            </View>
          </View>
        </View>

        <View style={styles.welcomeCard}>
          <LinearGradient
            colors={[C.primary, "#0D5FA0"]}
            style={styles.welcomeGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.welcomeContent}>
              <Text style={styles.welcomeTitle}>Hoş Geldiniz</Text>
              <Text style={styles.welcomeText}>
                Çocuğunuzun gastrostomi bakımı ve beslenmesine yönelik kapsamlı rehberiniz.
              </Text>
              <TouchableOpacity
                style={styles.welcomeBtn}
                onPress={() => router.push("/egitim" as any)}
                activeOpacity={0.8}
              >
                <Text style={styles.welcomeBtnText}>Eğitime Başla</Text>
                <Ionicons name="arrow-forward" size={16} color={C.primary} />
              </TouchableOpacity>
            </View>
            <View style={styles.welcomeIconArea}>
              <Ionicons name="medkit" size={72} color="rgba(255,255,255,0.18)" />
            </View>
          </LinearGradient>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>16</Text>
            <Text style={styles.statLabel}>Eğitim{"\n"}Videosu</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Konu{"\n"}Kategorisi</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Etkileşimli{"\n"}Bulmaca</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Kategoriler</Text>
        <View style={styles.catList}>
          {categoryCounts.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} count={cat.count} />
          ))}
        </View>

        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Öne Çıkan Konular</Text>
          <TouchableOpacity onPress={() => router.push("/egitim" as any)}>
            <Text style={styles.seeAll}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.recentScroll}
          contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
        >
          {featuredTopics.map((t) => (
            <RecentCard key={t.id} topic={t} />
          ))}
        </ScrollView>

        <View style={styles.puzzlePromo}>
          <LinearGradient
            colors={["#1A7DC4", "#0D5FA0"]}
            style={styles.puzzleGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.puzzleTextArea}>
              <Text style={styles.puzzleTitle}>Bilgini Test Et!</Text>
              <Text style={styles.puzzleDesc}>Gastrostomi bulmacasını çöz ve öğrendiklerini pekiştir.</Text>
              <TouchableOpacity
                style={styles.puzzleBtn}
                onPress={() => router.push("/bulmaca" as any)}
                activeOpacity={0.8}
              >
                <Text style={styles.puzzleBtnText}>Bulmacaya Git</Text>
              </TouchableOpacity>
            </View>
            <Ionicons name="grid" size={64} color="rgba(255,255,255,0.15)" style={styles.puzzleIcon} />
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingHorizontal: 0 },
  header: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 4,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoBadge: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: C.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 20,
    color: C.text,
    lineHeight: 22,
  },
  appSub: {
    fontFamily: "Nunito_400Regular",
    fontSize: 13,
    color: C.textSecondary,
  },
  welcomeCard: {
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 4,
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  welcomeGradient: {
    flexDirection: "row",
    padding: 22,
    minHeight: 140,
  },
  welcomeContent: { flex: 1 },
  welcomeTitle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 22,
    color: "#fff",
    marginBottom: 6,
  },
  welcomeText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
    color: "rgba(255,255,255,0.88)",
    lineHeight: 20,
    marginBottom: 14,
  },
  welcomeBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 6,
    alignSelf: "flex-start",
  },
  welcomeBtnText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 14,
    color: C.primary,
  },
  welcomeIconArea: {
    justifyContent: "center",
    paddingLeft: 10,
  },
  statsRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 16,
    paddingVertical: 18,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  statItem: { flex: 1, alignItems: "center" },
  statNumber: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 26,
    color: C.primary,
  },
  statLabel: {
    fontFamily: "Nunito_400Regular",
    fontSize: 11,
    color: C.textSecondary,
    textAlign: "center",
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    backgroundColor: C.border,
    marginVertical: 4,
  },
  sectionTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 18,
    color: C.text,
    marginTop: 24,
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },
  seeAll: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 14,
    color: C.primary,
  },
  catList: { paddingHorizontal: 20, gap: 10 },
  catCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    borderLeftWidth: 4,
    gap: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  catIconBg: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  catText: { flex: 1 },
  catLabel: {
    fontFamily: "Nunito_700Bold",
    fontSize: 15,
    color: C.text,
  },
  catCount: {
    fontFamily: "Nunito_400Regular",
    fontSize: 12,
    color: C.textSecondary,
    marginTop: 1,
  },
  recentScroll: { marginTop: 0 },
  recentCard: {
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
  },
  recentIconBg: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  recentContent: {},
  recentTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 13,
    color: C.text,
    lineHeight: 18,
    marginBottom: 8,
  },
  recentMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  recentReadTime: {
    fontFamily: "Nunito_400Regular",
    fontSize: 11,
    color: C.textLight,
  },
  puzzlePromo: {
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 4,
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  puzzleGradient: {
    flexDirection: "row",
    padding: 22,
    alignItems: "center",
  },
  puzzleTextArea: { flex: 1 },
  puzzleTitle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 20,
    color: "#fff",
    marginBottom: 6,
  },
  puzzleDesc: {
    fontFamily: "Nunito_400Regular",
    fontSize: 13,
    color: "rgba(255,255,255,0.85)",
    marginBottom: 14,
    lineHeight: 19,
  },
  puzzleBtn: {
    backgroundColor: "rgba(255,255,255,0.22)",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
  },
  puzzleBtnText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 13,
    color: "#fff",
  },
  puzzleIcon: { marginLeft: 8 },
});
