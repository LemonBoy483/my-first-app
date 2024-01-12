import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const TicTac = () => {
  const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);
  const [lastClick, setLastClick] = useState("");
  const [winner, setWinner] = useState("");
  const checkWinner = (Boxes) => {
    if (Boxes[0] === Boxes[1] && Boxes[0] === Boxes[2]) {
      setWinner(boxes[0]);
    } else if (Boxes[3] === Boxes[4] && Boxes[3] === Boxes[5]) {
      setWinner(boxes[3]);
    } else if (Boxes[6] === Boxes[7] && Boxes[6] === Boxes[8]) {
      setWinner(boxes[6]);
    } else if (Boxes[0] === Boxes[4] && Boxes[0] === Boxes[8]) {
      setWinner(boxes[0]);
    } else if (Boxes[2] === Boxes[4] && Boxes[2] === Boxes[6]) {
      setWinner(boxes[2]);
    } else if (Boxes[0] === Boxes[3] && Boxes[0] === Boxes[6]) {
      setWinner(boxes[0]);
    } else if (Boxes[1] === Boxes[4] && Boxes[1] === Boxes[7]) {
      setWinner(boxes[1]);
    } else if (Boxes[2] === Boxes[5] && Boxes[2] === Boxes[8]) {
      setWinner(boxes[2]);
    }
  };
  const onPress = (i) => {
    if (boxes[i] === "") {
      let newValue = lastClick === "X" ? "O" : "X";
      boxes[i] = newValue;
      setBoxes([...boxes]);
      setLastClick(newValue);
      checkWinner(boxes);
    }
  };
  return (
    <View>
      <View>
        {winner && <Text style={styles.winner}>Winner:{winner}</Text>}
      </View>
      <View style={styles.TicTac}>
        {boxes.map((Box, i) => (
          <TouchableOpacity style={styles.waw} onPress={() => onPress(i)}>
            <Text style={styles.Block}>{Box}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TicTac;

const styles = StyleSheet.create({
  TicTac: {
    backgroundColor: "#6E33FF",
    height: 350,
    width: 350,
    borderRadius: 30,
    margin: 20,
    display: "flex",
    flexWrap: "wrap",
  },
  Block: {
    backgroundColor: "#33B0FF",
    height: 100,
    width: 100,
    borderRadius: 30,
    margin: 8,
    fontSize: 75,
  },
  winner: {
    fontSize: 30,
  },
  waw: {
    display: "flex",
    flexDirection: "center",
    alignItems: "center",
  },
});
