import { LightningElement } from "lwc";

export default class App extends LightningElement {
  collection;
  errorMessage;

  connectedCallback(){
    this.collection = [
      {
        type : "text",
        fieldName : "firstName",
        label  : "First Name",
        value :	"sadsda",
        required :true	
      },

      {
        type : "text",
        fieldName : "lastName",
        label  : "Last Name",
        value :	"uoi"
      }
    ];
  }
  
  
  handleCustomerCreation(event){
      //invoking customer creation API

  }

  

}
