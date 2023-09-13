<template>
  <Transition>
  <div class="addToDoDiv">
    <el-form
      ref="addToDoFormRef"
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
          placeholder="选择时间"
          :shortcuts="shortcuts"
          value-format="YYYY-MM-DD hh:mm:ss"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item class="el-form-button">
        <el-button type="primary" @click="submitAddToDoForm()" class="submitBtn"
          >添加记事</el-button
        >
        <el-button @click="resetAddToDoForm()" class="cancelBtn"
          >清空</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</Transition>
</template>
<script>
// import MarkDown from "@/components/MarkDown.vue";
import store from "@/store/index.js";
import { ElMessage } from "element-plus";
// type FormInstance = InstanceType<typeof ElForm>
export default {
  name: "AddToDo",
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
      toDoFormModel: {
        toDoTitle: "",
        toDoContent: "",
        toDoTime: "",
        tagValue: "",
      },
      toDoRules: {
        toDoContent: [
          { required: true, message: "内容不能为空", trigger: "blur" },
        ],
      },
      formSize: "",
    };
  },
  store,
  methods: {
    //  提交添加记事表单
    submitAddToDoForm() {
      if (!this.$refs.addToDoFormRef) {
        console.log("失败");
        return;
      }
      this.$refs.addToDoFormRef.validate((valid) => {
        if (valid) {
          const toDoTags = [];
          for (const item of this.toDoFormModel.tagValue) {
            toDoTags.push({ name: item });
          }
          console.log("submit!");
          store.commit("addToDo", {
            title: this.toDoFormModel.toDoTitle,
            content: this.toDoFormModel.toDoContent,
            toDoTime: this.toDoFormModel.toDoTime,
            // toDoTags: [{ name: this.toDoFormModel.tagValue }],
            toDoTags: toDoTags,
            isCompleted: false,
            isOutOfTime: false,
          });
          // 添加成功之后的提示框
          ElMessage({
            message: "添加记事成功",
            center: true,
            type: "success",
            // offset: 150
          });
          // 清空表单
          this.$refs.addToDoFormRef.resetFields();
          this.toDoFormModel.toDoTime = "";
          this.toDoFormModel.tagValue = "";
        } else {
          console.log("error submit!");
          return false;
        }
      }); // this.$refs.addToDoFormRef.validate
    },
    // 清空添加记事表单
    resetAddToDoForm() {
      this.$refs.addToDoFormRef.resetFields();
      this.toDoFormModel.toDoTime = "";
      this.toDoFormModel.tagValue = "";
    },
  },
  computed: {
    // 标签选择器
    toDoTagsOptions() {
      return store.state.toDoTagsOptions;
    },
  },
};
</script>
<style lang="scss" scoped>
.addToDoDiv {
  width: 500px;
  height: 500px;
  margin: 50px auto;
}
.toDoForm {
  width: 100%;
}
.el-button {
  margin-left: 80px;
}
.el-button + .el-button {
  margin-left: 50px;
}

</style>