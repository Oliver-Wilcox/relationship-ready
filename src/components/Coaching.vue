<template>
	<div class="coaching-container">
		<div
			class="sanity-container"
			v-for="programmesContent in coachingParagraphs"
			:key="programmesContent._id"
		>
			<div class="coaching-text-container">
				<h1
					class="coaching-title"
					ref="coachTitle"
					v-bind:class="{ coachTextActive: isCoachTitleActive }"
				>
					{{ programmesContent.bespokeTitle }}
				</h1>
				<p
					class="coaching-paragraph"
					ref="coachParagraph"
					v-bind:class="{ coachTextActive: isCoachParaActive }"
				>
					{{ programmesContent.bespokeParagraph }}
					<span class="underline">inquire here</span> to find out more
				</p>
			</div>
			<div
				class="coaching-picture-container"
				v-bind:class="{ coachPicActive: isCoachPicActive }"
			>
				<div class="coaching-blur"></div>
				<img src="../assets/coaching.png" class="coaching-picture" />
			</div>
		</div>
	</div>
</template>

<script>
import sanity from "../client";

const queryCoaching = `*[_type == "programmesContent"]{
_id,
bespokeTitle,
bespokeParagraph

}[0...50]`;

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { SplitText } from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
export default {
	data: () => ({
		isCoachPicActive: false,
		isCoachTitleActive: false,
		isCoachParaActive: false,
		coachingParagraphs: []
	}),
	created() {
		this.fetchDataCoachingText();
		setTimeout(function() {
			ScrollTrigger.refresh();
		}, 50);
	},
	updated() {
		ScrollTrigger.create({
			trigger: ".coaching-container",
			toggleActions: "play none none none",
			onEnter: () => (this.isCoachPicActive = true),

			start: () => "top " + window.innerHeight * 1,

			onLeaveBack: self => self.disable()
		});
		/*
    ScrollTrigger.create({
      trigger: ".coaching-container",
      toggleActions: "play none none none",
      onEnter: () => this.timelineCoach(),

      start: () => "top " + window.innerHeight * 0.9,

      onLeaveBack: (self) => self.disable(),
    });
    */

		ScrollTrigger.create({
			trigger: ".coaching-container",
			toggleActions: "play none none none",
			onEnter: () => (this.isCoachParaActive = true),

			start: () => "top " + window.innerHeight * 0.85,

			onLeaveBack: self => self.disable()
		});
	},

	methods: {
		fetchDataCoachingText() {
			this.error = this.programmesContent = null;
			this.loading = true;
			sanity.fetch(queryCoaching).then(
				coachingParagraphs => {
					this.loading = false;
					this.coachingParagraphs = coachingParagraphs;
				},
				error => {
					this.error = error;
				}
			);
		},
		timelineCoach() {
			this.isCoachTitleActive = true;

			let tl = gsap.timeline(),
				mySplitText = new SplitText(this.$refs.coachTitle, {
					type: "lines"
				}),
				lines = mySplitText.lines;

			gsap.set(this.$refs.coachTitle, { perspective: 400 });

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
.coaching-container {
	position: relative;
	left: 0;
	margin-top: 8vw;
	width: 100vw;
	height: 60vw;
	opacity: 1;
}

.coaching-text-container {
	position: absolute;
	left: 16vw;

	height: 40vw;
	width: 30vw;
	top: 0;
}

.coaching-title {
	position: relative;
	text-align: left;
	font-size: 6.25vw;
	opacity: 1;
	transition: 1s;
}

.coaching-paragraph {
	position: relative;
	text-align: left;
	margin-top: -3vw;
	opacity: 0;
	font-family: DM sans;
	font-size: 1.3vw;
	width: 37vw;
	transition: 1s;
}

.coachTextActive {
	opacity: 1;
}

.coaching-picture-container {
	position: absolute;
	right: 0vw;
	width: 28vw;
	height: 42vw;
	background: none;
	top: 2vw;
	overflow: hidden;
	opacity: 0;
	transition: 1s;
}

.coachPicActive {
	right: 10vw;
	opacity: 1;
	transform: rotate(4deg);
}

.coaching-picture {
	position: relative;
	width: 110%;
}

.coaching-paragraph span {
	text-decoration: underline;
	position: relative;
	display: inline;
	cursor: pointer;
}

@media (max-aspect-ratio: 200/200) {
	.coaching-container {
		margin-top: 0vw;
		height: 120vw;
	}

	.coaching-picture-container {
		width: 38vw;
		height: 55vw;
		right: 0vw;
		z-index: -1;
		top: -2vw;
		opacity: 1;
		display: none;
	}

	.coachPicActive {
		right: 6vw;
		opacity: 1;
		transform: rotate(4deg);
	}

	.coaching-blur {
		position: absolute;
		width: 50vw;
		height: 50vw;
		left: -15vw;
		bottom: -0vw;

		background: rgba(190, 32, 32, 0.6);
		filter: blur(8vw);
		transform: rotate(4deg);
		z-index: +5;
		display: none;
	}
	.coaching-text-container {
		left: 6vw;
		width: 100vw;

		height: 80vw;
	}
	.coaching-title {
		font-size: 11.25vw;
		width: 30vw;
	}
	.coaching-paragraph {
		font-size: 3.8vw;
		width: 90vw;
	}

	.work-together-container {
		top: -8vw;
	}
}
</style>
