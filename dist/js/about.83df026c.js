"use strict";(self["webpackChunkTodoList"]=self["webpackChunkTodoList"]||[]).push([[443],{37096:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(68309),n(83710);var o=n(73396),i=n(87139),u=n(49242),r=function(e){return(0,o.dD)("data-v-f59ad688"),e=e(),(0,o.Cn)(),e},s={key:0,class:"contentDiv"},l={class:"noContentDiv"},a=r((function(){return(0,o._)("p",null,"回收站中没有任何记事",-1)})),c={key:1},f=(0,o.Uk)("清空回收站"),d={style:{padding:"14px"}},m={class:"header"},g={class:"content"},p={class:"tag"},h={class:"bottom"};function w(e,t,n,r,w,T){var v=(0,o.up)("delete"),D=(0,o.up)("el-icon"),_=(0,o.up)("el-button"),y=(0,o.up)("el-tag"),k=(0,o.up)("clock"),b=(0,o.up)("delete-filled"),S=(0,o.up)("el-popover"),V=(0,o.up)("sell"),C=(0,o.up)("el-card"),W=(0,o.up)("el-col"),L=(0,o.up)("el-row");return T.isNull?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",l,[(0,o.Wm)(D,{style:{"font-size":"50px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(v)]})),_:1}),a])])):((0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(_,{type:"text",style:{float:"right"},onClick:T.clearAllDeletedTo},{default:(0,o.w5)((function(){return[f]})),_:1},8,["onClick"]),(0,o.Wm)(L,null,{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(T.deletedToDoList,(function(e,n){return(0,o.wg)(),(0,o.j4)(W,{key:e,span:6,offset:n>0?2:0,onMouseenter:function(e){return T.getFocus(e,n)},onMouseleave:t[0]||(t[0]=function(e){return T.removeFocus(e)})},{default:(0,o.w5)((function(){return[(0,o.Wm)(C,{"body-style":{padding:"0px"},shadow:"hover"},{default:(0,o.w5)((function(){return[(0,o._)("div",d,[(0,o._)("div",m,[(0,o._)("h2",null,(0,i.zw)(e.title),1)]),(0,o._)("div",g,(0,i.zw)(e.content),1),(0,o._)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.toDoTags,(function(e){return(0,o.wg)(),(0,o.j4)(y,{key:e.name,type:"",class:"mx-1",size:"small"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,i.zw)(e.name),1)]})),_:2},1024)})),128))]),(0,o._)("div",h,[(0,o._)("div",null,[(0,o._)("p",{class:(0,i.C_)(["todoTime",new Date(e.toDoTime).getTime()<(new Date).getTime()?"line-through":""])},(0,i.zw)(e.toDoTime),3),""!==e.toDoTime&&null!==e.toDoTime?((0,o.wg)(),(0,o.j4)(D,{key:0,class:"alert-icon"},{default:(0,o.w5)((function(){return[(0,o.Wm)(k)]})),_:1})):(0,o.kq)("",!0)]),(0,o.wy)((0,o._)("div",null,[(0,o.Wm)(S,{placement:"bottom-start",title:"",width:150,trigger:"hover",content:"永久删除"},{reference:(0,o.w5)((function(){return[(0,o.Wm)(_,{class:"button-icon",size:"small",circle:"",onClick:function(e){return T.foreverDelete(n)}},{default:(0,o.w5)((function(){return[(0,o.Wm)(D,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(b)]})),_:1})]})),_:2},1032,["onClick"])]})),_:2},1024),(0,o.Wm)(S,{placement:"bottom-start",title:"",width:150,trigger:"hover",content:"还原"},{reference:(0,o.w5)((function(){return[(0,o.Wm)(_,{class:"button-icon",size:"small",circle:"",onClick:function(e){return T.reset(n)}},{default:(0,o.w5)((function(){return[(0,o.Wm)(D,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(V)]})),_:1})]})),_:2},1032,["onClick"])]})),_:2},1024)],512),[[u.F8,w.isShowBottom&&w.currentLi===n]])])])]})),_:2},1024)]})),_:2},1032,["offset","onMouseenter"])})),128))]})),_:1})]))}var T=n(24239),v=n(85574),D=n(61897);const _={name:"DeletedToDoView",data:function(){return{isShowBottom:!1,currentLi:0}},store:T.Z,computed:{isNull:function(){return 0===T.Z.state.deletedToDoLists.length},deletedToDoList:function(){return T.Z.state.deletedToDoLists}},methods:{getFocus:function(e,t){this.isShowBottom=!0,this.currentLi=t},removeFocus:function(){this.isShowBottom=!1,this.currentLi=null},reset:function(e){T.Z.commit("resetToDoFromRush",{index:e}),(0,v.z8)({message:"记事已还原",center:!0,type:"success"})},foreverDelete:function(e){T.Z.commit("foreverDelete",{index:e}),(0,v.z8)({message:"记事已永久删除",center:!0,type:"success"})},clearAllDeletedTo:function(){D.T.confirm("要清空回收站吗？此操作会永久删除回收站中的所有记事","提示",{confirmButtonText:"清空回收站",cancelButtonText:"取消",type:"info"}).then((function(){T.Z.commit("clearAllDelete"),(0,v.z8)({type:"success",message:"回收站已清空"})}))["catch"]((function(){(0,v.z8)({type:"info",message:"取消清空"})}))}}};var y=n(40089);const k=(0,y.Z)(_,[["render",w],["__scopeId","data-v-f59ad688"]]),b=k},50300:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(73396),i=n(49242),u=function(e){return(0,o.dD)("data-v-ad74f882"),e=e(),(0,o.Cn)(),e},r={class:"login"},s=u((function(){return(0,o._)("h1",null,"TodoList登录",-1)})),l={class:"",action:"",method:""},a=u((function(){return(0,o._)("label",{class:"username"},"账号",-1)})),c=u((function(){return(0,o._)("label",{class:"password"},"密码",-1)})),f=(0,o.Uk)("还没有账号？注册一下");function d(e,t,n,u,d,m){var g=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",r,[s,(0,o._)("form",l,[(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"text",class:"username_input",required:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return d.username=e})},null,512),[[i.nr,d.username]]),a]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"password",class:"password_input",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return d.password=e})},null,512),[[i.nr,d.password]]),c]),(0,o._)("button",{class:"submit",value:"登录",onClick:t[2]||(t[2]=function(){return m.login&&m.login.apply(m,arguments)})},"登录"),(0,o.Wm)(g,{to:"/register",class:"link","active-class":"black"},{default:(0,o.w5)((function(){return[f]})),_:1})])])}const m={data:function(){return{username:"",password:""}},methods:{login:function(){var e=localStorage.getItem("username"),t=localStorage.getItem("password");this.username===e&&this.password===t?this.$router.push("/todo"):alert("账户或者密码不正确")}}};var g=n(40089);const p=(0,g.Z)(m,[["render",d],["__scopeId","data-v-ad74f882"]]),h=p},15508:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});n(68309),n(83710);var o=n(73396),i=n(87139),u=n(49242),r=function(e){return(0,o.dD)("data-v-6117ac9c"),e=e(),(0,o.Cn)(),e},s={key:0,class:"contentDiv"},l={class:"noContentDiv"},a=r((function(){return(0,o._)("p",null,"内含提醒时间的记事会显示在此处",-1)})),c={key:1},f={style:{padding:"14px"}},d={class:"header",style:{overflow:"hidden"}},m={style:{float:"left"}},g={class:"content"},p={class:"tag"},h={class:"bottom"},w={key:0};function T(e,t,n,r,T,v){var D=(0,o.up)("bell"),_=(0,o.up)("el-icon"),y=(0,o.up)("finished"),k=(0,o.up)("el-button"),b=(0,o.up)("el-tag"),S=(0,o.up)("plus"),V=(0,o.up)("el-popover"),C=(0,o.up)("el-option"),W=(0,o.up)("el-select"),L=(0,o.up)("edit-pen"),z=(0,o.up)("clock"),I=(0,o.up)("el-date-picker"),x=(0,o.up)("el-card"),F=(0,o.up)("el-col"),N=(0,o.up)("el-row");return v.isNull?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",l,[(0,o.Wm)(_,{style:{"font-size":"50px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(D)]})),_:1}),a])])):((0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(N,null,{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(v.notifyToDoLosts,(function(n,r){return(0,o.wg)(),(0,o.j4)(F,{key:n,span:6,class:"el-col-style",offset:r>0?2:0,onMouseenter:function(e){return v.getFocus(e,r)},onMouseleave:t[2]||(t[2]=function(e){return v.removeFocus(e)})},{default:(0,o.w5)((function(){return[(0,o.Wm)(x,{"body-style":{padding:"0px"},shadow:"hover"},{default:(0,o.w5)((function(){return[(0,o._)("div",f,[(0,o._)("div",d,[(0,o._)("h2",m,(0,i.zw)(n.title),1),(0,o.wy)((0,o.Wm)(k,{circle:"",style:{float:"right",border:"none"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(_,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(y)]})),_:1})]})),_:2},1536),[[u.F8,!0===n.isCompleted]])]),(0,o._)("div",g,(0,i.zw)(n.content),1),(0,o._)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.toDoTags,(function(e){return(0,o.wg)(),(0,o.j4)(b,{key:e.name,type:"",class:"mx-1",size:"small",closable:"","disable-transitions":!1,onClose:function(t){return v.handleClose(e.name)}},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,i.zw)(e.name),1)]})),_:2},1032,["onClose"])})),128)),!T.selectVisible[r]&&T.isShowFooter&&T.currentLi===r?((0,o.wg)(),(0,o.j4)(V,{key:0,placement:"bottom-start",title:"",width:150,trigger:"hover",content:"增加标签"},{reference:(0,o.w5)((function(){return[(0,o.Wm)(k,{size:"small",style:{"margin-top":"2px",border:"none"},onClick:function(e){return T.selectVisible[r]=!0}},{default:(0,o.w5)((function(){return[(0,o.Wm)(_,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(S)]})),_:1})]})),_:2},1032,["onClick"])]})),_:2},1024)):(0,o.kq)("",!0),T.selectVisible[r]?((0,o.wg)(),(0,o.j4)(W,{key:1,modelValue:T.tagValue,"onUpdate:modelValue":t[0]||(t[0]=function(e){return T.tagValue=e}),class:"m-2 tagSelect",placeholder:"Select a tag",size:"small",onChange:function(e){return v.change(T.tagValue,r)},filterable:""},{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(v.toDoTagsOptions,(function(e){return(0,o.wg)(),(0,o.j4)(C,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onChange"])):(0,o.kq)("",!0)]),(0,o._)("div",h,[(0,o._)("div",null,[T.isShowDatePicker[r]?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(V,{placement:"bottom-start",title:"",width:150,trigger:"hover",content:"修改时间"},{reference:(0,o.w5)((function(){return[(0,o.wy)((0,o.Wm)(k,{circle:"",style:{border:"none","margin-top":"-3px"},size:"small",class:"edit-todoTime"},{default:(0,o.w5)((function(){return[(0,o.Wm)(_,{color:"gray",onClick:function(e){return v.editToDoTime(r)}},{default:(0,o.w5)((function(){return[(0,o.Wm)(L)]})),_:2},1032,["onClick"])]})),_:2},1536),[[u.F8,T.isShowFooter&&T.currentLi===r]])]})),_:2},1024),(0,o._)("p",{class:(0,i.C_)(["todoTime",new Date(n.toDoTime).getTime()<(new Date).getTime()?"line-through":""])},(0,i.zw)(n.toDoTime),3),(0,o.Wm)(_,{class:"alert-icon"},{default:(0,o.w5)((function(){return[(0,o.Wm)(z)]})),_:1})])),T.isShowDatePicker[r]?((0,o.wg)(),(0,o.j4)(I,{key:1,modelValue:T.toDoTime,"onUpdate:modelValue":t[1]||(t[1]=function(e){return T.toDoTime=e}),type:"datetime",shortcuts:T.shortcuts,"value-format":"YYYY-MM-DD hh:mm:ss",size:"small",clearable:"",onChange:function(e){return v.timeChange(T.toDoTime,r)}},null,8,["modelValue","shortcuts","onChange"])):(0,o.kq)("",!0)]),(0,o.wy)((0,o._)("div",null,null,512),[[u.F8,e.isShowBottom&&T.currentLi===r]])])])]})),_:2},1024)]})),_:2},1032,["offset","onMouseenter"])})),128))]})),_:1})]))}n(89554),n(41539),n(54747),n(40561),n(82772);var v=n(24239),D=n(85574),_=n(61897);const y={name:"NotifyToDoView",data:function(){return{currentLi:0,isShowFooter:!1,selectVisible:[],isShowDatePicker:[],tagValue:"",toDoTime:"",shortcuts:[{text:"今天",value:new Date},{text:"昨天",value:function(){var e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:"一周前",value:function(){var e=new Date;return e.setTime(e.getTime()-6048e5),e}}]}},store:v.Z,computed:{notifyToDoLosts:function(){return v.Z.getters.notifyToDoLosts},isNull:function(){return 0===this.notifyToDoLosts.length},toDoTagsOptions:function(){return v.Z.state.toDoTagsOptions}},methods:{getFocus:function(e,t){this.currentLi=t,this.isShowFooter=!0},removeFocus:function(e){this.currentLi=null,this.isShowFooter=!1},updateToDoListTag:function(e,t){this.notifyToDoLosts[e].toDoTags.push(t)},handleClose:function(e){var t=this;this.notifyToDoLosts[this.currentLi].toDoTags.forEach((function(n){e===n.name&&t.notifyToDoLosts[t.currentLi].toDoTags.splice(t.notifyToDoLosts[t.currentLi].toDoTags.indexOf(n),1)}))},change:function(e,t){var n=this,o=!1;this.notifyToDoLosts[t].toDoTags.forEach((function(t){e===t.name&&(o=!0,(0,D.z8)({type:"error",message:"不能新增已有的标签"}))})),o||_.T.confirm("当前选择新增标签为:"+e+"，确认新增?","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"info"}).then((function(){var o={name:e};n.updateToDoListTag(t,o),n.selectVisible[t]=!1,(0,D.z8)({type:"success",message:"新增标签成功"})}))["catch"]((function(){n.selectVisible[t]=!1,(0,D.z8)({type:"error",message:"取消新增"})}))},editToDoTime:function(e){this.isShowDatePicker[e]=!0},timeChange:function(e,t){this.notifyToDoLosts[t].toDoTime=e,this.isShowDatePicker[t]=!1,""===e||null===e?(0,D.z8)({message:"已从提醒中移除",center:!0,type:"success"}):(0,D.z8)({message:"修改提醒时间成功",center:!0,type:"success"})}},mounted:function(){var e=this;v.Z.state.toDoLists.forEach((function(t){e.selectVisible.push(!1),e.isShowDatePicker.push(!1)}))}};var k=n(40089);const b=(0,k.Z)(y,[["render",T],["__scopeId","data-v-6117ac9c"]]),S=b},95170:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var o=n(73396),i=n(49242),u=function(e){return(0,o.dD)("data-v-4300c35d"),e=e(),(0,o.Cn)(),e},r={class:"register"},s=u((function(){return(0,o._)("h1",null,"TodoList注册",-1)})),l=u((function(){return(0,o._)("label",{class:"username"},"账号",-1)})),a=u((function(){return(0,o._)("label",{class:"password"},"密码",-1)}));function c(e,t,n,u,c,f){return(0,o.wg)(),(0,o.iD)("div",r,[s,(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"text",class:"username_input",required:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.username=e})},null,512),[[i.nr,c.username]]),l]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"password",class:"password_input",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.password=e})},null,512),[[i.nr,c.password]]),a]),(0,o._)("button",{class:"submit",value:"注册",onClick:t[2]||(t[2]=function(){return f.register&&f.register.apply(f,arguments)})},"注册")])}n(73210),n(32564);const f={data:function(){return{username:"",password:""}},methods:{register:function(){var e=this;""===this.username.trim()||""===this.password.trim()?alert("账号或密码不能为空"):(localStorage.setItem("username",this.username),localStorage.setItem("password",this.password),alert("注册成功"),setTimeout((function(){e.$router.push("/login")}),1e3))}}};var d=n(40089);const m=(0,d.Z)(f,[["render",c],["__scopeId","data-v-4300c35d"]]),g=m},5925:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});n(68309),n(83710);var o=n(73396),i=n(49242),u=n(87139),r=function(e){return(0,o.dD)("data-v-7df92014"),e=e(),(0,o.Cn)(),e},s={key:0,class:"contentDiv"},l={class:"noContentDiv"},a=r((function(){return(0,o._)("p",null,"暂无相关标签的记事",-1)})),c={key:1},f={style:{padding:"14px"}},d={class:"header",style:{overflow:"hidden"}},m={style:{float:"left"}},g={class:"content"},p={class:"tag"},h={class:"bottom"},w={key:0};function T(e,t,n,r,T,v){var D=(0,o.up)("collection-tag"),_=(0,o.up)("el-icon"),y=(0,o.up)("finished"),k=(0,o.up)("el-button"),b=(0,o.up)("el-tag"),S=(0,o.up)("plus"),V=(0,o.up)("el-popover"),C=(0,o.up)("el-option"),W=(0,o.up)("el-select"),L=(0,o.up)("edit-pen"),z=(0,o.up)("clock"),I=(0,o.up)("el-date-picker"),x=(0,o.up)("el-card"),F=(0,o.up)("el-col"),N=(0,o.up)("el-row");return(0,o.wg)(),(0,o.j4)(i.uT,null,{default:(0,o.w5)((function(){return[v.isNull?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",l,[(0,o.Wm)(_,{style:{"font-size":"50px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(D)]})),_:1}),a])])):((0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(N,null,{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(v.filterTagToDoLists,(function(n,r){return(0,o.wg)(),(0,o.j4)(F,{key:n,class:"el-col-style",span:6,offset:r>0?2:0,onMouseenter:function(e){return v.getFocus(e,r)},onMouseleave:t[2]||(t[2]=function(e){return v.removeFocus(e)})},{default:(0,o.w5)((function(){return[(0,o.Wm)(x,{"body-style":{padding:"0px"},shadow:"hover"},{default:(0,o.w5)((function(){return[(0,o._)("div",f,[(0,o._)("div",d,[(0,o._)("h2",m,(0,u.zw)(n.title),1),(0,o.wy)((0,o.Wm)(k,{circle:"",style:{float:"right",border:"none"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(_,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(y)]})),_:1})]})),_:2},1536),[[i.F8,!0===n.isCompleted]])]),(0,o._)("div",g,(0,u.zw)(n.content),1),(0,o._)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.toDoTags,(function(e){return(0,o.wg)(),(0,o.j4)(b,{key:e.name,type:"",class:"mx-1",size:"small",closable:"","disable-transitions":!1,onClose:function(t){return v.handleClose(e.name)}},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,u.zw)(e.name),1)]})),_:2},1032,["onClose"])})),128)),!T.selectVisible[r]&&T.isShowFooter&&T.currentLi===r?((0,o.wg)(),(0,o.j4)(V,{key:0,placement:"bottom-start",title:"",width:150,trigger:"hover",content:"增加标签"},{reference:(0,o.w5)((function(){return[(0,o.Wm)(k,{size:"small",style:{"margin-left":"10px","margin-top":"2px",border:"none"},onClick:function(e){return T.selectVisible[r]=!0}},{default:(0,o.w5)((function(){return[(0,o.Wm)(_,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(S)]})),_:1})]})),_:2},1032,["onClick"])]})),_:2},1024)):(0,o.kq)("",!0),T.selectVisible[r]?((0,o.wg)(),(0,o.j4)(W,{key:1,modelValue:T.tagValue,"onUpdate:modelValue":t[0]||(t[0]=function(e){return T.tagValue=e}),class:"m-2 tagSelect",placeholder:"选择标签",size:"small",onChange:function(e){return v.change(T.tagValue,r)},filterable:""},{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(v.toDoTagsOptions,(function(e){return(0,o.wg)(),(0,o.j4)(C,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onChange"])):(0,o.kq)("",!0)]),(0,o._)("div",h,[(0,o._)("div",null,[T.isShowDatePicker[r]?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(V,{placement:"bottom-start",title:"",width:150,trigger:"hover",content:"修改时间"},{reference:(0,o.w5)((function(){return[(0,o.wy)((0,o.Wm)(k,{circle:"",class:"edit-todoTime",size:"small","auto-insert-space":"",style:{border:"none","margin-top":"-3px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(_,{color:"gray",onClick:function(e){return v.editToDoTime(r)}},{default:(0,o.w5)((function(){return[(0,o.Wm)(L)]})),_:2},1032,["onClick"])]})),_:2},1536),[[i.F8,T.isShowFooter&&T.currentLi===r]])]})),_:2},1024),(0,o._)("p",{class:(0,u.C_)(["todoTime",new Date(n.toDoTime).getTime()<(new Date).getTime()?"line-through":""])},(0,u.zw)(n.toDoTime),3),""!==n.toDoTime&&null!==n.toDoTime?((0,o.wg)(),(0,o.j4)(_,{key:0,class:"alert-icon"},{default:(0,o.w5)((function(){return[(0,o.Wm)(z)]})),_:1})):(0,o.kq)("",!0)])),T.isShowDatePicker[r]?((0,o.wg)(),(0,o.j4)(I,{key:1,modelValue:T.toDoTime,"onUpdate:modelValue":t[1]||(t[1]=function(e){return T.toDoTime=e}),type:"datetime",shortcuts:T.shortcuts,"value-format":"YYYY-MM-DD hh:mm:ss",size:"small",onChange:function(e){return v.timeChange(T.toDoTime,r)}},null,8,["modelValue","shortcuts","onChange"])):(0,o.kq)("",!0)]),(0,o.wy)((0,o._)("div",null,null,512),[[i.F8,e.isShowBottom&&T.currentLi===r]])])])]})),_:2},1024)]})),_:2},1032,["offset","onMouseenter"])})),128))]})),_:1})]))]})),_:1})}n(89554),n(41539),n(54747),n(40561),n(82772);var v=n(24239),D=n(85574),_=n(61897);const y={name:"TagFilterView",data:function(){return{currentLi:0,isShowFooter:!1,selectVisible:[],isShowDatePicker:[],tagValue:"",toDoTime:"",shortcuts:[{text:"今天",value:new Date},{text:"昨天",value:function(){var e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:"一周前",value:function(){var e=new Date;return e.setTime(e.getTime()-6048e5),e}}]}},store:v.Z,computed:{filterTagToDoLists:function(){return v.Z.getters.getClickTagToDoList(this.currentFilterTagName)},isNull:function(){return 0===this.filterTagToDoLists.length},toDoTagsOptions:function(){return v.Z.state.toDoTagsOptions},currentFilterTagName:function(){return v.Z.state.currentFilterTagName}},methods:{getFocus:function(e,t){this.currentLi=t,this.isShowFooter=!0},removeFocus:function(e){this.currentLi=0,this.isShowFooter=!1},updateToDoListTag:function(e,t){this.filterTagToDoLists[e].toDoTags.push(t)},handleClose:function(e){var t=this;this.filterTagToDoLists[this.currentLi].toDoTags.forEach((function(n){e===n.name&&t.filterTagToDoLists[t.currentLi].toDoTags.splice(t.filterTagToDoLists[t.currentLi].toDoTags.indexOf(n),1)}))},change:function(e,t){var n=this,o=!1;this.filterTagToDoLists[t].toDoTags.forEach((function(t){e===t.name&&(o=!0,(0,D.z8)({type:"error",message:"不能新增已有的标签"}))})),o||_.T.confirm("当前选择新增标签为:"+e+"，确认新增?","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"info"}).then((function(){var o={name:e};n.updateToDoListTag(t,o),n.selectVisible[t]=!1,(0,D.z8)({type:"success",message:"新增标签成功"})}))["catch"]((function(){n.selectVisible[t]=!1,(0,D.z8)({type:"error",message:"取消新增"})}))},editToDoTime:function(e){this.isShowDatePicker[e]=!0},timeChange:function(e,t){this.filterTagToDoLists[t].toDoTime=e,this.isShowDatePicker[t]=!1,""===e||null===e?(0,D.z8)({message:"已从提醒中移除",center:!0,type:"success"}):(0,D.z8)({message:"修改提醒时间成功",center:!0,type:"success"})}},mounted:function(){var e=this;v.Z.state.toDoLists.forEach((function(t){e.selectVisible.push(!1),e.isShowDatePicker.push(!1)}))}};var k=n(40089);const b=(0,k.Z)(y,[["render",T],["__scopeId","data-v-7df92014"]]),S=b},34075:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var o=n(73396),i=function(e){return(0,o.dD)("data-v-602aedbc"),e=e(),(0,o.Cn)(),e},u=i((function(){return(0,o._)("div",{class:"tagView"},null,-1)}));function r(e,t,n,i,r,s){var l=(0,o.up)("TagSetting");return(0,o.wg)(),(0,o.iD)("div",null,[u,(0,o.Wm)(l,{isShowTagSetting:s.isShowTagSetting},null,8,["isShowTagSetting"])])}var s=n(87139),l=function(e){return(0,o.dD)("data-v-2927e33c"),e=e(),(0,o.Cn)(),e},a={class:"card-header"},c=l((function(){return(0,o._)("span",null,"取消",-1)})),f=(0,o.Uk)("创建新标签"),d=l((function(){return(0,o._)("span",null,"创建标签",-1)})),m=l((function(){return(0,o._)("span",null,"删除标签",-1)})),g={key:1,class:"tagName"},p=l((function(){return(0,o._)("span",null,"重命名标签",-1)})),h={class:"dialog-footer"},w=(0,o.Uk)("关闭");function T(e,t,n,i,u,r){var l=(0,o.up)("plus"),T=(0,o.up)("el-icon"),v=(0,o.up)("el-button"),D=(0,o.up)("close"),_=(0,o.up)("el-tooltip"),y=(0,o.up)("el-input"),k=(0,o.up)("check"),b=(0,o.up)("price-tag"),S=(0,o.up)("delete"),V=(0,o.up)("EditPen"),C=(0,o.up)("el-card"),W=(0,o.up)("el-dialog");return(0,o.wg)(),(0,o.j4)(W,{modelValue:u.tagSettingDialogVisible,"onUpdate:modelValue":t[13]||(t[13]=function(e){return u.tagSettingDialogVisible=e}),title:"修改标签",top:"8vh",width:"30%","destroy-on-close":""},{footer:(0,o.w5)((function(){return[(0,o._)("div",h,[(0,o.Wm)(v,{onClick:t[12]||(t[12]=function(e){return u.tagSettingDialogVisible=!1})},{default:(0,o.w5)((function(){return[w]})),_:1})])]})),default:(0,o.w5)((function(){return[(0,o._)("div",null,[(0,o.Wm)(C,{class:"box-card"},{header:(0,o.w5)((function(){return[(0,o._)("div",a,[(0,o._)("span",null,[u.isShowPlus?((0,o.wg)(),(0,o.j4)(v,{key:0,circle:"",onClick:t[0]||(t[0]=function(e){return u.isShowPlus=!1})},{default:(0,o.w5)((function(){return[(0,o.Wm)(T,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(l)]})),_:1})]})),_:1})):(0,o.kq)("",!0),(0,o.Wm)(_,{visible:u.cancleIconTipVisible,"onUpdate:visible":t[4]||(t[4]=function(e){return u.cancleIconTipVisible=e})},{content:(0,o.w5)((function(){return[c]})),default:(0,o.w5)((function(){return[u.isShowPlus?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(v,{key:0,circle:"",onClick:t[1]||(t[1]=function(e){return r.clickCancle()}),onMouseenter:t[2]||(t[2]=function(e){return u.cancleIconTipVisible=!0}),onMouseleave:t[3]||(t[3]=function(e){return u.cancleIconTipVisible=!1})},{default:(0,o.w5)((function(){return[(0,o.Wm)(T,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(D)]})),_:1})]})),_:1}))]})),_:1},8,["visible"])]),u.isShowPlus?((0,o.wg)(),(0,o.j4)(v,{key:0,type:"info",plain:"",style:{"background-color":"#fff"},onMouseenter:t[5]||(t[5]=function(e){return r.addColor(e)}),onMouseleave:t[6]||(t[6]=function(e){return r.removeColor(e)}),onClick:t[7]||(t[7]=function(e){return u.isShowPlus=!1})},{default:(0,o.w5)((function(){return[f]})),_:1})):(0,o.kq)("",!0),u.isShowPlus?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(y,{key:1,ref:"inputTagRef",class:"input",modelValue:u.inputTag,"onUpdate:modelValue":t[8]||(t[8]=function(e){return u.inputTag=e}),placeholder:"创建新标签",style:{width:"200px"}},null,8,["modelValue"])),(0,o.Wm)(_,{visible:u.createTagTipVisible,"onUpdate:visible":t[11]||(t[11]=function(e){return u.createTagTipVisible=e})},{content:(0,o.w5)((function(){return[d]})),default:(0,o.w5)((function(){return[u.isShowPlus?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(v,{key:0,circle:"",onClick:r.createNewTag,onMouseenter:t[9]||(t[9]=function(e){return u.createTagTipVisible=!0}),onMouseleave:t[10]||(t[10]=function(e){return u.createTagTipVisible=!1})},{default:(0,o.w5)((function(){return[(0,o.Wm)(T,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(k)]})),_:1})]})),_:1},8,["onClick"]))]})),_:1},8,["visible"])])]})),default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.toDoTags,(function(e,t){return(0,o.wg)(),(0,o.iD)("div",{key:e,class:"tagItemDiv"},[u.isShowDeleteIcon[t]?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(v,{key:0,circle:"",onMouseenter:function(e){return u.isShowDeleteIcon[t]=!0}},{default:(0,o.w5)((function(){return[(0,o.Wm)(T,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(b)]})),_:1})]})),_:2},1032,["onMouseenter"])),(0,o.Wm)(_,{visible:u.deleteTagTipVisible[t],"onUpdate:visible":function(e){return u.deleteTagTipVisible[t]=e}},{content:(0,o.w5)((function(){return[m]})),default:(0,o.w5)((function(){return[u.isShowDeleteIcon[t]?((0,o.wg)(),(0,o.j4)(v,{key:0,circle:"",onMouseenter:function(e){return u.deleteTagTipVisible[t]=!0},onMouseleave:function(e){return r.removeDeleteIconFocus(t)},onClick:function(e){return r.deleteTag(t)}},{default:(0,o.w5)((function(){return[(0,o.Wm)(T,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(S)]})),_:1})]})),_:2},1032,["onMouseenter","onMouseleave","onClick"])):(0,o.kq)("",!0)]})),_:2},1032,["visible","onUpdate:visible"]),u.isShowEditIcon[t]?((0,o.wg)(),(0,o.iD)("span",g,(0,s.zw)(e.value),1)):(0,o.kq)("",!0),u.isShowEditIcon[t]?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(y,{key:2,class:"modifyTagNameInput",modelValue:u.modifyTagNameInput[t],"onUpdate:modelValue":function(e){return u.modifyTagNameInput[t]=e},ref_for:!0,ref:"modifyTagNameInputRef"},null,8,["modelValue","onUpdate:modelValue"])),(0,o.Wm)(_,{visible:u.renameTagTipVisible[t],"onUpdate:visible":function(e){return u.renameTagTipVisible[t]=e}},{content:(0,o.w5)((function(){return[p]})),default:(0,o.w5)((function(){return[u.isShowEditIcon[t]?((0,o.wg)(),(0,o.j4)(v,{key:0,circle:"",class:"editTagNameIcon",onMouseenter:function(e){return u.renameTagTipVisible[t]=!0},onMouseleave:function(e){return u.renameTagTipVisible[t]=!1},onClick:function(e){return r.clickEditTagName(t)}},{default:(0,o.w5)((function(){return[(0,o.Wm)(T,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(V)]})),_:1})]})),_:2},1032,["onMouseenter","onMouseleave","onClick"])):(0,o.kq)("",!0)]})),_:2},1032,["visible","onUpdate:visible"]),u.isShowEditIcon[t]?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(v,{key:3,class:"editTagNameIcon",circle:"",onClick:function(e){return r.renameTag(t)}},{default:(0,o.w5)((function(){return[(0,o.Wm)(T,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(k)]})),_:1})]})),_:2},1032,["onClick"]))])})),128))]})),_:1})])]})),_:1},8,["modelValue"])}n(89554),n(41539),n(54747),n(73210),n(68309),n(40561);var v=n(85574),D=n(61897),_=n(24239);const y={name:"TagSetting",props:["isShowTagSetting"],data:function(){return{tagSettingDialogVisible:this.isShowTagSetting,isShowPlus:!0,inputTag:"",isShowDeleteIcon:[],isShowEditIcon:[],modifyTagNameInput:[],cancleIconTipVisible:!1,createTagTipVisible:!1,deleteTagTipVisible:[],renameTagTipVisible:[]}},store:_.Z,methods:{clickCancle:function(){this.isShowPlus=!0,this.cancleIconTipVisible=!1},addColor:function(e){e.currentTarget.classList.add("color")},removeColor:function(e){e.currentTarget.classList.remove("color")},createNewTag:function(){var e=this,t=!1;this.toDoTags.forEach((function(n){t=n.value===e.inputTag.trim()||n.label===e.inputTag.trim()})),0===this.inputTag.trim().length?(v.z8.error("新建标签名不能为空"),this.$refs.inputTagRef.focus()):t?v.z8.error("标签名已存在"):(_.Z.commit("addNewTag",{value:this.inputTag,label:this.inputTag}),this.isShowPlus=!0,this.isShowEditIcon[this.toDoTags.length-1]=!0,this.modifyTagNameInput[this.toDoTags.length-1]=this.toDoTags[this.toDoTags.length-1].value,(0,v.z8)({type:"success",message:"创建标签成功"}))},renameTag:function(e){var t=this,n=this.toDoTags[e].value,o=!1;this.toDoTags.forEach((function(i){i.value===t.modifyTagNameInput[e]&&t.modifyTagNameInput[e]!==n&&(o=!0)})),""===this.modifyTagNameInput[e].trim()?(v.z8.error("标签名不能为空"),this.$refs.modifyTagNameInputRef.focus()):o?v.z8.error("标签名重复"):(_.Z.commit("updateToDoTagsOptions",{index:e,value:this.modifyTagNameInput[e]}),this.isShowEditIcon[e]=!0,this.renameTagTipVisible[e]=!1,_.Z.state.toDoLists.forEach((function(o){o.toDoTags.forEach((function(o){o.name===n&&(o.name=t.modifyTagNameInput[e])}))})),(0,v.z8)({type:"success",message:"标签重命名成功"}))},removeDeleteIconFocus:function(e){this.isShowDeleteIcon[e]=!1,this.deleteTagTipVisible[e]=!1},clickEditTagName:function(e){for(var t=this.toDoTags.length,n=0;n<t;++n)n!==e&&(this.isShowEditIcon[n]=!0);this.isShowEditIcon[e]=!1,this.renameTagTipVisible[e]=!1},deleteTag:function(e){var t=this;D.T.confirm("我们将删除此标签并将其从您所有的 Keep 记事中移除。您的记事不会被删除。","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"info"}).then((function(){var n=t.toDoTags[e].value;_.Z.commit("deleteToDoTagsOptions",{index:e}),_.Z.state.toDoLists.forEach((function(e){e.toDoTags.forEach((function(t,o){t.name===n&&e.toDoTags.splice(o,1)}))})),(0,v.z8)({type:"success",message:"标签已删除"})}))["catch"]((function(){(0,v.z8)({type:"info",message:"取消删除"})}))}},computed:{toDoTags:function(){return _.Z.state.toDoTagsOptions}},mounted:function(){var e=this;this.toDoTags.forEach((function(t){e.isShowDeleteIcon.push(!1),e.isShowEditIcon.push(!0),e.modifyTagNameInput.push(t.value),e.deleteTagTipVisible.push(!1),e.renameTagTipVisible.push(!1)}))}};var k=n(40089);const b=(0,k.Z)(y,[["render",T],["__scopeId","data-v-2927e33c"]]),S=b,V={name:"TagSettingView",components:{TagSetting:S},data:function(){return{isShowDialog:!1}},store:_.Z,computed:{isShowTagSetting:function(){return"/tagSetting"===_.Z.state.currentMenu}},methods:{}},C=(0,k.Z)(V,[["render",r],["__scopeId","data-v-602aedbc"]]),W=C}}]);
//# sourceMappingURL=about.83df026c.js.map