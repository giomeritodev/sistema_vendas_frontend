import { Typography } from 'antd';
import styled from 'styled-components';

import SVGLogo from '../icons/SVGLogo';

const { Text } = Typography;

export const ContainerMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #001529;
  width: 240px;

  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const ContainerLogoName = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;

  -webkit-box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
  box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
`;

export const LogoMenu = styled(SVGLogo)`
  width: 50px;
  height: 50px;
  margin: 0px 16px;
`;

export const NameCompany = styled(Text)`
  color: white;
`;
