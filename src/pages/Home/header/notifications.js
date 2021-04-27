import { Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText, Popover, SvgIcon, Typography } from '@material-ui/core'
import React, {useRef, useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getNotifications} from '../../../actions/notificationsAction'
import { makeStyles } from '@material-ui/core/styles'
import {
    Bell as BellIcon,
    Star as StarIcon,
    MessageCircle as MessageIcon,
    Heart as HeartIcon,
    Users as ConnectionIcon,
  } from 'react-feather';

  const iconsMap = {
    reviews: StarIcon,
    new_comment: MessageIcon,
    like: HeartIcon,
    connection: ConnectionIcon,
  }

  const useStyles = makeStyles((theme)=>({
      icon:{
          background: theme.palette.secondary.dark
      }
  }))




export default function  Notifications(){
    const classes = useStyles()
    const account = useSelector((state) => state.account)
    const isAuthenticaed = !!account.user
    const ref = useRef(null)
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch()
    const notifications = useSelector((state) => state.notifications.notifications)

    function handleOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
        
    }

    useEffect(()=>{
        dispatch(getNotifications())
    
    }, [dispatch])
    
    return(
        isAuthenticaed && (
        <div>
            <IconButton ref = {ref}  onClick={handleOpen}>
                <SvgIcon>
                <BellIcon  />
                </SvgIcon>
            </IconButton>
            <Popover open={isOpen} anchorEl={ref.current} onClose={handleClose} anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right'
  }}> <Box p={2}>
      <Typography variant="h6" color="textPrimary">
          Notificações

      </Typography>
  </Box>
  {
      notifications.map((notification)=>{
          const Icon = iconsMap[notification.type]
          return (
        <List>
        <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.icon}>
                    <SvgIcon>
                        <Icon/>
  
                    </SvgIcon>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={notification.title} primaryTypographyProps={{ variant:'subtitle2', color:'textPrimary'}} secondary={notification.description}/>
        </ListItem>
    </List>
          )
})
  }
      </Popover>
        </div>
        )
    )
}