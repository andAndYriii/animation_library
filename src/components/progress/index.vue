<template>
  <div class="progress-container">
    <div class="progress-bar"></div>
  </div>
</template>

<style lang="less" scoped>
.progress-container {
  position: relative;
  width: 80%;
  max-width: 600px;
  height: 10px;
  background: #333;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  perspective: 1000px; /* 3D 透视 */
}

.progress-bar {
  position: absolute;
  height: 100%;
  width: 0%;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 150, 1) 0%,
    rgba(0, 204, 255, 1) 100%
  );
  background-size: 200% 100%;
  animation: move 2s linear infinite, progress 5s forwards;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 204, 255, 0.8);
  transform: rotateX(15deg); /* 添加 X 轴旋转，使其呈现 3D 效果 */
}

@keyframes move {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes progress {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
