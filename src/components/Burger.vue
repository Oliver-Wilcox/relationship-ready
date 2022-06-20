<template>
	<div class="nav">
		<div
			class="bg-blur"
			v-bind:class="{ blurActive: isBurgerActive }"
		></div>
		<div
			class="navigation-container"
			v-bind:class="{ navActive: isBurgerActive }"
		>
			<div
				class="menu-items"
				v-bind:class="{ menuTextActive: isBurgerActive }"
			>
				<span class="home-cont"
					><h1
						class="home"
						ref="homeText"
						v-bind:class="{ homeTextActive: isBurgerActive }"
						v-on:click="burgerOff()"
					>
						<router-link to="/">HOME </router-link>
					</h1></span
				>
				<span class="home-cont"
					><h1
						class="experience"
						ref="experienceText"
						v-bind:class="{ experienceTextActive: isBurgerActive }"
						v-on:click="burgerOff()"
					>
						<router-link to="/experience-one"
							>CLIENT EXPERIENCES</router-link
						>
					</h1></span
				>
				<span class="programs-cont"
					><h1
						class="programs"
						ref="programText"
						v-bind:class="{ programsTextActive: isBurgerActive }"
						v-on:click="burgerOff()"
					>
						<router-link to="/programmes"> PROGRAMMES</router-link>
					</h1></span
				>
				<span class="whoarewe-cont"
					><h1
						class="whoarewe"
						ref="whoText"
						v-bind:class="{ whoTextActive: isBurgerActive }"
						v-on:click="burgerOff()"
					>
						<router-link to="/aboutLila">WHO ARE WE</router-link>
					</h1></span
				>

				<span class="getintouch-cont"
					><h1
						class="getintouch"
						ref="contactText"
						v-bind:class="{ contactTextActive: isBurgerActive }"
						v-on:click="burgerOff()"
					>
						<router-link to="/work-together"
							>GET IN TOUCH</router-link
						>
					</h1></span
				>

				<div class="socials-cont">
					<span class="social-cont"
						><h3
							class="socials"
							v-bind:class="{ socialsActive: isBurgerActive }"
							v-on:click="burgerOff()"
						>
							<a href="socialref" class="socialref">SOCIALS</a>
						</h3></span
					>
					<span class="insta-burger-cont"
						><h1
							class="instagram"
							ref="instaText"
							v-bind:class="{
								instagramTextActive: isBurgerActive
							}"
							v-on:click="burgerOff()"
						>
							<a
								href="https://www.instagram.com/relationshipready/"
								class="instaref"
								>Instagram</a
							>
						</h1></span
					>
					<span class="insta-burger-cont"
						><h1
							class="facebook"
							ref="fbText"
							v-bind:class="{
								facebookTextActive: isBurgerActive
							}"
							v-on:click="burgerOff()"
						>
							<a
								href="https://www.instagram.com/relationshipready/"
								class="instaref"
								>Facebook</a
							>
						</h1></span
					>

					<span class="insta-burger-cont"
						><h1
							class="youtube"
							ref="youtubeText"
							v-bind:class="{
								youtubeTextActive: isBurgerActive
							}"
						>
							<a
								href="https://www.instagram.com/relationshipready/"
								class="instaref"
								>Youtube</a
							>
						</h1></span
					>
				</div>
				<div class="podcasts-cont">
					<span class="podcast-cont"
						><h3
							class="podcasts"
							v-bind:class="{ socialsActive: isBurgerActive }"
						>
							PODCASTS
						</h3></span
					>
					<span class="insta-burger-cont"
						><h1
							class="instagram"
							ref="instaText"
							v-bind:class="{
								instagramTextActive: isBurgerActive
							}"
							v-on:click="burgerOff()"
						>
							<a
								href="https://www.instagram.com/relationshipready/"
								class="instaref"
								>Blubrry</a
							>
						</h1></span
					>
					<span class="insta-burger-cont"
						><h1
							class="facebook"
							ref="fbText"
							v-bind:class="{
								facebookTextActive: isBurgerActive
							}"
							v-on:click="burgerOff()"
						>
							<a
								href="https://www.instagram.com/relationshipready/"
								class="instaref"
								>Apple</a
							>
						</h1></span
					>
					<span class="insta-burger-cont"
						><h1
							class="youtube"
							ref="youtubeText"
							v-bind:class="{
								youtubeTextActive: isBurgerActive
							}"
						>
							<a
								href="https://www.instagram.com/relationshipready/"
								class="instaref"
								>Google</a
							>
						</h1></span
					>
				</div>
			</div>
		</div>

		<img class="logo" src="../assets/relLogo.svg" />
		<div class="burger-container">
			<div
				class="burger"
				v-on:click="(isBurgerActive = !isBurgerActive), burgerOn()"
				v-bind:class="{ burgerActive: isBurgerActive }"
			>
				<div
					class="burger-circle"
					v-bind:class="{ burgerCircActive: isBurgerActive }"
				></div>
				<div
					class="line one"
					v-bind:class="{ lineOneActive: isBurgerActive }"
				></div>
				<div
					class="line two"
					v-bind:class="{ lineTwoActive: isBurgerActive }"
				></div>
				<div
					class="line three"
					v-bind:class="{ lineThreeActive: isBurgerActive }"
				></div>
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
	data: function () {
		return {
			isBurgerActive: false
		};
	},

	methods: {
		burgerOn() {
			this.timelineHome();
			setTimeout(this.timelineExperience, 100);
			setTimeout(this.timelineProgram, 150);
			setTimeout(this.timelineWho, 200);
			setTimeout(this.timelineContact, 250);
			setTimeout(this.timelineEmail, 300);
			setTimeout(this.timelineInsta, 350);
			setTimeout(this.timelineFb, 400);
			setTimeout(this.timelineYoutube, 400);

			if (this.isBurgerActive == true) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "visible";
			}
		},
		burgerOff() {
			document.body.style.overflow = "visible";
			this.isBurgerActive = false;
		},
		timelineHome() {
			const tl = gsap.timeline();
			const mySplitText = new SplitText(this.$refs.homeText, {
				type: "lines"
			});
			const lines = mySplitText.lines;
			gsap.set(this.$refs.homeText, { perspective: 400 });
			tl.from(
				lines,
				{
					y: 50,
					delay: 0.2,
					opacity: 0,
					duration: 0.8,
					stagger: 0.1,
					rotationX: 80,
					transformOrigin: "20% 0 0"
				},
				"+=0"
			);
		},
		timelineExperience() {
			const tl = gsap.timeline();
			const mySplitText = new SplitText(this.$refs.experienceText, {
				type: "lines"
			});
			const lines = mySplitText.lines;
			gsap.set(this.$refs.experienceText, { perspective: 400 });
			tl.from(
				lines,
				{
					y: 50,
					delay: 0.2,
					opacity: 0,
					duration: 0.8,
					stagger: 0.1,
					rotationX: 80,
					transformOrigin: "20% 0 0"
				},
				"+=0"
			);
		},
		timelineProgram() {
			const tl = gsap.timeline();
			const mySplitText = new SplitText(this.$refs.programText, {
				type: "lines"
			});
			const lines = mySplitText.lines;
			gsap.set(this.$refs.programText, { perspective: 400 });
			tl.from(
				lines,
				{
					y: 50,
					delay: 0.2,
					opacity: 0,
					duration: 0.8,
					stagger: 0.1,
					rotationX: 80,
					transformOrigin: "20% 0 0"
				},
				"+=0"
			);
		},
		timelineWho() {
			const tl = gsap.timeline();
			const mySplitText = new SplitText(this.$refs.whoText, {
				type: "lines"
			});
			const lines = mySplitText.lines;
			gsap.set(this.$refs.whoText, { perspective: 400 });
			tl.from(
				lines,
				{
					y: 50,
					delay: 0.2,
					opacity: 0,
					duration: 0.8,
					stagger: 0.1,
					rotationX: 80,
					transformOrigin: "20% 0 0"
				},
				"+=0"
			);
		},
		timelineContact() {
			const tl = gsap.timeline();
			const mySplitText = new SplitText(this.$refs.contactText, {
				type: "lines"
			});
			const lines = mySplitText.lines;
			gsap.set(this.$refs.homeText, { perspective: 400 });
			tl.from(
				lines,
				{
					y: 50,
					delay: 0.2,
					opacity: 0,
					duration: 0.8,
					stagger: 0.1,
					rotationX: 80,
					transformOrigin: "20% 0 0"
				},
				"+=0"
			);
		},
		timelineEmail() {
			const tl = gsap.timeline();
			const mySplitText = new SplitText(this.$refs.emailText, {
				type: "lines"
			});
			const lines = mySplitText.lines;
			gsap.set(this.$refs.emailText, { perspective: 400 });
			tl.from(
				lines,
				{
					y: 50,
					delay: 0.2,
					opacity: 0,
					duration: 0.8,
					stagger: 0.1,
					rotationX: 80,
					transformOrigin: "20% 0 0"
				},
				"+=0"
			);
		},
		timelineInsta() {
			const tl = gsap.timeline();
			const mySplitText = new SplitText(this.$refs.instaText, {
				type: "lines"
			});
			const lines = mySplitText.lines;
			gsap.set(this.$refs.instaText, { perspective: 400 });
			tl.from(
				lines,
				{
					y: 50,
					delay: 0.2,
					opacity: 0,
					duration: 0.8,
					stagger: 0.1,
					rotationX: 80,
					transformOrigin: "20% 0 0"
				},
				"+=0"
			);
		},
		timelineFb() {
			const tl = gsap.timeline();
			const mySplitText = new SplitText(this.$refs.fbText, {
				type: "lines"
			});
			const lines = mySplitText.lines;
			gsap.set(this.$refs.fbText, { perspective: 400 });
			tl.from(
				lines,
				{
					y: 50,
					delay: 0.2,
					opacity: 0,
					duration: 0.8,
					stagger: 0.1,
					rotationX: 80,
					transformOrigin: "20% 0 0"
				},
				"+=0"
			);
		},
		timelineYoutube() {
			const tl = gsap.timeline();
			const mySplitText = new SplitText(this.$refs.youtubeText, {
				type: "lines"
			});
			const lines = mySplitText.lines;
			gsap.set(this.$refs.youtubeText, { perspective: 400 });
			tl.from(
				lines,
				{
					y: 50,
					delay: 0.2,
					opacity: 0,
					duration: 0.8,
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
.bg-blur {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0);

	pointer-events: none;
	transition: 0.4s;
	z-index: +2;
}

.home {
	opacity: 0;
}
.experience {
	opacity: 0;
}
.programs {
	opacity: 0;
}
.whoarewe {
	opacity: 0;
}
.getintouch {
	opacity: 0;
}
.email {
	opacity: 0;
}
.instagram {
	opacity: 0;
}
.youtube {
	opacity: 0;
}
.facebook {
	opacity: 0;
}

.menu-cont {
	width: 4vw;
	height: 2vw;
	background: none;
	display: block;
	margin-bottom: 3vw;
	margin-left: 5vw;
	top: 10vw;
	overflow: hidden;
}

.menu {
	position: relative;
	opacity: 0.7;
	position: relative;
	top: 2vw;
	font-size: 1.4vw;
	text-align: left;
}
.menuActive {
	top: -1vw;
	transition: 1s;
	transition-delay: 0.2s;
}

.social-cont {
	width: 10vw;
	height: 2vw;
	background: none;
	display: block;
	margin-bottom: 1.2vw;
	margin-left: 5vw;

	margin-top: -1.55vw;
	overflow: hidden;
}

.socials {
	position: relative;
	opacity: 0.7;
	position: relative;
	top: 2vw;
	font-size: 1.4vw;
	text-align: left;
}
.podcast-cont {
	width: 12vw;
	height: 2vw;
	background: none;
	display: block;
	margin-bottom: 1.2vw;
	margin-left: 5vw;

	margin-top: -1.55vw;
	overflow: hidden;
}

.podcasts {
	position: relative;
	opacity: 0.7;
	position: relative;
	top: 2vw;
	font-size: 1.4vw;
	text-align: left;
}
.socialsActive {
	top: -1vw;
	transition: 1s;
	transition-delay: 0.2s;
}

/*

.home-cont{
  background: blue;
  height: 5vw;
  width: 10vw;
 overflow: hidden;
 display: block;
 line-height: 5vw;
}

*/

.menu-items {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);

	transition: 0.4s;
	transition-delay: 0.2s;
}

.navigation-container h1 {
	margin-top: -0.8vw;
	font-size: 2.6vw;
	text-align: left;
	margin-left: 5vw;
	cursor: pointer;
}

.menuTextActive {
}

.blurActive {
	background: rgba(0, 0, 0, 0.1);
	display: block;
}
.navigation-container {
	position: fixed;
	left: 100%;
	height: 100vh;
	width: 40vw;
	background: #efebe6;
	z-index: +2;
	transition: 0.4s ease-in-out;
	overflow-y: scroll;
	top: 0;
	margin: 0;
}

.navActive {
	left: 60%;
	animation: scale-up-ver-left 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)
		forwards;
}

