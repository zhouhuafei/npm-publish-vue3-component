// ********************************* import
import './index.global.scss'
import css from './index.module.scss'
import { defineOptions, defineProps } from 'vue'
// ********************************* defineOptions
defineOptions({ name: 'HelloWorld2' })
// ********************************* const and let
// ********************************* props and emits
const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})
// ********************************* thisFields and thisMethods and lifetimes
// ********************************* otherFields and otherMethods
// ********************************* computedFields and watch
// ********************************* defineExpose
export default () => {
  return <div class={`HelloWorld2 ${css.HelloWorld2}`}>{props.msg}</div>
}
