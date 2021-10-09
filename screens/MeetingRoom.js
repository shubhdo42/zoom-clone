import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  CameraRoll,
  Alert,
  SafeAreaView,
} from "react-native";
import StartMeeting from "../components/StartMeeting";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const menuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: "#efefef",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop Video",
  },
  {
    id: 3,
    name: "upload",
    title: "Share Content",
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
  },
];

let socket;
function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState();
  const [startCamera, setStartCamera] = useState(false);
  const _startCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("access denied");
    }
  };
  const joinRoom = () => {
    _startCamera();
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    console.log("ooiii");
  }, []);

  useEffect(() => {
    console.log("ooo");
    const API_URL =
      " http://160f-2405-201-3007-8028-45ce-1b55-b4cb-bbcd.ngrok.io";
    socket = io(`${API_URL}`);

    socket.on("connection", () => console.log("connected"));
    socket.on("all-users", (users) => {
      console.log("active users");
      console.log(users);

      setActiveUsers(users);
    });
  }, []);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.activeUsersContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type={"front"}
                style={{
                  width: activeUsers.length <= 1 ? "100%" : 200,
                  height: activeUsers.length <= 1 ? 600 : 200,
                }}
              ></Camera>
              {activeUsers
                .fliter((user) => user.userName != name)
                .map((user, index) => (
                  <View key={index} style={styles.activeUserContainer}>
                    <Text style={{ color: "white" }}>{user.userName}</Text>
                  </View>
                ))}
            </View>

            <View style={styles.menu}>
              {menuIcons.map((icon, index) => (
                <TouchableOpacity key={index} style={styles.tile}>
                  <FontAwesome name={icon.name} size={24} color={"#efefef"} />
                  <Text style={styles.textTitle}>{icon.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
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
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
  },
  textTitle: {
    marginTop: 10,
    color: "white",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cameraContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  activeUserContainer: {
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  activeUsersContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    backgroundColor: "black",
  },
});
