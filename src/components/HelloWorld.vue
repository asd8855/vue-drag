<template>
  <div class="hello">
    <div class="drag" v-drag>
        拖动我
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drag {
  position: fixed;
  left: 8px;
  top: 8px;
  z-index: 100;
  background: #FF262A;
  width: 130px;
  height: 130px;
  border-radius: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: antiquewhite;
  font-size: 18px;
}
</style>
