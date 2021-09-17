<template>
  <div class="coaching-container">
      <div class="coaching-text-container">
          <h1 class="coaching-title">COACHING PROGRAM</h1>
          <p class="coaching-paragraph">If the timings and format of the retreats do not work for you, we have designed a coaching program that can work around your schedule. Our Relationship Ready coaching programme provides help, insight and support for you to be able to find a more effortless way to find and be in a relationship. The 1-2-1 coaching allows you to focus on what is important to you and the outcomes you are working towards.</p>
      </div>
       <div class="coaching-picture-container">
            <div class="coaching-blur"></div>
      <img src="../assets/coaching.png" class="coaching-picture" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.coaching-container{
    position: relative;
  left: 0;
  margin-top: 8vw;
  width: 100vw;
   height: 60vw;
   opacity: 1;
}

.coaching-text-container {
  position: absolute;
  left: 16vw;

  height: 40vw;
  width: 30vw;
  top: 0;
}

.coaching-title {
  position: relative;
  text-align: left;
  font-size: 6.25vw;
}

.coaching-paragraph {
  position: relative;
  text-align: left;
  margin-top: -3vw;

  font-family: DM sans;
  font-size: 1.3vw;
  width: 37vw;
}

.coaching-picture-container {
  position: absolute;
  right: 10vw;
  width: 28vw;
  height: 42vw;
  transform: rotate(4deg);
  top: 1vw;
  overflow: hidden;
}

.coaching-picture {
  position: relative;
  width: 100%;
}


@media (max-aspect-ratio: 200/200) {
    .coaching-container{
         margin-top: 18vw;
         height: 120vw;
     
    }
   

    .coaching-picture-container{
        width: 38vw;
  height: 55vw;
        right: 6vw;
        z-index: -1;
        top: -2vw;
        opacity: 1;
    }

    .coaching-blur{
        position: absolute;
width: 50vw;
height: 50vw;
left: -15vw;
bottom: -0vw;

background: rgba(255, 255, 255, 0.6);
filter: blur(8vw);
transform: rotate(4deg);
z-index: +5;
    }
    .coaching-text-container{
        left: 6vw;
        width: 100vw;
       
        height: 80vw;
    }
    .coaching-title{
         font-size: 11.25vw;
         width: 30vw;
    }
    .coaching-paragraph{
        font-size: 3.8vw;
        width: 80vw;
    }
}
</style>