import Vue from 'vue'
import { Button, Form, FormItem, Input, MessageBox, Message, Container, Header, Aside, Main, Footer, Menu, Submenu, MenuItem, Row, Col, MenuItemGroup, Breadcrumb, BreadcrumbItem, Card, Table, TableColumn, Switch, Tooltip, Pagination, Dialog } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message