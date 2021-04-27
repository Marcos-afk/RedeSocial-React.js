import { Button } from '@material-ui/core'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function WritePost(){
    const navigate = useNavigate()
    const account = useSelector( state => state.account)
    const isAuthenticaed = !!account.user
    
    function handleClick(){
        if(isAuthenticaed){
        navigate('/post/new')
        }else{
         navigate('/sign-in')       
        }
    }
    return(
        <>
          <Button variant="contained" color="secondary" onClick={handleClick}>
                    Nova Postagem
        </Button>
        </>
    )


}