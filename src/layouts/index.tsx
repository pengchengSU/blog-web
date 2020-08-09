import React from 'react';
import 'antd/dist/antd.css';
import '../style/comm.css';
import '../style/components/index.css';

import { Affix } from 'antd';
import ArticleList from '@/pages/components/ArticleList';
import Header from '@/pages/components/Header';
import Author from '@/pages/components/Author';
import Advert from '@/pages/components/Advert';
import Footer from '@/pages/components/Footer';

const Home = (props: any) => (

  <div>
    <Affix offsetTop={0}>
      <Header/>
    </Affix>
    {props.children}
    <Footer/>
  </div>
);

export default Home;
