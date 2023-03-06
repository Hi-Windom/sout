
// 导入defineConfig方法可以让编辑器（VSCode）智能提示所有的rollup的配置项，很方便
import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import pkg from "./package.json" assert { type: "json" };

const libName = pkg.name;
const banner = `/*!
* ${libName} v${pkg.version}
* https://github.com/Hi-Windom/sout
* https://www.npmjs.com/package/sout
*/`;

export default defineConfig({
  input: {
    index: "src/index.ts",
    console: "src/console/index.ts",
  },
  output: [
    {
      dir: "dist",
      format: "es",
      entryFileNames: "_lib/[format]/[name].mjs",
      banner,
    },
    {
      dir: "dist",
      format: "cjs",
      entryFileNames: "_lib/[format]/[name].cjs",
      banner,
    },
  ],
  external: [],
  plugins: [
    commonjs({ transformMixedEsModules: true }),
    json({
      compact: true,
    }),
    typescript({
      sourceMap: false,
    }),
    resolve({
      moduleDirectories: ["node_modules"],
    }),
  ],
});
