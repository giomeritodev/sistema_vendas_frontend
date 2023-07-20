import {
  HomeOutlined,
  LaptopOutlined,
  ProfileOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu as MenuAntd } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryRouterEnum } from '../../../module/category/routes';
import { OrderRoutesEnum } from '../../../module/orders/router';
import { ProductRouterEnum } from '../../../module/product/routes';
import { UserRouterEnum } from '../../../module/user/routes';
import { ContainerLogoName, ContainerMenu, LogoMenu, NameCompany } from './menu.style';

type MenuItem = Required<MenuProps>['items'][number];

const Menu = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('1');

  const items: MenuItem[] = [
    {
      key: 'home',
      label: 'Principal',
      icon: <HomeOutlined />,
    },
    {
      key: 'products',
      label: 'Produtos',
      icon: <LaptopOutlined />,
      children: [
        {
          key: 'products_view',
          label: 'Visualizar',
          onClick: () => navigate(ProductRouterEnum.PRODUCT),
        },
        {
          key: 'products_insert',
          label: 'Inserir',
          onClick: () => navigate(ProductRouterEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: 'category',
      label: 'Categorias',
      icon: <ProfileOutlined />,
      children: [
        {
          key: 'category_view',
          label: 'Visualizar',
          onClick: () => navigate(CategoryRouterEnum.CATEGORY),
        },
        {
          key: 'category_insert',
          label: 'Inserir',
          onClick: () => navigate(CategoryRouterEnum.CATEGORY_INSERT),
        },
      ],
    },
    {
      key: 'order',
      label: 'Pedidos',
      icon: <SafetyCertificateOutlined />,
      children: [
        {
          key: 'order_view',
          label: 'Visualizar',
          onClick: () => navigate(OrderRoutesEnum.ORDER),
        },
        {
          key: 'order_insert',
          label: 'Inserir',
          onClick: () => navigate(''),
        },
      ],
    },
    {
      key: 'user',
      label: 'Clientes',
      icon: <UserOutlined />,
      children: [
        {
          key: 'clients_view',
          label: 'Visualizar',
          onClick: () => navigate(UserRouterEnum.USER_ALL),
        },
        {
          key: 'clients_insert',
          label: 'Inserir',
          onClick: () => navigate(''),
        },
      ],
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <ContainerMenu>
      <ContainerLogoName>
        <LogoMenu />
        <NameCompany>Vendas Online</NameCompany>
      </ContainerLogoName>

      <MenuAntd
        theme="dark"
        onClick={onClick}
        style={{ width: 240 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </ContainerMenu>
  );
};

export default Menu;
