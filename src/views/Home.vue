<template>
  <div class="app">
    <div class="text-container">
      <div class="title-container">
        <h1 class="title">
          <span id="spans-container"
            ><span
              class="natural"
              @mouseover="hover = true"
              @mouseleave="hover = false"
              >THE NATURAL</span
            ></span
          ><span id="spans-container"
            ><span class="version">VERSION OF YOU</span></span
          ><span id="spans-container" class="the-upgrade"
            ><span class="upgrade">IS THE UPGRADE</span></span
          >
        </h1>
      </div>
      <div class="sub-title-container">
        <h3 class="sub-title">
          <span class="we-specialize"
            >We specialize in helping people find relationships and </span
          ><span
            >dating a more natural, enjoyable and rewarding use of your </span
          ><span>time and energy.</span>
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
</template>

<script>
import FrontButtons from "../components/FrontButtons.vue";
import FrontVideo from "../components/FrontVideo.vue";
import Testimonials from "../components/Testimonials.vue";
import Path from "../components/Path.vue";
import Lila from "../components/Lila.vue";
import WorkTogether from "../components/WorkTogether.vue";

export default {
  name: "App",
  data: () => ({
    hover: false,
  }),
  components: {
    FrontButtons,
    FrontVideo,
    Path,
    Testimonials,
    Lila,

    WorkTogether,
  },
  methods: {},
};
</script>

<style>
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

.video-container {
  position: absolute;
  right: 9.5vw;
  width: 40vw;
  height: 90vh;
  top: 50%;
  transform: translateY(-50%);

  overflow: hidden;

  filter: hue-rotate(190deg) saturate(50%);
  opacity: 0.4;
}

#ocean {
  min-width: 100%;

  margin-left: -800px;
  transform: rotate(90deg);
}

.discover {
  position: relative;
  display: block;
  width: 13vw;
  height: 4.5vw;
  border: 0.2vw solid #d4c09e;
  background: none;
  left: 0;
  margin-top: 4vw;
  cursor: pointer;
}

.discover h3 {
  font-size: 0.9vw;
  color: #544a3f;
  padding: 0.45vw;
}

.arrow {
  position: absolute;
  cursor: pointer;
  height: 4vw;
  width: 3vw;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -2.8vw;
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

@media (max-aspect-ratio: 200/200) and (max-width: 500px) {
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

  .video-container {
    top: 90px;
    width: 75vw;
    height: 90vw;
  }
  .discover {
    left: 50%;
    transform: translateX(-50%);
    margin-top: 100px;
    width: 42vw;
    height: 15.5vw;
    border: 0.5vw solid #d4c09e;
  }
  .discover h3 {
    font-size: 2.6vw;
  }

  .arrow {
    margin-top: 20vw;
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

@media (max-aspect-ratio: 200/200) {
  .video-container {
    left: 50%;
    transform: translateX(-50%);
  }

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
  background: #f7f5f2;
}
</style>
