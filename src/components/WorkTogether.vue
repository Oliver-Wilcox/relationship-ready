<template>
	<div
		class="work-together-container"
		id="work-together-cont"
		ref="togetherCont"
	>
		<div
			class="sanity-container"
			v-for="inTouchText in inTouchTexts"
			:key="inTouchText._id"
		>
			<h1
				class="work-together-title"
				ref="togetherTitle"
				v-bind:class="{ togetherTextActive: isTogetherTitleActive }"
			>
				{{ inTouchText.inTouchTitle }}
			</h1>
			<p
				class="work-together-paragraph"
				ref="togetherParagraph"
				v-bind:class="{ togetherTextActive: isTogetherParaActive }"
			>
				{{ inTouchText.inTouchParagraph }}
			</p>
			<button class="work-together-button">
				<a
					href="https://relationship-ready.youcanbook.me"
					class="touchref"
					>BOOK A CALL</a
				>
			</button>
			<form
				action="https://formsubmit.co/oliverbwilcox2@gmail.com"
				method="POST"
			>
				<input
					type="text"
					placeholder="Name"
					name="name"
					class="name"
					required
				/>
				<input
					type="email"
					placeholder="Email"
					name="email"
					class="email"
					required
				/>
				<input
					type="Phone"
					placeholder="Phone (not required)"
					name="number"
					class="number"
				/>

				<h2 class="checkbox-title">I am interested in...</h2>
				<div class="checkbox-container">
					<div class="box-container box-cont-one">
						<label class="form-control">
							<input
								type="checkbox"
								class="box box-one"
								value="yes"
								name="A place on the virtual retreat"
							/>
						</label>
						<p class="check-text">A place on a virtual retreat</p>
					</div>
					<div class="box-container box-cont-two">
						<label class="form-control">
							<input
								type="checkbox"
								class="box box-two"
								value="yes"
								name="A coaching package"
							/>
						</label>
						<p class="check-text">A coaching package</p>
					</div>
					<div class="box-container box-cont-three">
						<label class="form-control">
							<input
								type="checkbox"
								class="box box-three"
								value="yes"
								name="Our Bespoke Relationship coaching package"
							/>
						</label>
						<p class="check-text">
							Our Bespoke Relationship coaching package
						</p>
					</div>
					<div class="box-container box-cont-four">
						<label class="form-control">
							<input
								type="checkbox"
								class="box box-four"
								value="yes"
								name="Not sure, I would just like to know more"
							/>
						</label>
						<p class="check-text">
							Not sure, I would just like to know more
						</p>
					</div>
				</div>
				<button type="submit" class="submit">
					<h3>SEND TO RELATIONSHIP READY</h3>
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import sanity from "../client";

