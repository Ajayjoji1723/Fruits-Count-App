import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onGetMangoesCount = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onGetBananaCount = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> Mangoes{' '}
            <span className="count">{bananaCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onGetMangoesCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onGetBananaCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
