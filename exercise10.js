const a = { 
    Parent: { Student: {
         Name: "Virat", Age: 24, Rollno: 34, 
         marks: [ { English : 85 }, { Science: 75 } ] } , 
         MobileNos: [ "1234567890", "9087654321" ] } };

const b = Object.assign({},a)
b.Parent = {
    Student: {
        ...a.Parent.Student,
        marks: [
            { English: a.Parent.Student.marks[0].English},
            { Science: a.Parent.Student.marks[1].Science },
        ]
    },
    MobileNos: [...a.Parent.MobileNos[0],
    ...a.Parent.MobileNos[1]]
}

b.Parent.Student.Name = "Virat Kohli";
b.Parent.Student.marks[0].English = 23;

// const b = JSON.parse(JSON.stringify(a))
// b.Parent.Student.Name = " virat kohli"
console.log(JSON.stringify(a));

console.log(JSON.stringify(b));
