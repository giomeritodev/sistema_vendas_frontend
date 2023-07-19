import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

import Screen from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { OrderType } from '../../../shared/types/OrderType';
import { useOrder } from '../hooks/useOrder';
import { OrderRoutesEnum } from '../router';

const Order = () => {
  const { orders } = useOrder();
  const navigate = useNavigate();

  const columns: ColumnsType<OrderType> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => a.date.localeCompare(b.date), //ordenar
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Usuário',
      dataIndex: 'user',
      key: 'user',
      render: (__, target) => <p>{target.user?.name}</p>,
    },
    {
      title: 'Qtd. Produtos',
      dataIndex: 'amountProducts',
      key: 'amountProducts',
      render: (text) => <p>{text}</p>,
    },
  ];

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PEDIDOS',
        },
      ]}
    >
      <Table
        onRow={(record) => ({
          onClick: () => navigate(`${OrderRoutesEnum.ORDER}/${record.id}`),
        })}
        columns={columns}
        dataSource={orders}
      />
    </Screen>
  );
};

export default Order;
