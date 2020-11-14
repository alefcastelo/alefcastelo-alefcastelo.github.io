import { createMuiTheme } from '@material-ui/core/styles'
import { config } from './config'

export const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      main: config.color.primary
    }
  }
})
