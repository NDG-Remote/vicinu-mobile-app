import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};

export const ImageSlider: ImageSliderType[] = [
  {
    title: "Banana",
    image: require("../../assets/images/banana.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Potato",
    image: require("../../assets/images/patatos.png"),
    description: "Curabitur vel urna id tortor malesuada sollicitudin.",
  },
  {
    title: "Apple",
    image: require("../../assets/images/apple.png"),
    description: "Suspendisse potenti. Nam quis risus at lectus tincidunt.",
  },
  {
    title: "Peaches",
    image: require("../../assets/images/peaches.png"),
    description: "Sed vitae ligula at eros ultrices vehicula.",
  },
  {
    title: "Tomato",
    image: require("../../assets/images/tomatos.png"),
    description: "Etiam accumsan risus nec tellus viverra, eget iaculis orci.",
  },
];
