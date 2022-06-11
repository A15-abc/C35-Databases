

/*
DATABASE:

4 operations: CRUD(create, read, update and delete)

refer the database: ref()

Read: on() //listening
    : once() //listens once

Write: set() //delete the existing data and write the new data
name: anna
age: 13

set()
favColor: blue
hobby: coding

Update: update()
favColor: blue
hobby: coding


update()

//Delete()








*/

var database

function setup(){
    database = firebase.database()
    readDB()
    writeDB()
}

function readDB(){
    var dbRef = database.ref()

    dbRef.on("value", function(anna){
        console.log(anna.val())
    } )
}

function writeDB(){
    var dbRef = database.ref()

    /*dbRef.set({
        favColor : "blue",
        hobby: "coding"
    })*/


    dbRef.update({
        favColor : "blue",
        hobby: "coding",
        name: "anna",
        behaviour: "very good girl"
    })
}