<template>
  <div class="what-we-do-container">
    <h1 class="title">WHAT WE DO</h1>
    <div class="subtitle">
      In its simplest form we help you answer your own questions as to why your
      relationships never seem to work and help you have a new experience of
      dating, putting your love life on a fresh path.
    </div>

    <div class="what-we-do-arrow">
      <img class="arrow-svg" src="arrow.svg" />
      <span class="arrow-circle"></span>
    </div>

    <p class="paragraph para-1">
      The focus of our work is to help you to show up as the most natural
      version of you. We will help you understand the thoughts behind your
      relationship patterns, in a way that will enable you to move past them and
      turn up to your dating life with more enjoyment– making it feel easier and
      giving you more confidence. We will share an understanding that will allow
      you to:
    </p>
    <div class="picture-container"></div>
    <div class="para-2-container para-cont">
      <div
        class="bullet-point bullet-one"
        v-bind:class="{ bulletActive: isBulletOneActive }"
      ></div>
      <div class="paragraph para-2">
        share the most at ease, natural version of yourself with your
        date/partner, so they can really get to know you.
      </div>
    </div>

    <div class="para-3-container para-cont">
      <div
        class="bullet-point bullet-two"
        v-bind:class="{ bulletActive: isBulletTwoActive }"
      ></div>
      <div class="paragraph para-3">
        enjoy your date without trying, allowing you to find that real
        connection.
      </div>
    </div>
    <div class="para-4-container para-cont">
      <div
        class="bullet-point bullet-three"
        v-bind:class="{ bulletActive: isBulletThreeActive }"
      ></div>
      <div class="paragraph para-4">
        date with a deeper confidence and trust in yourself, taking the work out
        of double guessing what feels right.
      </div>
    </div>
    <div class="para-5-container para-cont">
      <div
        class="bullet-point bullet-four"
        v-bind:class="{ bulletActive: isBulletFourActive }"
      ></div>
      <div class="paragraph para-5">
        have fresh new thinking that will guide you, not just in finding a
        meaningful relationship, but also provide you with the skills to
        maintain and enjoy a fun, rich and loving partnership.
      </div>
    </div>

    <p class="paragraph course-is-not">What this course is not:</p>
    <div class="para-6-container para-cont">
      <div
        class="bullet-point bullet-five"
        v-bind:class="{ bulletActive: isBulletFiveActive }"
      ></div>
      <div class="paragraph para-6">
        a dating site
      </div>
    </div>
    <div class="para-7-container para-cont">
      <div
        class="bullet-point bullet-six"
        v-bind:class="{ bulletActive: isBulletSixActive }"
      ></div>
      <div class="paragraph para-7">
        a course that teaches you how to flirt.
      </div>
    </div>
    <div class="para-8-container para-cont">
      <div
        class="bullet-point bullet-seven"
        v-bind:class="{ bulletActive: isBulletSevenActive }"
      ></div>
      <div class="paragraph para-8">
        a course that requires you go out on awkward dates.
      </div>
    </div>
    <WorkTogether />
  </div>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { SplitText } from "gsap/dist/SplitText";
import WorkTogether from "../components/WorkTogether.vue";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
export default {
  components: {
    WorkTogether,
  },
  data: () => ({
    isBulletOneActive: false,
    isBulletTwoActive: false,
    isBulletThreeActive: false,
    isBulletFourActive: false,
    isBulletFiveActive: false,
    isBulletSixActive: false,
    isBulletSevenActive: false,
    isBulletEightActive: false,
  }),
  mounted() {
    ScrollTrigger.create({
      trigger: ".bullet-one",
      toggleActions: "play none none none",
      onEnter: () => (this.isBulletOneActive = true),

      onLeaveBack: (self) => self.disable(),
    });

    ScrollTrigger.create({
      trigger: ".bullet-two",
      toggleActions: "play none none none",
      onEnter: () => (this.isBulletTwoActive = true),

      onLeaveBack: (self) => self.disable(),
    });

    ScrollTrigger.create({
      trigger: ".bullet-three",
      toggleActions: "play none none none",
      onEnter: () => (this.isBulletThreeActive = true),

      onLeaveBack: (self) => self.disable(),
    });

    ScrollTrigger.create({
      trigger: ".bullet-four",
      toggleActions: "play none none none",
      onEnter: () => (this.isBulletFourActive = true),

      onLeaveBack: (self) => self.disable(),
    });

    ScrollTrigger.create({
      trigger: ".bullet-five",
      toggleActions: "play none none none",
      onEnter: () => (this.isBulletFiveActive = true),

      onLeaveBack: (self) => self.disable(),
    });
    ScrollTrigger.create({
      trigger: ".bullet-six",
      toggleActions: "play none none none",
      onEnter: () => (this.isBulletSixActive = true),

      onLeaveBack: (self) => self.disable(),
    });
    ScrollTrigger.create({
      trigger: ".bullet-seven",
      toggleActions: "play none none none",
      onEnter: () => (this.isBulletSevenActive = true),

      onLeaveBack: (self) => self.disable(),
    });
    ScrollTrigger.create({
      trigger: ".bullet-eight",
      toggleActions: "play none none none",
      onEnter: () => (this.isBulletEightActive = true),

      onLeaveBack: (self) => self.disable(),
    });
  },
};
</script>

