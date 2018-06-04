import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemList = ["hit to GYM","buy fruits","order food"];
 // itemList = [];
  
  newItem = "";

  // function to add item to list 
   pushItem = () => {

     /*if(this.newItem == ""){
       alert("please enter task to be done");
     }*/

     if(this.newItem != "") {
       this.itemList.push(this.newItem);
       this.newItem = "";
     }
  } // end of pushItem

  enterKey = (event) => {
    if (event.keyCode === 13) {
      this.pushItem();
    }
  }

  // function to remove item from the list
  removeItem = (index) => {
    this.itemList.splice(index,1);
  }

}
