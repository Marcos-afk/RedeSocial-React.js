import React, {useCallback, useContext} from 'react'
import {Button, TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Autocomplete} from '@material-ui/lab'
import {useDropzone} from 'react-dropzone'
import {PostContext} from '../../../../context/PostContext'


const useStyles = makeStyles((theme)=>({
    image:{
        height: 200,
        width: 200,
        marginTop: theme.spacing(1)
    },
    titulo:{
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    textArea:{
        width:'100%',
        resize:'none',
        outline: 'none',
        fontSize: 15,
        marginTop: theme.spacing(1)
    }

}))

const tags = [
    { title: '#Guerradascorrentes'},
    { title: '#PsgvsBayer'}
]

export default function Editor(){
    const classes = useStyles()
    const ctx = useContext(PostContext)
    const {
        image, 
        setImage, 
        title, 
        setTitle,
        tag,
        setTag,
        describe,
        setDescribe} = ctx

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () =>{
            const base64data = reader.result
            setImage(base64data)
        }
      }, [setImage])


      const {getRootProps, getInputProps} = useDropzone({onDrop, multiple:false, accept:'image/*'})
    return(
        <div>
        <div {...getRootProps()}>
             <input {...getInputProps()} />
             <Button color="primary" variant="outlined">Anexar imagem</Button>   
            </div>
            
            {image &&
            <img src={image} alt="post" className={classes.image}/>
            }
                <TextField placeholder="Título" id="title" fullWidth variant="outlined" className={classes.titulo} value={title} onChange={setTitle}/>
                <Autocomplete
                multiple
                id="tags-standard"
                options={tags}
                getOptionLabel={(option) => option.title}
                value={tag}
                onChange={setTag}
                renderInput={(params) => (
            <TextField
                {...params}
                variant="outlined"
                placeholder="Hashtags"
          />
        )}
      />
         <textarea  value={describe} className={classes.textArea} rows="5" placeholder="Descrição" onChange={setDescribe}></textarea>
         </div>
    )
    
}