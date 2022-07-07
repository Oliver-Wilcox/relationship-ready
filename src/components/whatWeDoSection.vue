<template>
	<div class="what-we-do-section-container">
		<h1 class="title" ref="title">WHAT WE DO</h1>
		<p class="paragraph" ref="paragraph">
			In its simplest form we help you answer your own questions as to why
			your relationships never seem to work and help you have a new
			experience of dating, putting your love life on a fresh path.
		</p>
		<div class="picture-container">
			<img src="../assets/whatwedo.jpg" alt="" class="what-we-do-pic" />
		</div>
		<router-link to="/what-we-do">
			<button class="what-we-do-btn">
				<h3>LEARN ABOUT WHAT WE DO</h3>
			</button>
		</router-link>
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
	created() {
		setTimeout(function () {
			ScrollTrigger.refresh();
		}, 50);
	},
	mounted() {
		ScrollTrigger.create({
			trigger: ".paragraph",
			toggleActions: "play none none none",
			onEnter: () => this.timeline(),

			onLeaveBack: (self) => self.disable()
		});

		ScrollTrigger.create({
			trigger: ".paragraph",
			toggleActions: "play none none none",
			onEnter: () => this.timelinePara(),

			onLeaveBack: (self) => self.disable()
		});
	},

	methods: {
		timeline() {
			this.$refs.title.style.opacity = "1";
			let tl = gsap.timeline(),
				mySplitText = new SplitText(this.$refs.title, {
					type: "lines"
				}),
				lines = mySplitText.lines;

			gsap.set(this.$refs.title, { perspective: 400 });

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

		timelinePara() {
			this.$refs.title.style.opacity = "1";
			let tl = gsap.timeline(),
				mySplitText = new SplitText(this.$refs.paragraph, {
					type: "lines"
				}),
				lines = mySplitText.lines;

			gsap.set(this.$refs.paragraph, { perspective: 400 });

			tl.from(
				lines,
				{
					y: 40,
					opacity: 0,
					duration: 0.6,
					stagger: 0.05,
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
.what-we-do-section-container {
	padding-top: 8vw;
	padding-bottom: 15vw;
	width: 100vw;
	background: #f7f5f2;

	margin-top: 0;
}
.title {
	position: relative;
	text-align: left;
	margin-left: 11vw;
	line-height: 5.8vw;
	font-size: 6.25vw;
	width: 35vw;
	margin-top: 2vw;
	opacity: 0;
}
.picture-container {
	position: relative;
	height: 37vw;
	width: 37vw;
	margin-top: -25vw;
	left: calc(100% - 46.5vw);
	background: rgb(255, 255, 255);
	overflow: hidden;
}
.what-we-do-pic {
	width: 100%;
	position: relative;
}
.paragraph {
	position: relative;
	margin-top: -2.5vw;
	text-align: left;
	margin-left: 11vw;
	transition: 1s;
	font-size: 1.3vw;
	width: 35vw;
	opacity: 1;
	font-family: DM sans;
}

.what-we-do-btn {
	position: relative;
	left: 0;
	margin-top: -10vw;
	width: 18vw;
	height: 4.5vw;
	display: block;
	margin-left: 11vw;

	background: none;
	border: 0.2vw solid #d4c09e;
	cursor: pointer;
}

.what-we-do-btn h3 {
	font-size: 0.9vw;
	color: #544a3f;
	padding: 0.45vw;
}

@media (max-aspect-ratio: 200/200) {
	.title {
		margin-left: 6vw;
		line-height: 10vw;

		font-size: 11.25vw;
		width: 90vw;
		margin-top: 2vw;
	}
	.paragraph {
		text-align: left;
		font-size: 3.8vw;
		width: 88vw;
		margin-left: 6vw;
	}
	.picture-container {
		margin-left: 6vw;
		left: 0;
		margin-top: 10vw;
		width: 88vw;
		height: 80vw;
	}
	.what-we-do-btn {
		margin-top: 3vw;
		margin-left: 6vw;
		width: 50vw;
		height: 15vw;

		border: 0.5vw solid #d4c09e;
	}

	.what-we-do-btn h3 {
		font-size: 2.5vw;
		color: #544a3f;
		padding: 0.45vw;
	}
	.what-we-do-section-container {
		padding-bottom: 25vw;
	}
}
</style>
