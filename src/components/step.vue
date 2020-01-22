<template>
  <div class="container1">
    <ul class="progressbar">
      <li class="active">Step 1</li>
      <li class="active">Step 2</li>
      <li class="active">Step 3</li>
      <li class="active">Step 4</li>
      <li class="active">Step 5</li>
    </ul>
  </div>
</template>
<style scoped>
.container1 {
  width: 100%;
  position: absolute;
  z-index: 1;
}
.progressbar li {
  float: left;
  width: 20%;
  position: relative;
  text-align: center;
}
.progressbar {
  counter-reset: step;
}
.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  border: 2px solid #bebebe;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  line-height: 27px;
  background: white;
  color: #bebebe;
  text-align: center;
  font-weight: bold;
}
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: #979797;
  top: 15px;
  left: -50%;
  z-index: -1;
}

.progressbar li:first-child:before {
  background: #3aac5d;
  border-color: #3aac5d;
  background: #3aac5d;
  color: white;
}
.progressbar li:first-child:after {
  content: none;
}
.progressbar li.active + li:after {
  background: #3aac5d;
}
.progressbar li.active + li:before {
  border-color: #3aac5d;
  background: #3aac5d;
  color: white;
}
</style>