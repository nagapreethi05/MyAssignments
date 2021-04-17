const MongoClient = require('mongodb').MongoClient;
// const env= require('dotenv');
// env.config();
 console.log(process.env.mongodb_user);
// const url =`mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_pass}@${process.env.mongodb_server}/BookManagementSystem?retryWrites=true&w=majority`;
const url="mongodb+srv://NagaPreethi:Preethi12345@merncluster.z6xba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName="BookManagementSystem";
async function run()
{
    try{
        await client.connect();
        console.log("connected to db");
        const mydb=client.db(dbName);
        const mycollection=mydb.collection('Books');
        
        
            //***insert start***
            // const myinsert= await mycollection.insertMany([
            //      {"title": "Five Little Pigs", "author":"Agatha Christie", "price": "180","rating": "3" },
            //         {"title": "Half Girl Friend","author": "Chetan Bhagat", "price": "180","rating": "3.2"  },        
            //     ]);
              //***display start***
        const mydocuments=await mycollection.find();
        mydocuments.forEach(element=>{
            console.log(element);
        })
            //***update start***
            // // create a filter for a book to update
            // const filter = {  title: 'The Accursed God'};
            // // this option instructs the method to create a document if no documents match the filter
            // const options = { upsert: true };
            // // create a document that sets the pages of the book
            // const updateDoc = {
            // $set: {
            //    pages:
            //     "530",
            // },
            // };
            // const result = await mycollection.updateOne(filter, updateDoc, options);
            // console.log(
            // `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
            // );
            //***delete start
            // Query for all books with the title "Half Girl Friend"
            // const query = { title: "Half Girl Friend" };
            // const result = await mycollection.deleteMany(query);
            // console.log("Deleted " + result.deletedCount + " documents");
            //**end delete
    }catch(err){
        console.log(err);
    }
    finally{
        await client.close();
    }
}
run();