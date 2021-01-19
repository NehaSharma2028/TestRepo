// CREATE A FUNCTION IN JAVASCRIPT THAT DISPLAYS THE AGE OF THE EMPLOYEE USING PROTOTYPES

function Semesters ( Sem1 , Sem2 )
{
this.Sem1 = Sem1;
this.Sem2 = Sem2;
}

// The function above named Semesters has a invisible prototype property .. An
// prototype property is nothing but an prototype object and this is associated constructor 
// and this constructor is directly associated with the function 

Semesters.prototype.Result = function ()
{
 console.log ( " The  addition of both the Semester Marks is " + ( this.Sem1 + this.Sem2 ));
}
console.log (Semesters.prototype);

 let Student1 = new Semesters (98 , 87 );
console.log ("Result of a student in Semester1 " + Student1);
console.log(Student1.Sem1);
Student1.Result();

let Student2 = new Semesters ( 88, 55);
console.log ("Result of the Student in Semester 2 " + Student2);
Student2.Result();

