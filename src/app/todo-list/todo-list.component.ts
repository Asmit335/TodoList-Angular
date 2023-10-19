import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  taskArry=[{taskName:"Bath", isCompleted:false}];
  
onSubmit(form:NgForm){

  
   this.taskArry.push({
    taskName: form.controls['task'].value,
    isCompleted:false
   })

   form.reset();

}

onDelete(index:number){
  this.taskArry.splice(index,1)
}

onCheck(index:number){
  this.taskArry[index].isCompleted=!this.taskArry[index].isCompleted
}


}
