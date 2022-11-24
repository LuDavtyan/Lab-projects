import { 
    SETTINGS_CREATE,
    DOMAIN_IGNORED_UPDATE,
    DOMAIN_IGNORED_DELETE,

    LIMITS_TEXT_CREATE,
    WEB_NAME_UPDATE,
    WEB_NAME_DELETE,

    TIME_TEXT_CREATE,
    TIME_TEXT_DELETE,

    MINUTE_TEXT_CREATE,
} from './types';


export function settingsCreate(text, id, ){
    return{
        type: SETTINGS_CREATE,
        data: {text, id},

    }
}

export function domainIgnredUpdate(text, id){
    return{
        type: DOMAIN_IGNORED_UPDATE,
        data: {text, id}
    }
}

export function domainIgnoredDelete( id){
    return{
        type: DOMAIN_IGNORED_DELETE ,
        id
    }
}

export function limitsTextCreate(text, id){
    return{
        type: LIMITS_TEXT_CREATE,
        data: {text, id}
    }
}


export function webNameUpdate(text, id){
    return{
        type: WEB_NAME_UPDATE,
        data: {text, id}
    }
}

export function webNameDelete( id){
    return{
        type: WEB_NAME_DELETE,
        id
    }
}


export function timeTextCreate( time){
    return{
        type: TIME_TEXT_CREATE,
        data: {time},
      
    }
}

export function munuteTextCreate(minute){
    return{
        type:  MINUTE_TEXT_CREATE,
        data: {minute},
    
    }
}


export function timeTextDelete(timeId ){
    return{
        type: TIME_TEXT_DELETE ,
        timeId 
    }
}