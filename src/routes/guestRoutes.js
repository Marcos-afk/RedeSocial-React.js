import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import {useSelector} from 'react-redux'

export default function GuestRoutes({element: Component, ...rest}){
    const account = useSelector(state => state.account)
    const isAutheticated = Boolean(account.user)
    
    return(
        <Route {...rest} element={(isAutheticated ? <Home/> : Component)}/>
    )
}