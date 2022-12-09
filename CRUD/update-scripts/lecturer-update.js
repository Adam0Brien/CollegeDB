db.lecturers.update({employeeId: 135791}, 
    {
        employeeId: 135791,
        firstName :"Johnathan",
        lastName :"Smith",
        contactInfo: {
            email:"J.Smith@mail.setu.ie",
            phone: 0871239880
        },
        modulesToTeach: [
            { "moduleId" : 123 }, //preffesional communications
        ],
        qualifications: {
            jobs: ["Proffessional Communicator"],
            degree: ["PHD in Proffesional Communications","Masters in Civil Engineering"]
        }
} ,{upsert:true})

