<template>
  <div class="work-together-container">
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
      <button class="work-together-button">BOOK A CALL</button>
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
    inTouchTexts: [],
  }),
  mounted() {
    ScrollTrigger.create({
      trigger: ".work-together-container",
      toggleActions: "play none none none",
      onEnter: () => this.timelineTogether(),

      start: () => "top " + window.innerHeight * 0.85,

      onLeaveBack: (self) => self.disable(),
    });
    ScrollTrigger.create({
      trigger: this.$refs.togetherParagraph,
      toggleActions: "play none none none",
      onEnter: () => (this.isTogetherParaActive = true),
      start: () => "top " + window.innerHeight * 0.9,

      onLeaveBack: (self) => self.disable(),
    });
  },
  created() {
    this.fetchDataInTouch();
    setTimeout(function() {
      ScrollTrigger.refresh();
    }, 50);
  },
  methods: {
    timelineTogether() {
      this.isTogetherTitleActive = true;

      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.togetherTitle, {
          type: "lines",
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
          transformOrigin: "20% 0 0",
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
    },
  },
};
</script>

<style>
.work-together-container {
  position: relative;
  width: 100vw;
  height: 40vw;
  opacity: 1;
  margin-top: -15vw;
  padding-top: 2vw;
  background: #f7f5f2;
  padding-bottom: 5vw;
}

.work-together-title {
  position: relative;
  left: 27.5%;
  transform: translateX(-50%);
  width: 60vw;
  top: 2vw;
  text-align: right;
  font-size: 6.25vw;
  line-height: 5.75vw;
  transition: 1s;
  opacity: 0;
}

.work-together-paragraph {
  position: relative;
  left: 60%;
  transform: translateX(-50%);
  width: 40vw;
  text-align: left;
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
  left: 46%;
  transform: translateX(-50%);
  margin-top: 3vw;
  width: 12vw;
  height: 4.5vw;
  display: block;

  font-family: DM sans;

  font-size: 1vw;
  background: none;
  border: 0.2vw solid #d4c09e;
  cursor: pointer;
}

@media (max-aspect-ratio: 200/200) {
  .work-together-container {
    margin-top: -10vw;
    height: 140vw;
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

  .work-together-button {
    margin-top: 8vw;
    left: 50%;
    width: 35vw;
    height: 15vw;
    font-size: 2.5vw;
    border: 0.5vw solid #d4c09e;
  }
}
</style>
