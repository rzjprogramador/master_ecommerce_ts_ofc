import * as admin from 'firebase-admin'

const serviceAccount = require('./file_conexao_conta/file-conexao.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

// const db = admin.firestore()

// DOCS DE ENTIDADE NO BANCO

export const db = {
    clientespf: admin.firestore().collection('clientespf'),
}