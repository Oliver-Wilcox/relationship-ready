<template>
	<div class="person-container" ref="personCont">
		<div class="jessica-experience">
			<div class="jessica-picture-container">
				<img alt="" src="../assets/cyndi.jpg" class="jessica-img" />
			</div>
			<h1 class="jessica-name" ref="title">CYNDI</h1>

			<p class="experience-1" ref="expOne">
				‘You should come to this’, was all her email said. Included was
				a link for a Relationship Ready retreat. It was from a friend I
				trusted so I joined the program. I wanted to get a freer mind
				around dating; for it to be a ‘less bad’ experience. I had been
				single for seven years. I’d dabbled with online dating and hated
				it. I was good at meeting people in work settings and at social
				events but on dates an alien version of me turned up. The whole
				thing felt unnatural and uncomfortable. I would rather read a
				book or hang out with my dog than go on a date. I wanted it to
				have less pressure and meaning on it. To feel more comfortable.
				On the retreat we talked about how much thinking we had about
				the kind of person we wanted to be with. Like me, others had a
				robust list of what they looked for in a partner. I started to
				feel curious about that. How we made up the things we wanted,
				without checking back in with ourselves. After the retreat,
				dating started to feel easier in my head.
			</p>

			<p class="experience-2" ref="expTwo">
				When I went back online to the dating app, I went into my
				habitual mode of analyzing every detail in the profiles.
				Scrolling through it felt like too much work. Before, if I
				didn’t get a match, I would feel rejected. If someone I liked
				didn’t swipe me back, I would make up a story about why they
				didn’t like me. It was a painful process. I decided to stop
				trying to manage it. I just relaxed. It felt liberating to let
				go. I didn’t have to meet anyone if I didn’t want to. When I
				stopped being so serious, I swiped right more just to see if
				anyone resonated or to see if they swiped back. I let myself
				play. It stopped looking like it mattered so much. I would read
				the profile and, if I got a good feeling, I would swipe right,
				as opposed to only swiping right if I thought everything was
				amazing about them. I was open to having a conversation. Twenty
				or so profiles in, a guy caught my attention. His picture was
				nice. What he said on his profile wasn’t overly clever or
				remarkable, but there was something about him I was drawn to. He
				wasn’t my usual type but instead of dismissing him, I stayed
				with the feeling that he was interesting. We started to chat
				online that afternoon. It was light, effortless. I liked the way
				I felt when we chatted. We spent hours on the phone most days
				over the next few weeks. Then we met in person and we just kind
				of clicked in. It was easy being in each other’s space. That
				felt magical. On paper it should not have been. We had very
				different preferences and lifestyles. He didn’t have the same
				political views. I lived in a community that had the same
				beliefs as me. From the foods we ate, to the music we liked, we
				had very little in common. This was the first time I’d been
				exposed to a world so different to mine. From the outside, we
				looked incompatible in every way. But when we were together, we
				didn’t feel like opposites. Just different. And different didn’t
				feel like a problem when we were together. His different was
				interesting to me. Our differences were a creative opportunity
				to grow for both of us. I saw that when we were open and
				listened, rather than react, we learned things about each other.
				We didn’t get lost in judgment of things I might have disagreed
				about. I didn’t try to change his mind, or he mine. I was
				curious about why he had such different beliefs to me. I started
				to get an appreciation of his logic, and he did mine. A space
				opened up between us that was beautiful, and our differences
				sort of melted away. The more time we spent together, the more
				obvious it was how much we liked each other.
				<br />
				<br />
				We’ve been together for three years. I feel taken care of,
				admired. I feel like he’s my biggest fan. I feel loved. We are
				equals and partners on this journey. I help him be stronger in
				life and he does me. In the past I had love affairs. I was
				married. I had partners. This is the first time it’s felt like a
				true partnership. We still have very different preferences. He
				wants to drink gin and listen to country music. I don’t drink
				and want to go to spiritual retreats on the weekends. In my
				grumpy moments, I wish he was different. I wish his habits were
				compatible with mine, because it would make things easier for
				me. But in my good moments, I don’t need him to be anything
				other than who he is. I see how receptive and open he is. We
				respect our separate beliefs. We nudge each other to see more
				than we do in our current awareness. I can see how powerful it
				is to understand someone else’s reality, at a deeper level. I
				always wanted to feel stable, consistent, and powerful in a
				relationship but instead I spent so much energy dealing with my
				insecurity. Now I am steady. I feel very little insecurity.
				Insecurity used to mean that I was not good enough, and I never
				wanted to feel it. I now accept that insecurity will always be a
				part of the thoughts I have, so when I feel wobbly for a moment,
				it is not an issue. We all have insecurity. He does too. Now,
				instead of being turned off by these moments, I come in with
				compassion and understanding. It looks like a moment of
				vulnerability rather than something to worry about. I am doing
				the biggest things I have ever done, because I am not insecure
				about who I am. I feel like a better me in this relationship.
			</p>
			<div class="other-experiences-container">
				<div class="experience-2-container">
					<h1 class="exp-name">COLETTE</h1>
					<router-link to="/experience-two">
						<button class="person-two-button person-button">
							<h3>HEAR COLETTE'S STORY</h3>
						</button>
					</router-link>
					<div class="experience-2-img-container">
						<img
							alt=""
							src="../assets/colette.jpg"
							class="experience-2-img"
						/>
					</div>
				</div>
				<div class="experience-3-container">
					<h1 class="exp-name">JULIAS</h1>
					<router-link to="/experience-three">
						<button class="person-three-button person-button">
							<h3>HEAR JULIA'S STORY</h3>
						</button>
					</router-link>
					<div class="experience-3-img-container">
						<img
							alt=""
							src="../assets/julia.jpg"
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
		isExpOneActive: false,
		isExpTwoActive: false
	}),
	created() {
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
