db.students.update({studentId: 20094360}, 
    {studentId: 20094360, 
    firstName: 'Adam D',
     lastName: 'O\'Brien',
     contactInfo: {
    email:"20093460@mail.wit.ie",
    phone: 0858275412
},
modules: [
        
    { "moduleId" : 123 },
    { "moduleId" : 122 },
    { "moduleId" : 121 },
    { "moduleId" : 120 },
    { "moduleId" : 119 },
    { "moduleId" : 118 },
]} ,{upsert:true})

