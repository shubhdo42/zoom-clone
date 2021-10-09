import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import ContactsMenu from "../components/ContactsMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SearchBar from "../components/SearchBar";
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <Header />
        {/* Header */}
        {/* Searchbar */}
        <SearchBar />
        {/* Menu Buttons */}
        <MenuButtons navigation={navigation} />
        {/* {Contacts} */}
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
    height: "100%",
  },
});
