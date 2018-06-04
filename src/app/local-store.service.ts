import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService  {
  itemList = [];
  constructor() {
    this.itemList = this.retriveItemsFromTodoList()
  }

  getList(){
    return this.itemList
  }

  addItemToList(newItem){
    this.itemList.push(newItem)
    this.addChangesToLocalStorage()
  }

  removeItemFromList(index){
    this.itemList.splice(index,1);
    this.addChangesToLocalStorage()
  }

  retriveItemsFromTodoList(){
    if(localStorage.getItem("todoList") == null ||  localStorage.getItem("todoList") == undefined || localStorage.getItem("todoList") == ""){
      return []
    } else{
      return JSON.parse(localStorage.getItem("todoList"))
    }
  }

  addChangesToLocalStorage(){
    let todoList = JSON.stringify(this.itemList)
    localStorage.setItem("todoList", todoList);
  }
}
