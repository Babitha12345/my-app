import { Component } from '@angular/core';
import studentsData from './students.json';

 interface Student{
   id:Number;
  name:String;
   attendance:String;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  student:Student[]=studentsData;
  
}
