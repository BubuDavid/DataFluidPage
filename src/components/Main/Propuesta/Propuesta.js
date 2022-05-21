import './Propuesta.css'

export default function Propuesta() {
	return (
		<div className='Section Propuesta'>
			<h2 className='SectionTitle'>
				Propuesta ✨
			</h2>

			<div className='ImageAndText'>
				<img src={process.env.PUBLIC_URL + "/assets/ss.jpg"} />
				<p className='SectionText'>
				El día de hoy les presentamos DataFluid, una plataforma como servicio que proporciona un análisis remoto y aútomatico para determinar la construcción óptima de bordos para la captación de agua. Nuestros servicios de análisis son capaces de determinar el mejor lugar de un terreno para la construcción de un bordo.
				<br />
				Para hacer esto, hacemos uso de mapas topográficos satelitales e información pública sobre la precipitación anual en la zona, los cuales son datos abiertos y gratis. Estos datos pueden ser obtenidos de la NASA, o para la resolución requerida en México, del INEGIE. El algoritmo que desarrollamos simula la precipitación anual y el flujo del agua dada la topografía y ubicación del terreno. Actualmente la ingesta de datos se encuentra en desarrollo, la grafica que ven en pantalla es un terreno simulado.
				</p>
			</div>

			<div className='ImageAndText'>
				<p className='SectionText'>
				El modelo de negocio es sencillo: lo único que necesitamos es la delimitación geográfica del terreno donde se quiere construir una cuenca de agua y la cantidad de agua mensual requerida para sus actividades. Partiendo de esta información, la plataforma determina si es viable, en donde y con que especificaciones. El cobro del servicio será por evento, y el costo final dependerá del tamaño del terreno y el número de bordos deseados, con un costo de entre $2000 y $4000 pesos. En términos totales, la construcción de un bordo cuesta entre $50,000 y $150,000, por lo que el uso de nuestros servicios representa menos del 4% del costo total, mismo que ayuda a asegurar y optimizar la inversión hecha en el bordo. El punto de equilibrio se encuentra alrededor de las 700 consultas anuales, y buscamos tener una proyección internacional ya que la plataforma es escalable a cualquier ubicación.
				<br /> <br />
				Con nosotros, el éxito y la viabilidad de abastecimiento de agua constante no es una apuesta, es una probabilidad calculada.
				</p>
				<img src={process.env.PUBLIC_URL + "/assets/mind.png"} />
			</div>


		</div>
	)
}
