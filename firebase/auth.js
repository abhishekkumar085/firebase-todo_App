import React,{createContext,useContext,useState,useEffect} from "react";
import { onAuthStateChanged,signOut as authSignOut, signOut } from "firebase/auth";
import { auth } from "./firebase";

const AuthUSerContext=createContext({
    authUser:null,
    isLoading:true
});
export default function useFirebaseAuth(){
    const[authUser,setAuthUser]=useState(null);
    const[isLoading,setIsLoading]=useState(true);

    const clear=()=>{
        setAuthUser(null)
        setIsLoading(false)

    }

    const authStateChanged =async (user)=>{
        setIsLoading(true)
        //if user logout
        if(!user){
           clear()
           return;
        }
        //if user login 
        setAuthUser({
            uid:user.uid,
            email:user.email,
            username:user.displayName
        })
        setIsLoading(false)


    }
    const singOut=()=>{
        authSignOut(auth).then(()=>clear())
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,authStateChanged)
        return()=> unsubscribe();
    },[]);
    return{
        authUser,
        isLoading,
        setAuthUser,
        signOut
    }
}

export const AuthUSerProvider=({children})=>{

    const auth=useFirebaseAuth();

    return(
<AuthUSerContext.Provider value={auth}>
{children}
</AuthUSerContext.Provider>
    )

};
export const useAuth=()=>useContext(AuthUSerContext)
