<template>
  <Transition>
  <div class="editToDoDiv">
    <el-form
      ref="editToDoFormRef"
      :model="toDoFormModel"
      :rules="toDoRules"
      label-width="120px"
      class="toDoForm"
      :size="formSize"
    >
      <el-form-item label="标题" prop="toDoTitle" class="el-form-title">
        <el-input
          v-model="toDoFormModel.toDoTitle"
          clearable
          placeholder="请输入记事标题"
        ></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="toDoContent">
        <el-input
          v-model="toDoFormModel.toDoContent"
          type="textarea"
          :autosize="{ minRows: 8, maxRows: 15 }"
          placeholder="请输入记事内容"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-select
          multiple
          collapse-tags
          v-model="toDoFormModel.tagValue"
          class="m-2 tagSelect"
          placeholder="选择标签"
          size="small"
          filterable
        >
          <el-option
            v-for="item in toDoTagsOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="提醒时间">
        <el-date-picker
          v-model="toDoFormModel.toDoTime"
          type="datetime"
          :placeholder="defaultToDoTime"
          :shortcuts="shortcuts"
          value-format="YYYY-MM-DD hh:mm:ss"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item class="el-form-button">
        <el-button
          type="primary"
          @click="submitUpdateToDoForm()"
          class="submitBtn"
          >修改记事</el-button
        >
        <el-button @click="resetEditToDoForm()" class="cancelBtn"
          >清空</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</Transition>
</template>
<script>
import store from "@/store/index.js";
import { ElMessage } from "element-plus";
import moment from "moment";
export default {
  name: "EditToDo",
  data() {
    return {
      shortcuts: [
        {
          text: "今天",
          value: new Date(),
        },
        {
          text: "昨天",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          },
        },
        {
          text: "一周前",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
          },
        },
      ],
      toDoRules: {
        toDoContent: [
          { required: true, message: "请输入记事内容", trigger: "blur" },
        ],
      },
      formSize: "",
      toDoFormModel: {},
      defaultToDoTime: "",
      arr: []
    };
  }, // data
  props: ["toDoIndex"],
  store,
  methods: {
    // 提交修改
    submitUpdateToDoForm() {
      if (!this.$refs.editToDoFormRef) {
        console.log("失败");
        return;
      }
      this.$refs.editToDoFormRef.validate((valid) => {
        if (valid) {
          const toDoTags = [];
          for (const item of this.toDoFormModel.tagValue) {
            toDoTags.push({ name: item });
          }
          const toDoObj = {
            title: this.toDoFormModel.toDoTitle,
            content: this.toDoFormModel.toDoContent,
            toDoTime: this.datetime(this.toDoFormModel.toDoTime),
            // toDoTags: [{ name: this.toDoFormModel.tagValue }],
            isCompleted: false,
            isOutOfTime: false,
            toDoTags: toDoTags,
          };
          // store.commit("updateToDoList", {
          //   index: this.toDoIndex,
          //   toDoObj: toDoObj,
          // });
          const oldValue = this.toDoLists[this.toDoIndex];
          this.toDoLists.splice(this.toDoIndex, 1, toDoObj);
          store.state.toDoLists.forEach((item, itemIndex) => {
            if (item === oldValue) {
              store.state.toDoLists.splice(itemIndex, 1, toDoObj);
            }
          });
          // this.toDoLists.splice(this.toDoIndex, 1, toDoObj);
          // 添加成功之后的提示框
          ElMessage({
            message: "修改记事成功",
            center: true,
            type: "success",
            // offset: 150
          });
          // 关闭对话框
          this.$emit("closeDialog", false);
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
    // 清空添加记事表单
    resetEditToDoForm() {
      this.$refs.editToDoFormRef.resetFields();
      this.toDoFormModel.toDoTime = "";
      this.toDoFormModel.tagValue = "";
    },
    datetime(val) {
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  computed: {
    // 标签选择器
    toDoTagsOptions() {
      return store.state.toDoTagsOptions;
    },
    toDoLists() {
      return store.getters.getSearchToDoLists(store.state.searchContent);
    },
    getDefaultTags() {
      const tagArr1 = this.toDoLists[this.toDoIndex].toDoTags;
      const tagArr2 = [];
      for (const item of tagArr1) {
        tagArr2.push(item.name);
      }
      return tagArr2;
    },
  },
  mounted() {
    this.toDoFormModel = {
      toDoTitle: this.toDoLists[this.toDoIndex].title,
      toDoContent: this.toDoLists[this.toDoIndex].content,
      toDoTime: this.toDoLists[this.toDoIndex].toDoTime,
      tagValue: this.getDefaultTags
    };

    this.defaultToDoTime = new Date(this.toDoLists[this.toDoIndex].toDoTime);
  },
};
</script>
<style lang="scss" scoped>
.editToDoDiv {
  width: 500px;
  height: 500px;
  margin: 50px auto;
}
.el-button {
  margin-left: 80px;
}
.el-button + .el-button {
  margin-left: 50px;
}
</style>