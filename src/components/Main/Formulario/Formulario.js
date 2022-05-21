import { useState, useContext } from 'react'
import { MyContext } from '../../Context'
import './Formulario.css'

const tipos = [
	"Ganadería",
	"Recreativo",
	"Cría",
	"Enviar",
]

export default function Formulario() {
	const {
		setCurrentSection
	} = useContext(MyContext)
	const [currentTipo, setCurrentTipo] = useState(-1)

	return (
		<div className='Section Formulario'>
			<h2 className='SectionTitle'>
				Ingresa los datos para tu borde
			</h2>

			<div className='FormContainer'>
				<h3 className='FormTitle'>Tipo de uso</h3>
				<ul className='FormItems'>
					{tipos.map((tipo, key) => {
						return (
							<li
								key={key}
								className={currentTipo == key ? "FormItem Active" : "FormItem"}
								onClick={() => setCurrentTipo(key)}
							>
								{tipo}
							</li>
						)
					})}
				</ul>
				<h3 className='FormTitle'>Gasto en litros</h3>
				<div className='ItemContainer'>
					<input
						placeholder='10'
						className='FormSelector'
					></input>
				</div>
				<h3 className='FormTitle'>Límites de tu territorio</h3>
				
				<div className='ItemContainer Selectors'>
					<input
						placeholder='Latitud1'
						className='FormSelector Ubicacion'
					></input>
										<input
						placeholder='Longitud1'
						className='FormSelector Ubicacion'
					></input>
										<input
						placeholder='Latitud2'
						className='FormSelector Ubicacion'
					></input>
										<input
						placeholder='Longitud2'
						className='FormSelector Ubicacion'
					></input>
				</div>
					<button className='SubmitBtn' onClick={() => setCurrentSection("Dashboard")}>Enviar</button>
			</div>

		</div>
	)
}
