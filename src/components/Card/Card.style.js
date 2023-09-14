import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    shadowColor: colors.tertiary,
    shadowOffset: { height: 5, width: 3 },
    elevation: 10,
    shadowOpacity: 1,
    shadowRadius: 1,
    fontFamily: 'Kodchasan'
  },
})
