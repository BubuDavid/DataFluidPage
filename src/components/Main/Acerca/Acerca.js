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
		"img": process.env.PUBLIC_URL + "assets/bubu.jpg"
	},
	{
		"name": "Missa (lchicha 🌭) El",
		"age": 22,
		"description": [
			"Estudiante de Física en la UG 🐝",
			"Casi Jarbar ⚓",
			"Machine Learning Enthusiast 🐍",
		],
		"img": process.env.PUBLIC_URL + "assets/missa.jpg"
	},
	{
		"name": "Pocoyosita (Teff 🌭) Any",
		"age": 10,
		"description": [
			"Baby4Eva 👶",
			"Empowerada sisenor 💪",
			"Programadora skillfull 👩‍💻",
		],
		"img": process.env.PUBLIC_URL + "assets/teff.jpg"
	},
	{
		"name": "Pocoyosita (Teff 🌭) Any",
		"age": 10,
		"description": [
			"Baby4Eva 👶",
			"Empowerada sisenor 💪",
			"Programadora skillfull 👩‍💻",
		],
		"img": process.env.PUBLIC_URL + "assets/teff.jpg"
	},
	{
		"name": "Pocoyosita (Teff 🌭) Any",
		"age": 10,
		"description": [
			"Baby4Eva 👶",
			"Empowerada sisenor 💪",
			"Programadora skillfull 👩‍💻",
		],
		"img": process.env.PUBLIC_URL + "assets/teff.jpg"
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
