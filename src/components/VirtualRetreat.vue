<template>
  <div class="virtual-container">
    <div
      class="virtual-container-2"
      v-for="programmesParagraph in programmesParagraphs"
      :key="programmesParagraph._id"
    >
      <div
        class="virtual-picture-container"
        ref="virtualPic"
        v-bind:class="{ virtualPicActive: isVirtualPicActive }"
      >
        <div class="virtual-blur"></div>
        <img src="../assets/virtual.png" alt="" class="virtual-img" />
      </div>
      <div class="virtual-text-container">
        <div class="virtual-title">COACHING PROGRAM</div>
        <p
          class="virtual-paragraph"
          ref="virtualParagraph"
          v-bind:class="{ virtualTextActive: isVirtualParActive }"
        >
          {{ programmesParagraph.programmesParagraphThree }}
          <br />
          <br />
          {{ programmesParagraph.programmesParagraphFour }}
          <br />
          <br />
          {{ programmesParagraph.programmesParagraphFive }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../client";

const queryProgrammes = `*[_type == "programmesContent"]{
  _id,
  programmesParagraphThree,
  programmesParagraphFour,
  programmesParagraphFive,
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
    isVirtualPicActive: false,
    isVirtualTitleActive: false,
    isVirtualParActive: false,
    programmesParagraphs: [],
  }),
  mounted() {},
  updated() {
    ScrollTrigger.create({
      trigger: this.$refs.virtualParagraph,
      toggleActions: "play none none none",
      onEnter: () => (this.isVirtualParActive = true),

      start: () => "top " + window.innerHeight * 0.85,

      onLeaveBack: (self) => self.disable(),
    });
    ScrollTrigger.create({
      trigger: this.$refs.virtualParagraph,
      toggleActions: "play none none none",
      onEnter: () => (this.isVirtualPicActive = true),

      start: () => "top " + window.innerHeight * 0.85,

      onLeaveBack: (self) => self.disable(),
    });
  },
  created() {
    this.fetchDataVirtual();
  },
  methods: {
    fetchDataVirtual() {
      this.error = this.programmesParagraph = null;
      this.loading = true;
      sanity.fetch(queryProgrammes).then(
        (programmesParagraphs) => {
          this.loading = false;
          this.programmesParagraphs = programmesParagraphs;
        },
        (error) => {
          this.error = error;
        }
      );
    },

    timelineVirtual() {
      this.isVirtualTitleActive = true;

      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.virtualTitle, { type: "lines" }),
        lines = mySplitText.lines;

      gsap.set(this.$refs.virtualTitle, { perspective: 400 });

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

<style>
.virtual-container {
  position: relative;
  left: 0;
  margin-top: 20vw;
  width: 100vw;
  height: 60vw;
  opacity: 1;
  padding-bottom: 10vw;
}

.virtual-picture-container {
  position: absolute;
  left: 0vw;
  width: 28vw;
  height: 42vw;
  opacity: 0.2;
  top: -2vw;
  transition: 1s;
  overflow: hidden;
}

.virtualPicActive {
  left: 11vw;
  opacity: 1;
  transform: rotate(-4deg);
}
.virtual-img {
  width: 110%;
}

.virtual-text-container {
  position: absolute;
  right: 20vw;
  height: 40vw;
  width: 30vw;
  top: 0;
}

.virtual-title {
  position: relative;
  text-align: left;
  font-size: 6.25vw;
  opacity: 1;
}

.virtual-paragraph {
  position: relative;
  text-align: left;
  margin-top: 2vw;
  transition: 1s;
  opacity: 0;
  font-family: DM sans;
  font-size: 1.3vw;
  width: 34vw;
}

.virtualTextActive {
  opacity: 1;
}

@media (max-aspect-ratio: 200/200) {
  .virtual-container {
    height: 120vw;

    margin-top: 30vw;
  }
  .virtual-text-container {
    left: 5vw;
    width: 90vw;

    height: 80vw;
  }

  .virtual-title {
    font-size: 11.25vw;
    width: 30vw;
    left: 0vw;

    text-align: left;
  }
  .virtual-paragraph {
    font-size: 3.8vw;
    width: 90vw;
    margin-top: 5vw;
  }
  .virtual-picture-container {
    width: 38vw;
    height: 55vw;
    left: 0vw;
    z-index: -1;
    top: -2vw;
    opacity: 1;
    display: none;
  }

  .virtual-blur {
    position: absolute;
    width: 54vw;
    height: 54vw;
    right: -15vw;
    bottom: -30vw;

    background: rgba(255, 255, 255, 0.7);
    filter: blur(8vw);
    transform: rotate(4deg);
    z-index: +5;
  }

  .virtualPicActive {
    left: 6vw;
  }
}
</style>
