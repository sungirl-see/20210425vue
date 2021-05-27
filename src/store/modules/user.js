
import axios from 'axios'
const user={
    state:{
        userInfo:{},
    },
    mutations:{
        SET_USER_INFO:(state,userInfo)=>{
            state.userInfo=userInfo
        }
    },
    actions:{
        // Astro({commit}){
        //     return new Promise((resolve,reject)=>{
        //         axios.get('/',{
        //             params:{
        //                 appkey:'6c5d248b4ff95b72'
        //             }
        //         }).then(res=>{
        //             console.log('res==>',res)
        //             const data=res.data
        //             commit('SET_USER_INFO',data)
        //             resolve(data)
        //         }).catch(err=>{
        //             console.log('catch==>',err);
        //             reject(err)
        //         })
        //     })
        // }
    }
}
export default user