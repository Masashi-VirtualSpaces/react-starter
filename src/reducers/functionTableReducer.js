//Reducer for fuction table information

export default function reducer(state={
  functionName: 'Test_function',
  userFilled: false
},action)
{
  switch(action.type){
    //Handles addFunction method from functionTableAction.js
    //payload: name
    case "ADD_FUNCTION":{
      return{state}
    }

    //Handles removeFunction method from functionTableAction.js
    //payload: none
    case "REMOVE_FUNCTION":{
      return{state}
    }

    //Handles editFunction method from functionTableAction.js
    //payload: name
    case "EDIT_FUNCTION":{
      return{state}
    }
  }
  
  //default return
  return state
}
