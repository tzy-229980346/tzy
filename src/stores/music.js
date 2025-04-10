import {defineStore} from 'pinia';
export const usecounterstore = defineStore('music',{
    state:()=>({
        playmusic:''
    }),
    actions:{
        change(newmusic){
           this.playmusic=newmusic;
        }
        
    }

})