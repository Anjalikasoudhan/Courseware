import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { ProfessorService } from 'src/app/services/professor.service';
import $ from 'jquery';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.html',
  styleUrl: './addcourse.css'
})
export class Addcourse {

  course = new Course();
  msg = '';

    constructor(private _professorService : ProfessorService, private _router : Router) { }
    ngOnInit():void
    {
      $("#websitelink, #youtubelink").css("display","none");
    $("#websitelink").hide();
    
    $("select").on('change', function() {
      $(this).find("option:selected").each(function() {
          var option = $(this).attr("value");
          if(option === "Website") {
            $("#websitelink").css("display","block");
            $("#youtubelink").css("display","none");
          } 
          else if(option === "Youtube")
          {
            $("#youtubelink").css("display","block");
            $("#websitelink").css("display","none");
          }
      });
    }).change();
  }
  addCourse()
  {
    this._professorService.addCourse(this.course).subscribe(
      (data:any)=>{
                console.log("Course added Successfully !!!");
        this._router.navigate(['/addchapter']);
      },
      (error:any) =>{
        console.log("Process Failed !!!");
        console.log(error.error);this.msg ="Course with "+this.course.coursename+"already exists !!!";
      }
    )
  }



}
