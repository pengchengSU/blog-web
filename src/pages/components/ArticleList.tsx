import React, { useState,useEffect } from 'react';
import { Row, Col, List, Breadcrumb } from 'antd';
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';
import { ArticleModelState, ConnectProps, Loading, connect } from 'umi';


const ArticleList = (props:any) => {
  const {articleList,dispatch} = props;
  const {getArticleList} = props;
  useEffect(()=>{
    dispatch({
      type: 'article/getArticleList',
      payload: {},
    });
  },[]);

  return (
    <div>
      <div className="bread-div">
        <Breadcrumb>
          <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
          <Breadcrumb.Item>视频列表</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <List
        itemLayout="vertical"
        dataSource={articleList}
        renderItem={article => {
          const {id,category,title,introduction,content,visits,thumbs,gmtCreate,gmtModify} = article;
          return(
          <List.Item>
            <div className="list-title">
              <Link to={{pathname: '/detail',search: `?id=${id}`}}>
                {title}
              </Link>
            </div>
            <div className="list-icon">
              <span><CalendarOutlined />{gmtCreate}</span>
              <span><FolderOpenOutlined />{category}</span>
              <span><FireOutlined />{visits}</span>
            </div>
            <div className="list-context">{introduction}</div>
          </List.Item>
        )}}
      />
    </div>
  );
};
const mapStateToProps = (
  {article}:{article:ArticleModelState}
)=>({
  articleList:article.articleList
});

const mapDispatchToProps = (
  {dispatch}:{dispatch:any}
)=>({
  getArticleList:()=>dispatch('article/getArticleList')
});

export default connect(mapStateToProps)(ArticleList);
