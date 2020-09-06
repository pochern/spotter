/**
 * Lists View
 * Shows user's shopping lists
 */

import React from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native'

import {
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

const ListsView = ({ setHeaderTitle, navigation }) => {
  const changePage = item => {
    setHeaderTitle(item)
    navigation.navigate('List Details')
  }

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.scrollView}
      >
        <View>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                bottomDivider
                onPress={() => changePage(item)}
              >
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#FF848A',
    borderRadius: 50
  },
})

export default ListsView
