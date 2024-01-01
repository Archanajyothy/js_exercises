/*Input Data:
var data = [
  {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
  {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
  {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648"}
]

Applying the below rules:
1. Remove all leading and trailing from all the fields
2. Concatinate first name and last name to construct "Name"
3. Phone : 
   3.1 Print only 10 digits
   3.2 If length is less than 10 prefix with zeros as needed and make it 10
   3.3 If length is greter than 10 remove digits from right and make it 10
4. Print "NA" if age is not in between 0 - 150
5. Mask lst 3 digit of Id with #

Output:
Print the data in following format:

Name : Ann Wilson
Phone : 0293782456 (Print only 10 digits, if give
zip : 20001
Age : Nil
Id  : 12345
-------------------------------------------------------
Name : Next record
Phone : 0293782456 (Print only 10 digits, if give
zip : 20001
Age : Nil
Id  : 12345 */

var data = [
    {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
    {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
    {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648"}
  ]
data.forEach(element => {
    element.firstname = element.firstname.trim();
    element.lastname = element.lastname.trim()
    element.newId = element.id.slice(0, -3) + "###"
    element.zip =  element.zip.split(' ').join('')
});
data.forEach(person => {
    person. fullname = person.firstname + " " + person.lastname
    if(person.phone.length > 10){
        person.phone= person.phone.slice(0,10)
    }else if(person.phone.length< 10){
        let n = ''
        for(let i = 0; i< 10-person.phone.length; i++){
            n = n + '0'
        }
        person.phone = n + person.phone
    }else{
        person.phone = person.phone
    }
    person.age = person.age < 150 ? person.age : 'NA' 
});
data.forEach(person => {
    console.log("Name :",person.fullname,"\nPhone :",person.phone, "\nZip :",person.zip, "\nAge :",person.age,"\nId :", person.newId,"\n")
});
