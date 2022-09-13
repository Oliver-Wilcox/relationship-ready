<template>
	<div class="retreat-container">
		<div class="retreat-text-container">
			<h1 class="retreat-title" ref="retreatTitle">COACHING PROGRAMME</h1>
			<p
				class="retreat-paragraph"
				v-bind:class="{
					retreatParagraphActive: isRetreatParagraphActive
				}"
			>
				If the timings and format of the retreats do not work for you,
				we have designed a coaching programme that can work around your
				schedule. Our Relationship Ready coaching programme provides
				support and insight for you to find a more effortless way to
				find and be in a relationship. The 1-2-1 coaching allows you to
				focus on what is important to you and achieve the outcomes you
				are looking for.
			</p>
			<p class="what-you-get">What you get:</p>
		</div>
		<div
			class="retreat-picture-container"
			v-bind:class="{ retreatActive: isRetreatActive }"
		>
			<div class="retreat-blur"></div>
			<img src="../assets/retreat.jpg" class="retreat-picture" />
		</div>

		<div
			class="checkbox 1 checkone"
			v-bind:class="{ checkboxActive: isCheckOneActive }"
			ref="checkOne"
		>
			<div
				class="checkbox-img-container"
				v-bind:class="{ checkActive: isCheckOneActive }"
			></div>
			<p class="checkbox-paragraph 1">
				a 30 minute intake call to understand what you are looking to
				get from working with us
			</p>
		</div>
		<div
			class="checkbox 2"
			v-bind:class="{ checkboxActive: isCheckTwoActive }"
			ref="checkTwo"
		>
			<div
				class="checkbox-img-container"
				v-bind:class="{ checkActive: isCheckTwoActive }"
			></div>
			<p class="checkbox-paragraph 2">8 x one-to-one coaching sessions</p>
		</div>

		<div
			class="checkbox 5"
			v-bind:class="{ checkboxActive: isCheckFourActive }"
			ref="checkFour"
			id="checkfive"
		>
			<p class="checkbox-paragraph 5">Cost: £2,160 (£1,800 + VAT)</p>
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
		isRetreatActive: false,
		isRetreatParagraphActive: false,
		isCheckOneActive: false,
		isCheckTwoActive: false,
		isCheckThreeActive: false,
		isCheckFourActive: false,
		programmesPageText: []
	}),
	created() {
		setTimeout(function () {
			ScrollTrigger.refresh();
		}, 50);
	},
	mounted() {
		ScrollTrigger.create({
			trigger: ".retreat-title",
			toggleActions: "play none none none",
			onEnter: () => (this.isRetreatActive = true),

			start: () => "top " + window.innerHeight * 1,

			onLeaveBack: (self) => self.disable()
		});

		ScrollTrigger.create({
			trigger: ".retreat-paragraph",
			toggleActions: "play none none none",
			onEnter: () => (this.isRetreatParagraphActive = true),

			start: () => "top " + window.innerHeight * 0.85,

			onLeaveBack: (self) => self.disable()
		});
		/*
    ScrollTrigger.create({
      trigger: ".retreat-title",
      toggleActions: "play none none none",
      onEnter: () => this.timelineRetreat(),

      start: () => "top " + window.innerHeight * 0.9,

      onLeaveBack: (self) => self.disable(),
    });

    */

		ScrollTrigger.create({
			trigger: this.$refs.checkOne,
			toggleActions: "play none none none",
			onEnter: () => (this.isCheckOneActive = true),

			start: () => "top " + window.innerHeight * 0.9,

			onLeaveBack: (self) => self.disable()
		});
		ScrollTrigger.create({
			trigger: this.$refs.checkTwo,
			toggleActions: "play none none none",
			onEnter: () => (this.isCheckTwoActive = true),

			start: () => "top " + window.innerHeight * 0.9,

			onLeaveBack: (self) => self.disable()
		});
		ScrollTrigger.create({
			trigger: this.$refs.checkThree,
			toggleActions: "play none none none",
			onEnter: () => (this.isCheckThreeActive = true),

			start: () => "top " + window.innerHeight * 0.9,

			onLeaveBack: (self) => self.disable()
		});
		ScrollTrigger.create({
			trigger: this.$refs.checkFour,
			toggleActions: "play none none none",
			onEnter: () => (this.isCheckFourActive = true),

			start: () => "top " + window.innerHeight * 0.9,

			onLeaveBack: (self) => self.disable()
		});
	},

	methods: {
		timelineRetreat() {
			this.$refs.retreatTitle.style.opacity = "1";
			let tl = gsap.timeline(),
				mySplitText = new SplitText(this.$refs.retreatTitle, {
					type: "lines"
				}),
				lines = mySplitText.lines;

			gsap.set(this.$refs.retreatTitle, { perspective: 400 });

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
.retreat-container {
	position: relative;
	left: 0;
	margin-top: 10vw;
	width: 100vw;
	height: 40vw;
}

.retreat-text-container {
	position: absolute;
	left: 16vw;

	height: 40vw;
	width: 30vw;
	top: 0;
}

.retreat-title {
	position: relative;
	text-align: left;
	font-size: 6.25vw;
}

.retreat-paragraph {
	position: relative;
	text-align: left;
	margin-top: -3vw;
	opacity: 0;
	transition: 1s;
	font-family: DM sans;
	font-size: 1.3vw;
	width: 37vw;
}
.retreatParagraphActive {
	opacity: 1;
}
.retreat-picture-container {
	position: absolute;
	right: 0vw;
	width: 28vw;
	height: 42vw;
	transform: rotate(0deg);
	top: 2vw;
	overflow: hidden;
	opacity: 0.2;
	transition: 1s;
}

.what-you-get {
	position: relative;
	text-align: left;
	margin-top: 4vw;
	opacity: 1;
	transition: 1s;
	font-family: DM sans;
	font-size: 1.3vw;
	width: 37vw;
}

.retreatActive {
	transform: rotate(4deg);
	right: 10vw;
	opacity: 1;
}

.retreat-picture {
	position: relative;
	width: 100%;
}

.checkbox {
	position: relative;
	margin-top: 0.5vw;
	left: 16.5vw;

	width: 35vw;
	opacity: 0;
	top: 42vw;
	transition: 1s;
}
#checkthree {
	margin-top: 2.5vw;
}

.checkboxActive {
	opacity: 1;
}

.checkbox-img-container {
	position: relative;
	transition: 1s;
	border-radius: 50vw;
	background: #d4c09e;
	width: 0.5vw;
	height: 0.5vw;
	top: 1vw;
}

.checkActive {
	transform: scale(3);
	display: block;
}

.checkbox-img {
	width: 100%;
}

.checkbox-paragraph {
	position: relative;
	top: 0;
	margin-top: 0vw;
	margin-left: 6vw;
	font-size: 1.3vw;
	font-family: DM sans;
	text-align: left;
}

.full-program {
	position: relative;
	text-align: left;
	margin-top: 3vw;
	top: 42vw;
	margin-left: 16vw;
	opacity: 1;
	transition: 1s;
	font-family: DM sans;
	font-size: 1.3vw;
}

.cost-text {
	position: relative;
	text-align: left;
	top: 42vw;
	margin-left: 16vw;
	margin-top: 3vw;
	opacity: 1;
	transition: 1s;
	font-family: DM sans;
	font-size: 1.3vw;
}

#checkfive {
	margin-top: 2.5vw;
}
@media (max-aspect-ratio: 200/200) {
	.retreat-container {
		margin-top: 18vw;

		height: 280vw;
		overflow-y: visible;
	}

	.retreat-picture-container {
		display: none;
	}

	.retreat-blur {
		position: absolute;
		width: 60vw;
		height: 60vw;
		left: -15vw;
		bottom: -40vw;

		background: rgba(255, 255, 255, 0.8);
		filter: blur(8vw);
		transform: rotate(4deg);
		z-index: +5;
	}

	.retreat-text-container {
		left: 5vw;
		width: 90vw;

		height: 80vw;
	}
	.retreat-title {
		font-size: 11.25vw;
		width: 30vw;
	}
	.retreat-paragraph {
		font-size: 3.8vw;
		width: 90vw;
	}
	.checkbox {
		top: 115vw;
		left: 6vw;
	}

	.checkbox-paragraph {
		font-size: 3.8vw;
		left: 10vw;
		width: 60vw;
	}

	.retreatPicActive {
		right: 6vw;
	}

	.checkbox-img-container {
		width: 1.5vw;
		height: 1.5vw;
	}

	.what-you-get {
		position: relative;

		margin-top: 10vw;

		font-family: DM sans;
		font-size: 3.8vw;
		width: 37vw;
	}

	.full-program {
		margin-top: 83vw;
		margin-left: 5vw;
		font-size: 3.8vw;
		width: 80vw;
	}

	#checkthree {
		margin-top: -64vw;
	}

	.cost-text {
		position: relative;
		text-align: left;
		top: 42vw;
		margin-left: 5vw;
		margin-top: 78vw;
		opacity: 1;
		transition: 1s;
		font-family: DM sans;
		font-size: 3.8vw;
	}

	#checkfive {
		margin-top: -64vw;
	}
}
</style>
