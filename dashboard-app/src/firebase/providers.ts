// ? Importamos lo de google auth
import { GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from './config';

// ? Instanciamos esa función
const googleProvider = new GoogleAuthProvider();



// ? Ahora exportamos una promesa o función asincrona
export const sigInWithGoogle = async()=>{
  // ! TRY: Para manejar los errores
  try {
    // TODO: Activamos el popup y accedemos a los datos
    const result = await signInWithPopup(FirebaseAuth,googleProvider);

    // TODO: Ese result nos regresa la data del usuario, solo accedemos a algunos datos
    return {
      ok: true,
      name: result.user.displayName,
      email: result.user.email,
      photoURL: result.user.photoURL,
      uid: result.user.uid
    };
    //TODO: TODO ESE CODIGO LO LLAMAREMOS EN NUESTRO THUNKS

  } catch (error) {

    return{
      ok: false,

    }
  };

};


//Creamos un nuevo proveedor
export const registerUserWhithEmailPassword = async({email,password,displayName}:any)=>{

  try {
    
    const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
    console.log(resp);

    //TODO: TENEMOS QUE ACTUALIZAR EN NAME EN FIREBASE

    //Importamos esto
    await updateProfile(FirebaseAuth.currentUser!,{ displayName });

    return {
      ok:true,
      displayName,
      email,
      uid: resp.user.uid,
      photoURL: resp.user.photoURL
    }

  } catch (error) {
    ok:false
  }

};

export const loginWithEmailPassword = async({email,password}:any)=>{
  try {
    
    //Importamos nuestra funcion async y mandmos los argumentos
    const resp = await signInWithEmailAndPassword(FirebaseAuth,email,password);

    //Desetrucutaramos de la data que viene
    const { uid,displayName,photoURL } = resp.user;

    return {
      ok:true,
      uid,
      displayName,
      photoURL
    };

  } catch (error) {
    
  }

};


export const logoutFirebase = async()=>{
  return await FirebaseAuth.signOut();
};

