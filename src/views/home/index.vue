<template>
  <div class="articleWrapper">
    <el-card v-for="post in tableData" :key="post.id">
      <div slot="header">
        <span>{{ post.title }}</span>
      </div>
      <el-row>
        <span>{{
          new Date(Date.parse(post.publishTime)).toLocaleString()
        }}</span>
      </el-row>
      <el-row class="passage">
        720ef584c2b5a886f3c97592527331a331f57a058ecdbd758b81f6a8b09a5b6c055b0d7c59d3322a5103f1f82d48af05451aea45a693f3c60b316a7e2e6f76e813794a42060e32a3be189fe17cc76d7e8884dd72c26a3375622567d980c331114d2df6e81dc9ec92d0e253a93b84d8b61733de7e682e3d886050c18f770a5158301f0ba9a2a793e9008b8a10b6bdb8eaabfbd9bca2316a9bd23d52e457c8082769884debf1b5bcbd443b1318c4af4ac0744b552dd04c305ea02a5865a2fb5a34ba4fbf6c1307cdd2964b107ee28384dc68931583c3740d17ca1cc66ccdcbfef68b1a2e43ef68314e9585c48bad29352954be90fb5a2fb234f19b9179280779fd71a242dfdb1cd0f2168c75c0848bf05b584b55b8db2d230b4c664e25824156b8d00c59b7595ee1d0d2083fb3a55cc948f7fba4d8010bfd580e0e01b9bc897c29505a65608072a722c879b7163238bdfd33a5975e5517092a538434212164bfcf9f1d04611dc28354937770b9f28730c8c45cdc7af0ced5b30ee1d22e71ce3e3bede87fce93aa1192477858f9e10d502fe6a91abc1f312666c0c6d40623df31eade65682654a93c765990182249b7818402a675c9af4f16bb9dce5e191d59643c591b4aa13262b9a1d07f81bffbd0fe7dc6c90325f901f980a0b3a21418263a76d53048db3c0622bec90a7fabe2d5c0987dca5783ae9241c75a06e8ee86b45cf5
      </el-row>
    </el-card>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'Index',
  computed: {
    ...mapState(['tableData'])
  }
};
</script>
<style scoped>
.passage{
    word-break: break-all;
}
.articleWrapper {
  display: flex;
  flex-direction: column;
}
.articleWrapper > * {
  margin-bottom: 40px;
}
</style>