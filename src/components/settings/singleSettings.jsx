import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { domainIgnoredDelete, domainIgnredUpdate } from "../../redux/actions";

function SingleSettings({data}) {
    const [webPageIgnor, setWebPageIgnor] = useState('')
    const {text, id } = data;

    const dispatch = useDispatch();
    
    const handleIgnorUpdate = (e) => {
        e.preventDefault();
        dispatch(domainIgnredUpdate(webPageIgnor, id))
    }
    useEffect(() => {
        if(text){
            setWebPageIgnor(text)
        }
    }, [text])
    const handleIgnorInput = (e) => {
        setWebPageIgnor(e.target.value)
    }
    const handleIgnorDelete = (e) => {
        e.preventDefault()
        dispatch(domainIgnoredDelete(id))
    }
    return(
        <form onSubmit={handleIgnorUpdate}>
            <div className='addInput'>
                <input type='text' 
                    value={webPageIgnor} 
                    onChange={handleIgnorInput}/>
                <div  onClick={handleIgnorDelete} className='delete' >&times;</div>
           </div>
        </form>
    )
}

export default SingleSettings

