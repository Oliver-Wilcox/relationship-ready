<template>
  <div class="path-container" ref="pathcont">
    <div
      class="path-cont-2"
      v-for="pathsTitle in pathsTitles"
      :key="pathsTitle._id"
    >
      <div
        class="path-picture-container"
        ref="pathPic"
        v-bind:class="{ pathPicActive: isPathPicActive }"
      >
        <img src="../assets/pathPic.png" alt="" class="path-pic" />
      </div>
      <h1
        class="path-text"
        ref="pathTitle"
        v-bind:class="{ pathTitleActive: isPathTitleActive }"
        v-on:click="refresh"
      >
        {{ pathsTitle.pathTitle }}
      </h1>
      <p
        class="path-paragraph"
        ref="para"
        v-bind:class="{ paragraphActive: isParagraphActive }"
      >
        {{ pathsTitle.pathParagraphOne }}
        <br />
        <br />
        {{ pathsTitle.pathParagraphTwo }}
      </p>
      <router-link to="/programmes">
        <button class="path-btn">
          LEARN ABOUT OUR PROGRAMS
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import sanity from "../client";

const queryPath = `*[_type == "pathPage"]{
_id,
pathTitle,
pathParagraphOne,
pathParagraphTwo

}[0...50]`;

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { SplitText } from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
export default {
  data: () => ({
    isPathPicActive: false,
    isParagraphActive: false,
    pathsTitles: [],
    isPathTitleActive: false,
    scrollTriggerPic: null,
  }),
  mounted() {
    ScrollTrigger.create({
      trigger: ".path-container",
      toggleActions: "play none none none",
      start: () => "top " + window.innerHeight * 0.6,
      onEnter: () => (this.isParagraphActive = true),
    });

    this.scrollTriggerPic = ScrollTrigger.create({
      trigger: ".path-container",

      start: () => "top " + window.innerHeight * 0.75,
      toggleActions: "play none none none",
      onEnter: () => (this.isPathPicActive = true),
    });
    ScrollTrigger.create({
      trigger: ".path-container",
      toggleActions: "play none none none",
      onEnter: () => this.timeLine(),

      start: () => "top " + window.innerHeight * 0.75,

      onLeaveBack: (self) => self.disable(),
    });
  },

  created() {
    this.fetchDataPath();

    setTimeout(function() {
      ScrollTrigger.refresh();
    }, 50);
  },
  methods: {
    fetchDataPath() {
      this.error = this.pathsTitle = null;
      this.loading = true;
      sanity.fetch(queryPath).then(
        (pathsTitles) => {
          this.loading = false;
          this.pathsTitles = pathsTitles;
        },
        (error) => {
          this.error = error;
        }
      );
    },
    timeLine() {
      this.isPathTitleActive = true;
      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.pathTitle, { type: "lines" }),
        lines = mySplitText.lines;
      gsap.set(this.$refs.pathTitle, { perspective: 400 });
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
    refresh() {
      ScrollTrigger.refresh();
    },

    prog() {},
  },
};
</script>

<style>
.path-container {
  position: relative;
  margin-top: -4vw;
  width: 100vw;
  height: 50vw;
  padding-bottom: 10vw;
  overflow: hidden;
}

.path-text {
  position: relative;
  top: 7vw;
  text-align: left;
  margin-left: 11vw;
  line-height: 5.8vw;
  font-size: 6.25vw;
  width: 50vw;
  opacity: 0;
}

.pathTitleActive {
  opacity: 1;
}

.path-paragraph {
  position: relative;
  margin-top: 8.5vw;
  text-align: left;
  margin-left: 11vw;
  transition: 1s;
  font-size: 1.3vw;
  width: 50vw;
  opacity: 0;
  font-family: DM sans;
}

.paragraphActive {
  opacity: 1;
}

.path-btn {
  position: relative;
  left: 0;
  margin-top: 4vw;
  width: 18vw;
  height: 4.5vw;
  display: block;
  margin-left: 11vw;
  font-family: DM sans;

  font-size: 1vw;
  background: none;
  border: 0.2vw solid #d4c09e;
  cursor: pointer;
}

.path-picture-container {
  position: absolute;

  width: 32vw;
  height: 40vw;
  top: 50%;
  transform: translateY(-50%);
  right: -20vw;
  overflow: hidden;
  transition: 1s;
  opacity: 0.2;
}

.path-pic {
  width: 115%;
}

.pathPicActive {
  opacity: 1;
  right: 0;
}

@media (max-aspect-ratio: 200/200) {
  .path-container {
    height: 145vw;
  }

  .path-text {
    top: 18vw;
    line-height: 10.8vw;
    font-size: 11.25vw;
    width: 85vw;
    margin-left: 6vw;
  }

  .path-paragraph {
    margin-top: 24vw;
    font-size: 3.8vw;
    width: 75vw;
    margin-left: 6vw;
  }

  .path-btn {
    margin-top: 12vw;
    margin-left: 6vw;
    width: 50vw;
    height: 15vw;
    font-size: 2.5vw;
    border: 0.5vw solid #d4c09e;
  }

  .path-picture-container {
    width: 72vw;
    height: 90vw;
    top: 41%;
    opacity: 0.2;
    right: -50vw;
  }
  .pathPicActive {
    opacity: 0.6;
    right: 0;
  }
}
</style>
