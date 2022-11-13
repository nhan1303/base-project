import Typescript from "rollup-plugin-typescript2";

export default {
  input: ["src/index.ts"],
  output: {
    dir: "build",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [Typescript()],
  external: ["react"],
};
