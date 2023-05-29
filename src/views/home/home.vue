<template>
    <div class="home">
        <div class="home-list">

            <router-view>

            </router-view>
            <div class="wrap" ref="wrap">
                <div class="inner">
                    <div class="home-item" v-for="(item,index) in 100" :key='`item_i_${index}`'>
                        <div class="name">{{index}}松江</div>
                        <div class="user">和</div>
                        <div class="type">木马</div>
                        <img v-lazy="img">
                    </div>
                </div>
            </div>
            <img v-lazy="img">
            <div>{{parentMessage}}</div>
            <ElInput :show.sync="inputVis" :message.sync="parentMessage"></ElInput>
            <router-view name="navList"></router-view>
            首页
            <hr>
            <div>watch的深度监听</div>
            <div>{{message.info.name}}</div>
            <button @click="scrollTop">滚到顶部</button>
            <button @click="change">改变</button>
            <div>{{userInfo.name}}{{isLogin?'已登录':'未登录'}}</div>
            <button @click="getData">获取数据</button>

        </div>
    </div>
</template>

<script>
    import ElInput from '@/components/Input'
    import img from '@/assets/images/404.png'
    import { mapGetters, mapState } from 'vuex'
    import axios from 'axios'
    export default {
        name: '',
        data() {
            return {
                parentMessage: 'Hello',
                message: {
                    info: {
                        name: '松江'
                    }
                },
                img,
                inputVis: true

            }
        },
        created() {
            console.log(this.$store)
            console.log(this.userInfo)
        },
        computed: {
            ...mapGetters(['isLogin']),
            ...mapState({
                userInfo: state => state.user.userInfo
            })
        },
        watch: {
            message: {
                handler(newVal, oldVal) {
                    console.log(newVal, oldVal)
                },
                deep: true,
                immediate: true
            }
        },
        components: {
            ElInput
        },
        methods: {
            scrollTop() {
                this.$refs.wrap.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            },
            change() {
                this.message.info.name = '李逵'
            },
            getData() {
                // axios.get('/data/screen.json').then(res=>{
                //     console.log(res)
                // })
                var { bootOptionScreenId, ...params } = {
                    "bootOptionScreenId": 1,
                    "screenId": 3,
                    "display3d": 99,
                    "gsync": 2,
                    "hdmi": 2,
                    "screenHz": 20,
                    "vertical": 99,
                    "zoom": 175,
                    "gpu": 4
                }
                console.log(params)
            }
        },
    }
</script>
<style lang="less" scoped>
    .wrap {
        width: 400px;
        // background: #f2f22f;
        height: 200px;
        overflow-y: scroll;

        .inner {
            // height: 3000px;
            // background: blue;
        }
    }
</style>