import React from 'react'
import Plant from './Plant'

const Farm = ({ farm }) => {
  return (
    <table>
      {farm.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((col, colIndex) => (
            <Plant key={rowIndex.toString() + colIndex.toString()} amount={col} />
          ))}
        </tr>
      ))}
    </table>
  )
}

export default Farm
