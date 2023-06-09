import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../data/firebase";
import { insertUser } from '../../data/InsertUser'

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  const insertUserFB = () => {
    const obtenerUsuario = onAuthStateChanged(auth, (currentUser) => {
      insertUser(currentUser.reloadUserInfo.localId, {codigo_postal: "0000", correo: currentUser.email, img: currentUser.photoURL, nombre: currentUser.displayName, status: true, telefono: "0000-0000", direccion: ""})
    })
    obtenerUsuario()
  }

  const insertUserRegister = (cp, mail, image, name, estado, phone) => {
    const obtenerUsuario = onAuthStateChanged(auth, (currentUser) => {
      insertUser(currentUser.reloadUserInfo.localId, {codigo_postal: cp, correo: mail, img: image, nombre: name, status: estado, telefono: phone, direccion: ""})
    })
    obtenerUsuario()
  }

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  //Compartidos
  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
        insertUserFB,
        insertUserRegister
      }}
    >
      {children}
    </authContext.Provider>
  );
}
