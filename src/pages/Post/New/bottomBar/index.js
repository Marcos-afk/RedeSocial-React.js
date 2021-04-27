import React /*{ useContext }*/ from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Box,  Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
//import {PostContext} from '../../../../context/PostContext'
//import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme)=>({
        root:{
        },
        appBar: {
            top: 'auto',
            bottom: 0,
            alignItems: 'center'
        },
        button:{
            marginRight: theme.spacing(1)
        }
}))

export default function BottomBar(){
    const classes = useStyles()
    //const ctx = useContext(PostContext)

    /*const {
        image,
        title,
        tag,
        describe
    } = ctx

    const account = useSelector(state => state.account)

    function handleSaveDraf(){
        
        
    }

    function handleSavePost() {
        
    }*/
   
    
    return(
        <Box>

    <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar >
                <Button color="secondary" variant="contained" className={classes.button}>Publicar</Button>
                <Button color="primary" variant="contained">Salvar Rascunho</Button>
            </Toolbar>
        </AppBar>
        
        
        </Box>
    )
}
