// Change this if you want the possibility of longer or shorter puzzles.
const maxLength = 40 // (Typically, the lower this number, the harder the puzzle.)

//Change this if you want more or fewer strikes allowed
const allowedStrikes = 3 //If you set this and maxLength both too high, the puzzle will be impossible to lose.

const defaultStrikes = new Array(allowedStrikes).fill({ icon: '⚪', guess: '' })

//Confetti! 🎉
//All the below code is just for the confetti. Could've brought it into Vue but didn't seem like there was any real reason to. Library is linked in the HTML tab's header settings.
let count = 200;
let defaults = {
	origin: { y: 0.5 },
	colors: ['#ffd100', '#a7a8aa', '#ff6a13', '#e4002b', '#7ba7bc', '#34657f']
};

const fire = (particleRatio, opts) => {
	confetti(
		Object.assign({}, defaults, opts, {
			particleCount: Math.floor(count * particleRatio)
		})
	);
};

const fireEmAll = () => {
	fire(0.25, {
		spread: 26,
		startVelocity: 55
	});
	fire(0.2, {
		spread: 60
	});
	fire(0.35, {
		spread: 100,
		decay: 0.91
	});
	fire(0.1, {
		spread: 120,
		startVelocity: 25,
		decay: 0.92
	});
	fire(0.1, {
		spread: 120,
		startVelocity: 45
	});
};