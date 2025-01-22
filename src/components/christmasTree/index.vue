<template>
  <div class="scene">
    <div class="tree-wrapper">
      <div class="tree">
        <!-- 树干（立方体） -->
        <div class="trunk">
          <div class="trunk-face front"></div>
          <div class="trunk-face back"></div>
          <div class="trunk-face left"></div>
          <div class="trunk-face right"></div>
          <div class="trunk-face top"></div>
        </div>

        <!-- 树的主体（多个圆锥体） -->
        <div v-for="(layer, index) in 3" :key="index" class="cone-container" :class="`layer-${index + 1}`">
          <div v-for="i in 24" :key="i" class="triangle" 
            :style="{
              transform: `rotateY(${i * 15}deg) rotateX(30deg) translateZ(${70 - index * 10}px)`
            }">
          </div>
        </div>

        <!-- 星星 -->
        <div class="star">★</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const ballColors = ['#ff0000', '#ffd700', '#ff69b4', '#4169e1'];
</script>

<style lang="less" scoped>
.scene {
  perspective: 1200px;
  width: 100%;
  height: 100vh;
  background: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(white 1px, transparent 1px) 0 0 / 50px 50px,
      radial-gradient(white 1px, transparent 1px) 25px 25px / 50px 50px;
    opacity: 0.2;
    animation: snow 8s linear infinite;
    pointer-events: none;
  }
}

.tree-wrapper {
  position: relative;
  width: 300px;
  height: 400px;
  transform-style: preserve-3d;
}

.tree {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate 12s infinite linear;
  transform-origin: center bottom;
  will-change: transform;
}

.trunk {
  position: absolute;
  bottom: 0;
  left: 55%;
  transform: translateX(-50%);
  width: 30px;
  height: 85px;
  transform-style: preserve-3d;

  &-face {
    position: absolute;
    background: linear-gradient(45deg, #4d2926, #5c3326);
    backface-visibility: visible;

    &.front, &.back {
      width: 100%;
      height: 100%;
    }

    &.left, &.right {
      width: 30px;
      height: 100%;
    }

    &.top {
      width: 100%;
      height: 30px;
    }

    &.front { transform: translateZ(15px); }
    &.back { transform: translateZ(-15px); }
    &.left { transform: rotateY(-90deg) translateZ(15px); }
    &.right { transform: rotateY(90deg) translateZ(15px); }
    &.top { transform: rotateX(-90deg) translateZ(0); }
  }
}

.cone-container {
  position: absolute;
  left: 50%;
  transform-style: preserve-3d;
  transform-origin: center bottom;
  backface-visibility: hidden;
}

.triangle {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform-origin: 50% 100%;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 100px solid #0f5132;
  width: 0;
  height: 0;
  backface-visibility: hidden;
}

// 各层位置和大小
.generate-layers(@n) when (@n >= 1) {
  .layer-@{n} {
    @bottom: (50px + (@n - 1) * 70);
    @scale: (1 - (@n - 1) * 0.15);
    bottom: @bottom;
    transform: translateX(-50%) scale(@scale);

    .triangle {
      @color: darken(#0f5132, (@n - 1) * 5%);
      @brightness: (1 - (@n - 1) * 0.05);
      border-bottom-color: @color;
      filter: brightness(@brightness);
    }
  }
  .generate-layers(@n - 1);
}
.generate-layers(5);

.star {
  position: absolute;
  top: 80px;
  left: 52%;
  transform: translateX(-50%);
  color: #ffd700;
  font-size: 30px;
  text-shadow: 0 0 10px #fff, 0 0 20px #ffd700;
  animation: glow 1.5s infinite alternate;
  z-index: 1;
  backface-visibility: hidden;
}

@keyframes rotate {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

@keyframes glow {
  0% { text-shadow: 0 0 10px #fff, 0 0 20px #ffd700; }
  100% { text-shadow: 0 0 20px #fff, 0 0 30px #ffd700; }
}

@keyframes snow {
  to {
    background-position: 50px 50px, 25px 75px;
  }
}
</style> 