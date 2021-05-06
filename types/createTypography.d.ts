import '@material-ui/core/styles'

declare module '@material-ui/core/styles/createTypography' {
  interface FontStyle
  extends Required<{
    fontFamilySecondary: React.CSSProperties['fontFamily'];
  }> {}
}