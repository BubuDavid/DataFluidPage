import Inicio from './Inicio/Inicio'
import Propuesta from './Propuesta/Propuesta'
import Acerca from './Acerca/Acerca'
import Dashboard from './Dashboard/Dashboard'
import Formulario from './Formulario/Formulario'
import './Main.css'

function choseCurrentSection(sectionName) {
	if (sectionName === "Inicio") return <Inicio />
	if (sectionName === "Propuesta") return <Propuesta />
	if (sectionName === "Acerca") return <Acerca />
	if (sectionName === "Dashboard") return <Dashboard />
	if (sectionName === "Formulario") return <Formulario />
}


export {choseCurrentSection}