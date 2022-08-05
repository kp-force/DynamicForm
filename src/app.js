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
        isRequired :true	
      },

      {
        type : "text",
        fieldName : "lastName",
        label  : "Last Name",
        value :	"uoi",
        isRequired :true
      },

      {
        type : "picklist",
        fieldName : "salutation",
        label  : "Salutation",        
        isRequired :true,
        options : [
            { value : "Mr", label : "Mr"},
            { value : "Mrs", label : "Mrs"},
            { value : "Dr", label : "Dr"} ]
      }
    ];

    this.errorMessage = "";
  }
  
  
  handleCustomerCreation(event){
      //invoking customer creation API

  }

  

}
