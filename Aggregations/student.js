
// $match all student names, not equal to Adam
db.students.aggregate([{
    $match: {
      "firstName":{ "$ne": "Adam" }
    }
  }]).pretty()

db.students.count();

db.students.findOne()

db.students.aggregate([{
    $match: { "contactInfo.phone": { "$eq": 0858275412 } }
  }]).pretty()
  


  