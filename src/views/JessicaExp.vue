<template>
	<div class="person-container" ref="personCont">
		<div
			class="jessica-experience"
			v-for="personOne in personOneExperiences"
			:key="personOne._id"
		>
			<div class="jessica-picture-container">
				<img
					v-if="personOne.personOneImage"
					:src="imageUrlFor(personOne.personOneImage)"
					alt=""
					class="jessica-img"
				/>
			</div>
			<h1 class="jessica-name" ref="title">
				{{ personOne.personOneTitle }}
			</h1>

			<p class="experience-1" ref="expOne">
				{{ personOne.personOneParagraphTextOne }}
			</p>
			<div class="video">
				<iframe
					width="100%"
					height="100%"
					frameborder="0"
					:src="personOne.vimeoUrl"
					allow="autoplay; encrypted-media"
					allowfullscreen=""
				></iframe>
			</div>

			<p class="experience-2" ref="expTwo">
				{{ personOne.personOneParagraphTextTwo }}
				<br />
				<br />
				{{ personOne.personOneParagraphTextThree }}
			</p>
			<div class="other-experiences-container">
				<div class="experience-2-container">
					<h1 class="exp-name">{{ personOne.personTwoName }}</h1>
					<router-link to="/experience-two">
						<button class="person-two-button person-button">
							<h3>HEAR {{ personOne.personTwoName }}'S STORY</h3>
						</button>
					</router-link>
					<div class="experience-2-img-container">
						<img
							v-if="personOne.personTwoImage"
							:src="imageUrlFor(personOne.personTwoImage)"
							alt=""
							class="experience-2-img"
						/>
					</div>
				</div>
				<div class="experience-3-container">
					<h1 class="exp-name">{{ personOne.personThreeName }}</h1>
					<router-link to="/experience-three">
						<button class="person-three-button person-button">
							<h3>
								HEAR {{ personOne.personThreeName }}'S STORY
							</h3>
						</button>
					</router-link>
					<div class="experience-3-img-container">
						<img
							v-if="personOne.personThreeImage"
							:src="imageUrlFor(personOne.personThreeImage)"
							alt=""
							class="experience-3-img"
						/>
					</div>
				</div>
			</div>
			<WorkTogether />
		</div>
	</div>
</template>

<script>
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);
const queryPersonOne = `*[_type == "personOne"]{
  _id,
  personOneTitle,
  personOneImage,
  personOneParagraphTextOne,
  personOneParagraphTextTwo,
  personOneParagraphTextThree,
  personTwoName,
  personTwoImage,
  personThreeName,
  personThreeImage,
   vimeoUrl,


}[0...100]`;

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
		personOneExperiences: [],
		isExpOneActive: false,
		isExpTwoActive: false
	}),
	created() {
		this.fetchDataPersonOne();
		setTimeout(function () {
			ScrollTrigger.refresh();
		}, 50);
	},
	updated() {
		this.timeLine();
		ScrollTrigger.create({
			trigger: ".experience-1",
			toggleActions: "play none none none",
			onEnter: () => this.timeLineExpOne(),

			onLeaveBack: (self) => self.disable()
		});
		ScrollTrigger.create({
			trigger: ".experience-2",
			toggleActions: "play none none none",
			onEnter: () => this.timeLineExpTwo(),

			onLeaveBack: (self) => self.disable()
		});
	},
	methods: {
		fetchDataPersonOne() {
			this.error = this.personOne = null;
			this.loading = true;
			sanity.fetch(queryPersonOne).then(
				(personOneExperiences) => {
					this.loading = false;
					this.personOneExperiences = personOneExperiences;
				},
				(error) => {
					this.error = error;
				}
			);
		},
		imageUrlFor(source) {
			return imageBuilder.image(source);
		},
		timeLine() {
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
		timeLineExpOne() {
			this.$refs.expOne.style.opacity = 1;
		},
		timeLineExpTwo() {
			this.isExpTwoActive = true;
		}
	}
};
</script>

<style scoped>
.work-together-container {
	position: relative;
	background: none;
	top: 12.5vw;
}

.work-together-title {
	opacity: 1;
	display: block;
}

button {
	color: #544a3f;
}

h1 {
	text-transform: uppercase;
}
.video {
}

@media (max-aspect-ratio: 200/200) {
	.work-together-container {
		margin-top: 20vw;
	}
}
</style>
