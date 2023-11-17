import React from 'react'


const BevContext = React.createContext({
    userToken:"",
    loginSuccess: () => { },
    logOut:()=>{}
})

export default BevContext;