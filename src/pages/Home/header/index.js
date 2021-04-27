import React from 'react'
import {Box} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Account from './account'
import Notifications from './notifications'
import WritePost from './writePost'
import {Link} from'react-router-dom'
import Settings from './settings'

const useStyles = makeStyles({
    appBar:{
        boxShadow:'none'

    },
    growl:{
        flexGrow: '1'
    },
    userSection:{
        display: 'flex',
        alignItems:'center'
    },
    img:{
        width: '50px'
    }
})

export default function Header(){
    const classes = useStyles()
    const theme = useTheme()
    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
            <Link to="/">
            <img src={theme.darkMode ? "/images/sagan-inc-logo.png" : "/images/revista-smashing.png" } alt="Sagan" className={classes.img}/>
            </Link>
            <div className={classes.growl}>

            </div>
            <div className={classes.userSection}>

            <WritePost/>
            <Box ml={2}>
            <Notifications/>
            </Box>
            <Box ml={2}>
            <Settings />
          </Box>
            <Box ml={2}>
            <Account/>
            </Box>
            </div>
            
        </Toolbar>
    </AppBar>
    )
}