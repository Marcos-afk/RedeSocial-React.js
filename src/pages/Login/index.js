import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Button, FormHelperText, Link, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlindeIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {signIn} from '../../actions/accountAction'
import {Formik} from 'formik'
import * as Yup from 'yup'


const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex',
        height: '100vh'

    },
    image:{
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign:"center"
    },
    avatar:{
        backgroundColor: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(2)
    },
    button:{
        marginTop: theme.spacing(2)
    },
    footer:{
        marginTop: theme.spacing(2),
        color: theme.palette.primary.dark
    }
}))
export default function SignIn(){
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    
    
    return(

        <Grid container className={classes.root}>
            <Grid md={7} item container direction='column' justify="center" alignItems="center" className={classes.image}>
             <Typography  style={{color: '#fff', fontSize: 20, lineHeight:'45px'}}>
               <strong>"Em algum lugar, algo incrível está esperando para ser descoberto."</strong>
                </Typography>
                <Typography variant="body2" style={{color: 'rgb(255,255,255,0.7)', marginTop: 30, fontSize: 18, lineHeight:'30px'}}>
                    Compartilhe seu conhecimento com nossa comunidade
                </Typography>
            </Grid>
            <Grid md={5} item>
                <Box display="flex" flexDirection="column" alignItems="center" m={8}>
                    <Avatar className={classes.avatar}> 
                        <LockOutlindeIcon/>
                    </Avatar>
                    <Typography variant="h5">
                        Conecte-se ao novo mundo
                    </Typography>

                    <Formik initialValues={{
                        email: '',
                        password: ''
                    }}
                     validationSchema={Yup.object().shape({
                         email: Yup.string().email("Insira um email válido!").max(50).min(12).required("Campo vázio!"),
                         password: Yup.string().max(8).required("Campo vázio!")
                     })}
                      onSubmit={ async (values, {
                          setErrors,
                          setStatus,
                          setSubmitting
                      }) =>{
                        try{
                            await dispatch(signIn(values.email, values.password))
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
                                <TextField variant="outlined" margin="normal" required fullWidth id="email" label="E-mail"
                                name="email" autoComplete="email" autoFocus value={values.email} onChange={handleChange}
                                 helperText={errors.email} error={Boolean(errors.email)}/>
                                <TextField variant="outlined" marging="normal" required fullWidth id="password" label="Senha"
                                type="password" name="password" autoComplete="current-password" value={values.password} onChange={handleChange}
                                helperText={errors.password} error={Boolean(errors.password)}/>
                                <Button fullWidth variant="contained" color="primary" type="submit" disabled={isSubmitting} className={classes.button}>Entrar</Button>
                               {
                                   errors.submit && (
                                   <FormHelperText error>
                                       {errors.submit}
                                   </FormHelperText>
                                   )
                               }
                                <Grid container>
                                 <Grid item >
                                 <Link href="#">
                                     Esqueceu a senha ?
                                 </Link>
                                 </Grid>
                                 <Grid item >
                                 <Link href="/sign-up">
                                     Novo usuário ?
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