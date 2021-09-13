<template>
  <div class="jessica-experience">
    <div class="jessica-picture-container">
      <img src="../assets/jessicaSample.png" alt="" class="jessica-img" />
    </div>
    <h1 class="jessica-name">JESSICA</h1>

    <p class="experience-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      viverra, est ac egestas tincidunt, est nunc lacinia magna, eu interdum
      elit quam vel massa. Sed sed fermentum diam. Vivamus ut varius metus,
      sagittis tempor tortor. Integer laoreet nibh et lobortis accumsan. Sed
      euismod ligula condimentum vestibulum auctor. Vestibulum gravida nec
      tellus et tempus. Nunc a ultricies nisl. Aliquam eu consequat arcu. Donec
      euismod dui at massa tincidunt porttitor. Nullam sed ex non nunc finibus
      pharetra a eu erat. Proin sem quam, auctor et tincidunt ut, varius id
      metus. Proin scelerisque dolor sed malesuada eleifend. Nullam condimentum
      quis nunc at aliquam.
    </p>
    <div class="video"></div>

    <p class="experience-2">
      Curabitur nulla sem, venenatis sed tortor vel, fermentum venenatis ipsum.
      Mauris ac nisl et mauris condimentum malesuada eu sit amet ipsum.
      Vestibulum fringilla pharetra laoreet. Aenean et tortor tincidunt, luctus
      arcu vel, lacinia est. Pellentesque habitant morbi tristique senectus et
      netus et malesuada fames ac turpis egestas. Nam sem lacus, posuere a enim
      semper, ultrices cursus ante. Donec maximus, lacus vel fringilla
      vestibulum, lectus ipsum fringilla ligula, nec tristique dolor lorem
      accumsan orci. Nunc eget ornare neque, id dignissim lacus. Mauris lacus
      nulla, consectetur aliquam blandit sit amet, viverra vitae eros. Donec
      vulputate lacus eu purus tincidunt pharetra at eu dui.
      <br />
      <br />

      Maecenas dapibus ex laoreet luctus eleifend. Donec maximus, nisi
      ullamcorper venenatis malesuada, magna turpis congue mi, ut vulputate
      magna eros hendrerit arcu. Donec dictum tristique risus vitae finibus.
      Curabitur dignissim, ante ut ullamcorper pretium, purus neque porta nunc,
      non varius lorem orci eu justo. Nulla a elit libero. Fusce dictum at diam
      eget ullamcorper. Proin rutrum augue ligula, tristique lobortis ante
      sodales at. Curabitur quis sollicitudin lacus. Vivamus id commodo enim,
      pharetra fermentum sapien. Integer ultrices vitae metus nec mattis.
    </p>
    <div class="other-experiences-container">
      <div class="experience-2-container">
        <h1 class="exp-name">MARY</h1>
        <button class="mary-btn">HEAR MARY'S STORY</button>
        <div class="experience-2-img-container">
          <img src="../assets/marySample.png" alt="" class="experience-2-img" />
        </div>
      </div>
      <div class="experience-3-container">
        <h1 class="exp-name">CLAUDIA</h1>
        <button class="claudia-btn">HEAR CLAUDIA'S STORY</button>
        <div class="experience-3-img-container">
          <img
            src="../assets/claudiaSample.png"
            alt=""
            class="experience-3-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.jessica-picture-container {
  position: relative;
  width: 38vw;
  height: 38vw;
  margin-top: 5vw;
  left: calc(50% - 19vw);
  overflow: hidden;
}

.jessica-img {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
}

.jessica-name {
  position: absolute;
  font-size: 8vw;
  top: 35vw;
  left: 50%;
  transform: translateX(-50%);
}

.experience-1 {
  position: relative;
  width: 44vw;
  text-align: left;
  font-size: 1.2vw;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 12vw;
  font-family: DM sans;
}

.video {
  position: relative;
  width: 54vw;
  height: 34vw;
  background: grey;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 7vw;
}

.experience-2 {
  position: relative;
  width: 44vw;
  text-align: left;
  font-size: 1.2vw;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 7vw;
  font-family: DM sans;
}

