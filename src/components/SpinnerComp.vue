<template>
    <button class="button">
  <p class="button__text">
    <span style="--index: 0;">L</span>
    <span style="--index: 1;">E</span>
    <span style="--index: 2;"> </span>
    <span style="--index: 3;">L</span>
    <span style="--index: 4;">U</span>
    <span style="--index: 5;">X</span>
    <span style="--index: 6;">E</span>
    <span style="--index: 7;"></span>
    <span style="--index: 8;"> </span>
    <span style="--index: 9;"> </span>
    <span style="--index: 10;">L</span>
    <span style="--index: 11;">O</span>
    <span style="--index: 12;">A</span>
    <span style="--index: 13;">D</span>
    <span style="--index: 14;">I</span>
    <span style="--index: 15;">N</span>
    <span style="--index: 16;">G </span>
    <span style="--index: 17;"> </span>
  </p>

  <div class="button__circle">
    <svg
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="button__icon"
      width="14"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>

    <svg
      viewBox="0 0 14 15"
      fill="none"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
      class="button__icon button__icon--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

  </template>
  
  <script>
  export default {
    name: 'SpinnerComp',
  }
  </script>
  
  <style scoped>
.button {
  cursor: pointer;
  border: none;
  background: #d69868;
  color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  display: grid;
  place-content: center;
  transition:
    background 300ms,
    transform 200ms;
  font-weight: 600;
}

.button__text {
  position: absolute;
  inset: 0;
  animation: text-rotation 8s linear infinite;

}
.button_text span {
 position: absolute;
 transform: rotate(calc(19deg * var(--index)));
 inset: 7px;
}

.button__circle {
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  background: #fff;
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button__icon--copy {
  position: absolute;
  transform: translate(-150%, 150%);
}


@keyframes text-rotation {
  to {
    rotate: 360deg;
  }
}

  </style>