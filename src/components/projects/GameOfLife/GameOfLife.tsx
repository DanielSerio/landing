import React, { useContext, useRef, useState, useEffect, RefObject } from 'react'
import { useMemo } from 'react';
import ThemeContext from '../../../state/ThemeContext';
import Project from '../../containers/Project/Project'
import GameOfLifeControls from './GameOfLifeControls/GameOfLifeControls';
import { Cell, CellOptions, createCells, getNextCells, renderCells } from './Life';

export default function GameOfLife() {
  const ref: RefObject<HTMLCanvasElement> = useRef(null);
  const [cells, setCells] = useState<Cell[][]>(createCells(400, 0.78));
  const [theme] = useContext(ThemeContext);
  const cellOptions = useMemo<CellOptions>(() => {
    const CellOptionsLight: CellOptions = {
      size: 16,
      aliveFill: '#48d583',
      aliveStroke: '#114c2a',
      deadFill: 'transparent',
      deadStroke: '#808377',
    };
  
    const CellOptionsDark: CellOptions = {
      size: 16,
      aliveFill: '#114c2a',
      aliveStroke: '#48d583',
      deadFill: 'transparent',
      deadStroke: '#2a2b27',
    };
    return theme.prefersDark ? CellOptionsDark : CellOptionsLight;
  }, [theme.prefersDark]);

  useEffect(() => {
    if (ref.current) {
      ref.current.height = 16 * 20;
      ref.current.width = 16 * 20; 
      const ctx = ref.current.getContext('2d') as CanvasRenderingContext2D;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      renderCells(ctx, cells, cellOptions);
    } 
  }, [cells, cellOptions]);

  const refresh = () => setCells(createCells(400, 0.78));

  const nextFrame = () => setCells(getNextCells(cells));

  
  const title: string = 'Game of Life';
  const desc: string = `A Simple implementation of Conway's Game of Life`;

  return (
    <Project title={title} desc={desc}>
      <canvas ref={ref}></canvas>
      <GameOfLifeControls refresh={refresh} nextFrame={nextFrame}/>
    </Project>
  )
}
