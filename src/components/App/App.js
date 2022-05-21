import SideBar from '../SideBar/SideBar'
import CurrentPage from '../CurrentPage/CurrentPage'
import './App.css'

function App() {
	function toggleSideBar() {
		const sideBar = document.getElementById("SideBar")
		sideBar.classList.toggle("Active")
	}

  return (
		<div className="App">
			<button className='ActiveBtn' onClick={() => toggleSideBar()}>Menú</button>
			<SideBar />
			<CurrentPage />
    </div>
  )
}

export default App
