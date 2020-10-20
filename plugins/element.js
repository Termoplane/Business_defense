import Vue from 'vue'

import 'element-ui/packages/theme-chalk/src/message-box.scss'
import 'element-ui/packages/theme-chalk/src/message.scss'
import 'element-ui/packages/theme-chalk/src/notification.scss'
import 'element-ui/packages/theme-chalk/src/icon.scss'
import Message from 'element-ui/lib/message'
import MessageBox from 'element-ui/lib/message-box'
import Notification from 'element-ui/lib/notification'

Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
