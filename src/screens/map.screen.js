import { Layout, Input, Text, Card, Spinner } from "@ui-kitten/components";
import { React, useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../provider/auth";
import Toast from 'react-native-toast-message';
import { FlashList } from "@shopify/flash-list";
import { useFrappe } from "../provider/backend";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import 'react-native-get-random-values'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const INITIAL_REGION = {
  latitude: 39.6953,
  longitude: 2.9214,
  latitudeDelta: 1.25,
  longitudeDelta: 1.25,
};

const MALLORCA_MARKERS = [
  {
    latitude: 39.5696,
    longitude: 2.6502,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: 'Palma Cathedral',
  },
  {
    latitude: 39.5373,
    longitude: 2.9872,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: 'Bellver Castle',
  },
];


export const MapScreen = () => {
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
          console.log(JSON.stringify(data, details));
          console.log(JSON.stringify(details?.geometry?.location));
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
        styles={{
          container: {
            flex: 0,
            marginTop: 10,
            alignSelf: "center",
            position: "absolute",
            width: "90%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white" },
        }}
      />
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
      >
        {MALLORCA_MARKERS.map((marker, index) => (
          <Marker key={index} coordinate={marker} title={marker.name} />
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
});
