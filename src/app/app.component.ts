import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from './local-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  itemList = []

  constructor( private localStorage : LocalStoreService){}
 // itemList = [];

  ngOnInit(){
    this.itemList = this.localStorage.getList()
  }

  newItem = "";


  // function to add item to list
   pushItem = () => {

     /*if(this.newItem == ""){
       alert("please enter task to be done");
     }*/

     if(this.newItem != "") {
       this.localStorage.addItemToList(this.newItem);
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
    this.localStorage.removeItemFromList(index)
  }

}
