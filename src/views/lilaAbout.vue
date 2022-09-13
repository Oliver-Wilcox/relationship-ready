<template>
	<div class="jessica-experience">
		<div class="lila-container-2">
			<div class="jessica-picture-container">
				<img src="../assets/Lila_1.png" alt="" class="jessica-img" />
			</div>
			<h1 class="jessica-name" ref="lilaTitle">LILA TURNER</h1>

			<p
				class="experience-1"
				ref="expOne"
				v-bind:class="{ expActive: isLilaExpOneActive }"
			>
				Lila learnt something that greatly impacted the quality of her
				relationship. This enabled her to have a richer, more loving and
				softer experience of her partner and herself. She founded
				Relationship Ready in 2016 to help people feel and find love,
				regardless whether they are single or in a relationship. She
				believes that everyone deserves to be in a loving relationship
				and sometimes it is the simplest of things that stands in the
				way. Lila left a twenty-year career as a womenswear designer, to
				join the One Thought team as a Partner and Director. She still
				designs, develops and provides programs for organisations and
				individuals, to address the ‘leaky bucket’ issues people face in
				their lives and their organisations. Lila is a regular
				conference speaker and presenter both in the UK and abroad.
			</p>

			<WorkTogether />
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

import WorkTogether from "../components/WorkTogether.vue";
export default {
	components: {
		WorkTogether
	},
	data: () => ({
		isLilaExpOneActive: false,
		isLilaExpTwoActive: false
	}),
	mounted() {
		this.timeLine();
		ScrollTrigger.create({
			trigger: ".experience-1",
			toggleActions: "play none none none",
			onEnter: () => this.timeLineExpOne(),

			start: () => "top " + window.innerHeight * 0.75,

			onLeaveBack: (self) => self.disable()
		});
		ScrollTrigger.create({
			trigger: ".lila-experience-2",
			toggleActions: "play none none none",
			onEnter: () => this.timeLineExpTwo(),

			start: () => "top " + window.innerHeight * 0.75,

			onLeaveBack: (self) => self.disable()
		});
	},

	methods: {
		timeLine() {
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
		timeLineExpOne() {
			this.$refs.expOne.style.opacity = 1;
		},
		timeLineExpTwo() {
			this.$refs.expTwo.style.opacity = 1;
		}
	}
};
</script>

<style scoped>
.work-together-container {
	position: relative;
	background: none;
	top: 25vw;
	padding-top: 0;
}
.experience-1 {
	opacity: 1;
}
.experience-2 {
	opacity: 1;
}
.expActive {
	opacity: 1;
}
@media (max-aspect-ratio: 200/200) {
	.experience-1 {
		position: relative;
		width: 84vw;
		text-align: left;
		font-size: 3.5vw;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 45vw;
		font-family: DM sans;
	}
	.work-together-container {
		margin-top: 10vw;
	}
}
</style>
