import path from "path";
import axios from "axios";
import glob from "glob";

const imagePlaceholders = () => {
  const images = glob
    .sync("public/images/nature/*.jpg")
    .map(item => item.replace("public", ""));

  return images;
};

const playgroundsRoute = () => {
  const path = "/";

  const placeholders = {
    images: imagePlaceholders()
  };

  const playgroundSourcePath = "src/playgrounds";
  const playgrounds = glob.sync(`${playgroundSourcePath}/*.js`).map(path => {
    const name = path
      .split("/")
      .pop()
      .replace(".js", "");

    const result = {
      name,
      template: path,
      path: name /*path.replace(playgroundSourcePath, "").replace(".js", ""),*/,
      placeholders
    };

    return result;
  });

  return {
    path,
    getData: () => ({ path, playgrounds }),
    children: playgrounds.map(({ name, template, ...playground }) => ({
      path: name,
      template,
      getData: () => ({
        path: playground.path,
        placeholders: playground.placeholders
      })
    }))
  };
};

export default {
  getRoutes: async () => {
    return [
      {
        ...playgroundsRoute()
      }
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
};
