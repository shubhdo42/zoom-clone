import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

function StartMeeting({ name, setName, roomId, setRoomId, joinRoom }) {
  return (
    <View>
      <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder="Enter name"
            placeholderTextColor="#767676"
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={roomId}
            placeholder="Enter RoomID"
            placeholderTextColor="#767676"
            onChangeText={(text) => setRoomId(text)}
          ></TextInput>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => joinRoom()}
            style={styles.startMeetingButton}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Start Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default StartMeeting;

const styles = StyleSheet.create({
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 18,
  },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 15,
    backgroundColor: "#0470DC",
    height: 50,
  },
});
