
import React from 'react';
import { Global, css } from '@emotion/react';
import { Input, Button } from 'antd';
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
    #nest-messages{
    margin-top:10%;
    text-align:center;
    }
    body{
    background:#f0f2f5;
    } 
    .ant-card-type-inner .ant-card-head,
    .ant-card-head{
    background :#fafafa;
    }
    .ant-card-bordered .ant-card-cover{
    margin:0;
    }

    .layout .layout-background-header {
    background: #000;
    position:fixed;
    top:0;
    width:100%;
    z-index:100;
    padding: 0 10px;
    .ant-row ant-row-space-between{
    padding: 0 2%;
    }
    .ant-input-group-addon{
      left:0px;
          }
    }
    .ant-card-bordered .ant-card-cover {
    display:flex;
    justify-content:center;
    align-items:center;
    padding:3%;
    }

    .ant-page-header-heading{
    justify-content:center !important;
    .ant-page-header-heading-left
    {
      margin:0 ;
      flex-direction: column;
      justify-content: center;

      .ant-page-header-heading-title  {
      overflow:unset !important;
      margin:5px 10px !important;
        }
      .ant-page-header-heading-sub-title{
      white-space:normal !important;
      line-height: 2em;
      }
     } 
    }
    @media (max-width: 576px) {
    .ant-page-header-heading-left
    {
     margin-top:10% !important;
     }
    }

    .ant-list-bordered{
    background:#fff;
    }
    .ant-layout-content{
    padding:9% 3%!important;
    }
    .layout-background{
    margin: 0;        
    }
    .layout-foot{
    position:fixed;
    bottom:0;
    width:100%;
    padding: 8px 50px;
    text-align:center;
    }
    `
    } />
);

export const InputSearch = styled(Input.Search)`
vertical-align: middle;
`  ;

export const ButtonLayout = styled(Button)`
color: #fff;
font-size:20px;
height: auto;
margin:15%;
`  ;

export const InputReport = styled(Input.TextArea)`
position: relative;
margin:10px 0;`
  ;

export const ImgWrapper = styled.div`
margin-bottom: 20px;
text-align:center;
margin:5%;
 & >img{
  width:90%;
  height:30%;
 }
 @media (max-width: 576px){
  & >img{
       height:5%;
   }
}
`

export const CardWrapper = styled.div`
margin-bottom: 20px;`

export const NicknameInputSearch = styled(Input)`
width:300px;
  & > .ant-input-group > .ant-input-group-addon{
      left:-8px;
  }
    `;

export const Logo = styled.div`
height:60px;
margin:3px 25px 3px 20px;
display:flex;
justify-content:center;
text-align:cetner;
background-color:rgba(255,255,255,0.5);
border-radius:50%;
`;

export const LoadingDiv = styled.div`
width:100%;
height:100vh;
background:rgba(0,0,0,0.9);
padding-top:15%;
text-align: center;
line-height:2em;
font-size:20px;
color:white;
`;

export const LoadMore = styled.div`
text-align: center;
margin: 10px 0;
height: 32px;
line-height: 32px;
`;

export const ImageLayout = () => (
  <Global
    styles={css`
    .img-dancer-position-one{
      position: absolute;
      top: 35%;
      left: 5%;
      z-index:1;
    }
    .img-dancer-position-two{
      position: absolute;
      bottom: 10%;
      right: 5%;
      z-index:2;
    }
    .loginForm-title{
      z-index:3;
      margin:10% 0 4% 6%;
      text-align:center;
    }
    #basic-form{
      z-index:4;
      margin-left:50%;
      width:300px;
      transform:translateX(-50%);
    }
    .img-dancer-position{
      text-align:center;
      margin-top:10%;
    }
  
    `} />);