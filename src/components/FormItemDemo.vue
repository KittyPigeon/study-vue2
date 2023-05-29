<script>
export default {
  name: 'FormItemDemo',
  props: {
    itemConfig: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      target: this.itemConfig
    }
  },
  render(h) {
    const self = this
    return h(
      'el-form-item',
      {
        props: {
          label: this.itemConfig.label
        }
      },
      [
        h(
          this.itemConfig.type,
          {
            props: {
              value: this.itemConfig.value
            }
          },
          this.itemConfig.optionData &&
            this.itemConfig.optionData.map((option) => {
              // 这里只是 本demo 处理 el-select 的 option 数据，实际大家根据具体业务来实现即可
              return h('el-option', { props: { label: option.label, value: option.value } })
            })
        )
      ]
    )
  }
}
</script>
