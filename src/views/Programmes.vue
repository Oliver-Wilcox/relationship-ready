<template>
  <div
    class="programmes-text-container"
    v-for="programmesContent in programmesText"
    :key="programmesContent._id"
  >
    <h1 class="our-programmes-title" ref="programmes">
      <span class="our">{{ programmesContent.programmesTitleOne }}</span>
      <br />{{ programmesContent.programmesTitleTwo }}
    </h1>
    <p class="our-programmes-paragraph" ref="programmesParagraph">
      {{ programmesContent.programmesParagraphOne }}
    </p>
  </div>
  <div class="programmes-arrow">
    <img class="arrow-svg" src="arrow.svg" />
    <span class="arrow-circle"></span>
  </div>
  <Retreat />
  <VirtualRetreat />
  <Coaching />
  <WorkTogether />
</template>

<script>
import sanity from "../client";

const queryProgrammes = `*[_type == "programmesContent"]{
  _id,
  programmesTitleOne,
  programmesTitleTwo,
  programmesParagraphOne

}[0...50]`;

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { SplitText } from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
import Retreat from "../components/Retreat.vue";
import VirtualRetreat from "../components/VirtualRetreat.vue";
import Coaching from "../components/Coaching.vue";
import WorkTogether from "../components/WorkTogether.vue";
export default {
  components: {
    Retreat,
    VirtualRetreat,
    Coaching,
    WorkTogether,
  },
  data: () => ({
    programmesText: [],
  }),
  mounted() {
    this.timelineProgrammes1();

    this.timelineProgrammes2();
  },
  created() {
    this.fetchDataProgrammes();
  },
  updated() {
    this.timelineProgrammes1();

    this.timelineProgrammes2();
  },
  methods: {
    fetchDataProgrammes() {
      this.error = this.programmesContent = null;
      this.loading = true;
      sanity.fetch(queryProgrammes).then(
        (programmesText) => {
          this.loading = false;
          this.programmesText = programmesText;
        },
        (error) => {
          this.error = error;
        }
      );
    },
    timelineProgrammes1() {
      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.programmes, { type: "lines" }),
        lines = mySplitText.lines;

      gsap.set(this.$refs.programmes, { perspective: 400 });

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
    timelineProgrammes2() {
      let tl2 = gsap.timeline(),
        mySplitText2 = new SplitText(this.$refs.programmesParagraph, {
          type: "lines",
        }),
        lines = mySplitText2.lines;

      gsap.set(this.$refs.programmesParagraph, { perspective: 400 });

      tl2.from(
        lines,
        {
          y: 40,
          opacity: 0,
          delay: 0.25,
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
.programmes-text-container {
  position: relative;
  margin-top: calc(50vh - 2.5vw);
  left: 50%;
  text-align: left;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 25vw;
}
.our-programmes-title {
  position: relative;
  font-size: 6.25vw;
  text-align: left;
  left: -3vw;
}

.our {
  margin-left: -6vw;
}

.our-programmes-paragraph {
  position: relative;
  margin-top: -3vw;
  left: 14vw;
  font-family: DM sans;
  font-size: 1.3vw;
  width: 38vw;
}

.work-together-container {
  background: #efebe6;
}

.programmes-arrow {
  position: absolute;
  cursor: pointer;
  height: 4vw;
  width: 3vw;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -8vw;
}

.arrow-svg {
  position: absolute;
  bottom: 0.9vw;
  left: 50%;
  width: 1.2vw;
  transform: translateX(-50%);
  z-index: +1;
}

.arrow-circle {
  position: absolute;
  bottom: 0;
  border: 0.3vw solid #e1d6c2;
  height: 2.5vw;
  width: 2.5vw;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-aspect-ratio: 200/200) {
  .programmes-text-container {
    margin-top: 28vw;
    left: 0;
    margin-left: 0;
    transform: none;
    width: 100vw;
    height: 95vw;
  }

  .our-programmes-title {
    font-size: 11.25vw;
    left: 6vw;
  }

  .our-programmes-paragraph {
    font-size: 3.8vw;
    left: 6vw;
    width: 85vw;
  }

  .our {
    margin: 0;
  }

  .arrow-svg {
    bottom: 2.2vw;
    width: 3vw;
  }

  .arrow-circle {
    border: 0.8vw solid #e1d6c2;
    height: 6vw;
    width: 6vw;
  }
}
</style>
