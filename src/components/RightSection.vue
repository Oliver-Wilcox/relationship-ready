<template>
  <div class="right-section" v-for="testimonialText in testTexts" :key="testimonialText._id">
   
    <div class="testimonial-paragraph-container">
      <p class="testimonial-paragraph-one" ref="paragraphOne" >
     "{{testimonialText.textOne}}"
      </p>
       <p class="testimonial-paragraph-two" ref="paragraphTwo" >
       "{{testimonialText.textTwo}}"
      </p>
      <p class="testimonial-paragraph-three" ref="paragraphThree"  >
        "{{testimonialText.textThree}}"
      </p>
    </div>
    <router-link v-bind:to="experience"
      ><button class="jessica-btn"  v-for="testimonialBtn in testBtns" :key="testimonialBtn._id">
        <span class="btn-text-cont"  v-if="count == 0" 
          ><h3 ref="btnH3">HEAR {{ testimonialBtn.testimonialBtnOne }} EXPERIENCE</h3></span
        >
        <span class="btn-text-cont"  v-if="count == 1" 
          ><h3 ref="btnH3">HEAR {{ testimonialBtn.testimonialBtnTwo }} EXPERIENCE</h3></span
        >
        <span class="btn-text-cont"  v-if="count == 2" 
          ><h3 ref="btnH3">HEAR {{ testimonialBtn.testimonialBtnThree }} EXPERIENCE</h3></span
        >
      </button></router-link
    >
     <div class="people-container">
      <div
        class="person one"
        v-on:click="oneActive"
        v-bind:class="{ personActive: isPersonOneActive }"
      >
    
      </div>
      <div
        class="person two"
        v-on:click="twoActive"
        v-bind:class="{ personTwoActive: isPersonTwoActive }"
      >
       
      </div>
      <div
        class="person three"
        v-on:click="threeActive"
        v-bind:class="{ personThreeActive: isPersonThreeActive }"
      >
        
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../client.js";

const queryText = `*[_type == "testimonialText"]{
  _id,
  textOne,
  textTwo,
  textThree,
  
}[0...50]`;