<style scoped>
.what-we-do-container {
  width: 100vw;
}

.title {
  position: relative;
  text-align: left;
  left: calc(50%);
  width: 40vw;
  margin-top: calc(40vh);
  position: relative;
  font-size: 6.25vw;
  transform: translate(-50%, -50%);
}

.subtitle {
  position: relative;
  text-align: left;
  left: calc(50% + 8vw);
  width: 27vw;
  margin-top: -16vw;
  position: relative;
  font-size: 1.3vw;
  font-family: DM sans;
  transform: translateX(-50%);
}

.what-we-do-arrow {
  position: absolute;
  cursor: pointer;
  height: 4vw;
  width: 3vw;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5vw;
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

.paragraph {
  position: relative;
  text-align: left;

  opacity: 1;

  font-family: DM sans;
  font-size: 1.3vw;
  width: 37vw;
}

.para-1 {
  margin-top: 25vw;
  left: 15vw;
}

.para-6-container {
  margin-top: 5vw;
}

.para-6 {
  margin-left: 8vw;
}

.para-cont {
  position: relative;
  width: 37vw;

  left: 16vw;
}

.para-2-container {
  margin-top: 5vw;
}

.para-3-container,
.para-4-container,
.para-5-container,
.para-7-container,
.para-8-container,
.para-9-container {
  margin-top: 2vw;
}

.para-2,
.para-3,
.para-4,
.para-5,
.para-6,
.para-7,
.para-8,
.para-9 {
  position: relative;
  margin-left: 8vw;
  width: 29vw;
  top: -0.6vw;
}

.bullet-point {
  position: absolute;
  width: 0.5vw;
  height: 0.5vw;
  transition: 1s;
  border-radius: 50vw;
  background: #d4c09e;
}

.picture-container {
  position: absolute;
  right: 10vw;
  width: 28vw;
  height: 42vw;
  transform: rotate(4deg);
  margin-top: -16vw;
  background: white;
  overflow: hidden;
  opacity: 1;
  transition: 1s;
}

.bulletActive {
  transform: scale(3);
  display: block;
}

.course-is-not {
  margin-top: 5vw;
  left: 15vw;
}

@media (max-aspect-ratio: 200/200) {
  .title {
    font-size: 11.25vw;
    left: 6vw;
    transform: none;
    width: 88vw;
    margin-top: 36vw;
  }
  .subtitle {
    font-size: 3.8vw;
    left: 6vw;
    width: 85vw;
    transform: none;
    margin-top: -3vw;
  }

  .what-we-do-arrow {
    margin-top: 10vw;
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

  .paragraph {
    font-size: 3.8vw;
    left: 6vw;
    width: 85vw;
  }

  .picture-container {
    display: none;
  }

  .para-2-container,
  .para-6-container {
    margin-top: 15vw;
    left: 9vw;
  }

  .para-1 {
    margin-top: 30vw;
  }

  .course-is-not {
    margin-top: 20vw;
  }

  .para-3-container,
  .para-4-container,
  .para-5-container,
  .para-7-container,
  .para-8-container,
  .para-9-container {
    margin-top: 10vw;
    left: 9vw;
  }

  .para-2,
  .para-3,
  .para-4,
  .para-5,
  .para-6,
  .para-7,
  .para-8,
  .para-9 {
    position: relative;
    margin-left: 6vw;
    width: 71vw;
    top: -1.5vw;
  }

  .bullet-point {
    width: 1.5vw;
    height: 1.5vw;
  }
}

.work-together-container {
  background: none;
  margin-top: 0vw;
}
</style>
