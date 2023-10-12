import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingTop: 10,
  },
  input: {
    color: 'white',
    backgroundColor: colors.tertiary,
    margin: 10,
    borderRadius: 8,
    padding: 10,
    borderColor: colors.secondary,
    borderWidth: 3,
    width: '80%',
    fontSize: 20,
  },
})
