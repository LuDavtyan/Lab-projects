import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { webNameUpdate, webNameDelete} from '../../redux/actions'
import Minut from './minute';
import Time from './time';

function SingleLimits({data}) {
    const [webPageName, setWebPageName] = useState('')
    const {text, id} = data;
     
    const time = useSelector(state => {
        const { timeReducer } = state;
        return  timeReducer.time 
    })
   
    const minute = useSelector(state => {
        const {  minuteReducer} = state;
        return  minuteReducer.minute
    })

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
                   
                    {!!time.length &&  time.map(res=>{
                            return  <Time key={res.id} data={res} />
                    })}
                    {!!minute.length &&  minute.map(res=>{
                            return  <Minut key={res.id} data={res} />
                    })}
                   <div  onClick={handleDelete} className='delete' >&times;</div>   
           </div>
        </form>
    )
}

export default SingleLimits;