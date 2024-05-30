<template>
  <div>
    <div class="header">
        <slot name="header"></slot>
    </div>

    <main>
        <slot name="main"></slot>
    </main>
    <footer>
      <slot>默认底部内容</slot>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>