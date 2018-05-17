import * as actionTypes  from './actionTypes';

//ACtionCreators devuelven actions
//Actions = Objeto JS que contienne type y payload
export function set(user){
    return {
        type: actionTypes.CURRENT_USER_SET,
        payload:{
            ...user
        }
    }
}
export function remove(){
    return {
        type: actionTypes.CURRENT_USER_REMOVE
    }

}
export function update(user){
    return {
        type: actionTypes.CURRENT_USER_UPDATE,
        payload:{
            ...user
        }
    }
}
