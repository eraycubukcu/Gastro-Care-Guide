import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/colors";
import * as Haptics from "expo-haptics";

const C = Colors.light;

const ROWS = 10;
const COLS = 11;

type CellDef = {
  row: number;
  col: number;
  answer: string;
  wordIds: string[];
  clueNum?: string;
};

const CELL_DEFS: CellDef[] = [
  { row: 0, col: 0, answer: "G", wordIds: ["A1"], clueNum: "A1" },
  { row: 0, col: 1, answer: "A", wordIds: ["A1", "D1"], clueNum: "D1" },
  { row: 0, col: 2, answer: "S", wordIds: ["A1"] },
  { row: 0, col: 3, answer: "T", wordIds: ["A1"] },
  { row: 0, col: 4, answer: "R", wordIds: ["A1"] },
  { row: 0, col: 5, answer: "O", wordIds: ["A1"] },
  { row: 0, col: 6, answer: "S", wordIds: ["A1"] },
  { row: 0, col: 7, answer: "T", wordIds: ["A1"] },
  { row: 0, col: 8, answer: "O", wordIds: ["A1"] },
  { row: 0, col: 9, answer: "M", wordIds: ["A1"] },
  { row: 0, col: 10, answer: "İ", wordIds: ["A1"] },
  { row: 1, col: 1, answer: "R", wordIds: ["D1"] },
  { row: 2, col: 0, answer: "N", wordIds: ["A2"], clueNum: "A2" },
  { row: 2, col: 1, answer: "A", wordIds: ["A2", "D1"] },
  { row: 2, col: 2, answer: "Z", wordIds: ["A2"] },
  { row: 2, col: 3, answer: "O", wordIds: ["A2"] },
  { row: 2, col: 4, answer: "G", wordIds: ["A2"] },
  { row: 2, col: 5, answer: "A", wordIds: ["A2"] },
  { row: 2, col: 6, answer: "S", wordIds: ["A2"] },
  { row: 2, col: 7, answer: "T", wordIds: ["A2"] },
  { row: 2, col: 8, answer: "R", wordIds: ["A2"] },
  { row: 2, col: 9, answer: "İ", wordIds: ["A2"] },
  { row: 2, col: 10, answer: "K", wordIds: ["A2"] },
  { row: 3, col: 1, answer: "L", wordIds: ["D1"] },
  { row: 3, col: 7, answer: "E", wordIds: ["D2"], clueNum: "D2" },
  { row: 4, col: 1, answer: "I", wordIds: ["D1"] },
  { row: 4, col: 7, answer: "N", wordIds: ["D2"] },
  { row: 5, col: 1, answer: "K", wordIds: ["D1"] },
  { row: 5, col: 7, answer: "T", wordIds: ["D2"] },
  { row: 6, col: 1, answer: "L", wordIds: ["D1"] },
  { row: 6, col: 5, answer: "S", wordIds: ["A4"], clueNum: "A4" },
  { row: 6, col: 6, answer: "T", wordIds: ["A4"] },
  { row: 6, col: 7, answer: "E", wordIds: ["A4", "D2"] },
  { row: 6, col: 8, answer: "R", wordIds: ["A4"] },
  { row: 6, col: 9, answer: "İ", wordIds: ["A4"] },
  { row: 6, col: 10, answer: "L", wordIds: ["A4"] },
  { row: 7, col: 1, answer: "I", wordIds: ["D1"] },
  { row: 7, col: 7, answer: "R", wordIds: ["D2"] },
  { row: 8, col: 3, answer: "P", wordIds: ["A3"], clueNum: "A3" },
  { row: 8, col: 4, answer: "E", wordIds: ["A3"] },
  { row: 8, col: 5, answer: "G", wordIds: ["A3"] },
  { row: 8, col: 7, answer: "A", wordIds: ["D2"] },
  { row: 9, col: 7, answer: "L", wordIds: ["D2"] },
];

const CELL_MAP = new Map<string, CellDef>();
CELL_DEFS.forEach((c) => CELL_MAP.set(`${c.row},${c.col}`, c));

