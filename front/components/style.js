
import React from 'react';
import { Global, css } from '@emotion/react';
import { Input } from 'antd';
import styled from '@emotion/styled';

export const GlobalLayout = () => (
  <Global
    styles={css`
      #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
      }
      
      #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
      }
      .ant-card-type-inner .ant-card-head,
      .ant-card-head{
        background :#fafafa;
      }
      .ant-card-bordered .ant-card-cover{
        margin:0;
      }
      .site-layout .site-layout-background {
        background: #fff;
      }
      .ant-card-bordered .ant-card-cover {
        display:flex;
        justify-content:center;
        align-items:center;
        padding:3px;
      }
         `
    } />
);
export const InputSearch = styled(Input.Search)`
vertical-align: middle;
margin-right:5px;`
  ;
export const Logo = styled.div`
height:60px;
margin:15px 10px;
display:flex;
justify-content:center;
text-align:cetner;
background-color:rgba(255,255,255,0.5);
border-radius:50%;
`;

