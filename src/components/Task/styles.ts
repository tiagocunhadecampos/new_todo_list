import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    backgroundColor: theme.colors.gray500,
    borderWidth: 1,
    borderColor: theme.colors.gray400,
    borderRadius: 8,
  },
  buttonCheck: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.medium,
    color: theme.colors.gray100,
    lineHeight: 22,
    marginLeft: 8,
  },
  textDone: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.medium,
    color: theme.colors.gray300,
    textDecorationLine: 'line-through',
    lineHeight: 22,
    marginLeft: 8,
  },
  buttonDeleteTask: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  }
});