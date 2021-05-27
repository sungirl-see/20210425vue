import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import user from './modules/user'
// import getters from './getters'
Vue.use(Vuex)

const store =new Vuex.Store({
    // modules:{
    //     user
    // },
    // getters
    state:{
        name:''
    },
    mutations:{
        SET_NAME:(state,value)=>{
            state.name=value
        }
    },
    actions:{
        Astro({commit}){
            return new Promise((resolve,reject)=>{
                axios.get('/',{
                    params:{appkey:'6c5d248b4ff95b72'}
                }).then(res=>{
                    console.log('res=>>>>>',res)
                    const data=res.data.result
                    commit('SET_NAME',data)
                    resolve(data)
                }).catch(err=>{
                    console.log('err=>>>>>',err)
                    reject(err)
                })
            })
        }
    }
})
export default store