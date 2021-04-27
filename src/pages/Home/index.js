import React from 'react'
import Header from './header/index'
import { makeStyles } from '@material-ui/core/styles'
import { Route, Routes } from 'react-router'
import NewPost from '../Post/New/index'
import Feed from '../Feed/index'
import Post from '../Post/index'
import Profile from '../Profile/index'

const useStyles = makeStyles((theme) =>({
    root:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.dark
    },
    main:{
        padding: 64
    },
    toolbar:{
        minHeight: 10

    }

}))

export default function Home(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Header/>
           <div className={classes.toolbar} />
            <main className={classes.main}>
            <Routes>
                <Route path="/" element={<Feed/>}/>
                <Route path="/post/new" element={<NewPost/>}/>
                <Route path="/post/:slug" element={<Post/>}/>
                <Route path="/:username" element={<Profile/>}/>
                <Route path="*"  element={<h1> Erro 404, página não encontrada!</h1>}/>

            </Routes>
            </main>
            
            </div>
    )
}