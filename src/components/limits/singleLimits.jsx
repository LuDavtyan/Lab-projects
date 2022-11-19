import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { webNameUpdate, webNameDelete} from '../../redux/actions'

function SingleLimits({data}) {
    const [webPageName, setWebPageName] = useState('')
    const {text, id } = data;

    const dispatch = useDispatch();
    
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(webNameUpdate(webPageName, id))
    }
    useEffect(() => {
        if(text){
            setWebPageName(text)
        }
    }, [text])
    const handleInput = (e) => {
        setWebPageName(e.target.value)
    }
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(webNameDelete(id))
    }
    return(
        <form onSubmit={handleUpdate}>
            <div className='addInput'>
                <input type='text' 
                    value={webPageName} 
                    onChange={handleInput}/>
                <div  onClick={handleDelete} className='delete' >&times;</div>
           </div>
        </form>
    )
}

export default SingleLimits;