// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = args => {
  const {vaccinationCoverageData} = args

  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-coverage-card">
      <h1 className="card-heading">Vaccination Coverage</h1>
      <BarChart
        data={vaccinationCoverageData}
        margin={{top: 5}}
        width={1000}
        height={300}
      >
        <XAxis
          dataKey="vaccination_date"
          tick={{stroke: 'gray', strokeWidth: 1}}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{stroke: 'gray', strokeWidth: 0}}
        />
        <Legend wrapperStyle={{padding: 30}} />
        <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
