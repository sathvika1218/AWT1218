class student
{
    display()
    {
        console.log("hi from parent class ");

    }
}
class student1 extends student
{
    display1()
    {
        console.log("hii from child class");

    }
}
    let s = new student();
    s.display();
    let s1 = new student1();
    s.display();
    s.display1();