.other-experiences-container {
  position: relative;
  width: 65vw;
  height: 35vw;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8vw;
}

.experience-2-img-container {
  top: 0;
  left: 0;
  position: absolute;
  background: blue;
  height:30vw;
  width: 30vw;
  overflow: hidden;
}
.experience-3-img-container {
  top: 0;
  right: 0;
  position: absolute;
  background: blue;
  height: 30vw;
  width: 30vw;
  overflow: hidden;
}

.experience-2-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.experience-3-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.name {
}

 .exp-name {
    position: absolute;
    bottom: -9vw;
    font-size: 6vw;
    z-index: +10;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

    .experience-2-container {
    top: 0;
    left: 0;
    position: absolute;
   
    height: 30vw;
    width: 30vw;
    margin-top: 0vw;
left: 0;

  }


  .experience-3-container {
    margin-top: 0vw;
    right: 0vw;
  
    transform: none;
    position: absolute;
    height: 30vw;
    width: 30vw;
 
  }

    .mary-btn {
     position: absolute;
     z-index: +1;
     left: 50%;
     transform: translateX(-50%);
     bottom: -12vw;
     background: none;
    width: 16vw;
    height: 6vw;
    font-size: 1.1vw;
    border: 0.2vw solid #d4c09e;
  }

    .claudia-btn {
     position: absolute;
     z-index: +1;
     left: 50%;
     transform: translateX(-50%);
     bottom: -12vw;
     background: none;
    width: 16vw;
    height: 6vw;
    font-size: 1.1vw;
    border: 0.2vw solid #d4c09e;
  }


 

@media (max-aspect-ratio: 200/200) {
  .jessica-picture-container {
    position: relative;
    width: 84vw;
    height: 84vw;
    margin-top: 20vw;
    left: calc(50% - 42vw);
    overflow: hidden;
  }

  .jessica-img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.8;
  }

  .jessica-name {
    position: absolute;
    font-size: 20vw;
    top: 86vw;
    left: 50%;
    transform: translateX(-50%);
  }

   .mary-btn {
     position: absolute;
     z-index: +1;
     left: 50%;
     transform: translateX(-50%);
     bottom: -30vw;
     background: none;
    width: 50vw;
    height: 15vw;
    font-size: 2.5vw;
    border: 0.5vw solid #d4c09e;
  }

    .claudia-btn {
     position: absolute;
     z-index: +1;
     left: 50%;
     transform: translateX(-50%);
     bottom: -30vw;
     background: none;
    width: 50vw;
    height: 15vw;
    font-size: 2.5vw;
    border: 0.5vw solid #d4c09e;
  }

  .experience-1 {
    position: relative;
    width: 84vw;
    text-align: left;
    font-size: 3.5vw;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 26vw;
    font-family: DM sans;
  }

  .video {
    position: relative;
    width: 84vw;
    height: 54vw;
    background: grey;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 15vw;
  }

  .experience-2 {
    position: relative;
    width: 84vw;
    text-align: left;
    font-size: 3.5vw;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 15vw;
    font-family: DM sans;
  }

  .other-experiences-container {
    position: relative;
    width: 95vw;
    height: 240vw;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 8vw;
  }
  .experience-2-container {
    top: 0;
    left: 0;
    position: absolute;
    background: blue;
    height: 84vw;
    width: 84vw;
    margin-top: 8vw;

    left: calc(50% - 42vw);
  }
  .experience-2-img-container {
    left: 0;
    position: absolute;
    height: 84vw;
    width: 84vw;
    overflow: hidden;
    left: calc(50% - 42vw);
  }

  .experience-3-container {
    margin-top: 140vw;
    left: calc(50% - 42vw);
    position: absolute;
    height: 84vw;
    width: 84vw;
  }

  .experience-3-img-container {
    left: calc(50% - 42vw);
    position: absolute;
    height: 84vw;
    width: 84vw;
    overflow: hidden;
  }

  .experience-2-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .experience-3-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .exp-name {
    position: absolute;
    bottom: -20vw;
    font-size: 14vw;
    z-index: +10;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
}
</style>
