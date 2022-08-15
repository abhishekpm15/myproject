import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged, signInWithRedirect} from 'firebase/auth'
import {auth} from '../../firebase'
const userAuthContext =createContext();

export function UserAuthContextProvider({children}){

    const [user,setUser] =useState()
    const [error,setError] = useState(false);

      function signUp(email,password){
       createUserWithEmailAndPassword(auth,email,password).then(()=>{setError(false)}).catch(setError)
    }
    function logIn(email,password){
        signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
       const unsub =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unsub();
        }
    },[]);
    return (
        <userAuthContext.Provider value={{user,signUp,error,setError}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext);
}