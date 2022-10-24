
export const resources = {
  images: {
    exampleImage: require("../../res/images/exampleImage.jpg"),
    duende: require("../../res/images/duende.jpg"),
    argentina: require("../../res/images/argentina.jpg"),
    boquita: require("../../res/images/boquita.jpg"),
    mate: require("../../res/images/mate.jpg")
  },

  models: {
    cubone: {
      model: require("../../res/models/cubone/model.obj"),
      materials: require("../../res/models/cubone/materials.mtl")
    },
    key: {
      model: require("../../res/models/Key/model.vrx")
    },
    folder: {
      model: require("../../res/models/Folder/model.vrx")
    },
    page: {
      model: require("../../res/models/Page/model.vrx")
    },
    box: {
      model: require("../../res/models/SmallBoxWithKeyhole/model.vrx")
    }
    

  }
};

//a
export default {
  get: (spec) => {
    const tree = spec.split(".");
    return tree.reduce((prev, curr, _i) => prev[curr], resources);
  }
};
