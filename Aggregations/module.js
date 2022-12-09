
// $match all student names, not equal to Adam
db.modules.aggregate([{
    $match: {
      "moduleName":{ "$ne": "NoSQL Databases" }
    }
  }]).pretty()

db.modules.count();

db.modules.findOne()

db.modules.aggregate([{
    $match: { "moduleStructure.test": { "$eq": 50 } }
  }]).pretty()

  