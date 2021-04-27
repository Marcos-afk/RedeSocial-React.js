import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import { Box, Container, Typography } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AccountProfile from './accountProfile'
import Posts from './posts'
import Connections from './connections'

export default function Profile(){
   
    const [tab, setTab] = useState(0)

    function handleClickChange( event, newValue){
        setTab(newValue)
        
    }

    function TabPanel(props){
        const {children , value, index, ...other} = props

        return(
            <Typography component="div" role="tabpanel" hidden={value !== index}
        id={`wrapped-tabpanel-${index}`} arial-labelledby={`wrapped-tab-${index}`} {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
        )
    }

    return(
        <Container maxWidth="lg">
            <Grid spacing={4} container>

            <Grid item md={4} xs={12}>
                <AccountProfile/>

            </Grid>
            <Grid item md={8} xs={12}>
                    <Tabs value={tab} onChange={handleClickChange}>
                        <Tab label="Postagens"></Tab>
                        <Tab label="Conexões"/>
                    </Tabs>
               <TabPanel value={tab} index={0}>
                    <Posts/>
               </TabPanel>
               <TabPanel value={tab} index={1}>
                   <Connections/>
               </TabPanel>
    
            </Grid>

        </Grid>
        
        </Container>
    )
    
}