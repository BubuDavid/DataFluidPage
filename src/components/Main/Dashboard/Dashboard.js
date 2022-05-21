import './Dashboard.css'

import {
	XYPlot,
	VerticalGridLines,
	HorizontalGridLines,
	XAxis,
	YAxis,
	LineSeries,
	RadialChart,
} from 'react-vis';

const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 0}
]
const myData = [{angle: 1}, {angle: 5}, {angle: 2}]

export default function Dashboard() {
	return (
		<div className='Section Dashboard'>
			<h2 className='SectionTitle'>
				Información
			</h2>
		
			<div className='ChartsSection'>
				<div
					className='row'
				>
					<object
						type="text/html"
						className='Plot'
					style={{
						width: "600px",
						height: "500px"
					}}
					data={process.env.PUBLIC_URL + "/assets/embeds/3dplot.html"}
				>
            <p>backup content</p>
					</object>
					<img className='Plot' src={process.env.PUBLIC_URL + "/assets/plot-1.png"}/>
				</div> 	

				<div
					className='row'
				>
					<div
					className='Plot'>
						<XYPlot className='col-1' width={300} height={300}>
							<VerticalGridLines />
							<HorizontalGridLines />
							<XAxis />
							<YAxis />
							<LineSeries data={data} />
						</XYPlot>
					</div>
					<div
					className='Plot'>
						<RadialChart
							width={600}
							height={300}
							data={myData}
							className='col-3'
						/>
					</div>
				</div>
			</div>

			
		</div>
	)
}
