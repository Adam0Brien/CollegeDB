
// $match all student names, not equal to Adam
db.courses.aggregate([{
    $match: {
      "courseName":{ "$ne": "Applied Computing" }
    }
  }]).pretty()

db.courses.aggregate([{
    $match: {
      "courseDepartment":{ "$eq": "Science & Computing" }
    }
  }]).pretty()


db.courses.aggregate([{
    $match: { "lecturers.employeeId": { "$eq": 132874 } }
  }]).pretty()

db.courses.count();

db.courses.findOne()