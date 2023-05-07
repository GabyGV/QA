import { db } from './firebase';
import {getDocs, collection, addDoc, query, where, setDoc, doc} from "firebase/firestore"


export async function insertNewProduct(product,coleccion){
    try {
      const docRef = collection(db,coleccion);
      await addDoc(docRef,product);
    } catch (error) {
      console.error(error);
    }
  }
  
  //ToDo: Modificar esta funcion para que funcione correctamente
  export async function getDocWithQuery(setProductD,col,firstElement,op,secondElement){
    try {    
      const colRef = collection(db,col)
      const q = query(colRef, where(firstElement, op, secondElement));
      const querySnapshot = await getDocs(q);    
      const data = querySnapshot.docs.map(doc => doc.data());
      setProductD({...data[0]})
      //return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  
  //(☞ﾟヮﾟ)☞   
  const getElements = async (col) => {
    try{
      const productosC = collection(db, col);
      const productoSP = await getDocs(productosC);
      return  productoSP.docs.map((element) => ({ ...element.data(), id: element.id }))
    }catch(error){
      console.log(error)
    }
  };
  
  const updateProduct = (products)=>{
    return setDoc(doc(db, "Productos", products.id), products);
  }
  
  const updateStatus = async (params)=>{
    return setDoc(doc(db, "Usuarios", params.id), params);
  }
  
  
  export { getElements, updateProduct, updateStatus};