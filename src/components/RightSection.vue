<template>
	<div
		class="right-section"
		v-for="testimonialImages in testImages"
		:key="testimonialImages._id"
	>
		<div class="testimonial-paragraph-container">
			<p
				class="testimonial-paragraph-one"
				ref="paragraphOne"
				v-bind:class="{ paraOneActive: isParaOneActive }"
			>
				"{{ testimonialImages.textOne }}"
			</p>
			<p class="testimonial-paragraph-two" ref="paragraphTwo">
				"{{ testimonialImages.textTwo }}"
			</p>
			<p class="testimonial-paragraph-three" ref="paragraphThree">
				"{{ testimonialImages.textThree }}"
			</p>
		</div>
		<router-link v-bind:to="experience"
			><button class="jessica-btn">
				<span class="btn-text-cont" v-if="count == 0"
					><h3 ref="btnH3">
						HEAR
						{{ testimonialImages.testimonialBtnOne }} EXPERIENCE
					</h3></span
				>
				<span class="btn-text-cont" v-if="count == 1"
					><h3 ref="btnH3">
						HEAR
						{{ testimonialImages.testimonialBtnTwo }} EXPERIENCE
					</h3></span
				>
				<span class="btn-text-cont" v-if="count == 2"
					><h3 ref="btnH3">
						HEAR
						{{ testimonialImages.testimonialBtnThree }} EXPERIENCE
					</h3></span
				>
			</button></router-link
		>
		<div class="people-container">
			<div
				class="person one"
				v-on:click="oneActive"
				v-bind:class="{ personActive: isPersonOneActive }"
			></div>
			<div
				class="person two"
				v-on:click="twoActive"
				v-bind:class="{ personTwoActive: isPersonTwoActive }"
			></div>
			<div
				class="person three"
				v-on:click="threeActive"
				v-bind:class="{ personThreeActive: isPersonThreeActive }"
			></div>
		</div>
	</div>
</template>

<script>
import sanity from "../client.js";

