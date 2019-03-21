import AFRAME from "aframe";

/**
 * Text Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-text
 */
export = AFRAME.registerPrimitive('a-ui-text', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        text:{},
        "ui-text":{}
    },
    mappings: {
        "font-size": "ui-text.fontSize",
        "align":"text.align",
        "alpha-test":"text.alphaTest",
        "anchor":"text.anchor",
        "baseline":"text.baseline",
        "color":"text.color",
        "font":"text.font",
        "font-image":"text.fontImage",
        "height":"text.height",
        "letter-spacing":"text.letterSpacing",
        "line-height":"text.lineHeight",
        "opacity":"text.opacity",
        "shader":"text.shader",
        "side":"text.side",
        "tab-size":"text.tabSize",
        "transparent":"text.transparent",
        "value":"text.value",
        "white-space":"text.whiteSpace",
        "width":"text.width",
        "wrap-count":"text.wrapCount",
        /*"wrap-pixels":"text.wrapPixels",*/
        "z-offset":"text.zOffset"
    }
}));