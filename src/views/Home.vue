<template>
  <div class="apps">
    <div
      class="sanity-container"
      v-for="landing in landingItems"
      :key="landing._id"
    >
      <div class="text-container">
        <div class="title-container">
          <h1 class="title" ref="homeTitle">
            {{ landing.titleOne }}
            <br />
            {{ landing.titleTwo }}
            <br />
            <span id="spans-container" class="the-upgrade">
              {{ landing.titleThree }}
            </span>
          </h1>
        </div>

        <div class="sub-title-container">
          <h3 class="sub-title">
            <span class="we-specialize">{{ landing.frontParagraphOne }}</span
            ><span>{{ landing.frontParagraphTwo }}</span
            ><span>{{ landing.frontParagraphThree }}</span>
          </h3>
        </div>
        <FrontButtons @mouseover="hover = true" @mouseleave="hover = false" />
      </div>
      <FrontVideo />

      <Testimonials />
      <Path />
      <Lila />
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
import sanity from "../client.js";

const queryLanding = `*[_type == "landing"]{
  _id,
  titleOne,
  titleTwo,
   titleThree,
    frontParagraphOne,
 frontParagraphTwo,
 frontParagraphThree,
}[0...50]`;

import FrontButtons from "../components/FrontButtons.vue";
import FrontVideo from "../components/FrontVideo.vue";
import Testimonials from "../components/Testimonials.vue";
import Path from "../components/Path.vue";
import Lila from "../components/Lila.vue";
import WorkTogether from "../components/WorkTogether.vue";

export default {
  name: "Home",
  data: () => ({
    hover: false,
    loading: true,
    landingItems: [],
  }),
  components: {
    FrontButtons,
    FrontVideo,
    Path,
    Testimonials,
    Lila,

    WorkTogether,
  },

  created() {
    this.fetchDataLanding();
  },
  updated() {
    this.timeLine();
  },

  computed: {},
  methods: {
    fetchDataLanding() {
      this.error = this.landing = null;
      this.loading = true;
      sanity.fetch(queryLanding).then(
        (landingItems) => {
          this.loading = false;
          this.landingItems = landingItems;
          this.blocks = landingItems.body;
        },
        (error) => {
          this.error = error;
        }
      );
    },
    timeLine() {
      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.homeTitle, { type: "lines" }),
        lines = mySplitText.lines;
      gsap.set(this.$refs.homeTitle, { perspective: 400 });
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
  },
};
</script>

<style scoped>
@font-face {
  font-family: "BonVivant";
  src: url("/fonts/BonVivantSerif/font.woff2") format("woff");
  font-weight: bold;
}

@font-face {
  font-family: "BonVivant";
  src: url("/fonts/BonVivantSerif/font.woff") format("woff");
  font-weight: normal;
}

.text-container {
  position: relative;
  left: 10vw;
  display: table-cell;

  height: 100vh;
  margin: 0;

  vertical-align: middle;
}

.title-container {
  position: relative;
  text-align: left;
  z-index: +1;
  margin-top: 6vw;
}

.natural {
  position: relative;
  display: block;
  margin-top: 10px;
  top: 10vw;
  animation: titleanim 0.7s forwards ease-in-out;
}

.version {
  position: relative;
  display: block;
  margin-top: 10px;
  top: 10vw;
  animation: titleanim 0.7s forwards ease-in-out;
  animation-delay: 0.15s;
}

.upgrade {
  position: relative;
  display: block;
  margin-top: 10px;
  top: 10vw;
  animation: titleanim 0.7s forwards ease-in-out;
  animation-delay: 0.3s;
}

.title {
  line-height: 6vw;
  font-size: 6.25vw;
}

#spans-container {
  position: relative;
  display: block;
  overflow: hidden;
  margin-top: -0.5vw;
}

@keyframes titleanim {
  0% {
    top: 10vw;
  }
  100% {
    top: 0.2vw;
  }
}

.the-upgrade {
  margin-left: 18vw;
}

.btns {
}

.sub-title-container {
  position: relative;

  margin-top: -2vw;
  top: 0;
  font-size: 1.3vw;
  text-align: left;
  z-index: +1;
  font-family: "DM Sans", sans-serif;
}

.sub-title {
  font-weight: normal;
}

.sub-title span {
  position: relative;
  display: block;
}

.we-specialize {
  margin-left: 4vw;
}

@media (max-aspect-ratio: 200/200) {
  .text-container {
    height: 90vw;
    top: 120px;
  }

  .title {
    line-height: 10vw;
    font-size: 11vw;
  }

  .sub-title-container {
    text-align: center;
    font-size: 3.2vw;
    width: 80vw;
    left: 50%;
    transform: translateX(-50%);
  }

  .sub-title span {
    display: inline;
  }
}

/*

@media (max-aspect-ratio: 200/200) and (min-width: 500px) {
  .text-container {
    height: 70vw;
    top: 15vw;
  }
  .text-container {
    height: 70vw;
    top: 25vw;
  }

  .title {
    line-height: 8vw;
    font-size: 9vw;
  }

  .sub-title-container {
    text-align: center;
    font-size: 2.2vw;
  }

  .video-container {
    top: 15vw;
    width: 60vw;
    height: 70vw;
  }
  .discover {
    left: 50%;
    transform: translateX(-50%);
    margin-top: 140px;
    width: 25vw;
    height: 9.5vw;
    border: 0.3vw solid #d4c09e;
  }
  .discover h3 {
    font-size: 1.8vw;
  }

  .arrow {
    margin-top: 16vw;
  }

  .arrow-svg {
    bottom: 1.6vw;
    width: 2vw;
  }

  .arrow-circle {
    border: 0.4vw solid #e1d6c2;
    height: 4vw;
    width: 4vw;
  }
}
*/

@media (max-aspect-ratio: 200/200) {
  .title-container {
    text-align: center;
  }
  .the-upgrade {
    margin-left: 0;
  }
  .sub-title-container {
    text-align: center;
  }
  .we-specialize {
    margin-left: 0;
  }
  .text-container {
    left: 0%;
    width: 100vw;

    margin: 0;
  }
  .sub-title-container {
    margin-top: -5vw;
  }
}

.work-together-container {
}
</style>
