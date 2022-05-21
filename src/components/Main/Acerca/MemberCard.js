
export default function MemberCard({ member }) {
	return (
		<div
			className="MemberCard"
			style={{
				backgroundImage: `url(${member.img ? member.img : process.env.PUBLIC_URL + "/assets/default.jpg"})`,
			}}
		>
			<div className="MemberCardBackground"></div>
				<h3 className="MemberName">
					{member.name}
				</h3>

				{member.description.map((d, key) => {
					return (
						<p
							key={key}
							className="MemberDescription"
						>{d}</p>
					)
				})}

		</div>	
	)
}
