<template>
  <div >
    <img :src="urlImg" alt="no se puede">
    <h1>{{texto}}</h1>
  </div>
</template>

<script>
export default {
    props:{
        texto:{
            type:String
        },
        urlImg:{
            type:String
        }
    }

}
</script>

<style scoped>
img{
    height: 300px;
    width: 200px;
}

</style>