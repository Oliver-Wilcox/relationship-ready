<template>
  <div class="retreat-container">
    <div class="retreat-text-container">
      <h1 class="retreat-title" ref="retreatTitle">THE RETREAT</h1>
      <p
        class="retreat-paragraph"
        v-bind:class="{ retreatParagraphActive: isRetreatParagraphActive }"
      >
        The passion and drive of this program is to help you show up to
        relationships as the most natural version of you. We help you understand
        the thoughts behind your relationship patterns in a way that you can
        move past them and turn up to your dating life with more ease,
        confidence and enjoyment. The understanding we will give you will allow
        you to:
      </p>
    </div>
    <div
      class="retreat-picture-container"
      v-bind:class="{ retreatActive: isRetreatActive }"
    >
      <div class="retreat-blur"></div>
      <img src="../assets/retreat.png" class="retreat-picture" />
    </div>
    <div class="checkbox 1">
      <div class="checkbox-img-container">
        <img src="../assets/checkbox.svg" class="checkbox-img" />
      </div>
      <p class="checkbox-paragraph 1">
        Be able to share the most at ease natural version of yourself with your
        date so they can really get to know who you are.
      </p>
    </div>
    <div class="checkbox 2">
      <div class="checkbox-img-container">
        <img src="../assets/checkbox.svg" class="checkbox-img" />
      </div>
      <p class="checkbox-paragraph 2">
        Be able to understand and enjoy others more deeply allowing you to find
        a more natural connection.
      </p>
    </div>
    <div class="checkbox 3">
      <div class="checkbox-img-container">
        <img src="../assets/checkbox.svg" class="checkbox-img" />
      </div>
      <p class="checkbox-paragraph 3">
        Be able to date with a deeper confidence and trust in your intuition,
        taking the work out of double guessing yourself.
      </p>
    </div>
    <div class="checkbox 4">
      <div class="checkbox-img-container">
        <img src="../assets/checkbox.svg" class="checkbox-img" />
      </div>
      <p class="checkbox-paragraph 4">
        Have a foundation of understanding that will inform and guide you, not
        just finding a meaningful relationship, but the skills to maintain and
        enjoy a rich and loving partnership.
      </p>
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
  data: () => ({
    isRetreatActive: false,
    isRetreatParagraphActive: false,
  }),
  mounted() {
    ScrollTrigger.create({
      trigger: ".retreat-title",
      toggleActions: "play none none none",
      onEnter: () => (this.isRetreatActive = true),

      start: () => "top " + window.innerHeight * 0.85,

      onLeaveBack: (self) => self.disable(),
    });

    ScrollTrigger.create({
      trigger: ".retreat-paragraph",
      toggleActions: "play none none none",
      onEnter: () => (this.isRetreatParagraphActive = true),

      start: () => "top " + window.innerHeight * 0.85,

      onLeaveBack: (self) => self.disable(),
    });

    ScrollTrigger.create({
      trigger: ".retreat-title",
      toggleActions: "play none none none",
      onEnter: () => this.timelineRetreat(),

      start: () => "top " + window.innerHeight * 0.85,

      onLeaveBack: (self) => self.disable(),
    });
  },
  methods: {
    timelineRetreat() {
      this.$refs.retreatTitle.style.opacity = "1";
      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.retreatTitle, { type: "lines" }),
        lines = mySplitText.lines;

      gsap.set(this.$refs.retreatTitle, { perspective: 400 });

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
.retreat-container {
  position: relative;
  left: 0;
  margin-top: 10vw;
  width: 100vw;
  height: 70vw;
}

.retreat-text-container {
  position: absolute;
  left: 16vw;

  height: 40vw;
  width: 30vw;
  top: 0;
}

.retreat-title {
  position: relative;
  text-align: left;
  font-size: 6.25vw;
  opacity: 0;
}

.retreat-paragraph {
  position: relative;
  text-align: left;
  margin-top: -3vw;
  opacity: 0;
  transition: 1s;
  font-family: DM sans;
  font-size: 1.3vw;
  width: 37vw;
}
.retreatParagraphActive {
  opacity: 1;
}
.retreat-picture-container {
  position: absolute;
  right: 0vw;
  width: 28vw;
  height: 42vw;
  transform: rotate(0deg);
  top: 1vw;
  overflow: hidden;
  opacity: 0.2;
  transition: 1s;
}

.retreatActive {
  transform: rotate(4deg);
  right: 10vw;
  opacity: 1;
}

.retreat-picture {
  position: relative;
  width: 100%;
}

.checkbox {
  position: relative;
  margin-top: 0vw;
  left: 16vw;
  height: 8vw;
  width: 35vw;

  top: 32vw;
}

.checkbox-img-container {
  position: relative;

  width: 3.2vw;
}

.checkbox-img {
  width: 100%;
}

.checkbox-paragraph {
  position: absolute;
  top: 0;
  margin-top: 0vw;
  margin-left: 6vw;
  font-size: 1.3vw;
  font-family: DM sans;
  text-align: left;
}

@media (max-aspect-ratio: 200/200) {
  .retreat-container {
    margin-top: 18vw;
    height: 200vw;
  }

  .retreat-picture-container {
    width: 38vw;
    height: 50vw;
    right: 6vw;
    z-index: -1;
    top: -2vw;
    opacity: 1;
  }

  .retreat-blur {
    position: absolute;
    width: 60vw;
    height: 60vw;
    left: -15vw;
    bottom: -40vw;

    background: rgba(255, 255, 255, 0.8);
    filter: blur(8vw);
    transform: rotate(4deg);
    z-index: +5;
  }

  .retreat-text-container {
    left: 6vw;
    width: 100vw;

    height: 80vw;
  }
  .retreat-title {
    font-size: 11.25vw;
    width: 30vw;
  }
  .retreat-paragraph {
    font-size: 3.8vw;
    width: 80vw;
  }
  .checkbox {
    top: 90vw;
    left: 6vw;
    height: 25vw;
  }
  .checkbox-img-container {
    position: relative;
    width: 8vw;
  }

  .checkbox-paragraph {
    font-size: 3.8vw;
    left: 10vw;
    width: 60vw;
  }
}
</style>
