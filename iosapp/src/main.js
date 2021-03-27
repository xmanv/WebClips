
import Vue from 'vue'
import App from './App'
import router from './router'
import './resource/jquery.min.js'
import './resource/qrcode.min.js'
import './resource/Flexible.js'
import './resource/Flexible.css'
import './resource/index.css'
import './resource/apk.css'
{/* <script src="resource/jquery.min.js"></script>
<script src="resource/qrcode.min.js"></script>
<script src="resource/Flexible.js"></script>
<link href="resource/Flexible.css" rel="stylesheet">
<link href="resource/index.css" rel="stylesheet">
<link href="resource/apk.css" rel="stylesheet"> */}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
