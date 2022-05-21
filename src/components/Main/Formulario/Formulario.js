import { useState } from 'react'
import './Formulario.css'

const tipos = [
	"Ganadería",
	"Recreativo",
	"Cría",
	"Enviar",
]

export default function Formulario() {
	const [chosen, setChosen] = useState(0)

	return (
		<div className='Section Formulario'>
			<h2 className='SectionTitle'>
				Ingresa los datos para tu borde
			</h2>

			<div className='FormContainer'>
				<h3 className='FormTitle'>Tipo de uso</h3>
				<ul className='FormItems'>
						<li className='FormItem'>Riego</li>
						<li className='FormItem'>Ganadería</li>
						<li className='FormItem'>Recreativo</li>
						<li className='FormItem'>Cría</li>
					<button className='SubmitBtn'>Enviar</button>
				</ul>
			</div>

		</div>
	)
}
