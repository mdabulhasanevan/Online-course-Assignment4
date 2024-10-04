import { createContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../public/firebase/Firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [user, SetUser] = useState(null);

    //for google loging 
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
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
            <AuthContext.Provider value={{ loginWithGoogle, user, logOutuser }}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export default AuthProvider;