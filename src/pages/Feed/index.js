import React, { useState,useCallback, useEffect } from 'react'
import PostCard from '../../components/PostCard/index'
import Container from '@material-ui/core/Container'
import { Box, Hidden } from '@material-ui/core'
import NavBar from './navbar'
import axios from '../../utils/axios'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles((theme)=>({
    navbar:{
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        },
        height: '100%'
    }
}))


export default function Feed(){
    const [posts, setPosts] = useState([])
    const classes = useStyles()

    const getPosts = useCallback(async () => {
        const feed = await axios.get('/api/feed')
        setPosts(feed.data.posts)
    }, [setPosts])

    useEffect(()=>{
        getPosts()
    },[getPosts])

    return(
        <Container maxWidth="lg">
        <Box display="flex">
            <Hidden smDown>
                <Box className={classes.navbar}>
                <NavBar/>
                </Box>
            </Hidden>
        <div>
            {
                posts.map((item)=>(
                    <PostCard key={item.id} post={item}/>
                ))
            }
        </div>
        </Box>
    </Container>
    )
}