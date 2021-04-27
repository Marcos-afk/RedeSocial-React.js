import mock from '../utils/mock'

mock.onPost('/api/home/me').reply(200,{
    user:{
        id: 1,
        name: 'Marcos André',
        username: 'marcosandre',
        email:'marcosandre300@gmail.com',
        avatar:'/images/avatars/avatar1.jpeg'
    }
})

mock.onGet('/api/home/user/marcosandre').reply(200, {
    
        id: 1,
        name: 'Marcos André',
        username: 'marcosandre',
        email:'marcosandre300@gmail.com',
        avatar:'/images/avatars/avatar1.jpeg',
        work: 'Cientista da Computação',
        totalPost: '120',
        joinedIn: '19 de Abril de 2021',
        acessToken: 'dadadada'
    
})


mock.onPost('/api/home/login').reply((config)=>{
    const {email, password} = JSON.parse(config.data)

    if(email !== 'marcosandre300@gmail.com' || password !== 'admin' ){
        return[400, {
            message: 'Senha ou/e email incorreto(s)'
        }]
    }

    const user = {
        id: 1,
        name: 'Marcos André',
        username: 'marcosandre',
        email:'marcosandre300@gmail.com',
        avatar:'/images/avatars/avatar1.jpeg'
    }

    return [200, {user}]
})