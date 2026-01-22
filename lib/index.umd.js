(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.V3Button = {}, global.Vue));
})(this, (function(exports2, vue) {
  "use strict";
  const _sfc_main = vue.defineComponent({
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
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, vue.toDisplayString(_ctx.msg), 1);
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
  const Component = /* @__PURE__ */ vue.defineComponent({
    name: "V3Button2",
    props: {
      msg: String
    },
    setup(props) {
      return () => {
        return vue.createVNode(vue.Fragment, null, [vue.createVNode("div", {
          "class": css.v3Button2
        }, [props.msg])]);
      };
    }
  });
  const index = withInstall(Component);
  exports2.V3Button1 = index$1;
  exports2.V3Button2 = index;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
}));
