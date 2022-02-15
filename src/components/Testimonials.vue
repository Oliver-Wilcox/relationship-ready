<template>
  <div class="section-two" id="sectionTwo">
    <div class="section-items">
      <div
        class="test-cont-2"
        v-for="testimonialImages in testImages"
        :key="testimonialImages._id"
      >
        <div class="pictures-container" id="picCont">
          <div class="pictures-trigger"></div>
          <div class="pictures">
            <div
              class="one-picture"
              v-bind:class="{
                pictureActive: isOnePictureActive,
                pictureInactive: isOnePictureInactive,
              }"
            >
              <img
                class="pic-one-img"
                v-if="testimonialImages.imageOne"
                :src="imageUrlFor(testimonialImages.imageOne)"
              />
            </div>
            <div
              class="two-picture"
              v-bind:class="{
                pictureActive: isTwoPictureActive,
                twoPictureInactiveLeft: isTwoPictureInactiveLeft,
                twoPictureInactiveRight: isTwoPictureInactiveRight,
              }"
            >
              <img
                class="pic-two-img"
                v-if="testimonialImages.imageTwo"
                :src="imageUrlFor(testimonialImages.imageTwo)"
              />
            </div>
            <div
              class="three-picture"
              v-bind:class="{
                pictureActive: isThreePictureActive,
                threePictureInactive: isThreePictureInactive,
              }"
            >
              <img
                class="pic-three-img"
                v-if="testimonialImages.imageThree"
                :src="imageUrlFor(testimonialImages.imageThree)"
              />
            </div>
          </div>
          <h3 class="success-stories">
            <span
              class="success"
              v-on:click="isOnePictureInactive = !isOnePictureInactive"
              >Success</span
            ><span class="success-line"></span
            ><span class="stories">Stories</span>
          </h3>
        </div>
        <RightSection
          v-bind:isOnePictureActive="isOnePictureActive"
          v-bind:isOnePictureInactive="isOnePictureInactive"
          v-bind:isTwoPictureActive="isTwoPictureActive"
          v-bind:isTwoPictureInactiveRight="isTwoPictureInactiveRight"
          v-bind:isTwoPictureInactiveLeft="isTwoPictureInactiveLeft"
          v-bind:isThreePictureActive="isThreePictureActive"
          v-bind:isThreePictureInactive="isThreePictureInactive"
          v-on:onePictureActiveChange="updatePictureOne($event)"
          v-on:twoPictureActiveChange="updatePictureTwo($event)"
          v-on:threePictureActiveChange="updatePictureThree($event)"
          v-on:onePictureActiveChangeFalse="updatePictureOneFalse($event)"
          v-on:twoPictureActiveChangeFalse="updatePictureTwoFalse($event)"
          v-on:threePictureActiveChangeFalse="updatePictureThreeFalse($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "testimonialImages"]{
  _id,
  frontParagraphThe,
