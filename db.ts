import * as admin from "firebase-admin"
import * as serviceAccount from "./key.json" 

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
    databaseURL: "https://apx-agregando-persistencia-default-rtdb.firebaseio.com"
})

const firestore = admin.firestore()


export {
    firestore
}