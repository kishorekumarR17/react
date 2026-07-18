

function App (){

 //task 1 string
 
 const course = "React JS"

 //task 2 Number

 const price = 50000
 const discout = 5000

 //task 3 Boolen 

 const islogin = true



 //task 4 Null 

 const ProfileImage = null

 //task 5 Undefined

 const email = undefined

 //task 6 function

 function getcompanyName(){
  return"Google"
 }

 //task 7 Array Rendering

 const actor =["Vijay","Ajith","Suriya","Sk","Dhanush"]


 //task 8 Object Rendering

 const profiles = {Name:"kishore",Course:"react",Experience:2}

//task 9 array of obj Rendering

 const students = [{id:1,name:"kishore",course:"react"},{id:2,name:"naveen",course:"react"},{id:3,name:"kumar",course:"react"}]

 //task 10 mixed  rendering 

 const company = "Google"
 const numberofEmployees = 50000
 const isHiring = true
 const ceo = {name:"Sundar Pichai",age:54}
 const departments = ["HR","Devolpement","Testing","Support"]
 const employees = [{id:101,name:"kishore",role:"Backend developer"},{id:102,name:"balasanjay",role:"software developer"}]
 
 function getLocation(){
  return "chennai"


 }
 return (
  <><div >
  <div>
    {/*task1*/}
    <h1>task1</h1>
    <h2>{course}</h2>
  </div>

  <div>
    <h1>task2</h1>
    <h2>{price}</h2>
    <h2>{discout}</h2>
  </div>
  <div>
    <h1>task3</h1>
    <h2>{islogin?"Welcome User" : " Please login"}</h2>
  </div>
  <div>
    <h1>task4</h1>
    <h2>{ ProfileImage ?'FOUNDED': "No image Founded" }</h2>
  </div>
  <div>
    <h1>task5</h1>
    <h2>{email? "welcome"  :"Email not Available" }</h2>
  </div>
  <div>
    <h1>task6</h1>
    <h2>{getcompanyName()}</h2>
  </div>
  <div>
    <h1>task7</h1>
     {actor.map((actors,index)=>(
      <h2 key={index}>{actors}</h2>
     )
     )}
  </div>
    <h1>task8</h1>
    <h2>Name :{profiles.Name}</h2>
     <h2>Course :{profiles.Course}</h2>
      <h2>Experience :{profiles.Experience}</h2>
  </div>
  <div>
    <h1>task9</h1>
    {students.map((student)=>(
      <div  key={student.id}>
      <h2>Name :{student.name}</h2>
      <h2 >Course :{student.course}</h2>
      </div>
    ))
    }
  </div>

  <div>
    <h1>task10</h1>
     <div>
      <h2>Company : {company}</h2>
      <h2>Total number of employees :{numberofEmployees}</h2>
      <h2>{isHiring ? "Hiring" : "Not Hiring"}</h2>
      <h2>Name of CEO :{ceo.name}</h2>
      <h2>AGE :{ceo.age}</h2>
      <h2>Roles in google</h2>
      {departments.map((role,index)=>(
        <h3 key={index}>{role}</h3>
      ))}

       <h1>Employees Detail :</h1>
      {employees.map((employee)=>(
         
        <div  key={employee.id}>
        
        <h2>Name :{employee.name}</h2>
        <h2>Role :{employee.role}</h2>
        </div>
      ))}
     </div>
     <h1>Location :</h1>
     <h2>{getLocation()}</h2>
  </div>
  </>
 )



}

export default App