const CLUES = {
  down: [
    {
      id: "D1",
      num: "1",
      label: "Beslenme ürününün belirli bir zaman aralığında şırıngayla sabit hızla ve yavaşça verilmesi",
      answer: "ARALIKLI",
    },
    {
      id: "D2",
      num: "2",
      label: "Gastrostomi tüpüyle yapılan beslenme işinin adı",
      answer: "ENTERAL",
    },
  ],
  across: [
    {
      id: "A1",
      num: "1",
      label: "Beslenme amaçlı mideye açılan açıklığın adı",
      answer: "GASTROSTOMİ",
    },
    {
      id: "A2",
      num: "2",
      label: "Burundan mideye kadar uzanan beslenme tüpü",
      answer: "NAZOGASTRİK",
    },
    {
      id: "A3",
      num: "3",
      label: "Genel anestezi altında endoskop kullanılarak tüpü yerleştirme",
      answer: "PEG",
    },
    {
      id: "A4",
      num: "4",
      label: "Mikroplardan arındırılmış olan",
      answer: "STERİL",
    },
  ],
};

const CLUE_NUM_LABELS: Record<string, string> = {
  A1: "1",
  D1: "1↓",
  A2: "2",
  D2: "2↓",
  A4: "4",
  A3: "3",
};

function getWordCells(wordId: string): CellDef[] {
  return CELL_DEFS.filter((c) => c.wordIds.includes(wordId)).sort((a, b) =>
    wordId.startsWith("A") ? a.col - b.col : a.row - b.row
  );
}

