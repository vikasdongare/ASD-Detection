import HistoryItemContext from './HistoryItemContext';
import { useState } from 'react';

const HistoryItemState = (props)=>{

    const initial = {}
    const [histories, sethistories] = useState(initial);

    const getHistory = async ()=>{
        
        const response = await fetch("http://localhost:5000/history/get", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem('token')
            }
          });
          const json = await response.json() 
          sethistories(json)
    }

    return (
        <HistoryItemContext.Provider value={{ histories, sethistories, getHistory }}>
          {props.children}
        </HistoryItemContext.Provider>
      )

}

export default HistoryItemState;
