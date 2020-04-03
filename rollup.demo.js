import commonjs from "@rollup/plugin-commonjs";

import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "demo/index.ts",
  output: [
    {
      dir: "demotest",

      format: "umd",
      name: "handTrack"
    }
  ],
  plugins: [resolve(), terser(), resolve(), typescript(), commonjs()]
};
