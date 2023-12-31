import { createStore } from 'vuex'

export default createStore({
  state: {
    isCollapse: false,
    currentMenu: '/todo',
    // 记事标签
    toDoTagsOptions: [{ value: "学习", label: "学习" },
    { value: "生活", label: "生活" },
    { value: "工作", label: "工作" },
    { value: "家庭", label: "家庭" },
    { value: "美妆", label: "美妆" },
    { value: "感情", label: "感情" }],
    toDoLists: [
      {
        title: "记事1",
        content: '我今天学习了Vue框架',
        toDoTime: '2023-07-08 09:38:42',
        isCompleted: false,
        isOutOfTime: false,
        // 标签
        toDoTags: [{ name: '学习' }, { name: '生活' }, { name: '工作' }]
      },
      {
        title: "记事2",
        content: '今天学习了JavaScript',
        toDoTime: '2023-07-07 13:50:43',
        isCompleted: false,
        isOutOfTime: false,
        toDoTags: [{ name: '感情' }, { name: '学习' }]
      },
      {
        title: "记事3",
        content: "今天学习了HTML",
        toDoTime: '2023-07-09 15:00:00',
        isCompleted: true,
        isOutOfTime: false,
        toDoTags: [{ name: '美妆' }, { name: '家庭' }]
      },
      // 已完成
      {
        title: "记事4",
        content: "今天学习了CSS",
        toDoTime: '2023-07-9 12:00:00',
        isCompleted: true,
        isOutOfTime: false,
        toDoTags: [{ name: '美妆' }, { name: '家庭' }]
      },
      // 过期未完成
      {
        title: "记事5",
        content: "前端开发真有趣",
        toDoTime: '',
        isCompleted: false,
        isOutOfTime: true,
        toDoTags: []
      },
    ],
    // 已被删除的记事
    deletedToDoLists: [],
    // showUpdateTagMenu: false
    searchContent: '',
    searchResult: [],
    currentFilterTagName: ''
  },
  getters: {
    notifyToDoLosts(state) { // 需要提醒的记事，在toDoLists中进行过滤
      return state.toDoLists.filter(function (todo) {
        return todo.toDoTime !== '' && todo.toDoTime !== null
      })
    },
    getClickTagToDoList: (state) => (tagName) => { // 根据标签名进行过滤
      return state.toDoLists.filter(function (item) {
        return (item.toDoTags.findIndex(item2 => item2.name === tagName)) !== -1
      })
    },
    getSearchToDoLists: (state) => (content) => {
      return state.toDoLists.filter(function (item) {
        return (item.title.indexOf(content) !== -1 || item.content.indexOf(content) !== -1)
      })
    }
  },
  mutations: {
    updateCurrentMenu(state, menuName) {
      state.currentMenu = menuName;
    },
    addToDo(state, toDoObj) {
      state.toDoLists.push(toDoObj);
      console.log("调用vuex")
      for (const item of state.toDoLists) {
        console.log(item.title);
      }
    },
    updateIsCollapse(state, val) {
      state.isCollapse = val;
    },
    updateToDoListTag(state, playload) {
      // console.log("调用vuex" + tagObj.name + index);
      state.toDoLists[playload.index].toDoTags.push(playload.tagObj);
    },
    updateToDoList(state, playload) {
      state.toDoLists.splice(playload.index, 1, playload.toDoObj)
    },
    updateToDoTime(state, playload) {
      state.toDoLists[playload.index].toDoTime = playload.toDoTime;
    },
    updateToDoIsComplete(state, playload) {
      state.toDoLists[playload.index].isCompleted = playload.isCompleted
    },
    deleteToDo(state, playload) {
      const deleteTodo = state.toDoLists.splice(playload.index, 1)
      // 往回收站写入被删除的记事
      state.deletedToDoLists.push(deleteTodo[0]);
      // console.log("回收站:" + state.deletedToDoLists[0].title);
    },
    // 从回收站写入数据
    addDeletedToDoList(state, playload) {
      state.deletedToDoLists.push(playload.value);
    },
    // 从回收站还原
    resetToDoFromRush(state, playload) {
      const val = state.deletedToDoLists.splice(playload.index, 1)
      state.toDoLists.push(val[0]);
    },
    // 从回收站永久删除
    foreverDelete(state, playload) {
      state.deletedToDoLists.splice(playload.index, 1)
    },
    // 清空回收站
    clearAllDelete(state) {
      state.deletedToDoLists = [];
    },
    // 创建新标签
    addNewTag(state, playload) {
      state.toDoTagsOptions.push(playload);
    },
    // 更新标签名
    updateToDoTagsOptions(state, playload) {
      state.toDoTagsOptions[playload.index].value = playload.value
      state.toDoTagsOptions[playload.index].label = playload.value
    },
    // 删除标签
    deleteToDoTagsOptions(state, playload) {
      state.toDoTagsOptions.splice(playload.index, 1)
    },
    // updateShowUpdateTagMenu(state, playload) {
    //   state.showUpdateTagMenu = playload.status
    // }
    updateSearchContent(state, content) {
      state.searchContent = content
    },
    // 更新当前点击的标签名
    updateCurrentFilterTagName(state, name) {
      state.currentFilterTagName = name
    }
  },
  actions: {
  },
  modules: {
  }
})