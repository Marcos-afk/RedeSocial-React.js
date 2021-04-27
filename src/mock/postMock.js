import mock from '../utils/mock'

mock.onGet('api/post/hoje-comeca-cosmos-ansiosos').reply(200, {
    id : 1,
    title:'Hoje começa cosmos, ansiosos ?',
    slug: 'hoje-comeca-cosmos-ansiosos',
    description: 'Inicio da Jornada na série Cosmos',
    date : 'March 26, 2021',
    autor:{
        id: 1,
        name:'Marcos André',
        username: 'Martins',
        avatar: '/images/avatars/avatar1.jpeg'
    },
    image: '/images/posts/post8.jpg',
    hashtags:'#Astronomia #Cosmos',
    likes: 10, 
    comments : 30,
    comment: `
  _Compact style:_
  
  Comentários virão aqui
    ~ Definition 1
  
  Comentários virão aqui
    ~ Definition 2a
    ~ Definition 2b`,
})

mock.onGet('/api/feed').reply(200, {
            posts : [
        {
            id: 1,
            autor:{
                id: 1,
                name:'Marcos André',
                username: 'Martins',
                avatar: '/images/avatars/avatar1.jpeg'
            },
            title:'Hoje começa cosmos, ansiosos ?',
            slug: 'hoje-comeca-cosmos-ansiosos',
            date: 'March 26, 2021',
            description: 'Inicio da Jornada na série Cosmos',
            image: '/images/posts/post8.jpg',
            hashtags:'#Astronomia #Cosmos',
            likes: 10, 
            comments : 30
        },
        {
           id: 2,
           autor:{
               id: 1,
               name:'Marcos André',
               username: 'Martins',
               avatar: '/images/avatars/avatar1.jpeg'
           },
           title:' Fala galera, trago aqui um pequeno resumo do primeiro episódio de cosmos',
           slug: 'resumo-primeiro-episodio-cosmos',
           date: 'March 27, 2021',
           description: 'Resumo da primeira edição de cosmos!',
           image: '/images/posts/post1.jpg',
           hashtags: '#Olhosnoceu',
           likes: 5, 
        comments : 8
           
       }
       ]
})


mock.onGet('/api/posts/user/marcosandre').reply(200,{
    posts : [
        {
            id: 1,
            autor:{
                id: 1,
                name:'Marcos André',
                username: 'Martins',
                avatar: '/images/avatars/avatar1.jpeg'
            },
            title:'Hoje começa cosmos, ansiosos ?',
            slug: 'hoje-comeca-cosmos-ansiosos',
            date: 'March 26, 2021',
            description: 'Inicio da Jornada na série Cosmos',
            image: '/images/posts/post8.jpg',
            hashtags:'#Astronomia #Cosmos',
            likes: 10, 
            comments : 30
        },
        {
           id: 2,
           autor:{
               id: 1,
               name:'Marcos André',
               username: 'Martins',
               avatar: '/images/avatars/avatar1.jpeg'
           },
           title:' Fala galera, trago aqui um pequeno resumo do primeiro episódio de cosmos',
           slug: 'resumo-primeiro-episodio-cosmos',
           date: 'March 27, 2021',
           description: 'Resumo da primeira edição de cosmos!',
           image: '/images/posts/post1.jpg',
           hashtags: '#Olhosnoceu',
           likes: 5, 
        comments : 8
           
       }
       ]

})
