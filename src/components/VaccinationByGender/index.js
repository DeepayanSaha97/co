// Write your code here
import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = args => {
  const {vaccinationByGenderData} = args

  return (
    <div className="vaccination-by-gender-card">
      <h1 className="card-heading">Vaccination by gender</h1>
      <ResponsiveContainer height={400} width={1000}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            dataKey="count"
            data={vaccinationByGenderData}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
