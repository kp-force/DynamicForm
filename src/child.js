import { LightningElement, api } from "lwc";

/**
 * Show an item
 */

export default class Child extends LightningElement {
  @api collection;
  @api errorMessage;
  showError= false;

  localCopy; 
  unfilledRequiredFields = new Set();

  notAllFieldsSubmitted = false;
  

  connectedCallback(){
    console.log(JSON.stringify(this.collection));
    this.unfilledRequiredFields = new Set();
    this.localCopy = JSON.parse(JSON.stringify(this.collection));
    this.showError = (this.errorMessage != null && this.errorMessage != "");
    for(var i=0; i< this.localCopy.length; i++){
      if(this.localCopy[i].isRequired == true  &&  this.localCopy[i].value == ""){
        this.unfilledRequiredFields.add(this.localCopy[0].fieldName);
        this.notAllFieldsSubmitted = true;
      }
      this.localCopy[i].isPicklist = (this.localCopy[i].type =="picklist");
    }
    
  }
  renderedCallback(){
            
  }
 

  submit(){
    console.log(JSON.stringify(this.localCopy, null, 4));

  }
  handleChange(event){    
    var obj = this.localCopy.find(item => {return item.fieldName==event.target.name;});
    obj.value = event.target.value;
    if(obj.isRequired){
      if(obj.value =="" || obj.value == null){
        this.unfilledRequiredFields.add(obj.fieldName);
      }else{
        this.unfilledRequiredFields.delete(obj.fieldName);
      }
      this.notAllFieldsSubmitted =  this.unfilledRequiredFields.size > 0;
    }
    
        
  }

}
