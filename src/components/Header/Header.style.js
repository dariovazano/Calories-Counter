import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontSize: 35,
    fontFamily: 'KodchasanLight',
    alignSelf: 'center',

  },
  container: {
    backgroundColor: colors.primary,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: colors.secondary,
    borderWidth: 3,
  }
})
