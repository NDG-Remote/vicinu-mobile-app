import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageSlider } from "../data/SliderData";
import SliderItem from "../components/SliderItem";

export const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ImageSlider}
        renderItem={({ item, index }) => (
            <SliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false} // hides the horizontal scroll bar
        pagingEnabled // Snapping Effect - allows the user to scroll through the images one at a time
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
