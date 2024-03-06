import React from "react";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	// function pause() {
	// 	clearInterval({count})
	// }

	return (
		<>
			<div className="bg-dark content-fluid d-flex text-white fs-1 justify-content-center">
				<div className="border border-light rounded-3 p-2 m-3"><i class="far fa-clock"></i></div>
				<div className="border border-light rounded-3 p-2 m-3">{props.digit1}</div>
				<div className="border border-light rounded-3 p-2 m-3">{props.digit2}</div>
				<span className="border border-light rounded-3 p-2 m-3">{props.digit3}</span>
				<span className="border border-light rounded-3 p-2 m-3">{props.digit4}</span>
				<span className="border border-light rounded-3 p-2 m-3">{props.digit5}</span>
				<span className="border border-light rounded-3 p-2 m-3">{props.digit6}</span>
			</div>

		</>
	);
};

export default Home;
