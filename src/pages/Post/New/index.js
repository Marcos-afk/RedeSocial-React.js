import React from 'react'
import { Box} from '@material-ui/core'
import Editor from './Editor/index'
import Preview from './Preview/index'
import PostProvider from '../../../context/PostContext'
import BottomBar from '../New/bottomBar/index'


export default function NewPost(){

    return(
        <PostProvider>
        <Box  display="flex" height = 'calc(100% - 70px)' >
            <Box width="50%" height="100%" borderRight="1px solid #ddd" padding={12}>
                <Editor />

            </Box>
            <Box width="50%" height="100%" padding={2}>
            <Preview />
                  
        </Box>
        </Box>
        <BottomBar/>
        
        </PostProvider>
    )
}