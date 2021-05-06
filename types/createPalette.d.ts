import '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface SimplePaletteColorOptions {
    xLight?: string;
  }
}
