import { collection, addDoc  } from 'firebase/firestore';
import { db } from './firebase';

const collectionRef = collection(db, 'Facturas')

const insertCompra = async (carrito) => {
    return addDoc(collectionRef, carrito);
}

export { insertCompra };