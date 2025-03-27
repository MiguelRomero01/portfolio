import { House, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

//animations
import { animationPropsHome } from '@/controllers/animations/animationProps';
import 'aos/dist/aos.css';

export default function Navbar() {
	const [open, setOpen] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(false);

	// Detectar si es un dispositivo móvil basado en el ancho de la pantalla
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Verificar inmediatamente
		checkIfMobile();

		// Configurar listener para cambios en el tamaño de la ventana
		window.addEventListener('resize', checkIfMobile);

		// Limpiar listener cuando el componente se desmonte
		return () => {
			window.removeEventListener('resize', checkIfMobile);
		};
	}, []);

	const toggleMenu = () => {
		setOpen(!open);
	};

	const menuItems = [
		{ to: 'about', label: 'About' },
		{ to: 'education', label: 'Education' },
		{ to: 'soft-skills', label: 'Soft-skills' },
		{ to: 'expertise', label: 'Expertise' },
		{ to: 'projects', label: 'Projects' },
		{ to: 'contact', label: 'Contact' },
	];

	return (
		<nav
			className="flex fixed top-0 left-0 w-full justify-center border-2 backdrop-blur-xl z-50 shadow-lg shadow-gray-800/50"
			data-aos={animationPropsHome.navbar.Animation}
			data-aos-delay={animationPropsHome.navbar.Delay}
			data-aos-duration={animationPropsHome.navbar.Duration}
		>
			{/* diseño movil */}
			{isMobile ? (
				<div className="w-full px-4 flex justify-between items-center">
					<Link to="home" smooth={true} duration={500}>
						<House className="border-blue-500/30 bg-blue-500/10 text-blue-400 size-11 px-1.5 rounded-3xl transition hover:scale-110 ease-in cursor-pointer" />
					</Link>

					<button onClick={toggleMenu} className="text-white z-50">
						{open ? <X className="size-8 text-white" /> : <Menu className="size-8 text-white" />}
					</button>

					{/* Menú móvil desplegable */}
					<div
						className={`fixed top-0 right-0 h-screen w-64 bg-zinc-900 text-white  pt-20 transform transition-transform duration-300 ease-in-out ${
							open ? 'translate-x-0' : 'translate-x-full'
						}`}
					>
						<ul className="flex flex-col items-center gap-8">
							{menuItems.map((item) => (
								<li key={item.to} className="text-lg transition hover:scale-110 cursor-pointer">
									<Link to={item.to} smooth={true} duration={500} onClick={() => setOpen(false)}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			) : (
				// diseño web
				<ul className="flex content-between gap-10 items-center text-white">
					<li className="text-lg transition hover:scale-110 cursor-pointer">
						<Link to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li className="text-lg transition hover:scale-110 cursor-pointer">
						<Link to="education" smooth={true} duration={500}>
							Education
						</Link>
					</li>

					<li className="text-lg transition hover:scale-110 cursor-pointer">
						<Link to="soft-skills" smooth={true} duration={500}>
							Soft-skills
						</Link>
					</li>
					<li>
						<Link to="home" smooth={true} duration={500}>
							<House className="border-blue-500/30 bg-blue-500/10 text-blue-400 size-12 px-1.5 rounded-3xl transition hover:scale-110 ease-in cursor-pointer" />
						</Link>
					</li>
					<li className="text-lg transition hover:scale-110 cursor-pointer">
						<Link to="expertise" smooth={true} duration={500}>
							Expertise
						</Link>
					</li>
					<li className="text-lg transition hover:scale-110 cursor-pointer">
						<Link to="projects" smooth={true} duration={500}>
							Projects
						</Link>
					</li>
					<li className="text-lg transition hover:scale-110 cursor-pointer">
						<Link to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
}
