import "./Logo.css"

export default function Logo() {
	return (
		<div className="Logo">
			<img className="LogoImg" src={process.env.PUBLIC_URL + "/assets/logo.png"} />
			<h1 className="LogoName">Data Fluid</h1>
		</div>
	)
}
