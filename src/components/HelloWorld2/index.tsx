import './index.global.scss'
import css from './index.module.scss'

const HelloWorld2 = (props = { msg: '' }) => {
  return <div class={`HelloWorld2 ${css.HelloWorld2}`}>{props.msg}</div>
}

HelloWorld2.displayName = 'HelloWorld2'

export default HelloWorld2
