//Reducer for fuction table information

export default function reducer(state={
  functionName: 'Test_function',
  userFilled: false
},action){
switch(action.type){
  case "ADD_FUNCTION":{
    return{state}
  }
  case "REMOVE_FUNCTION":{
    return{state}
  }
  case "EDIT_FUNCTION":{
    return{state}
  }
}
  return state
}
