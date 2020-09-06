/**
 * Lists View
 * Shows user's shopping lists
 */

import React from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native'

import {
  Button,
  Header,
  ListItem
} from 'react-native-elements'

import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont()
MaterialIcons.loadFont()

const list = [
  'Target Shopping List',
  'Walmart Shopping List',
  'College Shopping List'
]

const App = () => {
  return (
    <>
      <Header
        placement='left'
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY SHOPPING LISTS', style: styles.header }}
        containerStyle={{
          backgroundColor: '#E57E00'
        }}
      />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.scrollView}
      >
        <View>
          {
            list.map((item, i) => (
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron name='chevron-forward-outline' />
              </ListItem>
            ))
          }
        </View>
      </ScrollView>
      <View style={styles.addListSection}>
        <TouchableOpacity
          style={styles.button}
        >
          <Icon
            name='add'
            size={60}
            color='white'
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  addListSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  scrollView: {
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: 'white'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#FF848A',
    borderRadius: 50
  },
  header: {
    fontWeight: '600',
    fontSize: 18,
    color: 'white'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
})

export default App
