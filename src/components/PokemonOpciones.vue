<template>
  <div class="option_Container">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

ul{
    list-style: none;
}
li{
    background: white;
    border-radius: 5px;
    border: 1px solid rgb(0, 0, 0,0.2);
    width: 250px;
    margin-bottom: 10px;
    cursor: pointer;
}
li:hover{
    background: rgb(0, 0, 0,0.1);
}
.option_Container{
    display: flex;
    justify-content: center;
}
</style>