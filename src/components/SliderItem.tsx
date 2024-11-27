import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { ImageSliderType } from "../data/SliderData";

type Props = {
    item: ImageSliderType;
    index: number;
}

const {width} = Dimensions.get("screen") // Get the width of the screen

const SliderItem = ({item, index}: Props) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={{width: 300, height: 500, borderRadius: 20}} />
            <View>
                <TouchableOpacity>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.background}>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
            </View>
        </View>
    )
}

export default SliderItem;

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        width: width // Set the width of the container to the width of the screen
    },
    background: {
        position: "absolute",
        height: 500,
        width: 300,
        padding: 20,
    }
});