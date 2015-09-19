#MongoDB - simple CRUD queries

##Summary
Implement DAO layer for perform CRUD operations on database using MongoDB.

##Goal
Your goal is to write a DAO layer using MongoDB queries. Use **/app/DAO/phoneDAO** file for your solutions. The collection should have following structure:

```
{
    model: String,
    brand: String,
    stan: String
}
```
 
All DAO methods should return promises. You need to implement those methods in accordance to following guidelines:

####search()
*Arguments:* object with body like: `{ query: '' }` where `query` property is a string to search for

*Return:* array containing all founded data

####getDetails()
*Arguments:* id of phone

*Return:* object with all fields of phone element

####createNewOrUpdate()
*Arguments:* object; if id of provided element already exists in collection it should get proper element and update it; otherwise it should add new element to the collection

*Return:* object with all fields of updated/created phone element

####removePhone()
*Arguments:* id of phone to remove

*Return:* object with all fields of removed phone element



##Setup
Run `npm install` to download all the dependencies.

Run `grunt test` to run unit tests. Note that you have to run `mongod` on your system before running rests.

 
 
Good luck!
