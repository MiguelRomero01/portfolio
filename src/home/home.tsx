import { useState, useEffect } from 'react'

//assets
import styleFonts from '@assets/fonts.module.css'

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
				<div className="text-center font-bold text-[300%] md:text-[400%] lg:text-[800%]">
					<p id={styleFonts.MainTitle} className="">
						{softwareText}
					</p>
					<p id={styleFonts.MainTitle} className="">
						{developerText}
					</p>
				</div>
				<TechBar />
			</div>
			<SocialMedia />
		</>
	)
}