imageOne,
imageTwo,
imageThree
 

}[0...50]`;

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { SplitText } from "gsap/dist/SplitText";
import RightSection from "../components/RightSection.vue";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
export default {
  components: {
    RightSection,
  },
  props: {},
  data: () => ({
    isOnePictureActive: false,
    isOnePictureInactive: false,
    isTwoPictureActive: false,
    isTwoPictureInactiveRight: false,
    isTwoPictureInactiveLeft: false,
    isThreePictureActive: false,
    isThreePictureInactive: false,
    testImages: [],
  }),
  mounted() {
    ScrollTrigger.create({
      trigger: ".section-two",

      toggleActions: "play none none none",
      start: () => "top " + window.innerHeight * 0.75,
      onEnter: () => (this.isOnePictureActive = true),
    });
  },
  created() {
    this.fetchData();
    setTimeout(function() {
      ScrollTrigger.refresh();
    }, 50);
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      this.error = this.testimonialImages = null;
      this.loading = true;
      sanity.fetch(query).then(
        (testImages) => {
          this.loading = false;
          this.testImages = testImages;
        },
        (error) => {
          this.error = error;
        }
      );
    },

    updatePictureOne(updatedPictureOne) {
      this.isThreePictureInactive = updatedPictureOne;
      this.isTwoPictureInactiveRight = updatedPictureOne;
      this.isOnePictureActive = updatedPictureOne;
    },
    updatePictureOneFalse(updatedPictureOneFalse) {
      this.isOnePictureInactive = updatedPictureOneFalse;
    },
    updatePictureTwo(updatedPictureTwo) {
      this.isThreePictureInactive = updatedPictureTwo;
      this.isTwoPictureActive = updatedPictureTwo;
      this.isOnePictureInactive = updatedPictureTwo;
    },
    updatePictureTwoFalse(updatedPictureTwoFalse) {
      this.isTwoPictureInactiveLeft = updatedPictureTwoFalse;
      this.isTwoPictureInactiveRight = updatedPictureTwoFalse;
    },
    updatePictureThree(updatedPictureThree) {
      this.isThreePictureActive = updatedPictureThree;
      this.isTwoPictureInactiveLeft = updatedPictureThree;
      this.isOnePictureInactive = updatedPictureThree;
    },
    updatePictureThreeFalse(updatedPictureThreeFalse) {
      this.isThreePictureInactive = updatedPictureThreeFalse;
    },
  },
};
</script>

<style scoped>
.section-two {
  position: relative;
  margin-bottom: 15vw;
  margin-top: 10vw;
  height: 45vw;
  width: 100vw;
}

.section-items {
  position: relative;
  top: 5vw;
}

.pictures-container {
  position: absolute;
  top: 0;
  width: 45vw;
  height: 45vw;

  margin-left: 12vw;
}

.pictures-trigger {
  position: absolute;
  margin-top: 15vw;
  width: 25px;
  height: 25px;
}
.one-picture {
  position: absolute;
  left: calc(100% - 28vw);
  top: 0;
  width: 28vw;
  height: 42vw;
  background: white;
  opacity: 0;
  transition: 1s;
  overflow: hidden;
}
.two-picture {
  position: absolute;
  left: calc(100% - 28vw);
  top: 0;
  width: 28vw;
  height: 42vw;
  background: white;
  opacity: 0;
  transition: 1s;
  overflow: hidden;
}

.three-picture {
  position: absolute;
  left: calc(100% - 28vw);
  top: 0;
  width: 28vw;
  height: 42vw;
  background: white;
  opacity: 0;
  transition: 1s;
  overflow: hidden;
}

img {
  width: 150%;
  margin-left: -25%;
}

.pictureActive {
  left: 5vw;
  transform: rotate(-8deg);

  opacity: 1;
}

.success-stories {
  position: absolute;
  transform: rotate(-90deg);
  left: -2vw;
  top: 4.2vw;
  width: 12vw;
  font-family: "DM Sans", sans-serif;
  font-weight: normal;
}

.success {
  position: absolute;
  top: calc(50% - 0.1vw);
  left: 0;
  font-size: 1vw;
  transform: translateY(-50%);
}

.success-line {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3vw;
  height: 0.05vw;
  background: black;
}

.stories {
  position: absolute;
  top: calc(50% - 0.1vw);
  right: 0.5vw;
  transform: translateY(-50%);
  font-size: 1vw;
}

.pictureInactive {
  left: -20vw;
  transform: rotate(-16deg);
  opacity: 0;
}

.twoPictureInactiveLeft {
  left: -20vw;
  transform: rotate(-16deg);
  opacity: 0;
}

.twoPictureInactiveRight {
  left: 20vw;
  transform: rotate(0deg);
  opacity: 0;
}

.threePictureInactive {
  left: 20vw;
  transform: rotate(0deg);
  opacity: 0;
}

@media (max-aspect-ratio: 200/200) {
  .section-two {
    margin-top: 100vw;
    height: 150vw;
    width: 100vw;
  }
  .pictures-container {
    left: calc(50% - 17.5vw);
    margin-left: 0;
  }

  img {
    opacity: 0.7;
  }

  .one-picture {
    width: 72vw;
    height: 95vw;

    margin-left: -22vw;
  }
  .two-picture {
    width: 72vw;
    height: 95vw;

    margin-left: -22vw;
  }
  .three-picture {
    width: 72vw;
    height: 95vw;

    margin-left: -22vw;
  }

  .success-stories {
    left: -41vw;

    width: 35vw;
  }

  .success {
    position: absolute;
    top: calc(50% - 0.1vw);
    left: 0;
    font-size: 3vw;
    transform: translateY(-50%);
  }

  .success-line {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8vw;
    height: 0.3vw;
    background: black;
  }
  .stories {
    position: absolute;
    top: calc(50% - 0.1vw);
    right: 0.5vw;
    transform: translateY(-50%);
    font-size: 3vw;
  }
}
</style>