const queryText = `*[_type == "testimonialImages"]{
  _id,
  textOne,
  textTwo,
  textThree,
  testimonialBtnOne,
   testimonialBtnTwo,
   testimonialBtnThree
  
}[0...50]`;

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default {
	name: "RightSection",
	props: {
		isOnePictureActive: Boolean,
		isOnePictureInactive: Boolean,
		isTwoPictureActive: Boolean,
		isTwoPictureInactiveRight: Boolean,
		isTwoPictureInactiveLeft: Boolean,
		isThreePictureActive: Boolean,
		isThreePictureInactive: Boolean
	},
	data: () => ({
		isPersonOneActive: true,
		isPersonTwoActive: false,
		isPersonThreeActive: false,
		tl: "",
		experienceText: "JESSICA'S",
		experience: "/experience-one",
		testImages: [],
		isparaOneActive: false,
		secondary: [],
		count: 0
	}),
	mounted() {
		this.timeLineOne();
		this.timeLineTwo();
		this.timeLineThree();

		ScrollTrigger.create({
			trigger: ".section-two",
			toggleActions: "play none none none",
			onEnter: () => this.timeLineOne(),

			start: () => "top " + window.innerHeight * 1,

			onLeaveBack: (self) => self.disable()
		});
	},
	created() {
		this.fetchDataText();
		setTimeout(function () {
			ScrollTrigger.refresh();
		}, 50);
	},
	methods: {
		fetchDataText() {
			this.error = this.testimonialImages = null;
			this.loading = true;
			sanity.fetch(queryText).then(
				(testImages) => {
					this.loading = false;
					this.testImages = testImages;
					this.blocks = testImages.body;
				},
				(error) => {
					this.error = error;
				}
			);
		},

		timeLineOne() {
			this.isParaOneActive = true;
			let tl = gsap.timeline(),
				mySplitText = new SplitText(this.$refs.paragraphOne, {
					type: "lines"
				}),
				lines = mySplitText.lines;

			gsap.set(this.$refs.paragraphOne, { perspective: 400 });

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
				mySplitText = new SplitText(this.$refs.paragraphTwo, {
					type: "lines"
				}),
				lines = mySplitText.lines;

			gsap.set(this.$refs.paragraphTwo, { perspective: 400 });

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
		timeLineThree() {
			let tl = gsap.timeline(),
				mySplitText = new SplitText(this.$refs.paragraphThree, {
					type: "lines"
				}),
				lines = mySplitText.lines;

			gsap.set(this.$refs.paragraphThree, { perspective: 400 });

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
		oneActive() {
			this.$emit("onePictureActiveChange", true);
			this.$emit("onePictureActiveChangeFalse", false);
			this.isPersonOneActive = true;
			this.isPersonTwoActive = false;
			this.isPersonThreeActive = false;
			this.timeLineOne();
			this.experience = "/experience-one";
			this.experienceText = "JESSICA'S";
			var el = this.$refs.btnH3;
			el.style.animation = "none";
			el.offsetHeight; /* trigger reflow */
			el.style.animation = null;
			this.count = 0;
			this.$refs.paragraphOne.style.opacity = "1";
			this.$refs.paragraphOne.style.position = "relative";
			this.$refs.paragraphTwo.style.position = "absolute";
			this.$refs.paragraphThree.style.position = "absolute";

			/*
      this.$refs.paragraphOne.style.display = "block";
      this.$refs.paragraphTwo.style.display = "none";
      this.$refs.paragraphThree.style.display = "none";
      */
			this.$refs.paragraphTwo.style.opacity = "0";
			this.$refs.paragraphThree.style.opacity = "0";
		},
		twoActive() {
			this.$emit("twoPictureActiveChange", true);
			this.$emit("twoPictureActiveChangeFalse", false);
			this.isPersonOneActive = false;
			this.isPersonTwoActive = true;
			this.isPersonThreeActive = false;
			this.timeLineTwo();
			this.experience = "/experience-two";
			this.experienceText = "MARY'S";
			var el = this.$refs.btnH3;
			el.style.animation = "none";
			el.offsetHeight; /* trigger reflow */
			el.style.animation = null;
			this.count = 1;
			this.$refs.paragraphOne.style.opacity = "0";
			this.$refs.paragraphTwo.style.opacity = "1";
			this.$refs.paragraphTwo.style.position = "relative";
			this.$refs.paragraphOne.style.position = "absolute";
			this.$refs.paragraphThree.style.position = "absolute";
			/*
      this.$refs.paragraphOne.style.display = "none";
      this.$refs.paragraphTwo.style.display = "block";
      this.$refs.paragraphThree.style.display = "none";
      */
			this.$refs.paragraphThree.style.opacity = "0";
		},
		threeActive() {
			this.$emit("threePictureActiveChange", true);
			this.$emit("threePictureActiveChangeFalse", false);
			this.isPersonOneActive = false;
			this.isPersonTwoActive = false;
			this.isPersonThreeActive = true;
			this.experience = "/experience-three";
			this.experienceText = "CLAUDIA'S";
			this.timeLineThree();
			var el = this.$refs.btnH3;
			el.style.animation = "none";
			el.offsetHeight; /* trigger reflow */
			el.style.animation = null;
			this.count = 2;
			this.$refs.paragraphThree.style.position = "relative";
			this.$refs.paragraphTwo.style.position = "absolute";
			this.$refs.paragraphOne.style.position = "absolute";
			this.$refs.paragraphOne.style.opacity = "0";
			this.$refs.paragraphTwo.style.opacity = "0";
			/*
      this.$refs.paragraphOne.style.display = "none";
      this.$refs.paragraphThree.style.display = "block";
      this.$refs.paragraphTwo.style.display = "none";
      */
			this.$refs.paragraphThree.style.opacity = "1";
		}
	}
};
</script>

<style>
.right-section {
	position: absolute;
	top: 0vw;
	width: 28vw;
	height: 34vw;

	right: 12vw;
}
.people-container {
	position: relative;
	top: 5vw;
	left: 0;
	width: 16vw;
	height: 8vw;
}

.jessica-btn h3 {
	position: relative;
	top: 0%;
	transform: translateY(-50%);

	font-size: 0.9vw;
	color: #544a3f;

	animation: btn-anim 0.6s forwards;
	opacity: 0;
}

@keyframes btn-anim {
	0% {
		top: 100%;
		opacity: 0;
	}
	100% {
		top: 7%;
		opacity: 1;
	}
}

.btn-text-cont {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 15vw;
	height: 2vw;

	overflow: hidden;
	transform: translate(-50%, -50%);
}

.person {
	position: absolute;
	width: 1.25vw;
	height: 1.25vw;
	top: 1.5vw;
	overflow: hidden;

	background: #544a3f;
	cursor: pointer;
	transition: 0.25s;
	border-radius: 50%;
}

.person div {
	position: absolute;
	left: 50%;
	top: 50%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 3vw;
	height: 3vw;
	overflow: hidden;
}

.person img {
	position: absolute;
	width: 160%;
	top: -0.8vw;
	left: -0.8vw;
	transform: rotate(-45deg);
}

.one {
	left: 0vw;
}
.two {
	left: 2.7vw;
}
.three {
	left: 5.4vw;
}

.personActive {
	background: #d4c09e;
}

.personTwoActive {
	background: #d4c09e;
}

.personThreeActive {
	background: #d4c09e;
}

.right-section p {
}

.testimonial-paragraph-one {
	position: relative;
	left: 0;
	text-align: left;
	font-size: 2.6vw;
	width: 22vw;
	margin-top: 3.5vw;
	opacity: 0;
}

.testimonial-paragraph-two {
	position: absolute;
	left: 0;
	text-align: left;
	font-size: 2.6vw;
	width: 22vw;
	margin-top: 3.5vw;
	opacity: 0;
}

.testimonial-paragraph-three {
	position: absolute;
	left: 0;
	text-align: left;
	font-size: 2.6vw;
	width: 22vw;
	margin-top: 3.5vw;
	opacity: 0;
}

.jessica-btn {
	position: relative;
	left: 0;
	margin-top: 02.5vw;
	width: 18vw;
	height: 4.5vw;
	display: block;

	background: none;
	border: 0.2vw solid #d4c09e;
	cursor: pointer;
}

@media (max-aspect-ratio: 200/200) {
	.right-section {
		width: 80vw;
		height: 100vw;
	}
	.right-section p {
		margin-top: 80vw;

		font-size: 7.5vw;
		width: 80vw;
	}

	.jessica-btn {
		width: 50vw;
		height: 15vw;
		margin-top: 8vw;

		position: relative;
		border: 0.5vw solid #d4c09e;
	}

	.jessica-btn h3 {
		font-size: 2.5vw;
		width: 50vw;
	}
	.people-container {
		position: relative;
		margin-top: 6vw;
		left: calc(0vw);
		width: 15vw;
		height: 16vw;
		z-index: +1;
	}

	.btn-text-cont {
		height: 5vw;
		width: 50vw;
	}

	.person {
		position: absolute;
		width: 3.8vw;
		height: 3.8vw;
		top: 0.5vw;

		transform: rotate(45deg);
		cursor: pointer;
		position: absolute;
	}

	.person div {
		position: absolute;
		left: 50%;
		top: 50%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 7.8vw;
		height: 7.8vw;
		overflow: hidden;
	}

	.two {
		left: 50%;
	}

	.three {
		left: 100%;
	}

	.personActive {
	}

	.personTwoActive {
	}

	.personThreeActive {
	}
}

.paraOneActive {
	opacity: 1;
	position: relative;
}
</style>
