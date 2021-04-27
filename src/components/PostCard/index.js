import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { Avatar, CardActionArea, IconButton } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MessageIcon from '@material-ui/icons/Message'
import {useNavigate} from 'react-router-dom'
import momment from 'moment'

const useStyles = makeStyles((theme)=>({
    root:{
        marginBottom: theme.spacing(1)

    },
    subheader:{
        display:'flex',
        alignItems: 'center'
    },
    caption:{
        marginRight: theme.spacing(1)
    },
    message:{
        height:'auto',
        marginBottom: theme.spacing(1),
        padding: '0px 24px'
    },
    image:{
        height: '100%',
        width: '100%',
        maxWidth: '100%'

    },
    content:{
        padding: 0
    },
    desc:{
        textIndent: 20,
        marginTop: theme.spacing(1),
        textAlign: 'justify'
    }

}))

export default function PostCard({post}){
    const classes = useStyles()
    const navigate = useNavigate()
    
    function handlePostClick (){
        navigate(`/post/${post.slug}`)
    }

    return(
        <Card className={classes.root} onClick={handlePostClick}>
                <CardHeader avatar={

                    <Avatar src={post.autor?.avatar}/>
                } 
                title={
                <Typography variant="h6">
                        {post.title}
                </Typography>
                }
                subheader={
                    <div className={classes.subheader}>
                    <Typography variant="caption" className={classes.caption}>
                            {post.autor.name},
                    </Typography>
                    <Typography variant="subtitle2" className={classes.caption}>
                            {momment(post.date).fromNow()}
                    </Typography>
                    </div>
                }
                />
                <CardContent className={classes.content}>
                <Typography variant="body1" className={classes.message}>
                    {post.hashtags}
                            
                </Typography>
                    <CardActionArea>
                        <img  src={post.image}  className={classes.image} alt="img"/>
                    </CardActionArea>
                    <Typography variant="body2" color="textPrimary" component="p" className={classes.desc}>
                    {post.description}
        </Typography>

                </CardContent>
                <CardActions disableSpacing>
                    <IconButton arial-label="like">
                        <FavoriteIcon/>
                        <Typography style={{cursor:'pointer'}}
                        color="textSecondary" variant="body2">
                                {post.likes}
                        </Typography>
                    </IconButton>
                    <IconButton aria-label="comment">
                        <MessageIcon/>
                        <Typography
                        className={classes.reactions}
                         color="textSecondary"
                        variant="body2"
                    >
                        {post.comments}
            </Typography>

                    </IconButton>
                    
                </CardActions>
        </Card>
        
    )
}