const queryInTouch = `*[_type == "inTouchText"]{
_id,
inTouchTitle,
inTouchParagraph
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
		isTogetherTitleActive: false,
		isTogetherParaActive: false,
		inTouchTexts: []
	}),
	updated() {
		ScrollTrigger.create({
			trigger: this.$refs.togetherCont,
			toggleActions: "play none none none",
			onEnter: () => this.timelineTogether(),

			start: () => "top " + window.innerHeight * 0.85,

			onLeaveBack: (self) => self.disable()
		});
		ScrollTrigger.create({
			trigger: this.$refs.togetherCont,
			toggleActions: "play none none none",
			onEnter: () => (this.isTogetherParaActive = true),
			start: () => "top " + window.innerHeight * 0.9,

			onLeaveBack: (self) => self.disable()
		});
	},
	created() {
		this.fetchDataInTouch();
		setTimeout(function () {
			ScrollTrigger.refresh();
		}, 50);
	},
	methods: {
		timelineTogether() {
			this.isTogetherTitleActive = true;

			let tl = gsap.timeline(),
				mySplitText = new SplitText(this.$refs.togetherTitle, {
					type: "lines"
				}),
				lines = mySplitText.lines;

			gsap.set(this.$refs.togetherTitle, { perspective: 400 });

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
		fetchDataInTouch() {
			this.error = this.inTouchTitle = null;
			this.loading = true;
			sanity.fetch(queryInTouch).then(
				(inTouchTexts) => {
					this.loading = false;
					this.inTouchTexts = inTouchTexts;
				},
				(error) => {
					this.error = error;
				}
			);
		}
	}
};
</script>

<style scoped>
.work-together-container {
	position: relative;
	width: 100vw;
	padding-top: 10vw;
	padding-bottom: 10vw;
	opacity: 1;
	margin-top: -15vw;
	padding-top: 6vw;
	background: #f7f5f2;
	padding-bottom: 7.5vw;
}

.work-together-title {
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	width: 50vw;
	background: none;
	top: 2vw;
	text-align: center;
	font-size: 6.25vw;
	line-height: 5.75vw;
	transition: 1s;
	opacity: 0;
}

.work-together-paragraph {
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	width: 50vw;
	text-align: center;
	margin-top: -1vw;
	font-size: 1.3vw;
	opacity: 0;
	font-family: DM sans;
	transition: 1s;
}

.togetherTextActive {
	opacity: 1;
}

.work-together-button {
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 3vw;
	width: 12vw;
	height: 4.5vw;
	display: block;
	display: none;

	font-size: 1vw;
	background: none;
	border: 0.2vw solid #d4c09e;
	cursor: pointer;
}

.submit h3 {
	font-size: 0.9vw;
	color: #544a3f;
	padding: 0.45vw;
}

.social-contact-info {
	position: relative;
	left: 49%;
	transform: translateX(-50%);
	margin-top: 4vw;
	width: 18vw;
	height: 3.8vw;
}

.icon-container {
	position: absolute;
	left: 0;
	top: 0;
	height: 3.8vw;
	width: 3.8vw;
	border: 0.2vw solid #d4c09e;
	border-radius: 50%;
}

.info-social-title {
	position: relative;
	left: 5.5vw;
	padding-top: 0.5vw;
	text-transform: uppercase;
	font-family: DM Sans;

	font-size: 0.8vw;
	text-align: left;
}

.info-social-contact {
	position: relative;
	left: 5.5vw;
	margin-top: -0.5vw;

	font-family: DM Sans;

	font-size: 1.4vw;
	text-align: left;
	white-space: nowrap;
}

.email-contact {
	margin-top: 5vw;
}

.socials-img {
	position: relative;
	left: 50%;
	top: 50%;
	width: 50%;
	display: block;
	transform: translate(-50%, -50%);
}
form {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 38vw;
	margin: auto;
	margin-top: 1vw;
}

input,
button {
	margin-top: 1vw;
}

button {
	position: relative;
	left: 0;
	margin-top: 2.5vw;
	width: 18vw;
	height: 4.5vw;
	display: block;
	color: #544a3f;

	top: -2vw;
	text-transform: uppercase;
	font-size: 1vw;
	background: none;
	border: 0.2vw solid #d4c09e;
	cursor: pointer;
}

input {
	position: relative;
	background: none;
	background-color: transparent;
	border: none;
	border-bottom: 0.2vw solid #d4c09e;
	outline: none;
	height: 4vw;
	font-size: 1.4vw;
}

::placeholder {
	position: relative;
	color: black;
	opacity: 0.4;
	font-size: 1.4vw;
}

input:focus,
textarea {
	outline: none !important;
}

.checkbox-title {
	text-align: left;
	font-size: 2vw;
	margin-top: 3vw;
}

.checkbox-container {
	position: relative;
	display: flex;
	flex-flow: row wrap;
	justify-content: left;
	width: 40vw;
	background: rgba(0, 0, 255, 0);
	padding: 0;
	margin-top: -2vw;
}
.box-container {
	position: relative;
	left: 0;
	display: flex;
	flex-direction: row;
	position: relative;
	padding: 2vw;
	padding-left: 0;
	margin-left: 0.5vw;

	background: rgba(162, 147, 147, 0);
	box-sizing: border-box;
}
.box-cont-one {
	margin-left: 0vw;
}

.box-cont-three {
	margin-left: 0;
	margin-top: -3vw;
}

.box-cont-four {
	margin-left: 0;
	margin-top: -3vw;
}

.box-container p {
	position: relative;
	font-family: DM Sans;
	font-size: 1.3vw;
	top: -0.04vw;
	margin-top: 0;
	margin-left: 0.7vw;
	color: #544a3f;
}

input[type="checkbox"] {
	-webkit-appearance: none;
	appearance: none;
	background-color: none;
	margin: 0;
	font: inherit;
	color: #544a3f;
	width: 1.8vw;
	height: 1.8vw;
	border: 0.2vw solid #544a3f;
	border-radius: 0.5vw;
	transform: translateY(-0.075em);
	display: grid;
	place-content: center;
	cursor: pointer;
}

input[type="checkbox"]::before {
	content: "";
	width: 0.8vw;
	height: 0.8vw;
	transform: scale(0);
	transition: 120ms transform ease-in-out;

	transform-origin: bottom left;
	background-color: #efebe6;
	clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

input[type="checkbox"]:checked {
	background-color: #544a3f;
}

input[type="checkbox"]:checked::before {
	transform: scale(1);
}
@media (max-aspect-ratio: 200/200) {
	.checkbox-container {
		width: 80vw;
	}
	.box-container {
		padding: 2vw;
		padding-left: 0;
		margin-left: 0.5vw;
	}
	.box-cont-one {
		margin-left: 0vw;
	}
	.box-cont-two {
		margin-left: 0vw;
		margin-top: -2vw;
	}

	.box-cont-three {
		margin-left: 0;
		margin-top: -2vw;
	}

	.box-cont-four {
		margin-left: 0;
		margin-top: -2vw;
	}

	.box-container p {
		font-size: 3.4vw;
		top: 0.1vw;
		text-align: left;
		margin-top: 0;
		margin-left: 2vw;
	}

	input[type="checkbox"] {
		width: 5vw;
		height: 5vw;
		border: 0.4vw solid #544a3f;
		border-radius: 1vw;
		transform: translateY(-0.075em);
	}

	input[type="checkbox"]::before {
		width: 2.2vw;
		height: 2.2vw;
	}

	form {
		width: 75vw;
		margin-top: 5vw;
	}

	input,
	button {
		margin-top: 4vw;
	}

	button {
		width: 54vw;
		height: 15.5vw;
		border: 0.5vw solid #d4c09e;

		margin-top: 3vw;
	}

	.submit h3 {
		font-size: 2.5vw;
		color: #544a3f;
		padding: 0.45vw;
	}

	input {
		border-bottom: 0.5vw solid #d4c09e;
		border-radius: 0;
		height: 10vw;
		font-size: 4.4vw;
	}

	::placeholder {
		font-size: 4.4vw;
	}

	.checkbox-title {
		font-size: 6vw;
		margin-top: 10vw;
	}
	.work-together-container {
		margin-top: -10vw;

		padding-top: 20vw;
		padding-bottom: 20vw;
	}
	.work-together-title {
		font-size: 11.25vw;
		line-height: 10.75vw;
		width: 80%;
		text-align: center;
		left: 50%;
	}

	.work-together-paragraph {
		font-size: 3.8vw;
		width: 80%;
		text-align: center;
		left: 50%;
	}

	.social-contact-info {
		position: relative;
		left: 49%;
		transform: translateX(-50%);
		margin-top: 8vw;
		width: 60vw;
		height: 34vw;
	}

	.email-contact {
		margin-top: 15vw;
	}

	.icon-container {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 0;
		height: 14.8vw;
		width: 14.8vw;
		border: 0.5vw solid #d4c09e;
		border-radius: 50%;
	}

	.info-social-title {
		position: relative;

		padding-top: 19.5vw;
		text-transform: uppercase;

		left: 0;
		font-size: 3vw;
		text-align: center;
	}

	.info-social-contact {
		position: relative;
		left: 0;
		margin-top: -0.5vw;

		font-family: DM Sans;

		font-size: 4.5vw;
		text-align: center;
		white-space: nowrap;
	}
}
a {
	color: inherit;
}
</style>
