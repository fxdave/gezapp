// rollup.config.js
import sucrase from '@rollup/plugin-sucrase';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace'
export default {
    input: ['src/app.tsx'],
    output: {
        file: 'dist/app.js',
        format: 'cjs',
    },
    plugins: [
        /**
         * rewrite imports to node_modules/{lib_name}
         */
        resolve({
            preferBuiltins: true
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify( 'production' )
        }),
        /**
         * Tell rollup that these are in commonjs format 
         */
        commonjs({
            include: 'node_modules/**',  // Default: undefined
        }),
        /**
         * transform code from jsx to commonjs
         */
        sucrase({
            exclude: ['node_modules/**'],
            transforms: ['jsx']
        }),
    ]
}