import React, { useState } from 'react';

//material ui components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

//components
import DialogWindow from './dialogWindow';

//model
import { ActionAreaCardProps } from '@/controllers/components/cards/projectCard';

const ActionAreaCard: React.FC<ActionAreaCardProps> = (props) => {
	//necesary props to pass to DialogWindow component
	const { imageURL, title, date, mainText, techsUsed_Icons, ...DialogProps } = props;

	//prop to know if dialog window is open
	const [isOpen, setIsOpen] = useState(false);

	function openDialog() {
		setIsOpen(true);
	}

	function closeDialog() {
		setIsOpen(false);
	}

	return (
		<>
			{/*Dialog window*/}
			{isOpen && (
				<DialogWindow
					{...DialogProps}
					imageURL={imageURL}
					title={title}
					date={date}
					closeDialog={closeDialog}
					buttonText={DialogProps.buttonText || 'Cerrar'}
				/>
			)}

			{/*Main card, where the dialog window is open*/}
			<Card
				sx={{
					transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
					'&:hover': {
						transform: 'translateY(-5px)',
						boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
					},
				}}
			>
				<CardActionArea onClick={openDialog}>
					<CardMedia component="img" height="140" image={imageURL} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{title}
						</Typography>
						<Typography variant="body2" sx={{ color: 'text.secondary' }}>
							{mainText}
						</Typography>

						{/*mapping of the SVGs*/}
						<div className="flex gap-2.5 mt-3">
							{techsUsed_Icons?.map((item, index) => (
								<img
									className="w-7 transition-transform hover:scale-110"
									src={item}
									key={index}
									alt={`Tech icon ${index}`}
								/>
							))}
						</div>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	);
};

export default ActionAreaCard;
