import {db} from "./Firebase-Config"
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";


const usersCollectionRef = collection(db, "users-whatsapp")



class UsersdataService = {
    addBooks = (newBook) => {
        return addDoc(usersCollectionRef, newBook)
    }

    updateBook = (id, updateBook) => {
        const bookDoc = doc(db, "users_whatsapp", id)
        return updateDoc(bookDoc, updateDoc)
    }


    deleteBook = (id) => {
        const bookDoc = doc(db, "users_whatsapp", id)
        return deleteDoc(bookDoc)
    }


    getAllBooks = () => {
        return getDocs(usersCollectionRef)
    }

    getBook = (id) => {
        const bookDoc = doc(db, "users_whatsapp", id)
        return getDocs(bookDoc)
    }


}


export default new UsersdataService();