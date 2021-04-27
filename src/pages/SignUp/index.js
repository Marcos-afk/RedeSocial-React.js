import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Button, FormHelperText, Link, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlindeIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {signUp} from '../../actions/accountAction'
import {Formik} from 'formik'
import * as Yup from 'yup'


const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex',
        height: '100vh'

    },
    image:{
        backgroundImage: 'url(/images/background-02.jpg)',
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(1),
        textAlign:"center"
    },
    avatar:{
        backgroundColor: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    text :{
        textAlign:"center"
    },
    button:{
        marginTop: theme.spacing(1)
    },
    footer:{
        marginTop: theme.spacing(2),
        color: theme.palette.primary.dark
    }
}))
export default function SignUp(){
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    
    
    return(

        <Grid container className={classes.root}>
            <Grid md={7} item container direction='column' justify="center" alignItems="center" className={classes.image}>
             <Typography  style={{color: '#fff', fontSize: 20, lineHeight:'45px'}}>
               <strong>"Somos feitos de poeira de estrelas. Nós somos uma maneira de o cosmos se autoconhecer."</strong>
                </Typography>
                <Typography variant="body2" style={{color: 'rgb(255,255,255,0.9)', marginTop: 30, fontSize: 18, lineHeight:'30px'}}>
                    Compartilhe seu conhecimento com nossa comunidade
                </Typography>
            </Grid>
            <Grid md={5} item>
                <Box display="flex" flexDirection="column" alignItems="center" m={8}>
                    <Avatar className={classes.avatar}> 
                        <LockOutlindeIcon/>
                    </Avatar>
                    <Typography variant="h5" className={classes.text}>
                        "Para criaturas pequenas como nós, a vastidão só é suportável por meio do amor"
                    </Typography>

                    <Formik initialValues={{
                        fullName: '',
                        email: '',
                        password: ''
                    }}
                     validationSchema={Yup.object().shape({
                         fullName: Yup.string().max(50).required("Campo vázio!"),
                         email: Yup.string().email("Insira um email válido!").max(50).min(12).required("Campo vázio!"),
                         password: Yup.string().max(8).required("Campo vázio!")
                     })}
                      onSubmit={ async (values, {
                          setErrors,
                          setStatus,
                          setSubmitting
                      }) =>{
                        try{
                            signUp(values.fullName, values.email, values.password)
                            navigate('/')
                            
                        }catch(error){
                            const message =  (error.response && error.response.data.message) ||
                            'Ocorreu uma exeção!';
                          setStatus({ success: false });
                          setErrors({ submit: message });
                          setSubmitting(false);
                        }
                      }}>
                          {
                              ({errors, handleChange, handleSubmit, isSubmitting ,values})=>(
                                <form noValidate onSubmit={handleSubmit}>

                                  <TextField  variant="outlined" margin="normal" required fullWidth id="fullName" label="Nome Completo"
                                name="fullName" autoComplete="fullName" autoFocus value={values.fullName} onChange={handleChange}
                                 helperText={errors.fullName} error={Boolean(errors.fullName)}/>  

                                <TextField variant="outlined" margin="normal" required fullWidth id="email" label="E-mail"
                                name="email" autoComplete="email"  value={values.email} onChange={handleChange}
                                 helperText={errors.email} error={Boolean(errors.email)}/>

                                <TextField variant="outlined" marging="normal" required fullWidth id="password" label="Senha"
                                type="password" name="password" autoComplete="current-password" value={values.password} onChange={handleChange}
                                helperText={errors.password} error={Boolean(errors.password)}/>
                                <Button fullWidth variant="contained" color="primary" type="submit" disabled={isSubmitting} className={classes.button}>Cadastrar</Button>
                               {
                                   errors.submit && (
                                   <FormHelperText error>
                                       {errors.submit}
                                   </FormHelperText>
                                   )
                               }
                                <Grid container>
                                 <Grid item >
                                 </Grid>
                                 <Grid item >
                                 <Link href="/sign-in">
                                     Já possui uma conta?
                                 </Link>
                                 </Grid>
                               
         
                             </Grid>
                            </form>

                              )   
                          }

                   </Formik>
                   <Typography variant="body2" align="center" className={classes.footer}>
                     <a href="https://www.instagram.com/marcosart_baybay/?hl=pt-br">Marcos Art</a>{' '}copyright&copy;{' '} {new Date().getFullYear()}
                 </Typography>
                   
                </Box>
                
            </Grid>
        </Grid>
    )

}