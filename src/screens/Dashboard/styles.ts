import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
  },
  content: {
    flex: 1,
    marginHorizontal: 24,
  },
  wrapperInput: {
    flexDirection: 'row',
    marginTop: -30,
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    marginRight: 4,
    color: theme.colors.gray100,
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.large,
    backgroundColor: theme.colors.gray500,
    borderWidth: 1,
    borderColor: theme.colors.gray700,
    borderRadius: 6,
  },
  buttonAdd: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    backgroundColor: theme.colors.blueDark,
    borderRadius: 6
  },
  rowInfoTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 20,
  },
  wrapperInfoTask: {
    flexDirection: 'row'
  },
  textTaskCreate: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSizes.medium,
    color: theme.colors.blue,
    lineHeight: 17,
    marginRight: 8,
  },
  textTaskDone: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSizes.medium,
    color: theme.colors.purple,
    lineHeight: 17,
    marginRight: 8,
  },
  wrapperCounter: {
    width: 25,
    height: 19,
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: theme.colors.gray400,
    borderRadius: 999,
  },
  textCounter: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSizes.small,
    color: theme.colors.gray200,
    lineHeight: 14,
    textAlign: 'center'
  },
  empty: {
    height: 208,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray400,
  },
  textEmpty: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.medium,
    color: theme.colors.gray300,
    lineHeight: 22,
    textAlign: 'center'  
  },
  textEmptyBold: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fontSizes.medium,
    color: theme.colors.gray300,
    lineHeight: 22,
    textAlign: 'center'  
  }
});