import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
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

function TopicRow({ item, index }: { item: (typeof TOPICS)[0]; index: number }) {
  return (
    <TouchableOpacity
      style={styles.topicRow}
      onPress={() => router.push({ pathname: "/konu/[id]", params: { id: item.id } })}
      activeOpacity={0.72}
    >
      <View style={[styles.topicNumber, { backgroundColor: CAT_BG[item.category] }]}>
        <Text style={[styles.topicNumText, { color: CAT_COLORS[item.category] }]}>
          {String(index + 1).padStart(2, "0")}
        </Text>
      </View>
      <View style={styles.topicMid}>
        <Text style={styles.topicTitle} numberOfLines={2}>{item.shortTitle}</Text>
        <View style={styles.topicMeta}>
          <View style={[styles.catBadge, { backgroundColor: CAT_BG[item.category] }]}>
            <Text style={[styles.catBadgeText, { color: CAT_COLORS[item.category] }]}>
              {CATEGORIES.find((c) => c.id === item.category)?.label}
            </Text>
          </View>
          <View style={styles.timeBadge}>
            <Ionicons name="time-outline" size={11} color={C.textLight} />
            <Text style={styles.timeText}>{item.readTime} dk</Text>
          </View>
        </View>
      </View>
      <View style={styles.topicRight}>
        <View style={[styles.playBtn, { backgroundColor: CAT_COLORS[item.category] + "15" }]}>
          <Ionicons name="play" size={14} color={CAT_COLORS[item.category]} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function EgitimScreen() {
  const insets = useSafeAreaInsets();
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = TOPICS.filter((t) => {
    const matchCat = selectedCat ? t.category === selectedCat : true;
    const matchSearch = search
      ? t.title.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchCat && matchSearch;
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#A8D8F0", "#D6EEFA", "#EAF5FD"]}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.3, y: 1 }}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.listContent,
          {
            paddingTop: insets.top + (Platform.OS === "web" ? 67 : 0) + 8,
            paddingBottom: insets.bottom + (Platform.OS === "web" ? 34 : 0) + 90,
          },
        ]}
        ListHeaderComponent={
          <View>
            <View style={styles.headerRow}>
              <View>
                <Text style={styles.screenTitle}>Eğitim Videoları</Text>
                <Text style={styles.screenSub}>16 konu · Gastrostomi bakım rehberi</Text>
              </View>
              <View style={styles.countBadge}>
                <Text style={styles.countText}>{filtered.length}</Text>
              </View>
            </View>

            <View style={styles.searchBox}>
              <Ionicons name="search" size={18} color={C.textLight} />
              <TextInput
                style={styles.searchInput}
                placeholder="Konu ara..."
                placeholderTextColor={C.textLight}
                value={search}
                onChangeText={setSearch}
              />
              {search.length > 0 && (
                <TouchableOpacity onPress={() => setSearch("")}>
                  <Ionicons name="close-circle" size={18} color={C.textLight} />
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.filterRow}>
              <TouchableOpacity
                style={[styles.filterChip, !selectedCat && styles.filterChipActive]}
                onPress={() => setSelectedCat(null)}
              >
                <Text style={[styles.filterChipText, !selectedCat && styles.filterChipTextActive]}>
                  Tümü
                </Text>
              </TouchableOpacity>
              {CATEGORIES.map((cat) => (
                <TouchableOpacity
                  key={cat.id}
                  style={[
                    styles.filterChip,
                    selectedCat === cat.id && { backgroundColor: cat.color, borderColor: cat.color },
                  ]}
                  onPress={() => setSelectedCat(selectedCat === cat.id ? null : cat.id)}
                >
                  <Text
                    style={[
                      styles.filterChipText,
                      selectedCat === cat.id && { color: "#fff" },
                    ]}
                  >
                    {cat.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {filtered.length === 0 && (
              <View style={styles.emptyState}>
                <Ionicons name="search-outline" size={48} color={C.textLight} />
                <Text style={styles.emptyText}>Sonuç bulunamadı</Text>
              </View>
            )}
          </View>
        }
        renderItem={({ item, index }) => <TopicRow item={item} index={index} />}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContent: { paddingHorizontal: 20 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  screenTitle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 24,
    color: C.text,
  },
  screenSub: {
    fontFamily: "Nunito_400Regular",
    fontSize: 13,
    color: C.textSecondary,
    marginTop: 2,
  },
  countBadge: {
    backgroundColor: C.primary,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  countText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 15,
    color: "#fff",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 12,
    gap: 10,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    fontFamily: "Nunito_400Regular",
    fontSize: 15,
    color: C.text,
  },
  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  filterChip: {
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: C.border,
  },
  filterChipActive: {
    backgroundColor: C.primary,
    borderColor: C.primary,
  },
  filterChipText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 13,
    color: C.textSecondary,
  },
  filterChipTextActive: {
    color: "#fff",
  },
  topicRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    gap: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },
  topicNumber: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  topicNumText: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 16,
  },
  topicMid: { flex: 1 },
  topicTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 14,
    color: C.text,
    lineHeight: 20,
    marginBottom: 6,
  },
  topicMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  catBadge: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  catBadgeText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 11,
  },
  timeBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  timeText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 11,
    color: C.textLight,
  },
  topicRight: {},
  playBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 60,
    gap: 12,
  },
  emptyText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 16,
    color: C.textLight,
  },
});
