import {GeoPoint, collection, doc, setDoc, getDocs, getDoc } from "firebase/firestore"; 
import { db } from "../../firebase";
const itemsRef = collection(db, "items");

export async function CreatePackage (lng,lat, pkgName, pkgStatus) {
    await setDoc(doc(itemsRef), {
        'pkgLoc': new GeoPoint(12.23, 12.24),
        'pkgName': "Parcel-2",
        'pkgStatus' : "progress",
        });
    
}

export async function GetPackages() {

    const querySnapshot = await getDocs(itemsRef);
    let pkgs= []
    querySnapshot.forEach((doc) => { pkgs.push({
        id: doc.id,
        name: doc.data().pkgName,
        lng: doc.data().pkgLoc.longitude,
        lat: doc.data().pkgLoc.latitude,
        status: doc.data().pkgStatus
    })})
    //console.log(pkgs)
    return pkgs
}
export default {CreatePackage, GetPackages}