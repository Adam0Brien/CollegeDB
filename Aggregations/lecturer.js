
// $match all student names, not equal to Adam
db.lecturers.aggregate([{
    $match: {
      "employeeId":{ "$ne": 132874 }
    }
  }]).pretty()


db.lecturers.aggregate([{
    $match: { "modulesToTeach.moduleId": { "$eq": 117 } }
  }]).pretty()

db.lecturers.count();

db.lecturers.findOne()