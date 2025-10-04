export const initialStore=()=>{
  return{
    message: null,
    user: "" || "Marcel",
    id: null
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "SET_CURRENT_USER":
      return {
        ...store,
        user: action.payload
      };
      case "SET_CONTACT_ID":
        return{
          ...store,
          id: action.payload
        }
    default:
      throw Error('Unknown action.');
  }    
}
