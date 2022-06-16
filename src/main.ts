import "@/assets/icons/iconfont/iconfont.js";
import RenDeptTree from "@/components/ren-dept-tree";
import RenProcessDetail from "@/components/ren-process-detail";
import RenProcessRunning from "@/components/ren-process-running";
import RenRadioGroup from "@/components/ren-radio-group";
import RenRegionTree from "@/components/ren-region-tree";
import RenSelect from "@/components/ren-select";
import ElementPlus, { ElMessageBoxShortcutMethod, Message } from "element-plus";
import "element-plus/theme-chalk/display.css";
import "element-plus/theme-chalk/index.css";
import Sortable from "sortablejs";
import "vite-plugin-svg-icons/register";
import { createApp } from "vue";
import { Store } from "vuex";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
import "xe-utils";
import App from "./App.vue";
import { initI18n } from "./i18n";
import { IObject } from "./types/interface";
import router from "./router";
import store from "./store";
import * as ElementPlusIcons from "@element-plus/icons-vue";

//bug:https://www.zhihu.com/question/437009843
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    /**
     * vuex存储库
     */
    $store: Store<IObject>;
    /**
     * ref引用
     */
    $refs: any;
    /**
     * element-plus消息方法
     */
    $message: Message;
    /**
     * element-plus弹窗确认
     */
    $confirm: ElMessageBoxShortcutMethod;
    /**
     * element-plus弹窗
     */
    $alert: ElMessageBoxShortcutMethod;
    /**
     * vue3 v-model绑定默认字段名称
     */
    modelValue: any;
    /**
     * sortablejs组件
     */
    sortable: Sortable;
  }
}
VXETable.setup({
  zIndex: 3000,
  select: {
    transfer: true
  }
});
const app = createApp(App);

// elm icon图标
Object.keys(ElementPlusIcons).forEach((iconName) => {
  app.component(iconName, ElementPlusIcons[iconName as keyof typeof ElementPlusIcons]);
});

app
  .use(store)
  .use(router)
  .use(RenRadioGroup)
  .use(RenSelect)
  .use(RenDeptTree)
  .use(RenRegionTree)
  .use(RenProcessRunning)
  .use(RenProcessDetail)
  .use(ElementPlus, { size: "default" })
  .use(VXETable)
  .use(initI18n)
  .mount("#app");
