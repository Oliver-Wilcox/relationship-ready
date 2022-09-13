<template>
	<div class="lila-container">
		<div class="lila-container-2">
			<div class="lila-text-container">
				<h1
					class="lila-title"
					ref="lilaTitle"
					v-bind:class="{ lilaTitleActive: isLilaTitleActive }"
				>
					everyone deserves to be in a loving relationship
				</h1>
				<router-link to="aboutLila">
					<button class="about-lila-btn"><h3>ABOUT LILA</h3></button>
				</router-link>
			</div>
			<div class="lila-picture-container">
				<img src="../assets/Lila_1.png" class="lila-pic" />
			</div>
		</div>
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
	data: () => ({
		isLilaTitleActive: false,
		isLilaPActive: false
	}),
	mounted() {
		ScrollTrigger.create({
			trigger: ".lila-container",
			toggleActions: "play none none none",
			onEnter: () => this.timeLine(),

			start: () => "top " + window.innerHeight * 0.75,

			onLeaveBack: (self) => self.disable()
		});

		ScrollTrigger.create({
			trigger: ".lila-container",
			toggleActions: "play none none none",
			start: () => "top " + window.innerHeight * 0.75,
			onEnter: () => (this.isLilaPActive = true),
			onLeaveBack: (self) => self.disable()
		});
	},
	created() {
		setTimeout(function () {
			ScrollTrigger.refresh();
		}, 50);
	},
	methods: {
		timeLine() {
			this.isLilaTitleActive = true;

			let tl = gsap.timeline(),
				mySplitText = new SplitText(this.$refs.lilaTitle, {
					type: "lines"
				}),
				lines = mySplitText.lines;

			gsap.set(this.$refs.lilaTitle, { perspective: 400 });

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
		},

		timeLineTwo() {
			let tl = gsap.timeline(),
				mySplitText = new SplitText(this.$refs.lilaP, {
					type: "lines"
				}),
				lines = mySplitText.lines;

			gsap.set(this.$refs.lilaP, { perspective: 400 });

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

<style>
.lila-container {
	position: relative;
	width: 100vw;
	height: 60vw;
	background: #f7f5f2;
}

.lila-picture-container {
	position: absolute;
	left: 0;
	top: 0;
	margin-top: 10vw;
	margin-left: 7vw;
	width: 45vw;
	overflow: hidden;
}

.lila-pic {
	width: 100%;
}

.lila-text-container {
	position: absolute;
	width: 43vw;
	height: 46vw;

	right: 0;
	top: 18vw;
}

.lila-title {
	position: relative;
	left: 4vw;
	opacity: 0;
	width: 25vw;
	font-size: 3vw;
	text-align: left;
	text-transform: uppercase;
}

.lilaTitleActive {
	opacity: 1;
}

.lila-p {
	position: relative;
	left: 4vw;
	opacity: 0;
	transition: 1.5s;
	width: 25vw;
	font-size: 1.3vw;
	text-align: left;
	font-family: DM Sans;
}

.lilaPActive {
	opacity: 1;
}

.about-lila-btn {
	position: relative;
	left: 4vw;
	bottom: 0;
	margin-top: 3vw;
	width: 12vw;
	height: 4.5vw;
	display: block;
	top: 0;

	color: black;

	background: none;
	border: 0.2vw solid #d4c09e;
	cursor: pointer;
}

.about-lila-btn h3 {
	font-size: 0.9vw;
	color: #544a3f;
	padding: 0.45vw;
}

@media (max-aspect-ratio: 200/200) {
	.lila-container {
		top: 0;
		margin-top: -8vw;
		height: 215vw;
	}
	.lila-text-container {
		position: relative;
		width: 100vw;
		top: 20vw;
		left: 0;
		height: 150vw;
	}
	.lila-picture-container {
		position: relative;
		margin-top: -60vw;
		margin-left: 6vw;

		width: 88vw;
	}
	.lila-title {
		font-size: 11.25vw;
		width: 80vw;
		left: 6vw;
	}

	.lila-p {
		font-size: 3.8vw;
		width: 80vw;
		left: 6vw;
	}

	.about-lila-btn {
		margin-top: 95vw;
		bottom: 0;
		left: 6vw;
		width: 35vw;
		height: 15vw;

		border: 0.5vw solid #d4c09e;
	}

	.about-lila-btn h3 {
		font-size: 2.5vw;
		color: #544a3f;
		padding: 0.45vw;
	}
}
</style>
