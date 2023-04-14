// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeEventDetails} = props
  console.log(activeEventDetails)

  const renderYetToRegisterView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yet-to-register-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="yet-register-button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed-image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon! </p>
    </div>
  )

  const renderNoRegisterView = () => (
    <div>
      <p className="no-registration-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderActiveRegistrationDetails = () => {
    switch (activeEventDetails) {
      case 'YET_TO_REGISTER':
        return renderYetToRegisterView()
      case 'REGISTERED':
        return renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationsClosedView()
      default:
        return renderNoRegisterView()
    }
  }

  return <div>{renderActiveRegistrationDetails()}</div>
}

export default ActiveEventRegistrationDetails
