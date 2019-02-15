import cookie from 'react-cookies';
import { confirmAlert } from 'react-confirm-alert';
export const _setCookies = (name,value,day) =>{
    const expires = new Date()
    expires.setDate(expires.getDate() + day);        
    return cookie.save(name,value,{
       path: '/',
       expires,                       
       secure: false      
       });
}

export const _readCookie = (name) =>{
    return cookie.load(name);
}

export const _guid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4();
}
export const _isLoggedIn = () =>{
    return _readCookie('Logged_in_user') || false; 
}