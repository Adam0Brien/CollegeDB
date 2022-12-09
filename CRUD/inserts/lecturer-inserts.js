

db.lecturers.insertOne(
    {
        employeeId: 132874,
        firstName :"Clodagh",
        lastName :"Power",
        contactInfo: {
            email:"C.Power@mail.setu.ie",
            phone: 0851245697
        },
        modulesToTeach: [
            { "moduleId" : 116 }, // nosql
        ],
        qualifications: {
            jobs: ["lecturing at WIT/SETU"],
            degree: ["MSc in NoSQL"]
        }
       
    }
)


db.lecturers.insertOne(
    {
        employeeId: 135792,
        firstName :"Peter",
        lastName :"Carew",
        contactInfo: {
            email:"P.Carew@mail.setu.ie",
            phone: 0871239875
        },
        modulesToTeach: [
            { "moduleId" : 117 }, // project 5
        ],
        qualifications: {
            jobs: ["Programmer at Apple,AIB"],
            degree: ["PHD in Psychology"]
        }
       
    }
)


db.lecturers.insertOne(
    {
        employeeId: 135796,
        firstName :"Jason",
        lastName :"Berry",
        contactInfo: {
            email:"J.Berry@mail.setu.ie",
            phone: 0871239878
        },
        modulesToTeach: [
            { "moduleId" : 122 }, // project 3
        ],
        qualifications: {
            jobs: ["Engineer at Intel"],
            degree: ["MSc in Electronic Engineering"]
        }
       
    }
)


db.lecturers.insertOne(
    {
        employeeId: 135793,
        firstName :"Claire",
        lastName :"Keary",
        contactInfo: {
            email:"C.Keary@mail.setu.ie",
            phone: 0871239879
        },
        modulesToTeach: [
            { "moduleId" : 124 }, // electronic devices
        ],
        qualifications: {
            jobs: ["Physicist at nasa"],
            degree: ["PHD in Physics"]
        }
       
    }
)



db.lecturers.insertOne(
    {
        employeeId: 135791,
        firstName :"Johhny",
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
       
    }
)