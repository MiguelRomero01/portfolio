import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/views/components'),
			'@home': path.resolve(__dirname, './src/views/home'),
			'@about': path.resolve(__dirname, './src/views/about'),
			'@projects': path.resolve(__dirname, './src/views/projects'),
			'@expertise': path.resolve(__dirname, './src/views/expertise'),
			'@softSkills': path.resolve(__dirname, './src/views/softSkills'),
			'@education': path.resolve(__dirname, './src/views/education'),
			'@contact': path.resolve(__dirname, './src/views/contact'),
		},
	},
})
