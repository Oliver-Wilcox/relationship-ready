<template>
  <div class="video-container">
    <div class="video-mask">
      <video playsinline autoplay muted loop id="ocean">
        <source src="../assets/ocean.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontVideo",
};
</script>

<style>
.video-container {
  position: absolute;
  right: 9.5vw;
  width: 40vw;
  height: 90vh;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #e2d8c5;
  overflow: hidden;

  animation: scale-up-hor-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation-delay: 0.2s;
  z-index: -1;
}

.video-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  opacity: 0.4;
  animation: scale-up-hor-right-mask 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation-delay: 0.5s;
  right: 0;
  top: 0;
}

#ocean {
  position: absolute;
  width: 150vw;

  top: 0;
  bottom: 0;
  left: -60vw;
  right: 0;
  transform: rotate(90deg);
  filter: hue-rotate(190deg) saturate(50%);
  opacity: 0.6;
}

@keyframes scale-up-hor-right-mask {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@keyframes scale-up-hor-right {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
}

@media (max-aspect-ratio: 200/200) and (max-width: 800px) {
  .video-container {
    top: 90px;
    margin: 0;
    width: 75vw;
    height: 90vw;
    left: calc(50% - 37.5vw);
  }
  #ocean {
    width: 300vw;
    left: -120vw;
  }
}
</style>
