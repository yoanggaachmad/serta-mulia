const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
    const projectId = 'serta-mulia-423813';
    const db = new Firestore({ projectId });

    const predictCollection = db.collection('prediction');
    return predictCollection.doc(id).set(data);
}

module.exports = storeData;