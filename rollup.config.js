import { version } from './package.json';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import * as path from "path";

const banner = `/*!
 * easy-property-retriever v${version}
 * https://github.com/ArcherGu/easy-property-retriever.git
 * @license MIT
 */`;

const config = [
    {
        input: 'src/index.ts',
        output: [{
            file: 'dist/easy-property-retriever.esm.js',
            format: 'es',
            banner
        }, {
            file: 'dist/easy-property-retriever.common.js',
            format: 'cjs',
            banner
        }, {
            file: 'dist/easy-property-retriever.js',
            format: 'umd',
            name: 'EasyPropertyRetriever',
            banner
        }],
        plugins: [
            typescript({
                tsconfig: "tsconfig.json",
            }),
            getBabelOutputPlugin({
                configFile: path.resolve(__dirname, 'babel.config.json'),
                allowAllFormats: true
            }),
        ]
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/easy-property-retriever.d.ts',
            format: 'es',
            banner
        },
        plugins: [dts()],
    },
];
export default config;
