import * as uni from './api/index'
import { UniServiceJSBridge } from './bridge'
import { registerApp as __registerApp, getApp } from './framework/app'
import { definePage as __definePage } from '@dcloudio/uni-app-plus/service/framework/page'
import { getCurrentPages } from '@dcloudio/uni-app-plus/service/framework/page'

export default {
  uni,
  getApp,
  getCurrentPages,
  __definePage,
  __registerApp,
  UniServiceJSBridge,
}
