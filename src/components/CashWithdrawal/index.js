// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  OnUpdateValue = value => {
    this.setState(prev => ({balance: prev.balance - value}))
  }

  render() {
    const {balance} = this.sate
    const {denominationsList} = this.props
    const name = 'Sarah William'
    const initial = name.slice(0, 1)
    return (
      <div className="bg">
        <div className="card">
          <div className="profile-con">
            <div className="profile">
              <p className="initial">{initial}</p>
            </div>
            <p className="heading">{name}</p>
          </div>
          <div className="con-2">
            <p className="norm-head">Your Balance</p>
            <div className="value-con">
              <h1 className="value">{balance}</h1>
            </div>
          </div>
          <p className="p1">In Rupees</p>
          <p className="Withdraw-head">Withdraw</p>
          <p className="norm-head">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denominationsDetails={each}
                updateBalance={this.OnUpdateValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
