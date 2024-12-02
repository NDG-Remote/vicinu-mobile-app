import React, { useEffect } from "react";
import { ImageSourcePropType } from "react-native";
import { useFrappe } from "../provider/backend";


export type ImageSliderType = {
  product: string;
  image: ImageSourcePropType;
  description: string;
};


    // latitude: 39.5696,
    // longitude: 2.6502,
    // latitudeDelta: 0.01,
    // longitudeDelta: 0.01,
    // name: 'Palma Cathedral',

export const SliderData = () => {
  const { db } = useFrappe();

  db.getDocList("Offers")
    .then((docs) => console.log(docs))
    .catch((error) => console.error(error));

  return (
    db
  );
};


export const ImageSlider: ImageSliderType[] = [
  {
    product: "Banana",
    image: require("../../assets/images/banana.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    product: "Potato",
    image: require("../../assets/images/patatos.png"),
    description: "Curabitur vel urna id tortor malesuada sollicitudin.",
  },
  {
    product: "Apple",
    image: require("../../assets/images/apple.png"),
    description: "Suspendisse potenti. Nam quis risus at lectus tincidunt.",
  },
  {
    product: "Peaches",
    image: require("../../assets/images/peaches.png"),
    description: "Sed vitae ligula at eros ultrices vehicula.",
  },
  {
    product: "Tomato",
    image: require("../../assets/images/tomatos.png"),
    description: "Etiam accumsan risus nec tellus viverra, eget iaculis orci.",
  },
];
