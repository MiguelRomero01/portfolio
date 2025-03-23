import { useState, useEffect } from 'react'

//assets
import styleFonts from '@assets/fonts.module.css'
import { ArrowRight } from 'lucide-react'
//components
import SocialMedia from './components/socialMedia'
import TechBar from './components/techBar'

export default function Home() {
	const [softwareText, setSoftwareText] = useState('')
	const [developerText, setDeveloperText] = useState('')
	const softwareFull = 'SOFTWARE'
	const developerFull = 'DEVELOPER'

	useEffect(() => {
		// Función para animar la escritura de texto
		const animateText = (text: string, setter: (value: string) => void, delay: number) => {
			let currentText = '' // Mantiene el estado actual del texto dentro del useEffect
			text.split('').forEach((char, index) => {
				setTimeout(() => {
					currentText += char
					setter(currentText) // Se actualiza con el texto acumulado manualmente
				}, delay * index)
			})
		}

		animateText(softwareFull, setSoftwareText, 130)

		setTimeout(() => {
			animateText(developerFull, setDeveloperText, 130)
		}, softwareFull.length * 130 + 200)
	}, [])

	return (
		<>
			<div className="items-center justify-center text-white">
				{/* software developer text with its animation*/}
				<div className="text-center font-bold text-[400%] md:text-[600%] lg:text-[800%]">
					<p id={styleFonts.MainTitle} className="">
						{softwareText}
					</p>
					<p
						id={styleFonts.MainTitle}
						className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-pink-500"
					>
						{developerText}
					</p>
				</div>
				<TechBar />

				{/* get started button */}
				<div className="flex justify-center py-5">
					<button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-2xl font-semibold py-3 px-6 rounded-full flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
						<a href="#" className="flex items-center space-x-2">
							<span>Get Started</span>
							<ArrowRight />
						</a>
					</button>
				</div>
			</div>

			<SocialMedia />
		</>
	)
}
