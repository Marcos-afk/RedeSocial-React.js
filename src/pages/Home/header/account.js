import { Avatar, Menu, MenuItem } from '@material-ui/core'
import React, {useState, useRef} from 'react'
import { useSelector } from 'react-redux'
import {signOut} from '../../../actions/accountAction'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Account() {

    const account = useSelector((state) => state.account)
    const [isOpen, setOpen] = useState(false)
    const ref = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAutheticade = !!account.user

    function handleOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
        
    }

    function handleSignOut(){
        handleClose()
        dispatch(signOut())
        navigate('/sign-in')

    }

    
    return(
        <div>
            <Avatar ref = {ref} alt="Sagan INC" src={account.user && account.user.avatar} onClick={handleOpen}/>
            {
                isAutheticade ?
            
            <Menu  anchorEl={ref.current} getContentAnchorEl={null} anchorOrigin={{vertical:'bottom', horizontal:'center'}} open = {isOpen} onClose={handleClose}>
                <MenuItem onClick={() =>{ navigate(`/${account.user?.username}`)}}>Perfil</MenuItem>
                <MenuItem onClick={handleSignOut}>Sair</MenuItem>
                
            </Menu>   
            :
            <Menu  anchorEl={ref.current} getContentAnchorEl={null} anchorOrigin={{vertical:'bottom', horizontal:'center'}} open = {isOpen} onClose={handleClose}>
            <MenuItem onClick={() =>{navigate('/sign-in')}}>Entrar</MenuItem>
            <MenuItem onClick={()=>{navigate('/sign-up')}}>Registrar</MenuItem>
        </Menu>   

            }
        </div>
    )
    
}