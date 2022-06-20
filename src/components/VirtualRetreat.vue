<template>
	<div class="virtual-container">
		<div
			class="virtual-container-2"
			v-for="programmesParagraph in programmesParagraphs"
			:key="programmesParagraph._id"
		>
			<div
				class="virtual-picture-container"
				ref="virtualPic"
				v-bind:class="{ virtualPicActive: isVirtualPicActive }"
			>
				<div class="virtual-blur"></div>
				<img src="../assets/virtual.png" alt="" class="virtual-img" />
			</div>
			<div class="virtual-text-container">
				<div class="virtual-title">
					{{ programmesParagraph.coachingTitle }}
				</div>
				<p
					class="virtual-paragraph"
					ref="virtualParagraph"
					v-bind:class="{ virtualTextActive: isVirtualParActive }"
				>
					{{ programmesParagraph.coachingParagraph }}
				</p>
				<p class="what-you-get-coaching">What you get:</p>
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
						{{ programmesParagraph.coachingCheckboxOne }}
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
					<p class="checkbox-paragraph 2">
						{{ programmesParagraph.coachingCheckboxTwo }}
					</p>
				</div>
				<p class="cost-text">Cost:</p>
				<div
					class="checkbox 5"
					v-bind:class="{ checkboxActive: isCheckFourActive }"
					ref="checkFour"
					id="checkfive"
				>
					<div
						class="checkbox-img-container"
						v-bind:class="{ checkActive: isCheckFourActive }"
					></div>
					<p class="checkbox-paragraph 5">
						{{ programmesParagraph.coachingCheckboxThree }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import sanity from "../client";

const queryProgrammes = `*[_type == "programmesContent"]{
  _id,
  coachingTitle,
 coachingParagraph,
 coachingCheckboxOne,
 coachingCheckboxTwo,
 coachingCheckboxThree

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
		isVirtualPicActive: false,
		isVirtualTitleActive: false,
		isVirtualParActive: false,
		programmesParagraphs: [],
		isCheckOneActive: false,
		isCheckTwoActive: false,
		isCheckFourActive: false
	}),
	mounted() {},
	updated() {
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
			trigger: this.$refs.checkFour,
			toggleActions: "play none none none",
			onEnter: () => (this.isCheckFourActive = true),

			start: () => "top " + window.innerHeight * 0.9,

			onLeaveBack: (self) => self.disable()
		});
		ScrollTrigger.create({
			trigger: this.$refs.virtualParagraph,
			toggleActions: "play none none none",
			onEnter: () => (this.isVirtualParActive = true),

			start: () => "top " + window.innerHeight * 0.85,

			onLeaveBack: (self) => self.disable()
		});
		ScrollTrigger.create({
			trigger: this.$refs.virtualParagraph,
			toggleActions: "play none none none",
			onEnter: () => (this.isVirtualPicActive = true),

			start: () => "top " + window.innerHeight * 0.85,

			onLeaveBack: (self) => self.disable()
		});
	},
	created() {
		this.fetchDataVirtual();
		setTimeout(function () {
			ScrollTrigger.refresh();
		}, 50);
	},
	methods: {
		fetchDataVirtual() {
			this.error = this.programmesParagraph = null;
			this.loading = true;
			sanity.fetch(queryProgrammes).then(
				(programmesParagraphs) => {
					this.loading = false;
					this.programmesParagraphs = programmesParagraphs;
				},
				(error) => {
					this.error = error;
				}
			);
		},

		timelineVirtual() {
			this.isVirtualTitleActive = true;

			let tl = gsap.timeline(),
				mySplitText = new SplitText(this.$refs.virtualTitle, {
					type: "lines"
				}),
				lines = mySplitText.lines;

			gsap.set(this.$refs.virtualTitle, { perspective: 400 });

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
.virtual-container {
	position: relative;
	left: 0;
	margin-top: 35vw;
	width: 100vw;
	height: 60vw;
	opacity: 1;
	padding-bottom: 10vw;
}

.virtual-picture-container {
	position: absolute;
	left: 0vw;
	width: 28vw;
	height: 42vw;
	opacity: 0.2;
	top: -2vw;
	transition: 1s;
	overflow: hidden;
}

.virtualPicActive {
	left: 11vw;
	opacity: 1;
	transform: rotate(-4deg);
}
.virtual-img {
	width: 110%;
}

.virtual-text-container {
	position: absolute;
	right: 20vw;
	height: 40vw;
	width: 30vw;
	top: 0;
}

.virtual-title {
	position: relative;
	text-align: left;
	font-size: 6.25vw;
	opacity: 1;
}

.virtual-paragraph {
	position: relative;
	text-align: left;
	margin-top: 2vw;
	transition: 1s;
	opacity: 0;
	font-family: DM sans;
	font-size: 1.3vw;
	width: 34vw;
}

.what-you-get-coaching {
	position: relative;
	text-align: left;
	margin-top: 4vw;

	opacity: 1;
	transition: 1s;
	font-family: DM sans;
	font-size: 1.3vw;
	width: 37vw;
}

.virtualTextActive {
	opacity: 1;
}

.checkbox {
	position: relative;
	margin-top: 0.5vw;
	left: 0.5vw;

	width: 35vw;
	opacity: 0;
	top: 1vw;

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
	width: 25vw;
}

.checkboxActive {
	opacity: 1;
}

.checkActive {
	transform: scale(3);
	display: block;
}

.cost-text {
	position: relative;
	text-align: left;
	top: 0vw;
	left: 0;
	margin-left: 0;
	margin-top: 5vw;
	opacity: 1;
	transition: 1s;
	font-family: DM sans;
	font-size: 1.3vw;
}

#checkfive {
	margin-top: 0vw;
}

@media (max-aspect-ratio: 200/200) {
	.virtual-container {
		height: 180vw;

		margin-top: 0vw;
	}
	.virtual-text-container {
		left: 5vw;
		width: 90vw;

		height: 80vw;
	}

	.virtual-title {
		font-size: 11.25vw;
		width: 30vw;
		left: 0vw;

		text-align: left;
	}
	.virtual-paragraph {
		font-size: 3.8vw;
		width: 90vw;
		margin-top: 5vw;
	}
	.virtual-picture-container {
		width: 38vw;
		height: 55vw;
		left: 0vw;
		z-index: -1;
		top: -2vw;
		opacity: 1;
		display: none;
	}

	.virtual-blur {
		position: absolute;
		width: 54vw;
		height: 54vw;
		right: -15vw;
		bottom: -30vw;

		background: rgba(255, 255, 255, 0.7);
		filter: blur(8vw);
		transform: rotate(4deg);
		z-index: +5;
	}

	.virtualPicActive {
		left: 6vw;
	}
	.checkbox {
		top: 3vw;
		left: 1.5vw;
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

	.what-you-get-coaching {
		position: relative;

		margin-top: 10vw;

		font-family: DM sans;
		font-size: 3.8vw;
		width: 37vw;
	}

	.full-program {
		margin-top: 78vw;
		margin-left: 5vw;
		font-size: 3.8vw;
		width: 80vw;
	}

	.cost-text {
		position: relative;
		text-align: left;

		margin-left: 0vw;
		margin-top: 10vw;
		opacity: 1;
		transition: 1s;
		font-family: DM sans;
		font-size: 3.8vw;
	}

	#checkfive {
		margin-top: 0vw;
	}
}
</style>
