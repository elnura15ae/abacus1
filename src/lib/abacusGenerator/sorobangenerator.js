import React,{useEffect, useState} from 'react'
import SorobanGenerator from 'generate-soroban-training2';

function Sorobangeneretor() {

    const [counter, setCounter]=useState()
    
      useEffect(()=>{
        const config = {
          debug :true , //  debugging  
          digit : 1 , //  digit capacity  
          examples : 10 , //  number of generated examples  
          actions_length : 5 , //  number of mathematical operations  
          topic_number: 4,
          exceptions: [
              '1+4',
              '2+3', '2+4',
              '3+2', '3+3', '3+4',
              '4+1', '4+2', '4+4',
              '5-1', '5-2', '5-3',
              '6-2', '6-3', '6-4',
              '7-3', '7-4',
              '8-4',
          ] //  excludes the occurrence of certain operations 
      }
      
       const s = new SorobanGenerator(config);
       
       let result = s.generateSimpleExamples(); 
       console.log(result)

      let examples = s.getString();
      console.log(examples);

      setCounter(examples[0])

    //   let examples = s.getArray();
    //   console.log(examples);

      }, 1000)
    
   
    
    return (
        <>
        <h2>{counter}</h2>
        <input type="counter" name="counter" value={counter} onChange={e => setCounter(e.target.value)} />
        </>
   )
}

export default Sorobangeneretor
