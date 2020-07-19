<template>
  <canvas id="mochiBotCanvas" ref="mochiBotCanvas" class="elevation-8"></canvas>
</template>

<script>
export default {
  name: 'MochiBotCanvas',
  data () {
    const size = 192;
    const halfSize = size * 0.5;

    const faceXPosition = halfSize;
    const faceYPosition = halfSize;
    const firstEyeXPosition = halfSize - 32;
    const firstEyeYPosition = halfSize;
    const secondEyeXPosition = halfSize + 32;
    const secondEyeYPosition = halfSize;

    const faceRadius = halfSize - 12;
    const firstEyeRadius = halfSize * 0.25;
    const secondEyeRadius = halfSize * 0.25;

    return {
      size, halfSize, faceXPosition, faceYPosition, firstEyeXPosition, firstEyeYPosition,
      secondEyeXPosition, secondEyeYPosition, faceRadius, firstEyeRadius, secondEyeRadius
    };
  },
  watch: {
    '$vuetify.theme.isDark'() {
      this.clearCanvas();
      this.drawCanvas();
    }
  },
  methods: {
    drawCanvas() {
      const canvas = this.$refs.mochiBotCanvas;
      const context = canvas.getContext('2d');

      const faceColor = this.$vuetify.theme.isDark ? '#212121' : '#fafafa';
      const eyeColor = this.$vuetify.theme.isDark ? '#fafafa' : '#212121';

      // canvas properties
      canvas.width  = this.size;
      canvas.height = this.size;

      // face context properties
      context.beginPath();

      context.arc(
        this.faceXPosition,
        this.faceYPosition,
        this.faceRadius,
        0,
        2 * Math.PI
      );

      context.fillStyle = faceColor;
      context.fill();

      context.strokeStyle = faceColor;
      context.stroke();
      context.closePath();

      // fisrt eye context properties
      context.beginPath();

      context.arc(
        this.firstEyeXPosition,
        this.firstEyeYPosition,
        this.firstEyeRadius,
        0,
        2 * Math.PI
      );

      context.fillStyle = eyeColor;
      context.fill();

      context.strokeStyle = eyeColor;
      context.stroke();
      context.closePath();

      // second eye context properties
      context.beginPath();

      context.arc(
        this.secondEyeXPosition,
        this.secondEyeYPosition,
        this.secondEyeRadius,
        0,
        2 * Math.PI
      );

      context.fillStyle = eyeColor;
      context.fill();

      context.strokeStyle = eyeColor;
      context.stroke();
      context.closePath();
    },
    clearCanvas() {
      const canvas = this.$refs.mochiBotCanvas;
      const context = canvas.getContext('2d');

      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  },
  mounted() {
    this.drawCanvas();
  }
};
</script>

<style scoped>
  #mochiBotCanvas {
    border-radius: 100%;
  }
</style>