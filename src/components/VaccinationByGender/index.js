// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = args => {
  const {vaccinationByGenderData} = args

  return (
    <div className="vaccination-by-gender-card">
      <h1 className="card-heading">Vaccination by gender</h1>
      <PieChart height={300} width={1000}>
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
    </div>
  )
}

export default VaccinationByGender
