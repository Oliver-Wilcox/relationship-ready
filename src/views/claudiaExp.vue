<template>
  <div class="jessica-experience">
    <div class="jessica-picture-container">
      <img src="../assets/marySample.png" alt="" class="jessica-img" />
    </div>
    <h1 class="jessica-name">CLAUDIA</h1>

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
        <h1 class="exp-name">JESSICA</h1>
        <button class="mary-btn">HEAR MARY'S STORY</button>
        <div class="experience-2-img-container">
          <img src="../assets/jessicaSample.png" alt="" class="experience-2-img" />
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
      <WorkTogether />
  </div>
</template>

<script>
import WorkTogether from "../components/WorkTogether.vue";
export default {
  components: {
   
    WorkTogether,
  },
};
</script>

<style scoped>

</style>
