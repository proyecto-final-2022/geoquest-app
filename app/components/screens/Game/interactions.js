
export default {
  "showHint": (ctx, hint) => {
    ctx.global.hint(hint.short);
  },

  "nextScene": (ctx) => {
    return {
      ...ctx.state,
      scene: ctx.state.scene + 1,
      objects: {}
    };
  }
};
