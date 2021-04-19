import React, { RefObject, useState, useRef, ChangeEvent, useMemo, useEffect } from 'react'
import Project from '../../containers/Project/Project';
import { desc, title } from './WPMGameDetails';
import useTimer from './useTimer';
import WPMControls from './Controls/WPMControls';
import WPMResults from './Results/WPMResults';
import { LoremIpsum } from 'lorem-ipsum';
import getAccuracy from './accuracy';
import WPMDisplay from './Display/WPMDisplay';


export default function WPMGame() {
  const ipsum = new LoremIpsum();
  const { start, stop, reset, isRunning, elapsed } = useTimer();
  const clean = (s: string): string => s.trim().replace(/\s+/g, ' '); 
  const ref: RefObject<HTMLTextAreaElement> = useRef(null);
  const [content, setContent] = useState<string>(clean(ipsum.generateParagraphs(1)));
  const [userText, setUserText] = useState<string>('');
  const [accuracy, setAccuracy] = useState<number>(0);
  const [wpm, setWpm] = useState<number>(0);
  
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target;
    setUserText(value);
  };

  const handleStart = () => start(() => { 
    if (ref.current) {
      ref.current.disabled = false;
      ref.current.focus();
      setUserText('');
    }
    setContent(ipsum.generateParagraphs(1));
   });

   const handleRestart = () => { 
    if (ref.current) {
      ref.current.disabled = false;
      ref.current.value = '';
      ref.current.focus();
    }
    setUserText('');
    reset();
    setContent(ipsum.generateParagraphs(1));
   };

   useMemo(() => {
     const { round } = Math;
    setAccuracy(+`${(getAccuracy(userText, content) * 100).toFixed(2)}`);
    const totalUserWords: number = userText.trim().replace(/\s+/g, ' ').split(/\s/g).length;
    let w: number = (totalUserWords/ elapsed()) * 60;
    if (!isFinite(w)) w = 0;
    setWpm(round(w * 1000));
   }, [userText, content]);

   useEffect(() => () => { stop(); reset(); }, []);

  return (
    <Project title={title} desc={desc}>
      <WPMControls isRunning={isRunning} start={handleStart} stop={stop} reset={handleRestart}/>
      {isRunning && <WPMDisplay content={content}/>}
      <textarea disabled={!isRunning} onChange={handleTextChange} defaultValue={userText} className="textarea" ref={ref}></textarea>
      {!isRunning && <WPMResults accuracy={accuracy} wpm={wpm} totalTime={elapsed() / 1000}/>}
    </Project>
  )
}
