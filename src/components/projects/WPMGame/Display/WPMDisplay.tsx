import React, { useRef, RefObject, useEffect} from 'react'
import { useContext } from 'react';
import ThemeContext from '../../../../state/ThemeContext';

import WPMDisplayProps from './WPMDisplayProps'

export default function WPMDisplay({ content }: WPMDisplayProps) {
  const ref: RefObject<HTMLCanvasElement> = useRef(null);
  const [theme] = useContext(ThemeContext);
  function chunkArray(arr: string[], chunkSize: number): string[][] {
      const temp: string[][] = [];
      for (let i = 0; i < arr.length; i += chunkSize) temp.push(arr.slice(i, i + chunkSize));
      return temp;
  }

  const divideLines = (): string[][] => {
    const lineCount: number = (content.match(/.{1,65}/g) || []).length;
    const words: string[] = content.split(/\s+/g);
    const chunkSize: number = ~~(words.length / lineCount);
    return chunkArray(words, chunkSize);
  };


  useEffect(() => {
    if (ref.current) {
      ref.current.width = 680;
      ref.current.height = 192;
      const ctx: CanvasRenderingContext2D = ref.current.getContext('2d') as CanvasRenderingContext2D;
      const lines: string[][] = divideLines();
      ctx.font = '18px Tahoma normal';
      ctx.fillStyle = theme.prefersDark ? '#fafafa' : '#121212';
      lines.forEach((line: string[], i: number) => {
        ctx.beginPath();
        if (i === 0) {
          ctx.fillText(line.join(' '), 1, 16);
        } else {
          ctx.fillText(line.join(' '), 1, 16 +(32 * i));
        }
        ctx.closePath();
      });
    }
  }, [theme, theme.prefersDark]);

  return (
    <div>
      <canvas width={680} height={192} ref={ref}></canvas>
    </div>
  )
}
