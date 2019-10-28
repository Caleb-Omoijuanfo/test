const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// Database Name
const dbName = 'cashbox';

const Users = {

  insert: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the user collection
        const collection = db.collection('users');

        //Number of documents in the collection
        collection.countDocuments({},function(err, answer){
          let user = {
            id: answer + 1,
            firstName: data.firstName,
            surName: data.surName,
            dob: data.dob,
            age: data.age,
            height: data.height,
            weight: data.weight,
          }

        //Insert user data into collection
        collection.insertOne(user, function(err, result){
          if(!err){
            response['status'] = "success";
            response['data'] = result;
            callback(null, response);
          }else {
            response['status'] = "errorInsert";
            response['data'] = newPost;
            callback(null, response);
          }
        });
      });
    });
  },

  findAll: function(data, callback){

    let response = {}

    // Create a new MongoClient
    const client = new MongoClient(url, mongoOptions);
    // Use connect method to connect to the Server
    client.connect(function(err) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      //get Database
      const db = client.db(dbName);

      // Get the documents collection
      const collection = db.collection('users');

      collection.find({}).toArray(function(err, docs) {
        if(!err){
          response['status'] = 'success';
          response['data'] = docs;
          callback(null, response);
        }else {
          response['status'] = 'errorDB';
          response['data'] = data;
          callback(null, response);
        }
      });
    });
  },

  sortFirstName: function(data, callback){

    let response = {}

    // Create a new MongoClient
    const client = new MongoClient(url, mongoOptions);
    // Use connect method to connect to the Server
    client.connect(function(err) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      //get Database
      const db = client.db(dbName);

      // Get the documents collection
      const collection = db.collection('users');

      collection.find({}).sort({ firstName: 1 }).toArray(function(err, docs) {
        if(!err){
          response['status'] = 'success';
          response['data'] = docs;
          callback(null, response);
        }else {
          response['status'] = 'errorDB';
          response['data'] = data;
          callback(null, response);
        }
      });
    });
  },

  sortSurName: function(data, callback){

    let response = {}

    // Create a new MongoClient
    const client = new MongoClient(url, mongoOptions);
    // Use connect method to connect to the Server
    client.connect(function(err) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      //get Database
      const db = client.db(dbName);

      // Get the documents collection
      const collection = db.collection('users');

      collection.find({}).sort({ surName: 1 }).toArray(function(err, docs) {
        if(!err){
          response['status'] = 'success';
          response['data'] = docs;
          callback(null, response);
        }else {
          response['status'] = 'errorDB';
          response['data'] = data;
          callback(null, response);
        }
      });
    });
  },


  delete: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the users collection
        const collection = db.collection('users');

        //Delete document by users id
        collection.deleteOne({ id:Number(data.id) }, function(err, docs) {
          console.log(data);
          if(!err){
            response['status'] = "success";
            response['data'] = docs;
            callback(null, response);
          }else {
            response['status'] = "error";
            response['data'] = data;
            callback(null, response);
          }
        });
    });
  },

  editFirstName: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the users collection
        const collection = db.collection('users');

        //Update document by users id
        collection.updateOne({ id: Number(data.id) }, { $set: { firstName: data.firstName } }, { upsert: true}, function(err, docs) {
          if(!err){
            response['status'] = "success";
            response['data'] = docs;
            callback(null, response);
          }else {
            response['status'] = "error";
            response['data'] = data;
            callback(null, response);
          }
        });
    });
  },

  editLastName: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the users collection
        const collection = db.collection('users');

        //Update document by users id
        collection.updateOne({ id: Number(data.id) }, { $set: { surName: data.surName } }, { upsert: true}, function(err, docs) {
          if(!err){
            response['status'] = "success";
            response['data'] = docs;
            callback(null, response);
          }else {
            response['status'] = "error";
            response['data'] = data;
            callback(null, response);
          }
        });
    });
  },

  editDob: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the users collection
        const collection = db.collection('users');

        //Update document by users id
        collection.updateOne({ id: Number(data.id) }, { $set: { dob: data.dob } }, { upsert: true}, function(err, docs) {
          if(!err){
            response['status'] = "success";
            response['data'] = docs;
            callback(null, response);
          }else {
            response['status'] = "error";
            response['data'] = data;
            callback(null, response);
          }
        });
    });
  },

  editAge: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the users collection
        const collection = db.collection('users');

        //Update document by users id
        collection.updateOne({ id: Number(data.id) }, { $set: { age: data.age } }, { upsert: true}, function(err, docs) {
          if(!err){
            response['status'] = "success";
            response['data'] = docs;
            callback(null, response);
          }else {
            response['status'] = "error";
            response['data'] = data;
            callback(null, response);
          }
        });
    });
  },

  editHeight: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the users collection
        const collection = db.collection('users');

        //Update document by users id
        collection.updateOne({ id: Number(data.id) }, { $set: { height: data.height } }, { upsert: true}, function(err, docs) {
          if(!err){
            response['status'] = "success";
            response['data'] = docs;
            callback(null, response);
          }else {
            response['status'] = "error";
            response['data'] = data;
            callback(null, response);
          }
        });
    });
  },

  editWeight: function(data, callback){

    let response = {}

      // Create a new MongoClient
      const client = new MongoClient(url, mongoOptions);
      // Use connect method to connect to the Server
      client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        //get Database
        const db = client.db(dbName);

        // Get the users collection
        const collection = db.collection('users');

        //Update document by users id
        collection.updateOne({ id: Number(data.id) }, { $set: { weight: data.weight } }, { upsert: true}, function(err, docs) {
          if(!err){
            response['status'] = "success";
            response['data'] = docs;
            callback(null, response);
          }else {
            response['status'] = "error";
            response['data'] = data;
            callback(null, response);
          }
        });
    });
  }
}

module.exports = Users;
