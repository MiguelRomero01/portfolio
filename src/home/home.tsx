import { useState, useEffect } from 'react'
import SocialMedia from './components/socialMedia'
import TechBar from './components/techBar'
import styleFonts from '@assets/fonts.module.css'

import 'aos/dist/aos.css'

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
		<div className="items-center justify-center text-white">
			<div className="text-center text-[800%] font-bold">
				<p id={styleFonts.MainTitle} className="pr-20">
					{softwareText}
				</p>
				<p id={styleFonts.MainTitle} className="pl-20">
					{developerText}
				</p>
			</div>
			<TechBar />
			<SocialMedia />
		</div>
	)
}
