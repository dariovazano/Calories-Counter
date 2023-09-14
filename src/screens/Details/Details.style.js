import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  image: {
    height: '50%',
    width: '90%',
  },
  title: {
    fontSize: 30,
    marginVertical: 15,
    fontFamily: 'KodchasanLightItalic',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
})