.logo {
	position: absolute;
	top: 2vw;
	left: 2vw;
	width: 8vw;
}

.burger-container {
	position: fixed;
	top: 0;
	margin: 0;
	right: 0;
	z-index: +5;
	width: 9.5vw;
	height: 100vh;
}

.burger {
	position: absolute;
	border: 4px solid #e1d6c2;
	height: 54px;
	width: 54px;
	border-radius: 50%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	transition: 0.6s ease-in-out;
	cursor: pointer;
}

.line {
	position: relative;
	width: 30px;
	height: 1px;
	top: calc(50% - 15px);
	left: calc(50% - 15px);
	background-color: black;
	margin: 7px 0;

	transition: 0.5s;
}

.socials-cont {
	margin-top: 3.5vw;
}
.socials-cont h1 {
	font-size: 1.8vw;
	margin-top: 1vw;
}

.podcasts-cont {
	margin-top: 3.5vw;
}
.podcasts-cont h1 {
	font-size: 1.8vw;
	margin-top: 1vw;
}

@media (max-aspect-ratio: 200/200) {
	.menu-items {
		margin-top: calc(9.5vh);
		height: 126vw;
		background: none;
		top: 0px;
		transform: none;
	}
	.menu {
		opacity: 0.7;

		margin-bottom: 0vw;
		font-size: 4.4vw;
		margin-left: 0vw;
		transform: none;
		text-align: left;
		top: 10vw;
	}

	.menu-cont {
		width: 15vw;
		height: 5vw;
		background: none;
		display: block;
		margin-bottom: 8vw;
		margin-left: 10vw;
		top: 10vw;
		overflow: hidden;
	}

	.menuActive {
		top: -4vw;
		transition: 1s;
		transition-delay: 0.2s;
	}

	.socials {
		opacity: 0.7;

		margin-bottom: 0vw;
		font-size: 4.4vw;
		margin-left: 0vw;
		transform: none;
		text-align: left;
		top: 10vw;
	}

	.social-cont {
		width: 20vw;
		height: 5vw;
		background: none;
		display: block;
		margin-bottom: 5.5vw;
		margin-left: 10vw;
		top: 10vw;
		overflow: hidden;
		margin-top: -2vw;
	}

	.podcasts {
		opacity: 0.7;

		margin-bottom: 0vw;
		font-size: 4.4vw;
		margin-left: 0vw;
		transform: none;
		text-align: left;
		top: 10vw;
	}

	.podcast-cont {
		width: 26vw;
		height: 5vw;

		display: block;
		margin-bottom: 5.5vw;
		margin-left: 10vw;
		top: 10vw;
		overflow: hidden;
		margin-top: -2vw;
	}

	.socialsActive {
		top: -4vw;
		transition: 1s;
		transition-delay: 0.2s;
	}

	.navigation-container h1 {
		font-size: 8.8vw;
		text-align: left;
		margin-left: 10vw;
		transform: none;
		width: 80vw;
	}

	.logo {
		top: 5vw;
		left: 4vw;
		width: 22vw;
	}

	.bg-blur {
		display: none;
	}

	.navActive {
		animation: scale-up-ver-left 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)
			forwards;
		left: 0;
	}

	.burger-container {
		height: 66px;
		width: 75px;
		position: fixed;
	}

	.navigation-container {
		width: 100vw;
	}

	.burger {
		width: 38px;
		height: 38px;
		border: 3px solid #e1d6c2;
	}
	.line {
		width: 22px;
		margin: 5px 0;
		top: calc(50% - 11px);
		left: calc(50% - 11px);
	}
	.socials-cont {
		margin-top: 8vw;
	}
	.socials-cont h1 {
		font-size: 6.5vw;
		margin-top: -0.5vw;
	}
	.podcasts-cont {
		margin-top: -42.5vw;
		margin-left: 35vw;
	}
	.podcasts-cont h1 {
		font-size: 6.5vw;
		margin-top: -0.5vw;
	}
}

