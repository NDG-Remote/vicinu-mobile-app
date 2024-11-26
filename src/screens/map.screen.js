import { Layout, Input, Text, Card, Spinner } from "@ui-kitten/components";
import { React, useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/auth";
import Toast from 'react-native-toast-message';
import { FlashList } from "@shopify/flash-list";
import { useFrappe } from "../provider/backend";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

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
    latitude: 39.7952,
    longitude: 3.1270,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: 'Alcudia Old Town',
  },
  {
    latitude: 39.7612,
    longitude: 3.0172,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: 'Cap de Formentor',
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
  return (
    <View style={styles.container}>
      <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={INITIAL_REGION}
      showsUserLocation
      showsMyLocationButton >
        {MALLORCA_MARKERS.map((marker, index) => (<Marker key={index} coordinate={marker} title={marker.name} />))}
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
