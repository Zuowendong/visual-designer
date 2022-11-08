import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import defineOptions from 'unplugin-vue-define-options/vite';

export default defineConfig({
	plugins: [vue(), dts(), defineOptions()],
	build: {
		target: 'modules',
		outDir: 'es',
		emptyOutDir: false,
		minify: false,
		rollupOptions: {
			external: ['vue'],
			input: ['src/index.ts'],
			output: [
				{
					format: 'es',
					dir: 'es',
					entryFileNames: '[name].js',
					preserveModules: true,
					preserveModulesRoot: 'src'
				},
				{
					format: 'cjs',
					dir: 'lib',
					entryFileNames: '[name].js',
					preserveModules: true,
					preserveModulesRoot: 'src'
				}
			]
		},
		lib: {
			entry: 'src/index.ts',
			formats: ['es', 'cjs']
		}
	}
});