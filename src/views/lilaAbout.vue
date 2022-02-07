<template>
  <div class="jessica-experience">
    <div class="lila-container-2"    v-for="aboutLilaContent in aboutLilaContents"
      :key="aboutLilaContent._id">
    <div class="jessica-picture-container">
      <img src="../assets/Lila_1.png" alt="" class="jessica-img" />
    </div>
    <h1 class="jessica-name">{{aboutLilaContent.aboutLilaTitle}}</h1>

    <p class="experience-1">
      {{aboutLilaContent.aboutLilaParagraphTextOne}}
    </p>
    <div class="video">
      <iframe width="100%" height="100%" :src="aboutLilaContent.vimeoUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
    </div>

    <p class="lila-experience-2">
      {{aboutLilaContent.aboutLilaParagraphTextTwo}}
      <br />
      <br />

       {{aboutLilaContent.aboutLilaParagraphTextThree}}
    </p>
  
      <WorkTogether />
      </div>
  </div>
</template>

<script>
import sanity from "../client";
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
  
   aboutLilaContents: []

  }),
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
  },
   created() {
  this.fetchDataAboutLila();
  },
};
</script>

<style scoped>

</style>
