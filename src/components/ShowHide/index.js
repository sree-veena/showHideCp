// Write your code here//
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {btn1: false, btn2: false}

  onClickBtn1 = () => {
    this.setState(prevState => ({btn1: !prevState.btn1}))
  }

  onClickBtn2 = () => {
    this.setState(prevState => ({btn2: !prevState.btn2}))
  }

  render() {
    const {btn1, btn2} = this.state

    return (
      <div className="bg-container">
        <p className="title">Show/Hide</p>
        <div className="btnCon">
          <button className="btn" type="button" onClick={this.onClickBtn1}>
            Show/Hide Firstname
          </button>
          <button className="btn" type="button" onClick={this.onClickBtn2}>
            Show/Hide Lastname
          </button>
        </div>
        <div className="nameCont">
          {btn1 ? (
            <div className="container">
              <p className="name">Joe</p>
            </div>
          ) : null}
          {btn2 ? (
            <div className="container">
              <p className="name">Jonas</p>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default ShowHide
