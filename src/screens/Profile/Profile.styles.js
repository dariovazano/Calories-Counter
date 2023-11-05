import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  select: {
    width: '95%',
    background: colors.secondary,
    height: 40,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  container: {
    scroll: 'true',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    margin: 3,
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  cameraButton: {
    backgroundColor: colors.secondary,
    height: 50,
    width: '100%',
  },
  loginContainer: {
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputNewProduct: {
    width: '95%',
    backgroundColor: colors.tertiary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: '50%',
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20
  },
  inputContainer: {
    marginTop: 3,
    marginBottom: 3,
    scroll: 'true',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 12,

  }
})
