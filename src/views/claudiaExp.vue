<template>
  <div
    class="jessica-experience"
    v-for="personThree in personThreeExperiences"
    :key="personThree._id"
  >
    <div class="jessica-picture-container">
      <img
        v-if="personThree.personThreeImage"
        :src="imageUrlFor(personThree.personThreeImage)"
        alt=""
        class="jessica-img"
      />
    </div>
    <h1 class="jessica-name" ref="title">{{ personThree.personThreeTitle }}</h1>

    <p class="experience-1" ref="expOne">
      {{ personThree.personThreeParagraphTextOne }}
    </p>
    <div class="video">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        src="https://player.vimeo.com/video/18516782"
        allow="autoplay; encrypted-media"
        allowfullscreen=""
      ></iframe>
    </div>

    <p class="experience-2" ref="expTwo">
      {{ personThree.personThreeParagraphTextTwo }}
      <br />
      <br />

      {{ personThree.personThreeParagraphTextThree }}
    </p>
    <div class="other-experiences-container">
      <div class="experience-2-container">
        <h1 class="exp-name">{{ personThree.personOneName }}</h1>
        <router-link to="/experience-one">
          <button class="mary-btn">
            HEAR {{ personThree.personOneName }}'S STORY
          </button>
        </router-link>
        <div class="experience-2-img-container">
          <img
            v-if="personThree.personOneImage"
            :src="imageUrlFor(personThree.personOneImage)"
            alt=""
            class="experience-2-img"
          />
        </div>
      </div>
      <div class="experience-3-container">
        <h1 class="exp-name">{{ personThree.personTwoName }}</h1>
        <router-link to="/experience-two">
          <button class="claudia-btn">
            HEAR {{ personThree.personTwoName }}'S STORY
          </button>
        </router-link>
        <div class="experience-3-img-container">
          <img
            v-if="personThree.personTwoImage"
            :src="imageUrlFor(personThree.personTwoImage)"
            alt=""
            class="experience-3-img"
          />
        </div>
      </div>
    </div>
    <WorkTogether />
  </div>
</template>

<script>
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { SplitText } from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
const imageBuilder = imageUrlBuilder(sanity);
const queryPersonThree = `*[_type == "personThree"]{
  _id,
  personThreeTitle,
  personThreeImage,
  personThreeParagraphTextOne,
  personThreeParagraphTextTwo,
  personThreeParagraphTextThree,
  personOneName,
  personOneImage,
  personTwoName,
  personTwoImage


}[0...100]`;

import WorkTogether from "../components/WorkTogether.vue";
export default {
  components: {
    WorkTogether,
  },
  data: () => ({
    personThreeExperiences: [],
  }),
  updated() {
    this.timeLine();
    ScrollTrigger.create({
      trigger: ".experience-1",
      toggleActions: "play none none none",
      onEnter: () => this.timeLineExpOne(),

      onLeaveBack: (self) => self.disable(),
    });
    ScrollTrigger.create({
      trigger: ".experience-2",
      toggleActions: "play none none none",
      onEnter: () => this.timeLineExpTwo(),

      onLeaveBack: (self) => self.disable(),
    });
  },
  methods: {
    fetchDataPersonThree() {
      this.error = this.personThree = null;
      this.loading = true;
      sanity.fetch(queryPersonThree).then(
        (personThreeExperiences) => {
          this.loading = false;
          this.personThreeExperiences = personThreeExperiences;
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
        mySplitText = new SplitText(this.$refs.title, { type: "lines" }),
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
          transformOrigin: "20% 0 0",
        },
        "+=0"
      );
    },
    timeLineExpOne() {
      this.$refs.expOne.style.opacity = 1;
      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.expOne, { type: "lines" }),
        lines = mySplitText.lines;
      gsap.set(this.$refs.expOne, { perspective: 400 });
      tl.from(
        lines,
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          rotationX: 80,
          transformOrigin: "20% 0 0",
        },
        "+=0"
      );
    },
    timeLineExpTwo() {
      this.isLilaExpTwoActive = true;
      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.expTwo, { type: "lines" }),
        lines = mySplitText.lines;
      gsap.set(this.$refs.expTwo, { perspective: 400 });
      tl.from(
        lines,
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          rotationX: 80,
          transformOrigin: "20% 0 0",
        },
        "+=0"
      );
    },
  },
  created() {
    this.fetchDataPersonThree();
  },
};
</script>

<style scoped>
.work-together-container {
  position: relative;
  background: none;
  top: 12.5vw;
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
