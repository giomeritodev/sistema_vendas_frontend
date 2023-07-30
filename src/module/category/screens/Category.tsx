import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Modal, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import Button from '../../../shared/components/buttons/button/button';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyBetween } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../hooks/useCategory';

const { Search } = Input;

const Category = () => {
  const {
    categories,
    handleOnChangeSearch,
    handleOnClickInsert,
    handleOpenModalDelete,
    handleCancelModalDelete,
    handleConfirmDeleteCategory,
    openModalDelete,
    handleGoToEditCategory,
  } = useCategory();

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
    {
      title: 'Ações',
      dataIndex: '',
      width: 240,
      key: 'x',
      render: (__, category) => (
        <>
          <Button
            margin="0px 16px 0px 0px"
            onClick={() => handleGoToEditCategory(category.id)}
            shape="circle"
            icon={<EditOutlined />}
          />
          {category.amountProducts <= 0 && (
            <Button
              danger
              onClick={() => handleOpenModalDelete(category.id)}
              shape="circle"
              icon={<DeleteOutlined />}
            />
          )}
        </>
      ),
    },
  ];

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
      <Modal
        title="Atenção!"
        open={openModalDelete}
        onOk={handleConfirmDeleteCategory}
        onCancel={handleCancelModalDelete}
        okText="Sim"
        cancelText="Cancelar"
      >
        <p>Tem certeza que deseja excluir esta categoria?</p>
      </Modal>

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
