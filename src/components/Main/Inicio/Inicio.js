import Logo from '../../SideBar/components/Logo/Logo'
import './Inicio.css'
export default function Inicio() {
	return (
		<div className='Inicio Section'>
			<h2 className='SectionTitle'>
			<Logo />	<span>By Dataket</span>
			</h2>
			<hr />
			<div className='ImageAndText'>
				<img src={process.env.PUBLIC_URL + "/assets/satelite1.jpg"} />
				<p className='SectionText'>
				El cambio climático ha cambiado de manera significativa la periodicidad de las lluvias y la cantidad de precipitiación mensual. Además, la disponibilidad constante y segura de agua es fundamental para la mayoria de actividades productivas básicas, como la agricultura y la ganadería, que ocupan mas del 70% del agua extraida y son los pilares fundamentales de la seguridad alimentaria.
				</p>
			</div>
			<br />
			<div className='ImageAndText'>
				<p className='SectionText'>
				Múltiples actividades se ven amenzadas por posibles periodos de sequía, especialmente para aquellos lugares remotos. La retención de agua en estos lugares es fundamental para el abastecimiento constante. Una solución común son las cuencas de agua, o bordos, pero hasta el día de hoy se realizan frecuentemente sin los estudios necesarios que optimicen la captación y garanticen la viabilidad un bordo. Como ejemplo, la CONAGUA solo monitorea alrededor de 210 presas, y existen más de 6500 presas pequeñas y bordos que se encuentran sin monitoreo y registro. En esta otra imagen, vemos una serie de bordos desborados en la sierra de lobos, mismo que se pudo evitar.
				</p>
				<img src={process.env.PUBLIC_URL + "/assets/satelite2.jpg"} />
			</div>

		</div>
	)
}
