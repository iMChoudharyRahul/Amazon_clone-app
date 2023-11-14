const mongoose = require('mongoose');

const username = encodeURIComponent('Rahul8055');
const password = encodeURIComponent('rahulchoudhary');
const dbName = 'amazon'

/**
 * Database Connection
 */
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.gvwwy8q.mongodb.net/${dbName}?retryWrites=true&w=majority`)
.then(() => {
    console.log("Mongodb succefully connected...")
}).catch((err) => {
    console.log(`Somthing Goes Wrong..Please Check: ${err.message}`);
});