<template>
    <div>
        <!-- <p>about</p> -->
        <component :is="cut"></component>
        <button @click="current">点击切换</button>
    </div>
</template>
<script>
// import { mapGetters } from "vuex";
export default {
    created(){
        this.a()
        console.log('about')
    },
    computed:{
        // ...mapGetters(["userInfo"])
    },
    methods:{
         a(){
                this.$store.dispatch("Astro").then(res=>{
                console.log('-+-+-+-+-+-+',res)
            })
         },
         current(){
             
         }
    }
}
</script>