import {GeoPoint, collection, doc, setDoc, getDoc } from "firebase/firestore"; 
import { db } from "../../firebase";
const itemsRef = collection(db, "items");

async function CreatePackage (lng,lat, pkgName, pkgStatus) {
    await setDoc(doc(itemsRef), {
        'pkg-loc': new GeoPoint(12.23, 12.24),
        'pkg-name': "Parcel-2",
        'pkg-status' : "progress",
        });
    
}

async function GetPackages() {

    const docSnap = await getDoc(itemsRef);
    
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}
export default CreatePackage