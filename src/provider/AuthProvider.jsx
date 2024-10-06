import { createContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../public/firebase/Firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider=  new GithubAuthProvider();

    const auth = getAuth(app);
    const [user, SetUser] = useState(null);

    //for google loging 
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
 //for github loging 
    const loginWithGithub=()=>{
        return signInWithPopup(auth, githubProvider);
    }

    //for user info pass to other page
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            SetUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, []);


    //logout
    const logOutuser = () => {
        return signOut(auth);
    }


    return (
        <>
            <AuthContext.Provider value={{ loginWithGoogle, user, logOutuser,loginWithGithub }}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export default AuthProvider;