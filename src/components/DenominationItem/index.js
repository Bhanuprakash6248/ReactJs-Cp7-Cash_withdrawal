// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, updateBalance} = props
  const {value} = denominationsDetails
  const onClickValue = () => {
    updateBalance(value)
  }
  return (
    <li>
      <button type="button" className="btn" onClick={onClickValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
