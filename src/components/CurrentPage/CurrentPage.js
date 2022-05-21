import { useContext } from "react"
import { MyContext } from "../Context"
import { choseCurrentSection } from "../Main/Main"

export default function CurrentPage() {
	const {
		currentSection
	} = useContext(MyContext)


	return choseCurrentSection(currentSection)
}
