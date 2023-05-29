<template>
  <div>
    <div ref="baseMap" class="baseMap"></div>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader'

//定义配置项
const option = {
  url: 'https://js.arcgis.com/4.20/', //官网地址
  logo: false
}

export default {
  name: 'mapCorrect',
  data() {
    return {
      map: '',
      view: ''
    }
  },
  mounted() {
    const this_ = this
    loadModules(
      [
        // "esri/views/SceneView",
        'esri/geometry/geometryEngine',
        'esri/tasks/support/Query',
        'esri/widgets/Sketch/SketchViewModel',
        'esri/symbols/SimpleMarkerSymbol',
        'esri/symbols/SimpleFillSymbol',
        'esri/symbols/SimpleLineSymbol',
        'esri/widgets/Sketch',
        'esri/Map',
        'esri/config',
        'esri/request',
        'esri/Color',
        'esri/layers/BaseTileLayer',
        'esri/views/MapView',
        'esri/layers/GeoJSONLayer',
        'esri/layers/GraphicsLayer',
        'esri/layers/MapImageLayer',
        'esri/views/2d/layers/BaseLayerView2D',
        'esri/layers/Layer',
        'esri/layers/support/TileInfo',
        'esri/symbols/PictureFillSymbol',
        'esri/Graphic',
        'esri/Basemap',
        'esri/layers/VectorTileLayer',
        'esri/layers/TileLayer',
        'esri/widgets/BasemapToggle',
        'dojo/domReady!'
      ],
        
    )
      .then(
        ([
          geometryEngine,
          Query,
          SketchViewModel,
          SimpleMarkerSymbol,
          SimpleFillSymbol,
          SimpleLineSymbol,
          Sketch,
          Map,
          esriConfig,
          esriRequest,
          Color,
          BaseTileLayer,
          MapView,
          // SceneView,
          GeoJSONLayer,
          GraphicsLayer,
          MapImageLayer,
          BaseLayerView2D,
          Basemap,
          VectorTileLayer,
          TileLayer,
          Layer,
          TileInfo,
          PictureFillSymbol,
          BasemapToggle,
          Graphic
        ]) => {
          this.map = new Map({
            basemap: 'streets' // 底图类型，详见BaseMap类
          })
          this.view = new MapView({
            container: this.$refs.baseMap, // 视图的容器
            map: this.map, // Map的实例放入视图中
            center: [118.805, 32.055], // 初始显示的地图中心点，经纬度
            zoom: 10 // 当前地图缩放等级
          })
          const vectorTileLayer = new VectorTileLayer({
            portalItem: {
              id: '6976148c11bd497d8624206f9ee03e30' // Forest and Parks Canvas
            },
            opacity: 0.75
          })
        }
      )
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {}
}
</script>

<style scoped>
@import 'https://js.arcgis.com/4.20/esri/themes/light/main.css';

.baseMap {
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>


