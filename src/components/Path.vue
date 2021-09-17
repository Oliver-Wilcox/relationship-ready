<template>
  <div class="path-container">
    <div class="path-picture-container" v-bind:class="{pathPicActive:isPathPicActive}">
      <img src="../assets/pathPic.png" alt="" class="path-pic" />
    </div>
    <h1 class="path-text">A FRESH PATH TO DATING</h1>
    <p class="path-paragraph" v-bind:class="{paragraphActive:IsParagraphActive}">
      We work with you to unravel the unhelpful thought patters that are
      creating your relationship patterns.
      <br />
      <br />
      We will coach you in a direction that gives you an understanding that
      allows you to show up to your dating and romantic life with fresh thought,
      opening up fresh paths and opportunities for you in your love life.
    </p>
  <button class="path-btn" v-on:click="prog">LEARN ABOUT OUR PROGRAMS</button>
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
     isPathPicActive: false,
     isParagraphActive: false
    }),
  mounted() {
    ScrollTrigger.create({
      trigger: ".path-paragraph",
      toggleActions: "play none none none",
      onEnter: () => (this.isPathPicActive = true),
    });
    ScrollTrigger.create({
      trigger: ".path-paragraph",
      toggleActions: "play none none none",
      onEnter: () => (this.isParagraphActive = true),
    });
  },
  methods: {
      prog(){
          window.scrollTo(0, 0);
          window.setTimeout(this.$router.push("/programmes"), 2000);
         
         
      }
  }
};
</script>

<style>
.path-container {
  position: relative;
  margin-top: -4vw;
  width: 100vw;
  height: 50vw;
  background: #f7f5f2;
 
}

.path-text {
  position: relative;
  top: 15vw;
  text-align: left;
  margin-left: 11vw;
  line-height: 5.8vw;
  font-size: 6.25vw;
  width: 50vw;
}

.path-paragraph {
  position: relative;
  margin-top: 16.5vw;
  text-align: left;
  margin-left: 11vw;
  transition: 1s;
  font-size: 1.3vw;
  width: 50vw;
  opacity: 0;
  font-family: DM sans;
}

.paragraphActive{
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
  top: 60%;
  transform: translateY(-50%);
  right: -20vw;
  overflow: hidden;
   transition: 1s;
   opacity: 0.2;
}

.path-pic {
  width: 115%;
}

 .pathPicActive{
        opacity: 1;
        right: 0;
    }

@media (max-aspect-ratio: 200/200) {
  .path-container {
    height: 145vw;
  }

  .path-text {
    top: 24vw;
    line-height: 10.8vw;
    font-size: 11.25vw;
    width: 85vw;
    margin-left: 6vw;
  }

  .path-paragraph {
    margin-top: 30vw;
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
 .pathPicActive{
        opacity: 0.6;
        right: 0;
    }
    
   
}
</style>
