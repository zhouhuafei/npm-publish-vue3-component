import { defineComponent, createElementBlock, openBlock, toDisplayString, createVNode, Fragment } from "vue";
const _sfc_main = defineComponent({
  name: "V3Button1",
  props: {
    msg: String
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "v3Button1" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(_ctx.msg), 1);
}
const Component$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6bd1b34c"]]);
function withInstall(Component2) {
  Component2.install = function(instance) {
    instance.component(Component2.name, Component2);
  };
  return Component2;
}
const index$1 = withInstall(Component$1);
const v3Button2 = "_v3Button2_1jfbe_1";
const css = {
  v3Button2
};
const Component = /* @__PURE__ */ defineComponent({
  name: "V3Button2",
  props: {
    msg: String
  },
  setup(props) {
    return () => {
      return createVNode(Fragment, null, [createVNode("div", {
        "class": css.v3Button2
      }, [props.msg])]);
    };
  }
});
const index = withInstall(Component);
export {
  index$1 as V3Button1,
  index as V3Button2
};
