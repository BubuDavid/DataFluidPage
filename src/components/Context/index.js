import { createContext, useState } from "react";

const MyContext = createContext()

function MyProvider({ children }) {
	const [currentSection, setCurrentSection] = useState("Inicio")
	return <MyContext.Provider value = {{
		currentSection,
		setCurrentSection
	}}>
		{children}
	</MyContext.Provider>
}

export {MyContext, MyProvider}