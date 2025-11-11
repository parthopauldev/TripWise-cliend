import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,} from 'firebase/auth';
import { auth } from './../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
// create user with email password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
// login user with email password 
     const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log out user 
     const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }
// update profile 
    let updateUser = (updateData) => {
          setLoading(true);
        return updateProfile(auth.currentUser,updateData)
    }
     // loginin with google 
    let loginWithGoogle = () => {
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        logInUser,
        signOutUser,
        updateUser,
        loginWithGoogle,
        user,
        loading
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;