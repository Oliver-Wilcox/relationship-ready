<template>
  <div class="apps" v-for="post in posts" :key="post._id"  >
    <div class="text-container">
      <div class="title-container">
        <h1 class="title">
          <span id="spans-container"
            ><span
              
              class="natural"
              @mouseover="hover = true"
              @mouseleave="hover = false"
              >{{post.titleOne}}</span
            ></span
          ><span id="spans-container"
            ><span class="version" >
              {{post.titleTwo}}
             </span></span
          ><span id="spans-container" class="the-upgrade"
            ><span class="upgrade" 
              >{{post.titleThree}}
              
            </span
            ></span
          >
        </h1>
      </div>
      <div class="sub-title-container" v-for="subTitle in subTitles" :key="subTitle._id">
        <h3 class="sub-title">
          <span class="we-specialize"
            >{{subTitle.frontParagraphOne}}</span
          ><span
            >{{subTitle.frontParagraphTwo}}</span
          ><span>{{subTitle.frontParagraphThree}}</span>
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
import sanity from "../client.js";

const queryPost = `*[_type == "post"]{
  _id,
  titleOne,
  titleTwo,
   titleThree
}[0...50]`;

const querySubtitle = `*[_type == "subTitle"]{
  _id,
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
    posts: [],
    subTitles: []
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
    this.fetchDataPost();
      this.fetchDataSubtitle();
  },
  computed: {
  
  },
  methods: {
    fetchDataPost() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(queryPost).then(
        (posts) => {
          this.loading = false;
          this.posts = posts;
           this.blocks = posts.body;
        },
        (error) => {
          this.error = error;
        }
      );
    },
     fetchDataSubtitle() {
      this.error = this.subTitle = null;
      this.loading = true;
      sanity.fetch(querySubtitle).then(
        (subTitles) => {
          this.loading = false;
          this.subTitles = subTitles;
           this.blocks = subTitles.body;
        },
        (error) => {
          this.error = error;
        }
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
