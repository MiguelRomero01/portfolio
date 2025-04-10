import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Material UI
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// Icons
import { Github, Code } from 'lucide-react';

// Components
import DialogWindow from './dialogWindow';

// Model
import { ActionAreaCardProps } from '@/controllers/components/cards/projectCard';

const ProjectCard: React.FC<ActionAreaCardProps> = (props) => {
	const {
		imageURL,
		title,
		date,
		mainText,
		techsUsed_Icons,
		techsUsed_Text,
		linkGit,
		linkProject,
		fullText,
	} = props;

	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const cardRef = useRef<HTMLDivElement>(null);

	// Para manejar el efecto 3D
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (cardRef.current) {
			const rect = cardRef.current.getBoundingClientRect();
			setMousePosition({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			});
		}
	};

	const calculateRotation = () => {
		if (!cardRef.current) return { x: 0, y: 0 };

		const rect = cardRef.current.getBoundingClientRect();
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateY = ((mousePosition.x - centerX) / centerX) * 5;
		const rotateX = ((centerY - mousePosition.y) / centerY) * 5;

		return { x: rotateX, y: rotateY };
	};

	function openDialog() {
		setIsOpen(true);
	}

	function closeDialog() {
		setIsOpen(false);
	}

	return (
		<>
			{isOpen && (
				<DialogWindow
					imageURL={imageURL}
					title={title}
					date={date}
					fullText={fullText}
					techsUsed_Text={techsUsed_Text}
					linkGit={linkGit}
					linkProject={linkProject}
					closeDialog={closeDialog}
				/>
			)}

			<motion.div
				ref={cardRef}
				className="relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden"
				style={{ perspective: 1000 }}
				onMouseMove={handleMouseMove}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				whileHover={{ scale: 1.02 }}
				animate={
					isHovered
						? {
								rotateX: calculateRotation().x,
								rotateY: calculateRotation().y,
						  }
						: { rotateX: 0, rotateY: 0 }
				}
				transition={{ type: 'spring', stiffness: 1200, damping: 20 }}
			>
				{/* Fondo*/}
				<div className="absolute inset-0 bg-[#646464] rounded-2xl" />

				{/* Borde brillante */}
				<motion.div
					className="absolute inset-px rounded-2xl bg-black opacity-90"
					animate={isHovered ? { opacity: 0.85 } : { opacity: 0.9 }}
				/>

				{/* Contenido principal */}
				<div className="relative p-6 text-white h-full flex flex-col">
					{/* Acciones rápidas */}
					<motion.div
						className="absolute top-2 right-2 flex space-x-2"
						initial={{ opacity: 0 }}
						animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						{linkGit && (
							<IconButton
								size="small"
								aria-label="GitHub"
								className="!bg-white/10 !text-white hover:!bg-white/20"
								href={linkGit}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github size={16} />
							</IconButton>
						)}
					</motion.div>

					{/* Imagen del proyecto con overlay */}
					<div
						className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden group cursor-pointer"
						onClick={openDialog}
					>
						<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 z-10" />
						<motion.img
							src={imageURL}
							alt={title}
							className="w-full h-full object-cover"
							animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
							transition={{ duration: 0.6 }}
						/>

						{/* Fecha flotante */}
						{date && (
							<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full z-20">
								{date}
							</div>
						)}
					</div>

					{/* Título del proyecto */}
					<Typography
						variant="h5"
						component="h2"
						className="font-bold text-xl"
						sx={{
							background: 'linear-gradient(90deg, #fff, #f0f0f0)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							marginBottom: 2,
						}}
					>
						{title}
					</Typography>

					{/* Descripción del proyecto */}
					<Typography
						variant="body2"
						className="text-gray-300 text-sm"
						sx={{ flexGrow: 1, lineClamp: 3, marginBottom: 4 }}
					>
						{mainText}
					</Typography>

					{/* Tecnologías utilizadas */}
					<div className="mt-auto">
						<div className="flex flex-wrap gap-2 items-center">
							{techsUsed_Icons?.map((item, index) => (
								<motion.div
									key={index}
									className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 p-1.5"
									whileHover={{ scale: 1.2, backgroundColor: 'rgba(255,255,255,0.2)' }}
								>
									<img src={item} alt={`Tech ${index}`} className="w-full h-full object-contain" />
								</motion.div>
							))}

							<motion.button
								onClick={openDialog}
								className="ml-auto bg-white/10 hover:bg-white/20 text-white text-xs py-1.5 px-3 rounded-full flex items-center cursor-pointer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Code size={14} className="mr-1" />
								See Details
							</motion.button>
						</div>
					</div>

					{/* Efecto de brillo que sigue el cursor */}
					{isHovered && (
						<motion.div
							className="absolute pointer-events-none w-40 h-40 rounded-full bg-white/10 blur-xl"
							animate={{
								x: mousePosition.x - 80,
								y: mousePosition.y - 80,
							}}
						/>
					)}
				</div>
			</motion.div>
		</>
	);
};

export default ProjectCard;
