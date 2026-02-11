import './index.global.scss'
import css from './index.module.scss'

const V3Button2 = (props = { msg: '' }) => {
  return <div class={`V3Button2 ${css.V3Button2}`}>{props.msg}</div>
}

V3Button2.displayName = 'V3Button2'

export default V3Button2
