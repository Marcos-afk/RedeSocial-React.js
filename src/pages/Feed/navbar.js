import React from 'react'
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Button,  ListItem, ListItemText, ListSubheader} from '@material-ui/core'
import {useNavigate} from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
    root:{
        padding: theme.spacing(2),
        width: 300,
        marginRight: theme.spacing(2)
    },
    button:{
        width: '100%'
    }
}))

const tags = [
    {id: 1, name:'Guerradascorrentes'},
    {id: 2, name:'Segundaguerramundial'},
    {id: 3, name:'Flamengo'},
    {id: 4, name:'Zacksnyder'},
    {id: 5, name: 'Covid-19'}   
]

export default function NavBar(){

    const classes = useStyles()
    const navigate = useNavigate()
    const account = useSelector(state => state.account)
    const isAuthenticaded = !!account.user;
    
    function handldeClick(){
        navigate('/sign-up')
        
    }

    return(
        <Paper className={classes.root}>
            {
                !isAuthenticaded &&
                <Button variant="outlined" color="secondary" className={classes.button} onClick={handldeClick}>Cadastre-se</Button>
            }
                <ListSubheader >
                    Assuntos em Alta
                </ListSubheader>
                {tags.map((item)=>(
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}/>
                    </ListItem>
                ))}
                <ListItem button >
                    Mostrar mais
                </ListItem>
        </Paper>
        
    )
}