<template>
	<div class="what-we-do-container">
		<h1
			class="title"
			ref="workTitle"
			v-bind:class="{ workTitleActive: isWorkTitleActive }"
		>
			WHAT WE DO
		</h1>

		<p class="paragraph para-1">
			The focus of our work is to help you to show up as the most natural
			version of you. We will help you understand the thoughts behind your
			relationship patterns, in a way that will enable you to move past
			them and turn up to your dating life with more enjoyment– making it
			feel easier and giving you more confidence. We will share an
			understanding that will allow you to:
		</p>

		<div class="para-2-container para-cont">
			<div
				class="bullet-point bullet-one"
				v-bind:class="{ bulletActive: isBulletOneActive }"
			></div>
			<div class="paragraph para-2">
				share the most at ease, natural version of yourself with your
				date/partner, so they can really get to know you.
			</div>
		</div>

		<div class="para-3-container para-cont">
			<div
				class="bullet-point bullet-two"
				v-bind:class="{ bulletActive: isBulletTwoActive }"
			></div>
			<div class="paragraph para-3">
				enjoy your date without trying, allowing you to find that real
				connection.
			</div>
		</div>
		<div class="para-4-container para-cont">
			<div
				class="bullet-point bullet-three"
				v-bind:class="{ bulletActive: isBulletThreeActive }"
			></div>
			<div class="paragraph para-4">
				date with a deeper confidence and trust in yourself, taking the
				work out of double guessing what feels right.
			</div>
		</div>
		<div class="para-5-container para-cont">
			<div
				class="bullet-point bullet-four"
				v-bind:class="{ bulletActive: isBulletFourActive }"
			></div>
			<div class="paragraph para-5">
				have fresh new thinking that will guide you, not just in finding
				a meaningful relationship, but also provide you with the skills
				to maintain and enjoy a fun, rich and loving partnership.
			</div>
		</div>

		<p class="paragraph course-is-not">What this course is not:</p>
		<div class="para-6-container para-cont">
			<div
				class="bullet-point bullet-five"
				v-bind:class="{ bulletActive: isBulletFiveActive }"
			></div>
			<div class="paragraph para-6">a dating site</div>
		</div>
		<div class="para-7-container para-cont">
			<div
				class="bullet-point bullet-six"
				v-bind:class="{ bulletActive: isBulletSixActive }"
			></div>
			<div class="paragraph para-7">
				a course that teaches you how to flirt.
			</div>
		</div>
		<div class="para-8-container para-cont">
			<div
				class="bullet-point bullet-seven"
				v-bind:class="{ bulletActive: isBulletSevenActive }"
			></div>
			<div class="paragraph para-8">
				a course that requires you go out on awkward dates.
			</div>
		</div>
		<WorkTogether />
	</div>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { SplitText } from "gsap/dist/SplitText";
