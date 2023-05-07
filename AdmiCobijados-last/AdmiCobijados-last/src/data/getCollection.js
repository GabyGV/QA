import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
//(☞ﾟヮﾟ)☞ 

const getCollection = async (col) => {
    const coleccionC = collection(db, col);
    const coleccionSP = await getDocs(coleccionC);
    return  coleccionSP.docs.map((element) => ({ ...element.data(), id: element.id}))
};

export { getCollection };