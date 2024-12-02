import { Layout, Input, Text, Card, Spinner } from "@ui-kitten/components";
import { React, useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../provider/auth";
import Toast from 'react-native-toast-message';
import { FlashList } from "@shopify/flash-list";
import { useFrappe } from "../provider/backend";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { FlatList, StyleSheet, View } from 'react-native';
import 'react-native-get-random-values'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { OfferData } from "../data/OfferData";
import SliderItem from "../components/SliderItem";

const INITIAL_REGION = {
  latitude: 39.6953,
  longitude: 2.9214,
  latitudeDelta: 1.25,
  longitudeDelta: 1.25,
};

// const MALLORCA_MARKERS = [
//   {
//     latitude: 39.5696,
//     longitude: 2.6502,
//     latitudeDelta: 0.01,
//     longitudeDelta: 0.01,
//     name: 'Palma Cathedral',
//   },
//   {
//     latitude: 39.6696,
//     longitude: 2.5802,
//     latitudeDelta: 0.01,
//     longitudeDelta: 0.01,
//     name: 'Palma Cathedral',
//   },
//     {
//     latitude: 39.4696,
//     longitude: 2.7702,
//     latitudeDelta: 0.01,
//     longitudeDelta: 0.01,
//     name: 'Palma Cathedral',
//   },
//   {
//     latitude: 39.8373,
//     longitude: 3.0872,
//     latitudeDelta: 0.01,
//     longitudeDelta: 0.01,
//     name: 'Bellver Castle',
//   },
// ];


export const MapScreen = () => {
  const { db } = useFrappe();
  const [markerData, setMarkerData] = useState([]);

  // useEffect(() => {
  //   db.getDocList("Offer") // Only working without fields and filters --> use Call
  //     .then((docs) => {
  //       docs.forEach((doc) => {
  //         db.getDoc("Offer", doc.name)
  //           .then((doc) => {
  //             setMarkerData((prevData) => [
  //               ...prevData,
  //               {
  //                 is_available: doc.is_available,
  //                 product: doc.product,
  //                 description: doc.description,
  //                 latitude: doc.latitude,
  //                 longitude: doc.longitude,
  //               },
  //             ]);
  //           })
  //           .catch((error) => console.error(error));
  //       });
  //     })
  //     .catch((error) => console.error(error));
  // }, [db]);

  const mapRef = useRef(null);

  const moveToLocation = (latitude, longitude) => {
    mapRef.current.animateToRegion(
      {
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      2000,
    );
  }
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log((data, details));
          // console.log(JSON.stringify(data, details));
          // console.log(JSON.stringify(details?.geometry?.location));
          moveToLocation(
            details?.geometry?.location.lat,
            details?.geometry?.location.lng,
          );
        }}
        query={{
          key: "AIzaSyBnXwXMsLIcDuPvP2x2X3fYDlkWqjKwNq4",
          language: "en",
        }}
        onFail={(error) => console.error(error)}
        styles={styles.googlesearchfield}
      />
      <FlatList
        data={OfferData}
        renderItem={({ item, index }) => (
            <SliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false} // hides the horizontal scroll bar
        pagingEnabled // Snapping Effect - allows the user to scroll through the images one at a time
        style={styles.flatList}
      />
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
      >
        {OfferData.map((marker, index) => (
          <Marker key={index} coordinate={marker} title={marker.product} />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  googlesearchfield: {
    container: {
      flex: 0,
      marginTop: 10,
      alignSelf: "center",
      position: "absolute",
      width: "90%",
      zIndex: 1,
    },
    listView: { backgroundColor: "white" },
  },
  flatList: {
    position: 'absolute',
    bottom: 20,
    zIndex: 2,
    width: '100%',
  }
});
