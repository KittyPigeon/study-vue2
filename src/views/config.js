export default [
  {
    type: 'el-input',
    label: '活动名称',
    formKey: 'name',
    value: '', // 默认值为空字符串
    options: {
      vIf: [
        // 表示：当 form.area === 'area1'，才显示
        { relationKey: 'area', value: 'area1' }
      ]
    }
  },
  {
    type: 'el-select',
    label: '活动区域',
    formKey: 'area',
    value: 'area1',
    options: {
      multiple: true
    },
    optionData: [
      // 这里模拟去后端拉回数据
      { label: '区域1', value: 'area1' },
      { label: '区域2', value: 'area2' }
    ]
  }
]
