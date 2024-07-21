import { Persona } from "@/interface/interfaces"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "./firebase"


export const registrarPersona = async(persona: Persona)=>{
    const docRef = await addDoc(collection(db, "personas"), persona);
}

export const obtenerPersona = async(key: string)=>{
    const docRef = doc(db, "personas", key);
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()){
        let persona : Persona = {
            nombre : docSnap.data().nombre,
            apellido : docSnap.data().apellido,
            telefono : docSnap.data().telefono,
            correo : docSnap.data().correo,
            edad : docSnap.data().edad,
            rut : docSnap.data().rut,
            condicionMedica : docSnap.data().condicionMedica,
            objetivoFitness : docSnap.data().objetivoFitness,
            horarioPreferido : docSnap.data().horarioPreferido,
            key : docSnap.id
        }
        return persona;
    }
    else {
        return undefined;
    }
}

export const obtenerPersonas = async()=>{
    const colRef = collection(db, "personas");
    const querySnapshot = await getDocs(colRef);
    let personas : Persona[] = []
    querySnapshot.forEach((doc)=>{
        let persona : Persona = {
            nombre : doc.data().nombre,
            apellido : doc.data().apellido,
            telefono : doc.data().telefono,
            correo : doc.data().correo,
            edad : doc.data().edad,
            rut : doc.data().rut,
            condicionMedica : doc.data().condicionMedica,
            objetivoFitness : doc.data().objetivoFitness,
            horarioPreferido : doc.data().horarioPreferido,
            key : doc.id
        }
        personas.push(persona)
    });
    return personas
}

export const actualizarPersona = async(p : Persona)=>{
    const ref = doc(db, "personas", p.key!)
    await updateDoc(ref, {
        nombre : p.nombre,
        apellido : p.apellido,
        telefono : p.telefono,
        correo : p.correo,
        edad : p.edad,
        rut : p.rut,
        condicionMedica : p.condicionMedica,
        objetivoFitness : p.objetivoFitness,
        horarioPreferido : p.horarioPreferido})
}

export const eliminarPersona = async(p : Persona)=>{
    const ref = doc(db, "personas", p.key!)
    await deleteDoc(ref)
}