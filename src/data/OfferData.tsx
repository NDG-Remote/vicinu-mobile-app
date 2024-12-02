import React, { useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";
import { useFrappe } from "../provider/backend";


export type OfferDataType = {
  name: string;
  giver_profile: string;
  product: string;
  title_image: ImageSourcePropType;
  image2?: ImageSourcePropType; // Optional
  image3?: ImageSourcePropType; // Optional
  image4?: ImageSourcePropType; // Optional
  image5?: ImageSourcePropType; // Optional
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  is_available: boolean;
  is_accessible: boolean;
  is_donation_required: boolean;
  is_unlimited: boolean;
  units?: string; // Optional
  quantity?: number; // Optional
};


    // latitude: 39.5696,
    // longitude: 2.6502,
    // latitudeDelta: 0.01,
    // longitudeDelta: 0.01,
    // name: 'Palma Cathedral',

const FetchOfferData = () => {
  const { db } = useFrappe();
  const [offers, setOffers] = useState<OfferDataType[]>([]);

  useEffect(() => {
    db.getDocList("Offer")
      .then((docs) => {
        docs.forEach((doc) => {
          db.getDoc("Offer", doc.name)
            .then((doc) => {
              setOffers((prevData) => [
                ...prevData,
                {
                  name: doc.name,
                  giver_profile: doc.giver_profile,
                  product: doc.product,
                  title_image: doc.image1,
                  image2: doc.image2,
                  image3: doc.image3,
                  image4: doc.image4,
                  image5: doc.image5,
                  description: doc.description,
                  latitude: doc.latitude,
                  longitude: doc.longitude,
                  address: doc.address,
                  is_available: doc.is_available,
                  is_accessible: doc.is_accessible,
                  is_donation_required: doc.is_donation_required,
                  is_unlimited: doc.is_unlimited,
                  units: doc.units,
                  quantity: doc.quantity,
                },
              ]);
            })
            .catch((error) => console.error(error));
        });
      })
      .catch((error) => console.error(error));
  }, [db]);

  return offers; // This component doesn't render anything
};


export const OfferData: OfferDataType[] = [
  {
    name: "OFF-User10-Zucchini-000023",
    giver_profile: "GIV-User-100-00040",
    product: "Banana",
    title_image: require("../../assets/images/banana.png"),
    image2: require("../../assets/images/banana.png"),
    image3: require("../../assets/images/banana.png"),
    image4: require("../../assets/images/banana.png"),
    image5: require("../../assets/images/banana.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    latitude: 39.5696,
    longitude: 2.6502,
    address: "Palma Cathedral",
    is_available: true,
    is_accessible: true,
    is_donation_required: true,
    is_unlimited: true,
    units: "kg",
    quantity: 5,
  },
  {
    name: "OFF-User10-Zucchini-000023",
    giver_profile: "GIV-User-100-00040",
    product: "Patatos",
    title_image: require("../../assets/images/patatos.png"),
    image2: require("../../assets/images/patatos.png"),
    image3: require("../../assets/images/patatos.png"),
    image4: require("../../assets/images/patatos.png"),
    image5: require("../../assets/images/patatos.png"),
    description: "Lorem supi felichita sit amet, consectetur adipiscing elit.",
    latitude: 39.6696,
    longitude: 2.7502,
    address: "Something",
    is_available: false,
    is_accessible: true,
    is_donation_required: true,
    is_unlimited: true,
    units: "units",
    quantity: 6,
  },
];
