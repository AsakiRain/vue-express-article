<template>
  <el-card class="publish">
    <div slot="header" class="clearfix header">
      <span>个人信息</span>
    </div>
    <div id="main">
      <el-row type="flex" :gutter="20" align="middle" justify="start">
        <el-col :span="3">头像：</el-col>
        <el-col :span="21"
          ><el-avatar
            class="avatar"
            shape="square"
            :size="100"
            fit="cover"
            :src="avatar"
          ></el-avatar>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <el-avatar
              shape="square"
              :size="100"
              fit="cover"
              v-if="imageUrl"
              :src="imageUrl"
              class="avatar"
            ></el-avatar>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20" align="middle" justify="start">
        <el-col :span="3">账号：</el-col>
        <el-col :span="21"
          ><el-input disabled :value="account"></el-input
        ></el-col>
      </el-row>
      <el-row type="flex" :gutter="20" align="middle" justify="start">
        <el-col :span="3">昵称：</el-col>
        <el-col :span="21"
          ><el-input :placeholder="nickName" v-model="newNickName"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-button type="primary" @click="saveProfile">保存</el-button>
      </el-row>
    </div>
  </el-card>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'profile',
  data() {
    return {
      imageUrl: '',
      newNickName: ''
    };
  },
  computed: {
    ...mapState(['account', 'nickName', 'avatar']),
    editNickName: {
      get() {
        return nickName;
      },
      set(newValue) {
        this.newNickName = newValue;
      }
    }
  },
  methods: {
    ...mapMutations(['setProfile']),
    saveProfile() {
      const newProfile = {
        avatar: this.imageUrl ? this.imageUrl : this.avatar,
        nickName: this.newNickName ? this.newNickName : this.nickName
      };
      this.setProfile(newProfile);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style scoped>
.avatar-uploader {
  display: flex;
}
.avatar-uploader .el-upload {
  border: 1px dashed#DCDFE6;
  cursor: pointer;
  overflow: hidden;
  float: left;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  border-radius: 6px;
  border: 1px dashed #409eff;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
.avatar {
  float: left;
}
#main {
  display: flex;
  flex-direction: column;
}
#main > * {
  margin-bottom: 40px;
}
</style>

