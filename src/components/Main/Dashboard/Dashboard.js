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
					<object
						type="text/html"
						className='Plot'
					style={{
						width: "400px",
						height: "400px"
					}}
					data={process.env.PUBLIC_URL + "/assets/PIE.html"}
				>
            <p>backup content</p>
					</object>
				</div> 	

				<div
					className='row'
				>
					<img className='Plot' src={process.env.PUBLIC_URL + "/assets/plot-1.png"}/>
					<object
						type="text/html"
						className='Plot'
					style={{
						width: "600px",
						height: "300px"
					}}
					data={process.env.PUBLIC_URL + "/assets/plot-3.html"}
				>
            <p>backup content</p>
					</object>
				</div>
			</div>

			
		</div>
	)
}
