import React, {useContext} from 'react'
import { Avatar, Box, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Markdown from 'react-markdown'
import {useSelector} from 'react-redux'
import {PostContext} from '../../../../context/PostContext'

const useStyles = makeStyles((theme)=>({
    imagePreview:{
        width: 300,
        height: 300,
        marginTop: theme.spacing(1)
    },
    avatar:{
        marginRight: theme.spacing(1)
    }

}))

export default function Preview(){

    const classes = useStyles()
    const ctx = useContext(PostContext)

    const {
        image,
        title,
        tag,
        describe
    } = ctx
    const account = useSelector(state => state.account)

    return (
        <div>
            <Box display="flex" alignItems="center" mb={1}>
              <Box>
                        <Avatar className={classes.avatar} src={account.user?.avatar}/>
                    </Box>
                    <Box>
                        <Typography variant="caption">{account.user?.name}</Typography>
                        <Typography color="textSecondary" variant="subtitle2">5 meses atrás</Typography>
                    </Box>
                    </Box>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body1">{tag?.map(item => item.title).join(',')}</Typography>
            {image &&
            <img src={image} alt="post" className={classes.imagePreview}/>
            }
            <Markdown source={describe}/>
        </div>
    )
    
}