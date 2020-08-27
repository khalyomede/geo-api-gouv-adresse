import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/index.ts",
    plugins: [typescript()],
    external: ["axios"],
    output: [
        {
            format: "cjs",
            file: "lib/index.js",
        },
        {
            format: "iife",
            file: "dist/index.js",
            name: "geoApiGouvAdresse",
            globals: {
                axios: "axios",
            },
        },
        {
            format: "iife",
            file: "dist/index.min.js",
            plugins: [
                terser({
                    compress: {
                        passes: 2,
                    },
                    format: {
                        comments: false,
                    },
                }),
            ],
            name: "geoApiGouvAdresse",
            globals: {
                axios: "axios",
            },
        },
    ],
};
