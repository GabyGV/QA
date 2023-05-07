import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';


const getFacturas = async (id) => {
    const coleccionC = collection(db, "Facturas");
    const coleccionSP = await getDocs(coleccionC);
    return coleccionSP.docs.map((element) => ({ ...element.data(), id: element.id})).filter(element => element.usuario === id);
};

export { getFacturas };