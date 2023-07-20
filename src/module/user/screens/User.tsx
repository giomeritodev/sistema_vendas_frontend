import { Input, Spin } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/button';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlexJustifyBetween,
  DisplayFlexJustifyCenter,
} from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import Table from '../../../shared/components/table/Table';
import { UserTypeEnum } from '../../../shared/enums/userType.enum';
import { getUserInfoByToken } from '../../../shared/functions/connection/auth';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import { UserType } from '../../../shared/types/UserType';
import { useUser } from '../hooks/useUser';
import { UserRouterEnum } from '../routes';

const { Search } = Input;

const columns: ColumnsType<UserType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name), //ordenar
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <a>{insertMaskInPhone(text)}</a>,
  },
];

const User = () => {
  const { users, handleOnChangeSearch, loading } = useUser();
  const navigate = useNavigate();

  const handleOnClickInsertAdmin = () => {
    navigate(UserRouterEnum.USER_INSERT);
  };

  const userToken = useMemo(() => getUserInfoByToken(), []);

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'USUÁRIOS',
        },
      ]}
    >
      {loading ? (
        <DisplayFlexJustifyCenter>
          <Spin size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <>
          <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
            <LimitedContainer width={240}>
              <Search placeholder="input search text" onSearch={handleOnChangeSearch} enterButton />
            </LimitedContainer>

            <LimitedContainer width={180}>
              {userToken?.typeUser === UserTypeEnum.Root && null}
              <Button type="primary" onClick={handleOnClickInsertAdmin}>
                Inserir Admin
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyBetween>

          <Table columns={columns} dataSource={users} />
        </>
      )}
    </Screen>
  );
};

export default User;
