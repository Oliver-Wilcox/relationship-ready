<template>
  <div class="virtual-container">
      <div class="virtual-picture-container">
          <div class="virtual-blur"></div>
   <img src="../assets/virtual.png" alt="" class="virtual-img">
      </div>
      <div class="virtual-text-container">
          <h1 class="virtual-title">VIRTUAL RETREAT</h1>
          <p class="virtual-paragraph">Our Virtual Retreat programme is designed for you to get a fundamental understanding of how your mind is affecting how you  show up to your romantic life. The retreat is in a small group format, is always relaxed and informal. The focus of these few days is to start the journey in seeing what it looks and feels like to show up as the most natural and intuitive version of you on dates and in relationships.</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.virtual-container {
  position: relative;
  left: 0;
  margin-top: 10vw;
  width: 100vw;
  height: 48vw;
  opacity: 1;

}

.virtual-picture-container{
  position: absolute;
  left: 11vw;
  width: 28vw;
  height: 42vw;
  transform: rotate(-4deg);
  top: 1vw;
 
  overflow: hidden;
}
.virtual-img{
    width: 110%;
}

.virtual-text-container{
    position: absolute;
  right: 20vw;

  height: 40vw;
  width: 30vw;
  top: 0;
}

.virtual-title {
  position: relative;
  text-align: left;
  font-size: 6.25vw;
}

.virtual-paragraph {
  position: relative;
  text-align: left;
  margin-top: -3vw;

  font-family: DM sans;
  font-size: 1.3vw;
  width: 34vw;
}



@media (max-aspect-ratio: 200/200) {
    .virtual-container{
        height: 120vw;
        margin-top: 20vw;
    }
     .virtual-text-container{
        right: 6vw;
        width: 60vw;
       
        height: 80vw;
    }

    .virtual-title{
         font-size: 11.25vw;
         width: 30vw;
       left: 15vw;
       text-align: right;
    }
    .virtual-paragraph{
        font-size: 3.8vw;
        width: 60vw;
    }
    .virtual-picture-container{
            width: 38vw;
  height: 55vw;
        left: 6vw;
        z-index: -1;
        top: -2vw;
        opacity: 1;
    }

    .virtual-blur{
       position: absolute;
width: 54vw;
height: 54vw;
right: -15vw;
bottom: -30vw;

background: rgba(255, 255, 255, 0.7);
filter: blur(8vw);
transform: rotate(4deg);
z-index: +5;
    }

}


</style>