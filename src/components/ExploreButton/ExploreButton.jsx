import PropTypes from 'prop-types'
import './ExploreButton.scss'
import { Link } from 'react-router-dom'


const ExploreButton = ({ title }) => {
  return (
    <Link className='explore-button' type='button' to='/destination'>{title}</Link>
  )
}

ExploreButton.propTypes = {
  title: PropTypes.string.isRequired
}



export default ExploreButton