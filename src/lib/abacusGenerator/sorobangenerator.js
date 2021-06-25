import React, { useEffect, useRef, useState} from 'react'
import SorobanGenerator from 'generate-soroban-training2';
import { Button } from 'react-bootstrap';

function Sorobangeneretor() {
  let numbers = ["44", "55", "66", "77", "88", "99"];
  const [counter, setCounter] = useState()
  let outputNumber = useRef()
  let nextBtn = useRef()
  let index = 0
  function handleClick() {

    index++
    console.log(index,"before")
    //outputNumber.current.innerHTML=index
    outputNumber.current.innerHTML = numbers[index]
    if (index === numbers.length) {
      index = 0 // finished here
      console.log('finished here')
   //   alert('Numbers are finished')
      console.log(index,"loop block")
    }
    outputNumber.current.innerHTML = numbers[index]
    console.log(index)
    return;

  }
  useEffect(() => {
    outputNumber.current.innerHTML = numbers[0]
    //     console.log(numbers);
    const config = {
      debug: true, //  debugging  
      digit: 1, //  digit capacity  
      examples: 10, //  number of generated examples  
      actions_length: 5, //  number of mathematical operations  
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

    // generated number 5 
    // all questions [5]

    const s = new SorobanGenerator(config);

    let result = s.generateSimpleExamples();
    console.log(result)

    let examples = s.getString();
    console.log(examples); 
    console.log(examples[5].substr(0,examples[5].length-1));
    setCounter(examples[5].substr(0,examples[5].length-1))

    //   let examples = s.getArray();
    //   console.log(examples);
    
  }, 1000)



  return (
    <>
      <h2>{counter}</h2>
      <input type="number" name="counter"  />
      <p id="myText" ref={outputNumber} className="lead">{index}</p>
      <Button id="myBtn" ref={nextBtn} onClick={()=>{
        // let start = setInterval(function(){
        //   handleClick()
        // },3000)
        // if(index === numbers.length){
        //   clearInterval(start)
          
        // }
      }}>next number</Button>
    </>
  )
}

export default Sorobangeneretor
