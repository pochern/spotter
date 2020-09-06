/**
 * List Details View
 * Shows items in user's shopping list
 */

import React, { useState } from 'react'

import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native'

import {
  CheckBox,
  ListItem
} from 'react-native-elements'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
MaterialIcons.loadFont()

const list = [
  'toothpaste',
  'deodorant',
  'body wash',
  'notebook'
]

const ItemCheckBox = ({ itemTitle }) => {
  const [isSelected, setSelection] = useState(false)

  return (
    <CheckBox
      title={itemTitle}
      iconType='material'
      checkedIcon='check-circle'
      uncheckedIcon='radio-button-unchecked'
      checked={isSelected}
      onPress={() => setSelection(!isSelected)}
      containerStyle={{ backgroundColor: 'white', borderWidth: 0, padding: 0 }}
      textStyle={{ fontWeight: 'normal' }}
    />
  )
}

const ListDetailsView = ({ navigation }) => {
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
              >
                <ListItem.Content>
                  <ItemCheckBox
                    itemTitle={item}
                  />
                </ListItem.Content>
              </ListItem>
            ))
          }
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center'
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  }
})

export default ListDetailsView
