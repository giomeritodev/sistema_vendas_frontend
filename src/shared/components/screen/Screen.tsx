import { Divider } from 'antd';

import Breadcrumb, { ListBreadcrumb } from '../breadcrumb/Breadcrumb';
import Header from '../header/header';
import Menu from '../menu/menu';
import { ScreenContainer } from './screen.style';

interface ScreenProps {
  children: React.ReactNode;
  listBreadcrumb?: ListBreadcrumb[];
}

const Screen = ({ children, listBreadcrumb }: ScreenProps) => {
  return (
    <>
      <Header />
      <ScreenContainer>
        <Menu />
        {listBreadcrumb && (
          <>
            <Breadcrumb listBreadcrumb={listBreadcrumb} />
            <Divider />
          </>
        )}
        {children}
      </ScreenContainer>
    </>
  );
};

export default Screen;
