<template>
  <div class="loader">
    <div class="cell d-0"></div>
    <div class="cell d-1"></div>
    <div class="cell d-2"></div>
    <div class="cell d-1"></div>
    <div class="cell d-2"></div>
    <div class="cell d-2"></div>
    <div class="cell d-3"></div>
    <div class="cell d-3"></div>
    <div class="cell d-4"></div>
  </div>
</template>

<style lang="less" scoped>
.loader {
  --cell-size: 52px;
  --cell-spacing: 1px;
  --cells: 3;
  --total-size: calc(
    var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing))
  );
  display: flex;
  flex-wrap: wrap;
  width: var(--total-size);
  height: var(--total-size);
  .cell.d-1 {
    animation-delay: 100ms;
  }
  .cell.d-2 {
    animation-delay: 200ms;
  }
  .cell.d-3 {
    animation-delay: 300ms;
  }
  .cell.d-4 {
    animation-delay: 400ms;
  }
  .cell {
    flex: 0 0 var(--cell-size);
    margin: var(--cell-spacing);
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 4px;
    animation: 1.5s ripple ease infinite;
    &:nth-child(1) {
      --cell-color: #00ff87;
    }

    &:nth-child(2) {
      --cell-color: #0cfd95;
    }

    &:nth-child(3) {
      --cell-color: #17fba2;
    }

    &:nth-child(4) {
      --cell-color: #23f9b2;
    }

    &:nth-child(5) {
      --cell-color: #30f7c3;
    }

    &:nth-child(6) {
      --cell-color: #3df5d4;
    }

    &:nth-child(7) {
      --cell-color: #45f4de;
    }

    &:nth-child(8) {
      --cell-color: #53f1f0;
    }

    &:nth-child(9) {
      --cell-color: #60efff;
    }
  }
}

/*Animation*/
@keyframes ripple {
  0% {
    background-color: transparent;
  }

  30% {
    background-color: var(--cell-color);
  }

  60% {
    background-color: transparent;
  }

  100% {
    background-color: transparent;
  }
}
</style>
