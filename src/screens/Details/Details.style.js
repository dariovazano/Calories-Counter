import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  imageContainer: {
    height: '50%',
    width: '100%',
  },
  image: {
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 24,
    fontVariant: '',
  },
  macros: {
    fontSize: 18,
    fontVariant: '',
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: '50%',
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
