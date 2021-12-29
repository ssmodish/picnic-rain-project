import React from 'react'
import Plant from './Plant'

const Farm = ({ farm }) => {
  return (
    <table>
      {farm.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((col, colIndex) => (
            <td key={rowIndex.toString() + colIndex.toString()}>|{col}|</td>
          ))}
        </tr>
      ))}
    </table>
  )
}

export default Farm
