<template>
    <div>
        <p>about</p>
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
         }
    }
}
</script>