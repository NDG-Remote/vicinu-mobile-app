import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { OfferDataType } from "../data/OfferData";
import Ionicons from '@expo/vector-icons/Ionicons';


type Props = {
    item: OfferDataType;
    index: number;
}

const {width} = Dimensions.get("screen") // Get the width of the screen

const SliderItem = ({item, index}: Props) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={item.title_image} style={{width: 280, height: 180, borderRadius: 20}} />
            <View style={styles.background}>
                <View style={{alignItems:"flex-end"}}>
                    <TouchableOpacity style={styles.icon}>
                        <View>
                            <Ionicons name="eye" size={32} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.textbox}>
                    <Text style={styles.product}>{item.product}</Text>
                    <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
                </View>
            </View>
        </View>
    )
}

export default SliderItem;

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20,
        gap: 20,
        width: width // Sets the width of the container to the width of the screen
    },
    background: {
        position: "absolute",
        height: 180,
        width: 280,
        padding: 20,
        justifyContent: "space-between",
    },
    textbox: {
        backgroundColor: "rgba(0,0,0,0.5)",
        gap: 7,
        padding: 10,
        borderRadius: 10,
    },
    icon: {
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 8,
        borderRadius: 30,
    },
    product: {
        fontSize: 18,
        fontWeight: "700",
        color: "#fff",
        letterSpacing: 1.5,
    },
    description: {
        fontSize: 14,
        color: "#fff",
        letterSpacing: 1.2,
    }
});