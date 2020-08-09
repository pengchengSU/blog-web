import React,{useEffect} from 'react';


import 'antd/dist/antd.css';
import '../style/comm.css';
import '../style/components/index.css';
import Header from './components/Header';
import Author from './components/Author';
import Advert from '@/pages/components/Advert';
import Footer from '@/pages/components/Footer';


import {Row, Col} from 'antd'

import ArticleList from '@/pages/components/ArticleList';

const Home = () => (

  <div>
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        <ArticleList/>
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Advert />
        右侧
      </Col>
    </Row>
  </div>
);

export default Home;
