import React, { useState } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'

import Radar from 'react-native-radar'

const stringify = obj => (
  JSON.stringify(obj, null, 2)
)

Radar.on('events', (result) => {
  console.log('events:', stringify(result))
})

Radar.on('location', (result) => {
  console.log('location:', stringify(result))
})

Radar.on('clientLocation', (result) => {
  console.log('clientLocation:', stringify(result))
})

Radar.on('error', (err) => {
  console.log('error:', stringify(err))
})

Radar.on('log', (result) => {
  console.log('log:', stringify(result))
})


const MapView = () => {
  const [lastLocation, setLastLocation] = useState({ latitude: '', longitude: '' })
  console.log(lastLocation)

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

  Radar.startTrackingEfficient()
  console.log('started tracking efficiently')

  Radar.getLocation().then((result) => {
    console.log('getLocation:', stringify(result))
  }).catch((err) => {
    console.log('getLocation:', err)
  })

  Radar.searchPlaces({
    near: {
      latitude: 40.783826,
      longitude: -73.975363
    },
    radius: 1000,
    chains: ['starbucks'],
    limit: 10
  }).then((result) => {
    // do something with result.places
  }).catch((err) => {
    // optionally, do something with err
  })

  Radar.stopTrip()

  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>RADAR MAP VIEW</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  }
})

export default MapView
