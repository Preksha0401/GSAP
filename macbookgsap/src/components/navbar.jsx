import React, { PureComponent } from 'react'
import { navLinks } from '../constants'

const Navbar=()=>{
	return(
		<header>
			<nav>
				<img src="/LOGO.png" alt="My Logo" className="w-40 h-20 object-contain" />

				<ul>
					{navLinks.map(({label})=>(
						<li key={label}>
							<a href={label}>{label}</a>
						</li>
					))}
				</ul>

				<div className="flex-center gap-3">
					<button>
						<img src="/search.svg" alt="Search" />
					</button>
					<button>
						<img src="/cart.svg" alt="Cart" />
					</button>
				</div>
			</nav>
		</header>
	)
}

export default Navbar