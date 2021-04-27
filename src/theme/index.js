import { createMuiTheme } from '@material-ui/core/styles'
import typography from './typography'
import { colors } from '@material-ui/core'
import _ from 'lodash'


const baseConfig = {
    typography,
    palette:{
      type: 'light',
      primary: {
          main: colors.deepPurple[500],
          dark: colors.deepPurple[900],
          light: colors.deepPurple[300] 
        },
        secondary: {
          main: colors.teal[700],
          dark: colors.teal[900],
          light: colors.teal[500]
        },
        background: {
          default: colors.common.white,
          dark: '#f4f6f8',
          paper: colors.common.white,
        },
        text: {
          primary: colors.blueGrey[900],
          secondary: colors.blueGrey[600]
        },
  }
}

const theme = [
    {
        darkMode:false , palette:{
            type: 'light',
            primary: {
                main: colors.deepPurple[500],
                dark: colors.deepPurple[900],
                light: colors.deepPurple[300] 
              },
              secondary: {
                main: colors.teal[700],
                dark: colors.teal[900],
                light: colors.teal[500]
              },
              background: {
                default: colors.common.white,
                dark: '#f4f6f8',
                paper: colors.common.white,
              },
              text: {
                primary: colors.blueGrey[900],
                secondary: colors.blueGrey[600]
              },

        }
    },
    {
        darkMode: true, palette:{
            type: 'dark',
            primary: {
                dark: colors.indigo.A700,
                main: colors.indigo.A400,
                light: colors.indigo.A200,
              },
              secondary: {
                dark: colors.indigo.A700,
                main: colors.indigo.A400,
                light: colors.indigo.A200,
              },
              background: {
                default: '#282C34',
                dark: '#1c2025',
                paper: '#282C34',
              },
              text: {
                primary: '#e6e5e8',
                secondary: '#adb0bb'
              }

        }
    }
]

export  default function createTheme(settings = {}){

    const themeConfig = theme.find( theme => theme.darkMode === settings.darkMode)
    let themes = createMuiTheme(_.merge({}, baseConfig, themeConfig))
    
    return themes

    
}
