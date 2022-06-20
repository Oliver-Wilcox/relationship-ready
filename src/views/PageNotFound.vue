<template>
	<div class="error-text-container">
		<h1 class="error-title" ref="homeTitle">404</h1>
		<p class="error-subtitle" ref="subtitle">
			WE COULDNT SEEM TO FIND THE PAGE YOU ARE LOOKING FOR.
		</p>
		<router-link to="/#">
			<button class="error-go-back" id="go-back">
				<h3>GO BACK TO HOME</h3>
			</button>
		</router-link>
	</div>
	<div class="error-picture-container">
		<img src="../assets/pathPic.png" alt="" class="picture" />
	</div>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { SplitText } from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
export default {
	updated() {
		this.timeLine();
	},

	computed: {},
	methods: {
		timeLine() {
			let tl = gsap.timeline(),
				mySplitText = new SplitText(this.$refs.homeTitle, {
					type: "lines"
				}),
				lines = mySplitText.lines;
			gsap.set(this.$refs.homeTitle, { perspective: 400 });
			tl.from(
				lines,
				{
					y: 40,
					opacity: 0,
					duration: 0.6,
					stagger: 0.1,
					rotationX: 80,
					transformOrigin: "20% 0 0"
				},
				"+=0"
			);
		}
	}
};
</script>

<style scoped>
.error-text-container {
	position: absolute;
	left: 0vw;
	top: 0%;
	width: 137.5vw;
	height: 100vh;

	z-index: +10;
	animation: textanim 1s forwards;
}
.error-title {
	font-size: 13vw;
	position: relative;
	margin: auto;
	margin-top: 45vh;
	transform: translateY(-50%);
}
.error-subtitle {
	margin: auto;
	margin-top: -8.5vw;
	font-size: 1.3vw;
	position: relative;
	font-family: "DM Sans", sans-serif;
	width: 20vw;
}

.error-go-back {
	position: relative;
	display: block;
	width: 14vw;
	height: 4.5vw;
	border: 0.2vw solid #d4c09e;
	background: none;
	left: 0;

	margin: auto;
	margin-top: 2.5vw;
	cursor: pointer;
}

.error-go-back h3 {
	font-size: 0.9vw;
	color: #544a3f;
	padding: 0.45vw;
}

.error-picture-container {
	position: absolute;
	left: 0;
	top: 0;
	width: 40vw;
	background: none;
	height: 100vh;
	overflow: hidden;
	animation: pictureanim 1s forwards;
}

.picture {
	width: 150%;
}
@keyframes pictureanim {
	0% {
		left: -45vw;
	}
	100% {
		left: 0;
	}
}

@media (max-aspect-ratio: 270/200) {
	.error-picture-container {
		display: none;
	}

	.error-title {
		font-size: 25vw;
		margin-top: calc(45vh);
	}

	.error-text-container {
		width: 0vw;
		left: 50%;
		animation: none;
	}
	.error-subtitle {
		font-size: 2.2vw;
		width: 45vw;
		margin-top: -16vw;
	}

	.error-go-back {
		width: 20vw;
		margin-top: 5vw;
		height: 7.5vw;
		border: 0.3vw solid #d4c09e;
	}
	.error-go-back h3 {
		font-size: 1.2vw;
	}
}
@media (max-aspect-ratio: 200/200) and (max-width: 500px) {
	.error-picture-container {
		display: none;
	}
	.error-text-container {
		width: 100%;
		left: 0;
		animation: none;
	}
	.error-title {
		font-size: 38vw;
		margin-top: calc(38vh);
	}
	.error-subtitle {
		font-size: 3.2vw;
		width: 70vw;
		margin-top: -24vw;
	}

	.error-go-back {
		width: 42vw;
		margin-top: 10vw;
		height: 15.5vw;
		border: 0.5vw solid #d4c09e;
	}
	.error-go-back h3 {
		font-size: 2.6vw;
	}
}
</style>
