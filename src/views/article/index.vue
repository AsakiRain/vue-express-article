<template>
  <el-card class="publish">
    <div slot="header" class="clearfix header">
      <span>文章列表</span>
    </div>
    <div class="body">
      <el-table :data="tableData" border stripe>
        <el-table-column prop="id" label="文章ID" width="180">
        </el-table-column>
        <el-table-column prop="title" label="文章标题" width="180">
        </el-table-column>
        <el-table-column prop="publishTime" label="发布时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },

  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  computed: {
    ...mapState(['tableData'])
  }
};
</script>

<style scoped>
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
