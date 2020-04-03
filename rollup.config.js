import commonjs from "@rollup/plugin-commonjs";

import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "lib",
      format: "umd",
      name: "handTrack"
    }
  ],
  plugins: [resolve(), terser(), resolve(), typescript(), commonjs()]
};
