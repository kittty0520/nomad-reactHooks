import useFullscreen from '../hooks/UseFullscreen';

export default function UseFullscreen() {
	const onFullScreen = (isFull) => {
		console.log(isFull ? 'we are full' : 'we are small');
	};
	const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
	return (
		<div>
			<div ref={element}>
				<img src='https://i.ibb.co/R6RwNxx/grape.jpg' alt='grape' width='250' />
				<button onClick={exitFull}>Exit fullscreen</button>
			</div>
			<button onClick={triggerFull}>Make fullscreen</button>
		</div>
	);
}