import WorkTogether from "../components/WorkTogether.vue";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
export default {
	components: {
		WorkTogether
	},
	data: () => ({
		isBulletOneActive: false,
		isBulletTwoActive: false,
		isBulletThreeActive: false,
		isBulletFourActive: false,
		isBulletFiveActive: false,
		isBulletSixActive: false,
		isBulletSevenActive: false,
		isBulletEightActive: false,
		isWorkTitleActive: false
	}),
	methods: {
		timeLine() {
			this.isWorkTitleActive = true;
			let tl = gsap.timeline(),
				mySplitText = new SplitText(this.$refs.workTitle, {
					type: "lines"
				}),
				lines = mySplitText.lines;
			gsap.set(this.$refs.workTitle, { perspective: 400 });
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
	},
	mounted() {
		ScrollTrigger.create({
			trigger: ".what-we-do-container",
			toggleActions: "play none none none",
			onEnter: () => this.timeLine(),

			start: () => "top " + window.innerHeight * 0.75,

			onLeaveBack: (self) => self.disable()
		});
		ScrollTrigger.create({
			trigger: ".bullet-one",
			toggleActions: "play none none none",
			onEnter: () => (this.isBulletOneActive = true),

			onLeaveBack: (self) => self.disable()
		});

		ScrollTrigger.create({
			trigger: ".bullet-two",
			toggleActions: "play none none none",
			onEnter: () => (this.isBulletTwoActive = true),

			onLeaveBack: (self) => self.disable()
		});

		ScrollTrigger.create({
			trigger: ".bullet-three",
			toggleActions: "play none none none",
			onEnter: () => (this.isBulletThreeActive = true),

			onLeaveBack: (self) => self.disable()
		});

		ScrollTrigger.create({
			trigger: ".bullet-four",
			toggleActions: "play none none none",
			onEnter: () => (this.isBulletFourActive = true),

			onLeaveBack: (self) => self.disable()
		});

		ScrollTrigger.create({
			trigger: ".bullet-five",
			toggleActions: "play none none none",
			onEnter: () => (this.isBulletFiveActive = true),

			onLeaveBack: (self) => self.disable()
		});
		ScrollTrigger.create({
			trigger: ".bullet-six",
			toggleActions: "play none none none",
			onEnter: () => (this.isBulletSixActive = true),

			onLeaveBack: (self) => self.disable()
		});
		ScrollTrigger.create({
			trigger: ".bullet-seven",
			toggleActions: "play none none none",
			onEnter: () => (this.isBulletSevenActive = true),

			onLeaveBack: (self) => self.disable()
		});
		ScrollTrigger.create({
			trigger: ".bullet-eight",
			toggleActions: "play none none none",
			onEnter: () => (this.isBulletEightActive = true),

			onLeaveBack: (self) => self.disable()
		});
	}
};
</script>

<style scoped>
.what-we-do-container {
	width: 100vw;
}

.title {
	position: relative;
	text-align: center;
	opacity: 0;
	width: 80vw;
	margin: auto;
	margin-top: 25vh;

	font-size: 6.25vw;
}

.paragraph {
	position: relative;
	text-align: center;
	margin: auto;
	opacity: 1;
	width: 50vw;
	font-family: DM sans;
	font-size: 1.3vw;
}

.para-1 {
	margin-top: 2vw;
	left: 0vw;
}

.para-6-container {
	margin-top: 5vw;
}

.para-6 {
	margin-left: 8vw;
}

.para-cont {
	position: relative;
	width: 37vw;
	margin: auto;
	margin-top: 3vw;
}

.para-2-container {
	margin-top: 5vw;
}

.para-3-container,
.para-4-container,
.para-5-container,
.para-7-container,
.para-8-container,
.para-9-container {
	margin-top: 2vw;
}

.para-2,
.para-3,
.para-4,
.para-5,
.para-6,
.para-7,
.para-8,
.para-9 {
	position: relative;
	margin: auto;
	width: 29vw;
	top: -0.6vw;
}

.bullet-point {
	position: absolute;
	width: 0.5vw;
	height: 0.5vw;
	transition: 1s;
	border-radius: 50vw;
	background: #d4c09e;
}

.picture-container {
	position: absolute;
	right: 10vw;
	width: 28vw;
	height: 42vw;
	transform: rotate(4deg);
	margin-top: -16vw;
	background: white;
	overflow: hidden;
	opacity: 1;
	transition: 1s;
}

.bulletActive {
	transform: scale(3);
	display: block;
}

.course-is-not {
	margin: auto;
	margin-top: 4vw;
}

.workTitleActive {
	opacity: 1;
}

@media (max-aspect-ratio: 200/200) {
	.title {
		font-size: 11.25vw;
		left: 6vw;
		transform: none;
		width: 88vw;
		margin-top: 36vw;
		text-align: left;
		margin-left: 0;
	}

	.paragraph {
		font-size: 3.8vw;
		left: 6vw;
		width: 85vw;
		margin-left: 0;
		text-align: left;
	}

	.picture-container {
		display: none;
	}

	.para-2-container,
	.para-6-container {
		margin-top: 15vw;
		left: 9vw;
		text-align: left;
		margin-left: 0;
	}

	.para-1 {
		margin-top: 10vw;
		text-align: left;
		margin-left: 0;
	}

	.course-is-not {
		margin-top: 20vw;
		text-align: left;
		margin-left: 0;
	}

	.para-3-container,
	.para-4-container,
	.para-5-container,
	.para-7-container,
	.para-8-container,
	.para-9-container {
		margin-top: 10vw;
		left: 9vw;
		text-align: left;
		margin-left: 0;
	}

	.para-2,
	.para-3,
	.para-4,
	.para-5,
	.para-6,
	.para-7,
	.para-8,
	.para-9 {
		position: relative;
		margin-left: 6vw;
		width: 71vw;
		top: -1.5vw;
		text-align: left;
	}

	.bullet-point {
		width: 1.5vw;
		height: 1.5vw;
	}
}

.work-together-container {
	background: none;
	margin-top: -8vw;
}
</style>
