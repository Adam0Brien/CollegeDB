db.modules.find({moduleId: 116}).pretty()

db.modules.find({moduleName: "NoSql Databases"}).pretty()


//find a lecturer by phone number
db.lecturers.find({"contactInfo.phone" :{$eq: 0851245697}}).pretty()

//find modules with assignments with more than 70%
db.modules.find({"moduleStructure.assignments" :{$gt: 70}}).pretty()