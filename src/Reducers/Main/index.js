import { PRODUCTS, CART, LOGGEDIN_USER} from '../../Actions/types';
const Main = (state = {}, action) => {
    switch(action.type) {
        case PRODUCTS:
        return { ...state, products: action.payload };  
        case CART:
        return { ...state, cart: action.payload };
        case LOGGEDIN_USER:
        return { ...state, loggedinUser: action.payload };  
        default:
          return state;
      }
}
export default Main;