export default function BulmacaScreen() {
  const insets = useSafeAreaInsets();
  const [userInput, setUserInput] = useState<Record<string, string>>({});
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const screenWidth = Dimensions.get("window").width;
  const availWidth = screenWidth - 40;
  const cellSize = Math.floor(availWidth / COLS);

  const normalizeInput = (s: string) => s.toUpperCase().replace(/I/g, "İ").replace(/ı/g, "İ");

  const handleCellPress = useCallback(
    (row: number, col: number) => {
      const key = `${row},${col}`;
      const cell = CELL_MAP.get(key);
      if (!cell) return;

      if (Platform.OS !== "web") Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

      if (selectedCell === key && cell.wordIds.length > 1) {
        const otherWord = cell.wordIds.find((w) => w !== selectedWordId) ?? cell.wordIds[0];
        setSelectedWordId(otherWord);
      } else {
        setSelectedCell(key);
        setSelectedWordId(cell.wordIds[0]);
      }
      setTimeout(() => inputRef.current?.focus(), 50);
    },
    [selectedCell, selectedWordId]
  );

  const handleKeyPress = useCallback(
    (key: string) => {
      if (!selectedCell) return;
      const cell = CELL_MAP.get(selectedCell);
      if (!cell || !selectedWordId) return;

      if (key === "BACKSPACE") {
        setUserInput((prev) => {
          const next = { ...prev };
          if (next[selectedCell]) {
            delete next[selectedCell];
          } else {
            const cells = getWordCells(selectedWordId);
            const idx = cells.findIndex((c) => `${c.row},${c.col}` === selectedCell);
            if (idx > 0) {
              const prev_cell = cells[idx - 1];
              setSelectedCell(`${prev_cell.row},${prev_cell.col}`);
              delete next[`${prev_cell.row},${prev_cell.col}`];
            }
          }
          return next;
        });
        return;
      }

      const letter = normalizeInput(key).charAt(0);
      if (!letter.match(/[A-ZÇĞİÖŞÜ]/)) return;

      setUserInput((prev) => ({ ...prev, [selectedCell]: letter }));
      setChecked(false);

      const cells = getWordCells(selectedWordId);
      const idx = cells.findIndex((c) => `${c.row},${c.col}` === selectedCell);
      if (idx < cells.length - 1) {
        const next = cells[idx + 1];
        setSelectedCell(`${next.row},${next.col}`);
      }
    },
    [selectedCell, selectedWordId]
  );

  const handleCheck = () => {
    setChecked(true);
    if (Platform.OS !== "web") Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const wrong: string[] = [];
    CELL_DEFS.forEach((c) => {
      const key = `${c.row},${c.col}`;
      const val = userInput[key] ?? "";
      if (val && val !== c.answer) wrong.push(key);
    });
    if (wrong.length === 0) {
      const filled = CELL_DEFS.filter((c) => userInput[`${c.row},${c.col}`]).length;
      if (filled === CELL_DEFS.length) {
        Alert.alert("Tebrikler!", "Bulmacayı doğru tamamladınız!");
        if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    }
  };

  const handleReveal = () => {
    Alert.alert("Cevapları Göster", "Tüm cevaplar gösterilsin mi?", [
      { text: "Hayır", style: "cancel" },
      {
        text: "Evet",
        onPress: () => {
          const all: Record<string, string> = {};
          CELL_DEFS.forEach((c) => { all[`${c.row},${c.col}`] = c.answer; });
          setUserInput(all);
          setRevealed(true);
          setChecked(true);
        },
      },
    ]);
  };

  const handleReset = () => {
    setUserInput({});
    setRevealed(false);
    setChecked(false);
    setSelectedCell(null);
  };

  const getCellState = (row: number, col: number): "empty" | "correct" | "wrong" | "filled" | "selected" | "highlighted" | "none" => {
    const key = `${row},${col}`;
    const cell = CELL_MAP.get(key);
    if (!cell) return "none";

    if (key === selectedCell) return "selected";
    if (selectedWordId && cell.wordIds.includes(selectedWordId)) return "highlighted";

    const val = userInput[key];
    if (!val) return "empty";
    if (checked) return val === cell.answer ? "correct" : "wrong";
    return "filled";
  };

  const getCellBg = (state: ReturnType<typeof getCellState>): string => {
    switch (state) {
      case "selected": return "#FFF176";
      case "highlighted": return "#E3F2FD";
      case "correct": return "#C8E6C9";
      case "wrong": return "#FFCDD2";
      case "filled": return "#fff";
      case "empty": return "#fff";
      default: return "transparent";
    }
  };

  const renderGrid = () => {
    const rows: React.ReactNode[] = [];
    for (let r = 0; r < ROWS; r++) {
      const cells: React.ReactNode[] = [];
      for (let c = 0; c < COLS; c++) {
        const key = `${r},${c}`;
        const cell = CELL_MAP.get(key);
        const state = getCellState(r, c);
        const val = userInput[key] ?? "";

        if (!cell) {
          cells.push(
            <View key={key} style={[styles.gridCell, { width: cellSize, height: cellSize, backgroundColor: "transparent", borderWidth: 0 }]} />
          );
        } else {
          cells.push(
            <TouchableOpacity
              key={key}
              style={[
                styles.gridCell,
                { width: cellSize, height: cellSize, backgroundColor: getCellBg(state) },
                state === "selected" && styles.cellSelected,
              ]}
              onPress={() => handleCellPress(r, c)}
              activeOpacity={0.7}
            >
              {cell.clueNum && (
                <Text style={styles.cellNum}>{CLUE_NUM_LABELS[cell.clueNum]}</Text>
              )}
              <Text style={[
                styles.cellLetter,
                { fontSize: cellSize * 0.45 },
                state === "correct" && styles.letterCorrect,
                state === "wrong" && styles.letterWrong,
              ]}>
                {val}
              </Text>
            </TouchableOpacity>
          );
        }
      }
      rows.push(
        <View key={r} style={styles.gridRow}>
          {cells}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#A8D8F0", "#D6EEFA", "#EAF5FD"]}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.3, y: 1 }}
      />
      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        autoCorrect={false}
        autoCapitalize="characters"
        keyboardType="default"
        onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key)}
        onChangeText={(text) => {
          if (text.length > 0) {
            handleKeyPress(text[text.length - 1]);
          } else {
            handleKeyPress("BACKSPACE");
          }
        }}
        value=""
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + (Platform.OS === "web" ? 67 : 0) + 8,
            paddingBottom: insets.bottom + (Platform.OS === "web" ? 34 : 0) + 100,
          },
        ]}
      >
        <Text style={styles.screenTitle}>BULMACA</Text>

        <View style={styles.gridCard}>
          <View style={styles.gridContainer}>{renderGrid()}</View>
        </View>

        <View style={styles.btnRow}>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: C.primary }]} onPress={handleCheck}>
            <Ionicons name="checkmark-circle" size={18} color="#fff" />
            <Text style={styles.actionBtnText}>Kontrol Et</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: "#E67E22" }]} onPress={handleReveal}>
            <Ionicons name="eye" size={18} color="#fff" />
            <Text style={styles.actionBtnText}>Cevaplar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: C.textSecondary }]} onPress={handleReset}>
            <Ionicons name="refresh" size={18} color="#fff" />
            <Text style={styles.actionBtnText}>Sıfırla</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.clueSection}>
          <Text style={styles.clueHeader}>
            <Ionicons name="arrow-down" size={16} color={C.text} /> Yukarıdan Aşağıya
          </Text>
          {CLUES.down.map((clue) => (
            <TouchableOpacity
              key={clue.id}
              style={[styles.clueRow, selectedWordId === clue.id && styles.clueRowActive]}
              onPress={() => {
                setSelectedWordId(clue.id);
                const cells = getWordCells(clue.id);
                if (cells.length > 0) setSelectedCell(`${cells[0].row},${cells[0].col}`);
                setTimeout(() => inputRef.current?.focus(), 50);
              }}
            >
              <View style={styles.clueNumBadge}>
                <Text style={styles.clueNumText}>{clue.num}</Text>
              </View>
              <Text style={styles.clueText} numberOfLines={3}>{clue.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.clueSection}>
          <Text style={styles.clueHeader}>
            <Ionicons name="arrow-forward" size={16} color={C.text} /> Soldan Sağa
          </Text>
          {CLUES.across.map((clue) => (
            <TouchableOpacity
              key={clue.id}
              style={[styles.clueRow, selectedWordId === clue.id && styles.clueRowActive]}
              onPress={() => {
                setSelectedWordId(clue.id);
                const cells = getWordCells(clue.id);
                if (cells.length > 0) setSelectedCell(`${cells[0].row},${cells[0].col}`);
                setTimeout(() => inputRef.current?.focus(), 50);
              }}
            >
              <View style={styles.clueNumBadge}>
                <Text style={styles.clueNumText}>{clue.num}</Text>
              </View>
              <Text style={styles.clueText} numberOfLines={3}>{clue.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
    left: -1000,
  },
  scrollContent: { paddingHorizontal: 20 },
  screenTitle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 24,
    color: C.text,
    textAlign: "center",
    marginBottom: 16,
    letterSpacing: 4,
  },
  gridCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignSelf: "center",
    width: "100%",
  },
  gridContainer: { alignItems: "flex-start" },
  gridRow: { flexDirection: "row" },
  gridCell: {
    borderWidth: 1,
    borderColor: "#B0C4DE",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cellSelected: {
    borderColor: C.primary,
    borderWidth: 2,
  },
  cellNum: {
    position: "absolute",
    top: 1,
    left: 2,
    fontSize: 7,
    color: C.textSecondary,
    fontFamily: "Nunito_700Bold",
    lineHeight: 8,
  },
  cellLetter: {
    fontFamily: "Nunito_700Bold",
    color: C.text,
  },
  letterCorrect: { color: "#2E7D32" },
  letterWrong: { color: "#C62828" },
  btnRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
    justifyContent: "center",
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  actionBtnText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 13,
    color: "#fff",
  },
  clueSection: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 14,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  clueHeader: {
    fontFamily: "Nunito_700Bold",
    fontSize: 16,
    color: C.text,
    marginBottom: 12,
  },
  clueRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: C.border + "60",
  },
  clueRowActive: {
    backgroundColor: C.accentLight,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginHorizontal: -8,
  },
  clueNumBadge: {
    width: 26,
    height: 26,
    borderRadius: 8,
    backgroundColor: C.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
    flexShrink: 0,
  },
  clueNumText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 13,
    color: "#fff",
  },
  clueText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 13,
    color: C.text,
    flex: 1,
    lineHeight: 19,
  },
});
