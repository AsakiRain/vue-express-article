<template>
  <el-card class="publish">
    <div slot="header" class="clearfix header">
      <span>发布文章</span>
    </div>
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item label="标题">
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-row type="flex" align="middle" class="tagWrapper">
          <el-tag
            class="tag"
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput"
            >+ New Tag</el-button
          >
        </el-row>
      </el-form-item>
      <el-form-item label="正文">
        <el-input type="textarea" rows="20" v-model="form.body"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      form: {
        title: '',
        body: ''
      },
      inputVisible: false,
      inputValue: '',
      dynamicTags: ['标签一', '标签二', '标签三']
    };
  },
  methods: {
    ...mapMutations(['publishPost']),
    onSubmit() {
      const newPost = {
        id: new Date().getTime(),
        title: this.form.title,
        publishTime: new Date().toLocaleString()
      };
      this.publishPost(newPost);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
};
</script>
<style scoped>
.tagWrapper {
  height: 40px;
}

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.publish {
  box-sizing: border-box;
  width: 100%;
  min-height: 500px;
}
</style>