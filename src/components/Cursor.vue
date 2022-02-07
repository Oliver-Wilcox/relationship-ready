<template>
  <div class="cursor" ref="cursor" v-bind:class="{ cursorActive: hover }"></div>
  <div class="cursorHover" ref="cursorHover"></div>
</template>

<script>
export default {
  props: {
    hover: Boolean,
  },
  mounted() {
    const cursor = this.$refs.cursor;
    const cursorHover = this.$refs.cursorHover;

    let currentX = 0;
    let currentY = 0;
    let aimX = 0;
    let aimY = 0;
    let speed = 0.2;

    const animate = function() {
      currentX += (aimX - currentX) * speed;
      currentY += (aimY - currentY) * speed;

      cursor.style.left = currentX + -7 + "px";
      cursor.style.top = currentY + -7 + "px";
      cursorHover.style.left = currentX + 0 + "px";
      cursorHover.style.top = currentY + 0 + "px";

      requestAnimationFrame(animate);
    };

    animate();

    document.addEventListener("mousemove", function(event) {
      aimX = event.clientX;
      aimY = event.clientY;
    });
  },
};
</script>

<style>
.cursor {
  position: fixed;
  background: white;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  z-index: +100;
  pointer-events: none;
}

.cursorActive {
  transform: scale(1.5);
}

@media (max-aspect-ratio: 200/200) {
  .cursor {
    display: none;
  }
}
</style>
