import { babel } from '@rollup/plugin-babel'
import path from 'path';
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            // eslint-disable-next-line no-undef
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
            babel({
                babelrc: false,
                babelHelpers: 'bundled',
                // eslint-disable-next-line no-undef
                configFile: path.resolve(__dirname, 'babel.config.js')
            })
        ],
        external: ['react', 'react-dom', '@emotion/react', '@emotion/styled']
    },
    {
        input: 'dist/esm/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
    },
]
