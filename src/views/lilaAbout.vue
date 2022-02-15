<template>
  <div class="jessica-experience">
    <div
      class="lila-container-2"
      v-for="aboutLilaContent in aboutLilaContents"
      :key="aboutLilaContent._id"
    >
      <div class="jessica-picture-container">
        <img src="../assets/Lila_1.png" alt="" class="jessica-img" />
      </div>
      <h1 class="jessica-name" ref="lilaTitle">
        {{ aboutLilaContent.aboutLilaTitle }}
      </h1>

      <p
        class="experience-1"
        ref="expOne"
        v-bind:class="{ expActive: isLilaExpOneActive }"
      >
        {{ aboutLilaContent.aboutLilaParagraphTextOne }}
      </p>
      <div class="video">
        <iframe
          width="100%"
          height="100%"
          :src="aboutLilaContent.vimeoUrl"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen=""
        ></iframe>
      </div>

      <p
        class="lila-experience-2"
        ref="expTwo"
        v-bind:class="{ expActive: isLilaExpTwoActive }"
      >
        {{ aboutLilaContent.aboutLilaParagraphTextTwo }}
        <br />
        <br />

        {{ aboutLilaContent.aboutLilaParagraphTextThree }}
      </p>

      <WorkTogether />
    </div>
  </div>
</template>

<script>
import sanity from "../client";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { SplitText } from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
const queryAboutLila = `*[_type == "aboutLilaContent"]{
  _id,
  aboutLilaTitle,
  aboutLilaParagraphTextOne,
  vimeoUrl,
  aboutLilaParagraphTextTwo,
  aboutLilaParagraphTextThree


}[0...50]`;
import WorkTogether from "../components/WorkTogether.vue";
export default {
  components: {
    WorkTogether,
  },
  data: () => ({
    aboutLilaContents: [],

    isLilaExpOneActive: false,
    isLilaExpTwoActive: false,
  }),
  updated() {
    this.timeLine();
    ScrollTrigger.create({
      trigger: ".experience-1",
      toggleActions: "play none none none",
      onEnter: () => this.timeLineExpOne(),

      start: () => "top " + window.innerHeight * 0.75,

      onLeaveBack: (self) => self.disable(),
    });
    ScrollTrigger.create({
      trigger: ".lila-experience-2",
      toggleActions: "play none none none",
      onEnter: () => this.timeLineExpTwo(),

      start: () => "top " + window.innerHeight * 0.75,

      onLeaveBack: (self) => self.disable(),
    });
  },
  mounted() {},

  methods: {
    fetchDataAboutLila() {
      this.error = this.aboutLilaContent = null;
      this.loading = true;
      sanity.fetch(queryAboutLila).then(
        (aboutLilaContents) => {
          this.loading = false;
          this.aboutLilaContents = aboutLilaContents;
        },
        (error) => {
          this.error = error;
        }
      );
    },
    timeLine() {
      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.lilaTitle, { type: "lines" }),
        lines = mySplitText.lines;
      gsap.set(this.$refs.lilaTitle, { perspective: 400 });
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
    timeLineExpOne() {
      this.$refs.expOne.style.opacity = 1;
      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.expOne, { type: "lines" }),
        lines = mySplitText.lines;
      gsap.set(this.$refs.expOne, { perspective: 400 });
      tl.from(
        lines,
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          rotationX: 80,
          transformOrigin: "20% 0 0",
        },
        "+=0"
      );
    },
    timeLineExpTwo() {
      this.isLilaExpTwoActive = true;
      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.expTwo, { type: "lines" }),
        lines = mySplitText.lines;
      gsap.set(this.$refs.expTwo, { perspective: 400 });
      tl.from(
        lines,
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          rotationX: 80,
          transformOrigin: "20% 0 0",
        },
        "+=0"
      );
    },
  },
  created() {
    this.fetchDataAboutLila();
  },
};
</script>

<style scoped>
.work-together-container {
  position: relative;
  background: none;
  top: 20vw;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: -20vw;
}
.experience-1 {
  opacity: 0;
}
.lila-experience-2 {
  opacity: 0;
}
.expActive {
  opacity: 1;
}
</style>
