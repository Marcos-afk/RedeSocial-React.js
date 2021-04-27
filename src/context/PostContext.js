import React, {createContext,useState} from 'react'

export const PostContext = createContext()

export default function PostProvider({children}){
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('')
    const [tag, setTag] = useState([])
    const [describe, setDescribe] = useState('')

    function handleTitleChange(event){
        setTitle(event.currentTarget.value)
          
      }

      function handleTagsChange(event, values){
        setTag(values)

      }

      function handleDescribeChange(event){
          setDescribe(event.currentTarget.value)
          
      }


    return (
    <PostContext.Provider value={{ image, setImage, title, setTitle: handleTitleChange, tag, setTag : handleTagsChange, describe, setDescribe : handleDescribeChange}}>
        {children}
    </PostContext.Provider>
    )
}


