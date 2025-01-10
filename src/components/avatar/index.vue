<template>
  <div class="avatar">
    <img src="./images/avatar.png" alt="" />
  </div>
</template>

<style scoped>
.avatar img {
  --s: 100px;
  --c1: #ecd078;
  --c2: #c02942;
  --f: 1;
  --shrink: calc((var(--s) / var(--f) - var(--s)) / 2 - 5px);
  --bgOption: content-box no-repeat center / calc(100% / var(--f)) 100%;
  width: var(--s);
  height: var(--s);
  padding-top: 10px;
  cursor: pointer;
  transition: 0.5s;
  transform: scale(var(--f));
  outline: 5px solid #c02942;
  outline-offset: var(--shrink);
  border-radius: 0 0 999px 999px;
  background: radial-gradient(
      circle closest-side,
      var(--c1) calc(99% - 5px),
      var(--c2) calc(100% - 5px),
      var(--c2) 99%,
      transparent 100%
    )
    var(--bgOption);
  -webkit-mask: linear-gradient(#000 0 0) no-repeat center
      calc(0px - var(--shrink)) / calc(100% / var(--f) - 2 * 5px) 50%,
    radial-gradient(circle closest-side, #000 99%, transparent) var(--bgOption);
}
.avatar img:hover {
  --f: 1.35;
}
</style>
