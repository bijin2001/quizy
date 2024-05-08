import React, { useState, useRef } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Pge } from '../assets/Quiz.json';
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../App.css';

function Page2() {
  const [radioValue, setRadioValue] = useState('null');
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(Pge[index]);
  let [fix, setFix] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [color, setColor] = useState(null);
  let [count, setCount] = useState(10);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);
  let Option_array = [Option1, Option2, Option3, Option4];

  const isCorrectAnswer = (e, ans) => {
    if (fix === false) {
      if (question.ans === ans) {
        setFix(true);
        setScore(grade => grade + 1);
        setColor('success');
      } else {
        setFix(true);
        setColor('danger'); 
      }

    }
  };

  const next = () => {
    if (fix === true) {
      if (index === Pge.length - 1) {
        setResult(true);
        return 0;
      }

      setIndex(++index);
      setQuestion(Pge[index]);
      setFix(false);
      setColor(null);
      setCount(count => count + 10) 
    }
  };
  
  const now = count;

  return (
    <>


      {result ? <></> : <>

<div className='container mt-5'>
           <ProgressBar variant={color} now={now} label={`${now}%`} visuallyHidden />
  
</div>
   <div className='d-flex container justify-content-center align-items-center'>

          <h1 style={{ letterSpacing: '5px', color: '#eae9ee', marginTop: '3em' }}>{question.q}</h1>
        </div>

        <div className='container d-flex flex-column justify-content-center align-items-center mt-4' style={{ gap: '2em' }}>
          <ButtonGroup toggle>
            <ToggleButton type='radio'
              id='op1'
              name='op1'
              className={'p-3 bns'}
              style={{ fontWeight: '600', letterSpacing: '5px', backgroundColor: 'unset', width: '20em', maxWidth: '20em' }}
              value="1"
              checked={radioValue === '1'}
              ref={Option1}
              onChange={(e => { isCorrectAnswer(e, 1) })}>
              {question.op1}
            </ToggleButton>
          </ButtonGroup>

          <ButtonGroup toggle>
            <ToggleButton type='radio'
              id='op2'
              name='op2'
              className={'p-3 bns'}
              style={{ fontWeight: '600', letterSpacing: '5px', backgroundColor: 'unset', width: '20em', maxWidth: '20em' }}
              value="2"
              checked={radioValue === '2'}
              ref={Option2}
              onChange={(e => { isCorrectAnswer(e, 2) })}>
              {question.op2}
            </ToggleButton>
          </ButtonGroup>


          <ButtonGroup toggle>
            <ToggleButton type='radio'
              id='op3'
              name='op3'
              className={'p-3 bns'}
              style={{ fontWeight: '600', letterSpacing: '5px', backgroundColor: 'unset', width: '20em', maxWidth: '20em' }}
              value="3"
              checked={radioValue === '3'}
              ref={Option3}
              onChange={(e => { isCorrectAnswer(e, 3) })}>
              {question.op3}
            </ToggleButton>
          </ButtonGroup>

          <ButtonGroup toggle>
            <ToggleButton type='radio'
              id='op4'
              name='op4'
              className={'p-3 bns'}
              style={{ fontWeight: '600', letterSpacing: '5px', backgroundColor: 'unset', width: '20em', maxWidth: '20em' }}
              value='4'
              checked={radioValue === '4'}
              ref={Option4}
              onChange={(e => { isCorrectAnswer(e, 4) })}>
              {question.op4}
            </ToggleButton>
          </ButtonGroup>

          <div>

          </div>


        </div>

        {fix === true && (
          <div className='d-flex justify-content-center'>
            <button className='bn1' onClick={next} style={{ fontWeight: '600', letterSpacing: '5px', color: '#eae9ee', border: 'none' }}>NEXT</button>
          </div>
        )}
      </>}

      {result?<>
        <div style={{ marginTop: '12em' }} className='d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-center' style={{ color: '#eae9ee', letterSpacing: '19px', fontSize: '4em' }}>YOUR SCORE</h1>
        <h1 className='mt-5' style={{ color: '#eae9ee', fontSize: '6em' }}>{score}/{Pge.length}</h1>
        <h1 className='mt-5 ms-3' style={{ color: '#eae9ee', fontSize: '2em', letterSpacing: '27px' }}>{score>=6?'YOU WON':'YOU LOSE'}</h1>

      </div>

        </>:<></>}



    </>
  )
}

export default Page2