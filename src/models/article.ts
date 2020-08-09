import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import {getArticleList} from '../services/article'

export interface ArticleModelState {
  articleList: Array<any>;
}
export interface ArticleModelType {
  namespace: 'article';
  state: ArticleModelState;
  effects: {
    getArticleList: Effect;
  };
  reducers: {
    putArticleList: Reducer<ArticleModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  // subscriptions: { setup: Subscription };
}
const ArticleModel: ArticleModelType = {
  namespace: 'article',
  state: {
    articleList: [],
  },
  effects: {
    *getArticleList({ payload }, { call, put }) {
      const data = yield call(getArticleList,payload);
      yield put({
        type: 'putArticleList',
        payload:data,
      });
      console.log("model",data);
    },
  },
  reducers: {
    putArticleList(state, {payload}) {
      return {
        ...state,
        articleList:payload
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     return history.listen(({ pathname }) => {
  //       if (pathname === '/') {
  //         dispatch({
  //           type: 'query',
  //         })
  //       }
  //     });
  //   }
  // }
};
export default ArticleModel;
