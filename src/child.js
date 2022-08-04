import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api collection;
  @api errorMessage;

  showError= false;
  
  localCopy;
  

  connectedCallback(){
  console.log(JSON.stringify(this.collection));
    this.localCopy = JSON.parse(JSON.stringify(this.collection));
    this.showError = this.errorMessage != null;
  }
  submit(){
    console.log(JSON.stringify(this.localCopy, null, 4));
  }
  handleChange(event){
    //console.log(' here : ' + JSON.stringify(event.target.name) +' =' + event.target.value );
    //this.collection.find(item => {return item.fieldName==event.target.name;}).value = event.target.value;


    console.log (JSON.stringify(this.localCopy.find(item => {return item.fieldName==event.target.name;})));
    var obj = this.localCopy.find(item => {return item.fieldName==event.target.name;});
    obj.value = event.target.value;
  }

}
