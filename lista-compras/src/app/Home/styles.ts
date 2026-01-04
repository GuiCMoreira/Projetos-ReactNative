import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D0D2D8',
    flex: 1,
    alignItems: 'center',
    paddingTop: 62,
    gap: 24,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  logo: {
    width: 108,
    height: 34,
  },
  form: {
    width: '100%',
    paddingTop: 20,
    gap: 8,
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 24,
    padding: 24,
  },
});