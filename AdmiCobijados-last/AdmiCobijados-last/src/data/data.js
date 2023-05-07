import { db } from './firebase';
import { collection, getDocs, doc, getDoc,
         query, where,  } from 'firebase/firestore';

  //TODO: Crear la funcionalidad para filtar por colecciones (con un combo box)
  //(☞ﾟヮﾟ)☞
  const productosC = collection(db, 'Productos');
  const getProducts = async () => {
    const productoSP = await getDocs(productosC);
    return  productoSP.docs.map((element) => ({ ...element.data(), id: element.id }))
  };
  
  /*Recibe el nombre de la colección y el ID del documento y retorna la
  información del documento*/
  export async function getSpecificDoc(col,docId){
    const docRef = doc(db,col,docId)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
  }

  export async function getDocsWithQuery(col,firstElement,op,secondElement){
    try {    
      const colRef = collection(db,col)
      const q = query(colRef, where(firstElement, op, secondElement));
      const querySnapshot = await getDocs(q);    
      const data = querySnapshot.docs.map(doc => doc.data());
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  export { getProducts };