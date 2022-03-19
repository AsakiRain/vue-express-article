<template>
  <div class="header">
    <div class="info">
      <div class="avatar">
        <el-avatar :src="avatar"></el-avatar>
      </div>
      <div class="nickname">{{ nickName }}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'Header',
  data() {
    return {};
  },
  computed: {
    ...mapState(['nickName', 'avatar'])
  }
};
</script>

<style>
.header {
  background: #fff;
  width: 100%;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.info {
  margin-left: auto;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  margin-right: 30px;
}

.avatar {
  margin-right: 30px;
}
</style>
