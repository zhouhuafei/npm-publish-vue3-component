import './index.global.scss'
import css from './index.module.scss'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld2',
  props: {
    msg: String
  },
  setup (props) {
    return () => {
      return <div class={`HelloWorld2 ${css.HelloWorld2}`}>{props.msg}</div>
    }
  }
})
