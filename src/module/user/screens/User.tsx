import Search from 'antd/es/input/Search';
import { ColumnsType } from 'antd/es/table';

import Button from '../../../shared/components/buttons/button/button';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyBetween } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import Table from '../../../shared/components/table/Table';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import { UserType } from '../../../shared/types/UserType';
import { useUser } from '../hooks/useUser';

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
  const { users } = useUser();
  const handleOnChangeSearch = () => {
    return null;
  };

  const handleOnClickInsert = () => {
    return null;
  };

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
      <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
        <LimitedContainer width={240}>
          <Search placeholder="input search text" onSearch={handleOnChangeSearch} enterButton />
        </LimitedContainer>

        <LimitedContainer width={120}>
          <Button type="primary" onClick={handleOnClickInsert}>
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>

      <Table columns={columns} dataSource={users} />
    </Screen>
  );
};

export default User;
