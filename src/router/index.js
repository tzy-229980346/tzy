import {createWebHashHistory,createRouter} from 'vue-router';
import DownLoad from '@/pages/DownLoad.vue';
import Find from '@/pages/Find/Find.vue';
import Friend from '@/pages/Friend.vue';
import My from '@/pages/My.vue';
import Album from '@/pages/Find/child/Album.vue';
import Recommend from '@/pages/Find/child/Recommend.vue';
import Toplist from '@/pages/Find/child/Toplist.vue';
import Artist from '@/pages/Find/child/Artist.vue';
import Djradio from '@/pages/Find/child/Djradio.vue';
import Playlist from '@/pages/Find/child/Playlist.vue';
const routes=[
    {
        path:'/',
        component:Find,
        redirect:'/find'
    },
    {
        path:'/find',
        component:Find,
        redirect:'/recommend',
        children:[{
            path:'/album',
            component:Album
        },
        {
            path:'/recommend',
            component:Recommend
        },
        {
            path:'/toplist',
            component:Toplist
        },
        {
            path:'/artist',
            component:Artist
        },
        {
            path:'/djradio',
            component:Djradio
        },
        {
            path:'/playlist',
            component:Playlist
        }
        ]
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/friend',
        component:Friend
    },
    {
        path:'/download',
        component:DownLoad
    }
]
const router =createRouter({
    history:createWebHashHistory(),
    routes
    })
    export default router;