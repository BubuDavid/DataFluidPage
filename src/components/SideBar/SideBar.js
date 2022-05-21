import { useContext } from 'react'
import Logo from './components/Logo/Logo'
import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa'
import { BsPeople, BsPeopleFill, BsPieChartFill, BsPieChart } from 'react-icons/bs'
import { IoPersonCircleSharp, IoPersonCircleOutline } from 'react-icons/io5'
import { RiLoginCircleFill, RiLoginCircleLine } from 'react-icons/ri'
import { BiLogOut } from 'react-icons/bi'
import { MyContext } from '../Context/index'
import './SideBar.css'

const sections = [
	{
		"name": "Inicio",
		"nickname": "Inicio",
		"iconFill": <AiFillHome />,
		"iconOut": <AiOutlineHome />,
	},
	{
		"name": "Propuesta",
		"nickname": "Propuesta",
		"iconFill": <FaLightbulb />,
		"iconOut": <FaRegLightbulb />,
	},
	{
		"name": "Acerca",
		"nickname": "Acerca de nosotros",
		"iconFill": <BsPeopleFill />,
		"iconOut": <BsPeople />,
	},
	{
		"name": "Dashboard",
		"nickname": "Dashboard",
		"iconFill": <BsPieChartFill />,
		"iconOut": <BsPieChart />,
	},
]

const SessionSections = [
	{
		"name": "Perfil",
		"nickname": "Perfil",
		"iconFill": <IoPersonCircleSharp />,
		"iconOut": <IoPersonCircleOutline />,
	},
	{
		"name": "Iniciar Sesion",
		"nickname": "Inicial Sesión",
		"iconFill": <RiLoginCircleFill />,
		"iconOut": <RiLoginCircleLine />,
	},
	{
		"name": "Salir",
		"nickname": "Salir",
		"iconFill": <BiLogOut />,
		"iconOut": <BiLogOut />,
	},
]


export default function SideBar() {
	const {
		currentSection,
		setCurrentSection
	} = useContext(MyContext)
	return (
		<div
			className='SideBar'
		>
			<Logo />
			<hr />
			<ul className='SideBarMenu'>
				{sections.map((section, key) => {
					return (
						<li
							className={currentSection === section.name ? 'MenuItem active': "MenuItem"}
							key={key}
							onClick={() => setCurrentSection(section.name)}>
							<i>
								{currentSection === section.name ? section.iconFill : section.iconOut}
							</i> {section.nickname}
						</li>
					)
				})}
			</ul>
			<h3 className='SideBarSectionTitle'>- Sesión -</h3>
			<ul className='SideBarMenu'>
				{SessionSections.map((section, key) => {
						return (
							<li
								className={currentSection === section.name ? 'MenuItem active': "MenuItem"}
								key={key}
								onClick={() => setCurrentSection(section.name)}
							>
								<i>
									{currentSection === section.name ? section.iconFill : section.iconOut}
								</i> {section.nickname}
							</li>
						)
					})}
			</ul>
		</div>
	)
}
