<template>
    <div class="input" v-if="show">
        <input v-bind:value="message" v-on:input="$emit('update:message', $event.target.value)">
        <!--  -->
        <!-- <input v-model:value.sync="message"> -->
        <button @click="close">关闭</button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                msg: this.message,
            }
        },
        props: ['message', 'show'],
        methods: {
            close() {
                this.$emit('update:show', false)
            }
        },
    }
</script>
<style lang="less" scoped>
</style>