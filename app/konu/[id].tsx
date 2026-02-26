import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Linking,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/colors";
import { TOPICS, CATEGORIES } from "@/data/topics";

const C = Colors.light;

const CAT_COLORS: Record<string, string> = {
  temel: "#1A7DC4",
  bakim: "#27AE60",
  beslenme: "#E67E22",
  komplikasyon: "#E74C3C",
};

const CAT_BG: Record<string, string> = {
  temel: "#E3F2FD",
  bakim: "#E8F5E9",
  beslenme: "#FFF3E0",
  komplikasyon: "#FFEBEE",
};

export default function KonuDetailScreen() {
  const { id } = useLocalSearchParams();
  const insets = useSafeAreaInsets();

  const topic = TOPICS.find((t) => String(t.id) === String(id));

  if (!topic) {
    return (
      <View style={styles.notFound}>
        <Ionicons name="alert-circle-outline" size={48} color={C.textLight} />
        <Text style={styles.notFoundText}>Konu bulunamadı</Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>Geri Dön</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const cat = CATEGORIES.find((c) => c.id === topic.category);
  const catColor = CAT_COLORS[topic.category];
  const catBg = CAT_BG[topic.category];

  const topicIndex = TOPICS.findIndex((t) => t.id === topic.id);
  const prevTopic = topicIndex > 0 ? TOPICS[topicIndex - 1] : null;
  const nextTopic = topicIndex < TOPICS.length - 1 ? TOPICS[topicIndex + 1] : null;

  const paragraphs = topic.content.split("\n\n").filter(Boolean);

  const handleOpenYoutube = () => {
    const url = `https://www.youtube.com/watch?v=${topic.youtubeId}`;
    Linking.openURL(url).catch(() => {});
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#A8D8F0", "#D6EEFA", "#EAF5FD"]}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.3, y: 1 }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          {
            paddingBottom: insets.bottom + (Platform.OS === "web" ? 34 : 0) + 30,
            paddingTop: Platform.OS === "web" ? 67 : 8,
          },
        ]}
      >
        <View style={styles.titleCard}>
          <Text style={styles.titleText}>{topic.title}</Text>
        </View>

        <View style={styles.videoCard}>
          <LinearGradient
            colors={[catColor, catColor + "CC"]}
            style={styles.videoGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.videoBadgeRow}>
              <View style={styles.logoBadge}>
                <Ionicons name="medical" size={16} color="#fff" />
                <Text style={styles.logoText}>G-MUEP</Text>
              </View>
            </View>
            <View style={styles.videoCenter}>
              <Ionicons name="play-circle" size={56} color="rgba(255,255,255,0.9)" />
              <Text style={styles.videoTitle} numberOfLines={3}>{topic.title.toUpperCase()}</Text>
            </View>
            <TouchableOpacity style={styles.watchBtn} onPress={handleOpenYoutube} activeOpacity={0.8}>
              <Ionicons name="logo-youtube" size={18} color="#FF0000" />
              <Text style={styles.watchBtnText}>Videoyu İzle</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={styles.metaRow}>
          <View style={[styles.catChip, { backgroundColor: catBg }]}>
            <Text style={[styles.catChipText, { color: catColor }]}>{cat?.label}</Text>
          </View>
          <View style={styles.readTimeChip}>
            <Ionicons name="time-outline" size={14} color={C.textSecondary} />
            <Text style={styles.readTimeText}>{topic.readTime} dakika okuma</Text>
          </View>
          <View style={styles.numChip}>
            <Text style={styles.numChipText}>{String(topic.id).padStart(2, "0")}</Text>
          </View>
        </View>

        <View style={styles.contentCard}>
          {paragraphs.map((para, idx) => {
            const isBulletBlock = para.includes("•");
            const lines = para.split("\n");

            return (
              <View key={idx} style={idx > 0 ? { marginTop: 14 } : {}}>
                {lines.map((line, li) => {
                  const isBullet = line.trim().startsWith("•");
                  const isHeader = !isBullet && line.endsWith(":") && line.length < 60;
                  return (
                    <View
                      key={li}
                      style={[
                        isBullet && styles.bulletRow,
                        !isBullet && !isHeader && li > 0 ? { marginTop: 4 } : {},
                      ]}
                    >
                      {isBullet && (
                        <View style={[styles.bulletDot, { backgroundColor: catColor }]} />
                      )}
                      <Text
                        style={[
                          isHeader ? styles.paraHeader : isBullet ? styles.bulletText : styles.paraText,
                          isHeader && { color: catColor },
                        ]}
                      >
                        {isBullet ? line.replace("•", "").trim() : line}
                      </Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>

        <View style={styles.navRow}>
          {prevTopic ? (
            <TouchableOpacity
              style={styles.navBtn}
              onPress={() => router.replace({ pathname: "/konu/[id]", params: { id: prevTopic.id } })}
              activeOpacity={0.75}
            >
              <Ionicons name="chevron-back" size={18} color={C.primary} />
              <View style={{ flex: 1 }}>
                <Text style={styles.navLabel}>Önceki</Text>
                <Text style={styles.navTitle} numberOfLines={1}>{prevTopic.shortTitle}</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={{ flex: 1 }} />
          )}
          {nextTopic ? (
            <TouchableOpacity
              style={[styles.navBtn, styles.navBtnRight]}
              onPress={() => router.replace({ pathname: "/konu/[id]", params: { id: nextTopic.id } })}
              activeOpacity={0.75}
            >
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Text style={styles.navLabel}>Sonraki</Text>
                <Text style={styles.navTitle} numberOfLines={1}>{nextTopic.shortTitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={C.primary} />
            </TouchableOpacity>
          ) : (
            <View style={{ flex: 1 }} />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  notFound: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  notFoundText: { fontFamily: "Nunito_600SemiBold", fontSize: 16, color: C.textLight },
  backBtn: {
    backgroundColor: C.primary,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  backBtnText: { fontFamily: "Nunito_700Bold", fontSize: 14, color: "#fff" },
  content: { paddingHorizontal: 20 },
  titleCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
  },
  titleText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 17,
    color: C.text,
    textAlign: "center",
    lineHeight: 24,
  },
  videoCard: {
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  videoGradient: {
    padding: 20,
    minHeight: 180,
    justifyContent: "space-between",
  },
  videoBadgeRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  logoBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  logoText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 13,
    color: "#fff",
    letterSpacing: 1,
  },
  videoCenter: {
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
  },
  videoTitle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
    letterSpacing: 0.5,
    lineHeight: 18,
  },
  watchBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  watchBtnText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 14,
    color: C.text,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
    flexWrap: "wrap",
  },
  catChip: {
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  catChipText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 12,
  },
  readTimeChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  readTimeText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 12,
    color: C.textSecondary,
  },
  numChip: {
    marginLeft: "auto",
    backgroundColor: C.primary,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  numChipText: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 14,
    color: "#fff",
  },
  contentCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
  },
  paraText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 15,
    color: C.text,
    lineHeight: 24,
  },
  paraHeader: {
    fontFamily: "Nunito_700Bold",
    fontSize: 15,
    color: C.primary,
    marginBottom: 6,
    marginTop: 4,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginTop: 4,
  },
  bulletDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginTop: 8,
    flexShrink: 0,
  },
  bulletText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 15,
    color: C.text,
    lineHeight: 24,
    flex: 1,
  },
  navRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  navBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    gap: 8,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  navBtnRight: { justifyContent: "flex-end" },
  navLabel: {
    fontFamily: "Nunito_400Regular",
    fontSize: 11,
    color: C.textSecondary,
  },
  navTitle: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 13,
    color: C.text,
  },
});
