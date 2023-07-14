import { Button, Input, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyBetween } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../hooks/useCategory';
import { CategoryRouterEnum } from '../routes';

const { Search } = Input;

const columns: ColumnsType<CategoryType> = [
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
    title: 'Produtos',
    dataIndex: 'amountProducts',
    key: 'amountProducts',
    render: (text) => <a>{text}</a>,
  },
];

const Category = () => {
  const { categories, handleOnChangeSearch } = useCategory();
  const navigate = useNavigate();

  const handleOnClickInsert = () => {
    navigate(CategoryRouterEnum.CATEGORY_INSERT);
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'CATEGORIAS',
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

      <Table columns={columns} dataSource={categories} />
    </Screen>
  );
};

export default Category;
