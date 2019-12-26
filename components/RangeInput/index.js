import { h, Component } from 'preact'

import style from './style.scss'

class RangeInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMoving: false,
      position: 0,
      value: -1
    }
  }

  calcValue(event) {
    const {start, end, step, eStep} = this.props

    const minp = 0
    const maxp = 1
    const minv = Math.log(start)
    const maxv = Math.log(end)
    const scale = (maxv-minv) / (maxp-minp)
    const elemWidth = this.range.clientWidth
    const left =  event.clientX - this.range.getBoundingClientRect().left
    const position = Math.max(0, Math.min(1, left / elemWidth))
    const value = Math.round(Math.exp(minv + scale*(position-minp)))
    const expStep = eStep === "true" ? step*Math.pow(10, Math.max(0, value.toString().length-4)) : step
    const newValue = Math.round(value/expStep)*expStep

    return {position: (Math.log(newValue)-minv) / scale + minp, value: newValue}
  }

  handleStart = (event) => {
    const { position, value } = this.calcValue(event)

    this.setState({isMoving: true, position, value})
  }

  handleEnd = (event) => {
    const { name, onChange } = this.props
    const { isMoving } = this.state

    if(isMoving) {
      this.setState({isMoving: false})

      if(typeof onChange === 'function') {
        onChange(name, this.state.value)
      }
    }
  }

  handleMove = (event) => {
    const { isMoving } = this.state

    if(isMoving) {
      const { position, value } = this.calcValue(event)
      this.setState({position, value})
    }
  }

  handleChange = (event) => {
    const {start, end, step, name, onChange} = this.props

    const parsed = parseInt(event.target.value)
    const value = parsed >= 0 || parsed < 0 ? parsed : 0
    const minp = 0
    const maxp = 1
    const minv = Math.log(start)
    const maxv = Math.log(end)
    const scale = (maxv-minv) / (maxp-minp)
    const correct = Math.max(start, Math.min(end, value))
    const position = (Math.log(Math.min(end, correct))-minv) / scale + minp

    this.setState({position, value: Math.min(end, value)})

    if(typeof onChange === 'function') {
      onChange(name, correct)
    }
  }

  saveRange = (ref) => {
    this.range = ref
  }

  render({label, class: mixin}, {position, value}) {
    return(
      <div class={`${style.range} ${mixin ? mixin : ''}`}>
        <div>
          <input type="text" value={value === -1 ? 'Все' : value} onInput={this.handleChange}/>
          <div ref={this.saveRange}
            onMouseDown={this.handleStart} onMouseUp={this.handleEnd} onMouseMove={this.handleMove} onMouseLeave={this.handleEnd} >
            <span class={style.line}></span>
            <span class={style.point} style={{left: 100*position + '%'}}></span>
          </div>
        </div>
        {label && <p class={style.caption}>{label}</p>}
      </div>
    )
  }
}

export default RangeInput
