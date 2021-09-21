<template>
  <div class="work-together-container">
    <h1 class="work-together-title">LETS WORK TOGETHER</h1>
    <p class="work-together-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum purus orci, quis accumsan arcu vulputate eget. In vitae gravida ex. Donec at ipsum sollicitudin, placerat sem id, tincidunt diam. Donec vestibulum justo dignissim urna lacinia, quis tempor dui convallis.</p>
    <button class="work-together-button">BOOK A CALL</button>
  </div>
</template>

<script>
export default {
    
};
</script>

<style>
.work-together-container {
  position: relative;
  width: 100vw;
  height: 40vw;
 opacity: 1;
  margin-top: -5vw;
}

.work-together-title {
  position: relative;
  left: 27.5%;
  transform: translateX(-50%);
  width: 60vw;
  top: 2vw;
  text-align: right;
  font-size: 6.25vw;
  line-height: 5.75vw;
}


.work-together-paragraph {
  position: relative;
  left: 60%;
  transform: translateX(-50%);
  width: 40vw;
text-align: left;
  margin-top: -1vw;
  font-size: 1.3vw;

  font-family: DM sans;
}

.work-together-button{
     position: relative;
  left: 46%;
  transform: translateX(-50%);
  margin-top: 3vw;
  width: 12vw;
  height: 4.5vw;
  display: block;
  
  font-family: DM sans;

  font-size: 1vw;
  background: none;
  border: 0.2vw solid #d4c09e;
  cursor: pointer;
}

@media (max-aspect-ratio: 200/200) {
    .work-together-container{
         margin-top: -10vw;
         height: 140vw;
      
    }
    .work-together-title{
        font-size: 11.25vw;
        line-height: 10.75vw;
        width: 80%;
        text-align: center;
        left: 50%;
    }

    .work-together-paragraph{
        font-size: 3.8vw;
        width: 80%;
        text-align: center;
           left: 50%;
    }

    .work-together-button{
         margin-top: 8vw;
   left: 50%;
    width: 35vw;
    height: 15vw;
    font-size: 2.5vw;
    border: 0.5vw solid #d4c09e;
    }
}





</style>
