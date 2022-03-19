//用于创建vuex中核心的store
//引入Vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'

//准备actions用于响应组件中的动作
const actions = {
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 1000)
    }
}
//准备mutations用于操作数据
const mutations = {
    setProfile(state, value) {
        state.avatar = value.avatar;
        state.nickName = value.nickName;
    },
    publishPost(state, newPost) {
        state.tableData.unshift(newPost);
    }
}
//准备state用于储存数据
const state = {
    tableData: [{ "_id": "6235c202e8c798b5168095c9", "id": "6235c202e8c798b5168095c9", "title": "1809-1811吕氏春秋", "publishTime": "2021-08-16T08:06:44.294Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095cc", "id": "6235c202e8c798b5168095cc", "title": "1809-1812校长讲话", "publishTime": "2021-08-16T08:06:44.287Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095cf", "id": "6235c202e8c798b5168095cf", "title": "1809-1812班主任警句", "publishTime": "2021-08-16T08:06:44.283Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095d2", "id": "6235c202e8c798b5168095d2", "title": "1809-1812建华语录", "publishTime": "2021-08-16T08:06:44.292Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095d5", "id": "6235c202e8c798b5168095d5", "title": "4个鬼畜视频滑稽", "publishTime": "2021-08-16T08:06:44.277Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095d8", "id": "6235c202e8c798b5168095d8", "title": "528的回忆", "publishTime": "2021-08-16T08:06:44.310Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095db", "id": "6235c202e8c798b5168095db", "title": "Melangez真名识破", "publishTime": "2021-08-16T08:06:44.302Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095de", "id": "6235c202e8c798b5168095de", "title": "web天气卡片开发记录", "publishTime": "2021-10-04T16:40:02.341Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095e1", "id": "6235c202e8c798b5168095e1", "title": "《考试》-佚名", "publishTime": "2021-08-16T08:06:44.308Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095e4", "id": "6235c202e8c798b5168095e4", "title": "《食物语》试玩", "publishTime": "2021-08-16T08:06:44.304Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095e7", "id": "6235c202e8c798b5168095e7", "title": "「不愉快的怪物庵-续」感想", "publishTime": "2021-08-16T08:06:44.321Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095ea", "id": "6235c202e8c798b5168095ea", "title": "「忧郁的怪物庵-续」摘句1", "publishTime": "2021-08-16T08:06:44.323Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095ed", "id": "6235c202e8c798b5168095ed", "title": "「灵异阴阳录」图片资源提取", "publishTime": "2021-08-16T08:06:44.330Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095f0", "id": "6235c202e8c798b5168095f0", "title": "「转载」此景美甚，愿同伊共享", "publishTime": "2021-08-16T08:06:44.306Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095f3", "id": "6235c202e8c798b5168095f3", "title": "一朵红晕，一个誓言，或是简单的一声叹息", "publishTime": "2021-08-16T08:06:44.274Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095f6", "id": "6235c202e8c798b5168095f6", "title": "七玖的万水千山", "publishTime": "2021-08-16T08:06:44.288Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095f9", "id": "6235c202e8c798b5168095f9", "title": "东云妖梦录摘句1", "publishTime": "2021-08-16T08:06:44.315Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095fc", "id": "6235c202e8c798b5168095fc", "title": "伪静态设置完成了", "publishTime": "2021-08-16T08:06:44.254Z", "__v": 0 }, { "_id": "6235c202e8c798b5168095ff", "id": "6235c202e8c798b5168095ff", "title": "今天，我的博客诞生", "publishTime": "2021-08-16T08:06:44.250Z", "__v": 0 }, { "_id": "6235c202e8c798b516809602", "id": "6235c202e8c798b516809602", "title": "其他金句", "publishTime": "2021-08-16T08:06:44.290Z", "__v": 0 }, { "_id": "6235c202e8c798b516809605", "id": "6235c202e8c798b516809605", "title": "八月份日常听学而思课程", "publishTime": "2021-08-16T08:06:44.266Z", "__v": 0 }, { "_id": "6235c202e8c798b516809608", "id": "6235c202e8c798b516809608", "title": "剣が君op「軌跡」-小野友樹-kenn", "publishTime": "2021-08-16T08:06:44.268Z", "__v": 0 }, { "_id": "6235c202e8c798b51680960b", "id": "6235c202e8c798b51680960b", "title": "倉木麻衣「渡月橋-〜君-想ふ〜」long-ver", "publishTime": "2021-08-16T08:06:44.256Z", "__v": 0 }, { "_id": "6235c202e8c798b51680960e", "id": "6235c202e8c798b51680960e", "title": "尝试了一下gutenburg", "publishTime": "2021-08-16T08:06:44.252Z", "__v": 0 }, { "_id": "6235c202e8c798b516809611", "id": "6235c202e8c798b516809611", "title": "感到了php的好处", "publishTime": "2021-08-16T08:06:44.276Z", "__v": 0 }, { "_id": "6235c202e8c798b516809614", "id": "6235c202e8c798b516809614", "title": "明天就要开学了", "publishTime": "2021-08-16T08:06:44.281Z", "__v": 0 }, { "_id": "6235c202e8c798b516809617", "id": "6235c202e8c798b516809617", "title": "死者长已矣，生者当勉力", "publishTime": "2021-08-16T08:06:44.272Z", "__v": 0 }, { "_id": "6235c202e8c798b51680961a", "id": "6235c202e8c798b51680961a", "title": "百度贴吧把几年前的帖子全给删了", "publishTime": "2021-08-16T08:06:44.328Z", "__v": 0 }, { "_id": "6235c202e8c798b51680961d", "id": "6235c202e8c798b51680961d", "title": "看完了《付丧神出租中》", "publishTime": "2021-08-16T08:06:44.301Z", "__v": 0 }, { "_id": "6235c202e8c798b516809620", "id": "6235c202e8c798b516809620", "title": "看完了花丸-續", "publishTime": "2021-08-16T08:06:44.295Z", "__v": 0 }, { "_id": "6235c202e8c798b516809623", "id": "6235c202e8c798b516809623", "title": "短暂的周末", "publishTime": "2021-08-16T08:06:44.299Z", "__v": 0 }, { "_id": "6235c202e8c798b516809626", "id": "6235c202e8c798b516809626", "title": "站长便笺", "publishTime": "2021-08-16T08:06:44.285Z", "__v": 0 }, { "_id": "6235c202e8c798b516809629", "id": "6235c202e8c798b516809629", "title": "记宁中百廿校庆", "publishTime": "2021-08-16T08:06:44.297Z", "__v": 0 }, { "_id": "6235c202e8c798b51680962c", "id": "6235c202e8c798b51680962c", "title": "购买了dolby-atoms-for-headphones，爽到了", "publishTime": "2021-08-16T08:06:44.264Z", "__v": 0 }, { "_id": "6235c202e8c798b51680962f", "id": "6235c202e8c798b51680962f", "title": "那你是真的皮", "publishTime": "2021-08-16T08:06:44.270Z", "__v": 0 }, { "_id": "6235c202e8c798b516809632", "id": "6235c202e8c798b516809632", "title": "重新拥抱apache-记一次网页环境重建", "publishTime": "2021-08-16T08:06:44.325Z", "__v": 0 }, { "_id": "6235c202e8c798b516809635", "id": "6235c202e8c798b516809635", "title": "首推「晨曦时、梦见兮」得到安纲bad-end", "publishTime": "2021-08-16T08:06:44.317Z", "__v": 0 }],
    account: 'AsakiRain',
    nickName: '雨辰',
    avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
}
//准备getters用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
Vue.use(Vuex);
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})