//use college 

//start  


// find student with the id 20093460
db.students.find(
  {studentId: 20094360}
).pretty()

  //this will print objects that have a class_id of 15 AND a student_id of 5
  db.students.find(
    {$and: [
      {firstName: "Adam"},
      {studentId: 20093460}
    ]}
  ).pretty()

// .pretty() -> displays query results in a more readable format
db.students.find(
  {firstName: "Adam"}
).pretty()

//prints data
db.students.find()  







