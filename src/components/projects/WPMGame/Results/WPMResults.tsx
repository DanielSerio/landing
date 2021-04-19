import React from 'react'
import WPMResultsProps from './WPMResultsProps'
import './WPMResults.css';

export default function WPMResults({ wpm, accuracy, totalTime }: WPMResultsProps) {
  return (
    <div className="wpm-results">
      <table>
        <thead>
          <tr>
            <td><div className="table-cell">Words Per Minute</div></td>
            <td><div className="table-cell">Total Time (Seconds)</div></td>
            <td><div className="table-cell">Accuracy</div></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={`table-cell ${wpm <= 15 ? 'negative' : wpm >= 60 ? 'positive' : ''}`.trim()}>{wpm}</div></td>
            <td><div className="table-cell">{totalTime.toFixed(2)}</div></td>
            <td><div className={`table-cell ${accuracy <= 60 ? 'negative' : accuracy >= 90 ? 'positive' : ''}`.trim()}>{accuracy}%</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