const queryBtn = `*[_type == "testimonialBtn"]{
  _id,
  testimonialBtnOne,
   testimonialBtnTwo,
   testimonialBtnThree
  
}[0...50]`;


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
    experienceText: "JESSICA'S",
    experience: "/JessicaExp",
    testTexts: [],
    testBtns: [],
    secondary: [],
    count: 0
  }),
  mounted() {
    this.timeLineOne();
    this.timeLineTwo();
    this.timeLineThree();
  
   
  },
  created() {
    this.fetchDataText();
    this.fetchDataBtn();
      
  },
  methods: {
    fetchDataText() {
      this.error = this.testimonialText = null;
      this.loading = true;
      sanity.fetch(queryText).then(
        (testTexts) => {
          this.loading = false;
          this.testTexts = testTexts;
           this.blocks = testTexts.body;
        },
        (error) => {
          this.error = error;
        }
      );
    },
     fetchDataBtn() {
      this.error = this.testimonialBtn = null;
      this.loading = true;
      sanity.fetch(queryBtn).then(
        (testBtns) => {
          this.loading = false;
          this.testBtns = testBtns;
           this.blocks = testBtns.body;
        },
        (error) => {
          this.error = error;
        }
      );
    },
    timeLineOne() {
      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.paragraphOne, { type: "lines" }),
        lines = mySplitText.lines;

      gsap.set(this.$refs.paragraphOne, { perspective: 400 });

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
    timeLineTwo() {
      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.paragraphTwo, { type: "lines" }),
        lines = mySplitText.lines;

      gsap.set(this.$refs.paragraphTwo, { perspective: 400 });

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
      timeLineThree() {
      let tl = gsap.timeline(),
        mySplitText = new SplitText(this.$refs.paragraphThree, { type: "lines" }),
        lines = mySplitText.lines;

      gsap.set(this.$refs.paragraphThree, { perspective: 400 });

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
    oneActive() {
      this.$emit("onePictureActiveChange", true);
      this.$emit("onePictureActiveChangeFalse", false);
      this.isPersonOneActive = true;
      this.isPersonTwoActive = false;
      this.isPersonThreeActive = false;
      this.timeLineOne();
      this.experience = "/JessicaExp";
      this.experienceText = "JESSICA'S";
      var el = this.$refs.btnH3;
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null; 
  this.count = 0;
  this.$refs.paragraphOne.style.opacity = "1";
  
  this.$refs.paragraphTwo.style.opacity = "0";
  this.$refs.paragraphThree.style.opacity = "0";
    },
    twoActive() {
      this.$emit("twoPictureActiveChange", true);
      this.$emit("twoPictureActiveChangeFalse", false);
      this.isPersonOneActive = false;
      this.isPersonTwoActive = true;
      this.isPersonThreeActive = false;
      this.timeLineTwo();
      this.experience = "/maryExp";
      this.experienceText = "MARY'S";
       var el = this.$refs.btnH3;
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null; 
  this.count = 1;
   this.$refs.paragraphOne.style.opacity = "0";
  this.$refs.paragraphTwo.style.opacity = "1";
  this.$refs.paragraphThree.style.opacity = "0";
    },
    threeActive() {
      this.$emit("threePictureActiveChange", true);
      this.$emit("threePictureActiveChangeFalse", false);
      this.isPersonOneActive = false;
      this.isPersonTwoActive = false;
      this.isPersonThreeActive = true;
      this.experience = "/claudiaExp";
      this.experienceText = "CLAUDIA'S";
      this.timeLineThree();
       var el = this.$refs.btnH3;
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null; 
  this.count = 2;
     this.$refs.paragraphOne.style.opacity = "0";
  this.$refs.paragraphTwo.style.opacity = "0";
  this.$refs.paragraphThree.style.opacity = "1";
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
  top: 5vw;
  left: 0;
  width: 16vw;
  height: 8vw;
}

.jessica-btn h3 {
  position: relative;
  top: 0%;
  transform: translateY(-50%);
  font-family: DM sans;
  font-weight: normal;
  font-size: 1vw;
  animation: btn-anim 0.6s forwards;
  opacity: 0;
}

@keyframes btn-anim {
  0% {
    top: 100%;
    opacity: 0;
  }
  100% {
    top: 0%;
    opacity: 1;
  }
}

.btn-text-cont {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15vw;
  height: 2vw;
  
  overflow: hidden;
  transform: translate(-50%, -50%);
}

.person {
  position: absolute;
  width: 1.25vw;
  height: 1.25vw;
  top: 1.5vw;
  overflow: hidden;
  
 background: #544a3f;
  cursor: pointer;
  transition: 0.25s;
  border-radius: 50%;
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
  left: 2.7vw;
}
.three {
  left: 5.4vw;
}

.personActive {

 background:  #d4c09e;
}

.personTwoActive {
 
 background:  #d4c09e;
 
}

.personThreeActive {

 background:  #d4c09e;
 
}

.right-section p {
 
 
}

.testimonial-paragraph-one{
 position: absolute;
  left: 0;
  text-align: left;
  font-size: 2.6vw;
  width: 22vw;
  margin-top: 3.5vw;
opacity: 1;
}

.testimonial-paragraph-two{
 position: absolute;
  left: 0;
  text-align: left;
  font-size: 2.6vw;
  width: 22vw;
  margin-top: 3.5vw;
  opacity: 0;
}

.testimonial-paragraph-three{
 position: absolute;
  left: 0;
  text-align: left;
  font-size: 2.6vw;
  width: 22vw;
  margin-top: 3.5vw;
opacity: 0;
}

.jessica-btn {
  position: relative;
  left: 0;
  margin-top: 22.5vw;
  width: 18vw;
  height: 4.5vw;
  display: block;

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
