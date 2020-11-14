
import React from 'react';
import { Global, css } from '@emotion/react';


const GlobalLayout = () => {

  return (
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
        
             
        .site-layout .site-layout-background {
          background: #fff;
        }
           `
      } />

  );
}
export default GlobalLayout;