.burgerActive {
	border: 0px solid #e1d6c2;
}

.burger-circle {
	position: absolute;
	width: 10%;
	height: 10%;
	background: none;
	top: 50%;
	left: 50%;
	border-radius: 50%;
	transform: translate(-50%, -50%);
	transition: 0.6s ease-in-out;
}

.burgerCircActive {
	width: 120%;
	height: 120%;
	background: white;
}

.lineOneActive {
	margin: 0 0;
	top: 50%;
	transform: rotate(45deg);
	width: 14px;
	left: calc(50% - 7px);
}
.lineTwoActive {
	margin: 0 0;
	top: 50%;
	width: 0px;
	opacity: 0;
}
.lineThreeActive {
	margin: 0 0;
	top: calc(50% - 2px);
	transform: rotate(-45deg);
	width: 14px;
	left: calc(50% - 7px);
}

@keyframes scale-up-ver-left {
	0% {
		-webkit-transform: scaleX(0.4);
		transform: scaleX(0.4);
		-webkit-transform-origin: 100% 100%;
		transform-origin: 100% 100%;
	}
	100% {
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
		-webkit-transform-origin: 100% 100%;
		transform-origin: 100% 100%;
	}
}

@media screen and (min-aspect-ratio: 200/330) and (max-aspect-ratio: 200/200) {
	.menu-items {
		margin-top: calc(50vh - 0px);
		transform: translateY(-50%);
	}
}
.homeTextActive {
	opacity: 1;
}
.experienceTextActive {
	transition-delay: 0.1s;
	opacity: 1;
}
.programsTextActive {
	transition-delay: 0.15s;
	opacity: 1;
}
.whoTextActive {
	transition-delay: 0.2s;
	opacity: 1;
}
.contactTextActive {
	transition-delay: 0.25s;
	opacity: 1;
}
.emailTextActive {
	transition-delay: 0.3s;
	opacity: 1;
}
.instagramTextActive {
	transition-delay: 0.35s;
	opacity: 1;
}
.youtubeTextActive {
	transition-delay: 0.45s;
	opacity: 1;
}
.facebookTextActive {
	transition-delay: 0.4s;
	opacity: 1;
}
a {
	text-decoration: none;
	color: inherit;
}
</style>
