import './index.global.scss'
import css from './index.module.scss'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'V3Button2',
  props: {
    msg: String
  },
  setup (props) {
    return () => {
      return <>
        <div class={`v3Button2 ${css.v3Button2}`}>
          {props.msg}
        </div>
      </>
    }
  }
})
