// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    vaccinationData: {},
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const api = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(api)
    const fetchedData = await response.json()
    if (response.ok) {
      const updatedData = {
        last7DaysVaccination: fetchedData.last_7_days_vaccination,
        vaccinationByAge: fetchedData.vaccination_by_age,
        vaccinationByGender: fetchedData.vaccination_by_gender,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        vaccinationData: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <p className="failure-text">Something went wrong</p>
    </div>
  )

  renderPieChartsView = () => {
    const {vaccinationData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = vaccinationData
    return (
      <>
        <VaccinationCoverage vaccinationCoverageData={last7DaysVaccination} />
        <VaccinationByAge vaccinationByAgeData={vaccinationByAge} />
        <VaccinationByGender vaccinationByGenderData={vaccinationByGender} />
      </>
    )
  }

  renderPageViewsBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderPieChartsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-con">
        <div className="logo-heading-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="web-logo"
          />
          <p className="logo-title">Co-WIN</p>
        </div>
        <h1 className="website-heading">CoWIN Vaccination in India</h1>
        <div className="cowin-chart-cards">
          {this.renderPageViewsBasedOnApiStatus()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
