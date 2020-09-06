import React, { useState } from 'react'
import Config from 'react-native-config'
import MapboxGL from '@react-native-mapbox-gl/maps'
import Radar from 'react-native-radar'

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'

MapboxGL.setAccessToken(Config.MAPBOX_ACCESS_TOKEN)

const stringify = obj => (
  JSON.stringify(obj, null, 2)
)

// Radar.on('events', (result) => {
//   console.log('events:', stringify(result))
// })

// Radar.on('location', (result) => {
//   console.log('location:', stringify(result))
// })

// Radar.on('clientLocation', (result) => {
//   console.log('clientLocation:', stringify(result))
// })

// Radar.on('error', (err) => {
//   console.log('error:', stringify(err))
// })

// Radar.on('log', (result) => {
//   console.log('log:', stringify(result))
// })

const MapView = () => {
  const [lastLocation, setLastLocation] = useState({ latitude: 50.875105, longitude: -114.123786 })
  console.log('LAST LOCATION!!!!!!', lastLocation)

  Radar.setUserId('foo')

  Radar.setMetadata({
    foo: 'bar',
    baz: true,
    qux: 1
  })

  Radar.requestPermissions(true)

  Radar.getPermissionsStatus().then((result) => {
    console.log('getPermissionsStatus:', result)
  }).catch((err) => {
    console.log('getPermissionsStatus:', err)
  })

  // Radar.startTrackingEfficient()
  console.log('started tracking efficiently')

  Radar.getLocation().then((result) => {
    console.log('getLocation:', stringify(result))
    // setLastLocation({ latitude: result.location.latitude, longitude: result.location.longitude })
  }).catch((err) => {
    console.log('getLocation:', err)
  })

  // console.log('NEW LOCATION!!!!', lastLocation)

  Radar.stopTrip()

  Radar.searchPlaces({
    near: {
      latitude: 40.737367,
      longitude: -73.869015
    },
    radius: 800, // in meters; default = 1000m; 800m = 0.5mi
    chains: ['target'],
    limit: 10
  }).then((result) => {
    console.log('searchPlace', stringify(result))
    // do something with result.places
  }).catch((err) => {
    console.log('error??')
    // optionally, do something with err
  })

  // Radar.autocomplete({
  //   query: 'target',
  //   near: {
  //     latitude: 40.737367,
  //     longitude: -73.869015
  //   },
  //   limit: 10,
  // }).then((result) => {
  //   console.log('autocomplete:', stringify(result));
  // }).catch((err) => {
  //   console.log('autocomplete:', err);
  // });

  return (
    <>
      <SafeAreaView>
        <View>
          <Text style={styles.sectionTitle}>MAPBOX MAP</Text>
          <View style={styles.mapContainer}>
            <MapboxGL.MapView
              styleURL={MapboxGL.StyleURL.Satellite}
              style={styles.map}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  mapContainer: {
    height: '100%',
    width: '100%'
  },
  map: {
    height: '100%'
  }
})

export default MapView
