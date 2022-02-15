<template>
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
    <h1 class="jessica-name" ref="title">{{ personOne.personOneTitle }}</h1>

    <p class="experience-1" ref="expOne">
      {{ personOne.personOneParagraphTextOne }}
    </p>
    <div class="video"></div>

    <p class="experience-2" ref="expTwo">
      {{ personOne.personOneParagraphTextTwo }}
      <br />
      <br />
      {{ personOne.personOneParagraphTextThree }}
    </p>
    <div class="other-experiences-container">
      <div class="experience-2-container">
        <h1 class="exp-name">{{ personOne.personTwoName }}</h1>
        <button class="mary-btn">
          HEAR {{ personOne.personTwoName }}'S STORY
        </button>
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
        <button class="claudia-btn">
          HEAR {{ personOne.personThreeName }}'S STORY
        </button>
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
  personThreeImage


}[0...100]`;

import WorkTogether from "../components/WorkTogether.vue";
export default {
  components: {
    WorkTogether,
  },
  data: () => ({
    personOneExperiences: [],
    isExpOneActive: false,
    isExpTwoActive: false,
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
        mySplitText = new SplitText(this.$refs.title, { type: "lines" }),
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
      this.isExpTwoActive = true;
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
    this.fetchDataPersonOne();
  },
};
</script>

<style scoped>
.work-together-container {
  position: relative;
  background: none;
  top: 20vw;
}

h1 {
  text-transform: uppercase;
}
.video {
  display: none;
}
.experience-2 {
  margin: 0;
}
</style>
