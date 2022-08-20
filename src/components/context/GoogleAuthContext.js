import React,{createContext, useContext,useEffect,useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'


const AuthContext = createContext({})
const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser(false)
            }
        })
    },[])
  return (
    <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export function useAuth(){
    return useContext(AuthContext)
}