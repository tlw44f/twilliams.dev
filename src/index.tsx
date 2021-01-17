import React, { useState } from 'react'
import { render } from 'react-dom'

const App: React.FC = () => {
	const [count, setCount] = useState(0)
	return (
		<div>
			<div>
				<h1>I hope you know what you're doing</h1>
				<h3>Oh god you have no clue</h3>
			</div>
			<div>
				<label htmlFor="theButton">Just don't press the button</label>
				<br />
				<button id="theButton" onClick={() => setCount(count + 1)}>
					Just do it
				</button>
			</div>
			<p>You did it {count} times</p>
		</div>
	)
}

const target = document.createElement('div')
document.getElementsByTagName('body')[0].appendChild(target)
render(<App />, target)
