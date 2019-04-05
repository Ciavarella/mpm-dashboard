import React, { useEffect } from 'react'
import { PieChart, Pie, Cell } from 'recharts'

let chartColors =
  localStorage.getItem('mode') === 'dark'
    ? ['#18d03a', '#c31623']
    : ['#B749A7', '#6E5AAD']

let targetNode = document.getElementById('body')
const config = { attributes: true }

const TotalChart = props => {
  useEffect(() => {
    const callback = (mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.target.className === '') {
          chartColors = ['#B749A7', '#6E5AAD']
        } else {
          chartColors = ['#18d03a', '#c31623']
        }
      }
    }
    let observer = new MutationObserver(callback)
    observer.observe(targetNode, config)

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <PieChart width={400} height={200}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={props.data}
        cx={200}
        cy={200}
        outerRadius={100}
        fill="#8884d8"
        label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
          const RADIAN = Math.PI / 180
          const radius = 25 + innerRadius + (outerRadius - innerRadius)
          const x = cx + radius * Math.cos(-midAngle * RADIAN)
          const y = cy + radius * Math.sin(-midAngle * RADIAN)

          return (
            <text
              x={x}
              y={y}
              fill={chartColors[index % chartColors.length]}
              textAnchor={x > cx ? 'start' : 'end'}
              dominantBaseline="central"
            >
              {props.data[index].name}
            </text>
          )
        }}
      >
        {props.data.map((entry, index) => (
          <Cell
            key={`slice-${index}`}
            fill={chartColors[index % chartColors.length]}
          />
        ))}
      </Pie>
    </PieChart>
  )
}

export default TotalChart
