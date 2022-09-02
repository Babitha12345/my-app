import { Component, OnInit } from '@angular/core';
import resumeData from "./resume.json"
interface Resume {  
    
  name: String;  
 
  contact : {
    email:String;
    location:String;
    mobile:String;
    
    
  },
  education:{
    ug:{
      degree:String;
      institute:String;
      branch:String;
      cgpa:String;
      year:String;
      
    },
    hsc:{
      degree:String;
      institute:String;
      branch:String;
      cgpa:String;
      year:String;
    }
  },
  projects:{
    project1:{
      title:String,
      desc1:String,
     
    },
    
  },
  workexp:{
    work:{
      company:String,
      designation:String,
      startdate:String,
      enddate:String,
      tasks:String
    },
  },
  certifications:{
    certificate1:{
      name:String;
      
    }
    certificate2:{
      name:String;
     
    }
  },
  languages:{
    lang1:{
      name:String;
      
    }
    lang2:{
      name:String;
      
    }
    lang3:{
      name:String;
      
    }
  },
skills:{
  skill1:String;
  skill2:String;
  skill3:String;
  skill4:String;
  skill5:String;
  skill6:String;
  skill7:String;
  
},
Hobbies:{
  name:String;
}
    
}  
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume : Resume = resumeData
  constructor() { }

  ngOnInit(): void {
  }

}