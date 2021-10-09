import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
function MeetingRoom() {
  const [name, setName] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </View>
        <View style={styles.info}></View>
      </View>
    </View>
  );
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
    paddingHorizontal: 150,
  },
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    borderRadius: 10,
  },
});
