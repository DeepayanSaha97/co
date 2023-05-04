// Write your code here
import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = args => {
  const {vaccinationByAgeData} = args

  return (
    <div className="vaccination-by-age-card">
      <h1 className="card-heading">Vaccination by age</h1>
      <ResponsiveContainer height={400} width={1000}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            dataKey="count"
            data={vaccinationByAgeData}
            startAngle={0}
            endAngle={360}
            outerRadius="70%"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{padding: 35}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
