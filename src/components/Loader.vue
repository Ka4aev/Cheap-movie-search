<template>
  <div class="lds-facebook">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.lds-facebook {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.lds-facebook div {
  background: #64ffda;
  width: 16px;
  height: 40px;
  margin: 0 4px;
  animation: lds-facebook 1.2s infinite ease-in-out;
}

@keyframes lds-facebook {
  0%, 40%, 100% {
    transform: scaleY(0.5);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>
