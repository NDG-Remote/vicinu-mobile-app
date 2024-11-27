import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { ImageSliderType } from "../data/SliderData";
import Ionicons from '@expo/vector-icons/Ionicons';


type Props = {
    item: ImageSliderType;
    index: number;
}

const {width} = Dimensions.get("screen") // Get the width of the screen

const SliderItem = ({item, index}: Props) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={{width: 300, height: 500, borderRadius: 20}} />
            <View style={styles.background}>
                <View style={{alignItems:"flex-end"}}>
                    <TouchableOpacity style={styles.icon}>
                        <View>
                            <Ionicons name="eye" size={32} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.textbox}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
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
        justifyContent: "space-between",
    },
    textbox: {
        backgroundColor: "rgba(0,0,0,0.5)",
        gap: 10,
        padding: 10,
        borderRadius: 10,
    },
    icon: {
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#fff",
        letterSpacing: 1.5,
    },
    description: {
        fontSize: 16,
        color: "#fff",
        letterSpacing: 1.2,
    }
});