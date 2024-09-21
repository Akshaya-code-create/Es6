
class Student{
    constructor()
  {
        this.id=101;//property1
        this.name='Ajay'//property2
    }    
    showDetails()//method1
{
        console.log(this.id+" "+this.name)
    }
}
let s=new Student();
s.showDetails();


