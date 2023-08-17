import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.js",
  output: {
    file: "build/bundle.js",
    format: "cjs",
  },
  plugins: [
    peerDepsExternal(),
    nodeResolve({ extensions: [".js", ".jsx"] }),
    postcss(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**", // Assicurati che Babel non venga eseguito sui moduli esterni
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
  ],
};
