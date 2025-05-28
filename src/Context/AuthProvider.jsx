// import React from 'react';
// import { AuthContext } from './AuthContext';
// // import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// // import { auth } from '../Firebase/firebase.init';

// const AuthProvider = ({children}) => {

   

//     // const createUser =(email, password)=>{
//     //     return createUserWithEmailAndPassword(auth, email, password)
//     // }

//     // const signInUser = (email, password)=>{
//     //     return signInWithEmailAndPassword(auth, email, password)
//     // }

//      const userInfo = {
//         email: 'jamiludddin',
//         name: 'jjjjajja'
//     }

//     return (
//         <AuthContext value={userInfo}>
//             {children}
//         </AuthContext>
//     );
// };

// export default AuthProvider;

import React, { createContext, useEffect, useState } from 'react';
// import app from '../firbase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from './AuthContext';
import app from '../firebase/firebase.init';

// export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null);

    const [loading, setLoading]=useState(true);

    

    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleSignIn =()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }



    const logOut=()=>{

        return signOut(auth)
    }

    useEffect(()=>{
     const unSubscribe  = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    }, [])

    const authData = {
        user,
        setUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        googleSignIn,
        createUser
    };

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;