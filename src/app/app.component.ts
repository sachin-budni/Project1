import { Component, ViewEncapsulation } from '@angular/core';
import { CustomerModel } from './customer.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent 
{

  subject: string = "Mean Stack"
  imgPath: string = "assets/images/1.png"

  subjects: string[] = [ 'Java', 'J2EE', 'Angular'];

  isJavaLearningCenter: boolean = true;

  customer: {} = {
    name: 'Abc',
    address: 'xyz',
    age: '30'
  }

  customer1 : CustomerModel = new CustomerModel();

  customers : CustomerModel[] = [];

  institute1: string = undefined;

  constructor(){
    this.customer1.name = "Customer 1"
    this.customer1.address = "Customer 1 Address"
    this.customer1.age = 28

    let customer2 : CustomerModel = new CustomerModel();
    let customer3 : CustomerModel = new CustomerModel();
    let customer4 : CustomerModel = new CustomerModel();
    let customer5 : CustomerModel = new CustomerModel();
    
    customer2.name = "Customer 2"
    customer2.address = "Customer 2 Address"
    customer2.age = 28

    customer3.name = "Customer 3"
    customer3.address = "Customer 3 Address"
    customer3.age = 28

    customer4.name = "Customer 4"
    customer4.address = "Customer 4 Address"
    customer4.age = 28

    this.customers.push(this.customer1)
    this.customers.push(customer2)
    this.customers.push(customer3)
    this.customers.push(customer4)
  }

  getSubject() : string
  {
    return this.subject;
  } 
  la :string ="";
  lock(la)
  {
    this.la=la;
  }
  onClick(institute)
  {
    this.institute1 = institute;
    console.log("new institue value "+ this.institute1)
  }
// ----------------------------------------------
  fruits: string[] = ['Apple', 'Litch', 'Watermelon']
  
    addFruit(fruit)
    {
      this.fruits.push(fruit)
    }
  
    removeFruit(index)
    {
        console.log(index)
        this.fruits.splice(index, 1)
    }

    course: string = ""
    
      openCourse(course){
        this.course = course;
      }
}
//--------------------------------------------------------------


@Component({
  selector: 'java-course',
  template: `
    <h1>This is a Java Course</h1>
  `
})
export class JavaCourse{

}

@Component({
  selector: 'j2ee-course',
  template: `
    <h1>This is a J2EE Course</h1>
  `
})
export class J2EECourse{

}

@Component({
  selector: 'mean-course',
  template: `
    <h1>This is a Mean Course</h1>
  `
})
export class MeanCourse{

}

@Component({
  selector: 'default-course',
  template: `
    <h1>This is a default Course</h1>
  `
})
export class DefaultCourse{

}
