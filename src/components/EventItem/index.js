// Write your code here
import './index.css'

const EventItem = props => {
  const {itemDetails, checkStatus} = props
  const {imageUrl, id, name, location} = itemDetails

  const registrationChecking = () => {
    checkStatus(id)
  }

  return (
    <li className="list-item">
      <button
        className="button-item"
        onClick={registrationChecking}
        type="button"
      >
        <img src={imageUrl} alt="event" className="image-item" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
