
db.modules.find({moduleId: 116}).pretty()

db.modules.find({moduleName: "NoSql Databases"}).pretty()


//find all modules with 50% assignments in them
db.modules.find({"moduleStructure.assignments" :{$eq: 50}}).pretty()

//find modules with assignments with more than 70%
db.modules.find({"moduleStructure.assignments" :{$gt: 70}}).pretty()