import MemberCard from './MemberCard'
import './Acerca.css'

const members = [
	{
		"name": "David (Bubu 🦕) Pedroza Segoviano",
		"age": 22,
		"description": [
			"Estudiante de Física en la UG 🐝",
			"Analista en Deloitte 💚",
			"Desarrollador Web Js. 🕸️",
		],
		"img": process.env.PUBLIC_URL + "/assets/bubu.jpg"
	},
	{
		"name": "Missa (lchicha 🌭) El",
		"age": 22,
		"description": [
			"Estudiante de Física en la UG 🐝",
			"Casi Jarbar ⚓",
			"Machine Learning Enthusiast 🐍",
		],
		"img": process.env.PUBLIC_URL + "/assets/missa.jpg"
	},
	{
		"name": "Hector Nieto",
		"age": 22,
		"description": [
		"Estudiante de Física en la UG 🐝",
		"Taylor Swift Enthusiast 🐍",
		],
		"img": process.env.PUBLIC_URL + "/assets/hector.jfif"
	},
	{
		"name": "Estefanía Saucedo",
		"age": 20,
		"description": [
			"Estudiante de Ingeniería en Sistemas 💻",
			"Microsoft Learn Student Ambassador 🟦",
			"Voluntaria en organizaciones que promueven ciencia y tecnología 🧬",
		],
		"img": process.env.PUBLIC_URL + "/assets/teff.jfif"
	},
	{
		"name": "Gil Rodríguez",
		"age": 23,
		"description": [
			"Estudiante de Física en la UG 🐝",
			"Científico de datos en Citibanamex 📈",
			"Cat person 🐱",
		],
		"img": process.env.PUBLIC_URL + "/assets/gil.jfif"
	}
]

export default function Acerca() {
	return (
		<div className='Acerca Section'>
			<h2 className='SectionTitle'>
				¡Conocenos!
			</h2>

			<div
				className='MemberCardsContainer'
			>
				{members.map((member, key) => {
					return (
						<MemberCard
							key={key}
							member={member}
						/>
					)
				})}
			</div>
		</div>
	)
}
