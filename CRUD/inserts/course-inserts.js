

db.courses.insertOne(
    {
        courseId:123,
        courseDepartment:"Science & Computing",
        courseName : "Applied Computing",
        courseLevel: 8,
        durationYears: 4,
        LeavingCertPoints: 281,

        lecturers:[
            { "employeeId" : 132874 },
            { "employeeId" : 135792 },
            
        ],

        studentsEnrolled:[
            { "studentId" : 20093460 },
            { "studentId" : 20098715 },
            { "studentId" : 20093434 },
        ]
    }
)



db.courses.insertOne(
    {
        courseId:124,
        courseDepartment:"Science & Computing",
        courseName : "Physics for modern technology",
        courseLevel: 8,
        durationYears: 4,
        LeavingCertPoints: 315,

        lecturers:[
            { "employeeId" : 135791 },
        ],

        studentsEnrolled:[
            { "studentId" : 20089460 },
            { "studentId" : 20083000 },
        ]
    }
)


db.courses.insertOne(
    {
        courseId:125,
        courseDepartment:"Engineering",
        courseName : "Mechanical Engineering",
        courseLevel: 8,
        durationYears: 4,
        LeavingCertPoints: 347,

        lecturers:[
            
            { "employeeId" : 135796 },
          
        ],

        studentsEnrolled:[
            
            { "studentId" : 20093434 },
            
        ]
    }
)


db.courses.insertOne(
    {
        courseId:126,
        courseDepartment:"Science & Computing",
        courseName : "Software Systems Development",
        courseLevel: 7,
        durationYears: 3,
        LeavingCertPoints: 302,

        lecturers:[
           
            { "employeeId" : 135793 },
           
        ],

        studentsEnrolled:[
            { "studentId" : 20093460 },
            { "studentId" : 20098715 },
            { "studentId" : 20093434 },
            { "studentId" : 20089460 },
            { "studentId" : 20083000 },
        ]
    }
)
