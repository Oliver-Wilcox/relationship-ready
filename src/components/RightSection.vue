<template>
  <div class="right-section">
    <div class="people-container">
      <div
        class="person one"
        v-on:click="oneActive"
        v-bind:class="{ personActive: isPersonOneActive }"
      >
        <div class="persons-cont-one">
          <img class="person-one-img" src="../assets/jessicaSample.png" />
        </div>
      </div>
      <div
        class="person two"
        v-on:click="twoActive"
        v-bind:class="{ personTwoActive: isPersonTwoActive }"
      >
        <div class="persons-cont-two">
          <img class="person-two-img" src="../assets/marySample.png" />
        </div>
      </div>
      <div
        class="person three"
        v-on:click="threeActive"
        v-bind:class="{ personThreeActive: isPersonThreeActive }"
      >
        <div class="persons-cont-three">
          <img class="person-three-img" src="../assets/claudiaSample.png" />
        </div>
      </div>
    </div>
    <p class="testimonial-paragraph" ref="paragraph">
      “I was able to date with a deeper confidence and for the first time I
      began trusting my intuition”
    </p>
  <router-link to="/JessicaExp"><button class="jessica-btn">HEAR JESSICAS EXPERIENCE</button></router-link> 
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
  name: "RightSection",
  props: {
    isOnePictureActive: Boolean,
    isOnePictureInactive: Boolean,
    isTwoPictureActive: Boolean,
    isTwoPictureInactiveRight: Boolean,
    isTwoPictureInactiveLeft: Boolean,
    isThreePictureActive: Boolean,
    isThreePictureInactive: Boolean,
  },
  data: () => ({
    isPersonOneActive: true,
    isPersonTwoActive: false,
    isPersonThreeActive: false,
    tl: "",
  }),
  mounted() {
   this.timeLine()
  },
  methods: {
      timeLine(){
 

let tl = gsap.timeline(), 
    mySplitText = new SplitText(this.$refs.paragraph, {type:"lines"}), 
    lines = mySplitText.lines; 

gsap.set(this.$refs.paragraph, {perspective: 400});

tl.from(lines, {y:40, opacity: 0, duration: 0.6, stagger: 0.1, rotationX:80, transformOrigin:"20% 0 0",}, "+=0");

      },
    oneActive() {
      this.$emit("onePictureActiveChange", true);
      this.$emit("onePictureActiveChangeFalse", false);
      this.isPersonOneActive = true;
      this.isPersonTwoActive = false;
      this.isPersonThreeActive = false;
      this.timeLine()
   
    },
    twoActive() {
      this.$emit("twoPictureActiveChange", true);
      this.$emit("twoPictureActiveChangeFalse", false);
      this.isPersonOneActive = false;
      this.isPersonTwoActive = true;
      this.isPersonThreeActive = false;
      this.timeLine()
    },
    threeActive() {
      this.$emit("threePictureActiveChange", true);
      this.$emit("threePictureActiveChangeFalse", false);
      this.isPersonOneActive = false;
      this.isPersonTwoActive = false;
      this.isPersonThreeActive = true;
      this.timeLine()
    },
  },
};
</script>

<style>
.right-section {
  position: absolute;
  top: 0vw;
  width: 28vw;
  height: 34vw;

  right: 12vw;
}
.people-container {
  position: relative;
  top: 0;
  left: 0;
  width: 16vw;
  height: 8vw;
}

.person {
  position: absolute;
  width: 3.5vw;
  height: 3.5vw;
  top: 2.5vw;
  overflow: hidden;
  transform: rotate(45deg);
  border: 0.15vw solid #d4c09e;
  cursor: pointer;
  transition: 0.1s;
}

.person div {
  position: absolute;
  left: 50%;
  top: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 3vw;
  height: 3vw;
  overflow: hidden;
}

.person img {
  position: absolute;

  width: 160%;
  top: -0.8vw;
  left: -0.8vw;
  transform: rotate(-45deg);
}

.one {
  left: 0vw;
}
.two {
  left: calc(50% - 1.75vw);
}
.three {
  right: 0vw;
}

.personActive {
  border: 0.3vw solid #544a3f;
}

.personTwoActive {
  border: 0.3vw solid #544a3f;
  left: calc(50% - 2.05vw);
}

.personThreeActive {
  border: 0.3vw solid #544a3f;
  right: -0.6vw;
}

.right-section p {
  position: relative;
  left: 0;
  text-align: left;
  font-size: 2.6vw;
  width: 22vw;
  margin-top: 3.5vw;
}

.jessica-btn {
  position: relative;
  left: 0;
  margin-top: 2.5vw;
  width: 18vw;
  height: 4.5vw;
  display: block;

  font-family: DM sans;
  font-weight: normal;
  font-size: 1vw;
  background: none;
  border: 0.2vw solid #d4c09e;
  cursor: pointer;
}

@media (max-aspect-ratio: 200/200) {
  .right-section {
    width: 80vw;
    height: 100vw;
  }
  .right-section p {
    margin-top: 60vw;
    position: relative;

    font-size: 7.5vw;
    width: 80vw;
  }

  .jessica-btn {
    width: 50vw;
    height: 15vw;
    font-size: 2.5vw;
    border: 0.5vw solid #d4c09e;
  }
  .people-container {
    position: relative;
    top: -14vw;
    left: calc(100% - 40vw);
    width: 44vw;
    height: 16vw;
    z-index: +1;
  }

  .person {
    position: absolute;
    width: 9.8vw;
    height: 9.8vw;
    top: 2.5vw;

    transform: rotate(45deg);
    border: 0.3vw solid #d4c09e;
    cursor: pointer;
  }

  .person div {
    position: absolute;
    left: 50%;
    top: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 7.8vw;
    height: 7.8vw;
    overflow: hidden;
  }

  .person img {
    top: -2vw;
    left: -2vw;
  }
  .two {
    left: calc(50% - 5.2vw);
  }

  .personActive {
    border: 0.8vw solid #544a3f;
  }

  .personTwoActive {
    border: 0.8vw solid #544a3f;
    left: calc(50% - 6vw);
  }

  .personThreeActive {
    border: 0.8vw solid #544a3f;
    right: -0.16vw;
  }
}
</style>
