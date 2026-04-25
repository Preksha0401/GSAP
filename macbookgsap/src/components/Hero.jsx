import React, { useEffect,useRef } from "react";
const Hero=()=>{
	const videoRef=useRef();

	useEffect(()=>{
		if(videoRef.current) videoRef.current.playbackRate=2;
	},[]);

	return(
		<section id="hero">
			<div >
				<h1>Hello I'm</h1>
				<img src="/MainBanner.png" alt="Preks" />
			</div>

			<video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
			<button>Resume</button>
			<p></p>
		</section>
	)
}

export default Hero