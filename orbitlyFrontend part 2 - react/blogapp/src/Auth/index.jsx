import { json } from "react-router-dom"
//isLoggedIn
export const isLoggedIn = () => {
    let data = localStorage.getItem('data');
    if(data == null){
        return false;
    }
    return true;
}


//doLoggedIn
export const doLoggedIn = (data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next();
}

//doLoggedOut
export const doLoggedOut = (next)=>{
    localStorage.removeItem("data");
    next();
}

//getCurrentUserDetail
export const getCurrentUserDetail = () =>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data"))
        //.user;
    }
    return undefined;
}

export const getToken = () => {
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).token;
    }
    else{
        return null;
    }
}
