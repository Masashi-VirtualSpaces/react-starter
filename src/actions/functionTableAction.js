//How to import in other files for use:
//import * as function from ".../functionTableAction"
//where ".../functionTableAction" is the path to this file.
//Then to call an action use function.addFunction etc...

//Action used to add a function.
export function addFunction(name){
  //Add fuctionality here.
  return{
    type:'ADD_FUNCTION',
    payload: name,
  }
}

//Action used to remove a function.
export function removeFunction(){
  //Add fuctionality here.
  return{
    type:'REMOVE_FUNCTION',
    payload:null,
  }
}

//Action used to edit a function.
export function editFunction(name){
  //Add fuctionality here.
  return{
    type:'EDIT_FUNCTION',
    payload:name,
  }
}
