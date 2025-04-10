import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState, useEffect } from 'react';

//models
import { ActionAreaCardProps } from '@/controllers/components/cards/projectCard';

//assets
import github from '@assets/svg/socialMedia/github.svg';
import { FolderDot, X, ArrowUpRight } from 'lucide-react';

const DialogWindow: React.FC<ActionAreaCardProps> = ({
	closeDialog,
	title,
	fullText,
	date,
	linkGit,
	techsUsed_Text,
	linkProject,
	imageURL,
}) => {
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		// Iniciar animación cuando el componente se monta
		setIsAnimating(true);
	}, []);

	const handleClose = () => {
		// Iniciar animación de cierre
		setIsAnimating(false);
		// Esperar a que termine la animación antes de cerrar realmente
		setTimeout(() => {
			closeDialog(); //nunca va a ser unidefined
		}, 300); // Debe coincidir con la duración de la animación
	};

	return (
		<Dialog open={true} as="div" className="relative z-10 focus:outline-none" onClose={handleClose}>
			<DialogBackdrop
				className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
					isAnimating ? 'opacity-100' : 'opacity-0'
				}`}
			/>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full pt-20 items-center justify-center p-4">
					<DialogPanel
						className={`w-full max-w-4xl md:w-4/5 lg:w-3/4 xl:w-2/3 max-h-[80vh] rounded-xl bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] overflow-hidden transform transition-all duration-300 shadow-2xl border border-gray-800/50 ${
							isAnimating
								? 'opacity-100 scale-100 translate-y-0'
								: 'opacity-0 scale-95 translate-y-4'
						}`}
					>
						{/* Close button floating on top right */}
						<button
							onClick={handleClose}
							className="absolute top-3 right-3 z-20 bg-white   hover:bg-[#ff5252] text-black hover:text-white rounded-full p-2 transition-all duration-200 hover:rotate-90 cursor-pointer"
						>
							<X size={18} />
						</button>

						<div className="w-full overflow-hidden h-60 sm:h-72 md:h-80 relative">
							<div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent opacity-70 z-10"></div>
							<img
								src={imageURL}
								className={`w-full h-full object-cover transition-transform duration-500 ${
									isAnimating ? 'scale-100' : 'scale-110'
								}`}
								alt={title}
							/>
						</div>

						<div
							className={`px-4 py-5 md:p-6 transition-all duration-500 -mt-10 relative z-20 ${
								isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
							}`}
						>
							<div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center">
								<DialogTitle
									as="h3"
									className="font-bold text-2xl md:text-2xl lg:text-4xl text-white  lg:mb-2"
								>
									{title}
								</DialogTitle>
								{/*links section*/}
								<div className="flex flex-wrap gap-3 sm:ml-auto sm:gap-4 font-medium">
									{/*github*/}
									{linkGit && (
										<a
											href={linkGit}
											target="_blank"
											rel="noopener noreferrer"
											className="bg-[#2a2a2a] rounded-full px-3 py-2 flex text-white items-center text-sm hover:bg-[#444] transition-all hover:scale-105 shadow-md"
										>
											<img src={github} alt="github" className="w-4 h-4" />
											<span className="ml-2 hidden sm:inline">GitHub</span>
											<ArrowUpRight className="w-3 h-3 ml-1 opacity-70" />
										</a>
									)}

									{/*project*/}
									{linkProject && (
										<a
											href={linkProject}
											target="_blank"
											rel="noopener noreferrer"
											className="bg-[#2a2a2a] rounded-full px-3 py-2 flex text-white items-center text-sm hover:bg-[#444] transition-all hover:scale-105 shadow-md"
										>
											<FolderDot className="w-4 h-4" />
											<span className="ml-2 hidden sm:inline">Live Demo</span>
											<ArrowUpRight className="w-3 h-3 ml-1 opacity-70" />
										</a>
									)}
								</div>
							</div>

							{/* Date indicator */}
							<div className="mt-2 mb-4">
								<span className="text-xs text-white/50 bg-white/10 py-1 px-2 rounded-md inline-flex items-center">
									{date}
								</span>
							</div>

							{/* Project description */}
							<div className="mt-4 bg-black/20 rounded-lg p-4 max-h-[30vh] md:max-h-[40vh] overflow-y-auto custom-scrollbar">
								<p className="text-xs md:text-sm/6 text-white/70 lg:text-[0.95rem]">{fullText}</p>
							</div>

							{/* Technologies used */}
							<div className="mt-6">
								<h4 className="text-xs uppercase tracking-wider text-white/50 mb-2">
									Technologies
								</h4>
								<div className="flex flex-wrap gap-2">
									{techsUsed_Text?.map((item, index) => (
										<span
											className="bg-gradient-to-r from-white/10 to-white/5 text-white font-medium text-xs px-3 py-1.5 rounded-full inline-flex items-center border border-white/10"
											key={index}
										>
											{item}
										</span>
									))}
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default DialogWindow;
