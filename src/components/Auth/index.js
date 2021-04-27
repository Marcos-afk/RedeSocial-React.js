import {useEffect, useCallback} from 'react'
import authService from '../../services/authService'
import { setUserData} from '../../actions/accountAction'
import {useDispatch} from 'react-redux'


 export default function Auth({children}){
    const dispatch = useDispatch()

    const initAuth = useCallback( async ()=>{
        if(authService.isAuthenticated()){

            await dispatch(setUserData())

        }

    }, [dispatch])


    useEffect(()=>{
        initAuth()
    },[initAuth])


    return children

}

