import { ColumnsType } from 'antd/es/table';

import Table from '../../../shared/components/table/Table';
import { convertNumberToMoney } from '../../../shared/functions/money';
import { OrderProductType } from '../../../shared/types/OrderProductType';

interface ListOrderProductProps {
  ordersProduct?: OrderProductType[];
}

const ListOrderProducts = ({ ordersProduct }: ListOrderProductProps) => {
  if (!ordersProduct || ordersProduct.length <= 0) {
    return null;
  }

  const columns: ColumnsType<OrderProductType> = [
    {
      title: 'Nome do produto',
      dataIndex: 'name',
      key: 'name',
      render: (__, target) => <a>{target.product?.name}</a>,
    },
    {
      title: 'Quantidade',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Preço',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <a>{convertNumberToMoney(text)}</a>,
    },
    {
      title: 'Total item',
      dataIndex: 'total',
      key: 'total',
      render: (__, target) => <p>{convertNumberToMoney(target.price * target.amount)}</p>,
    },
  ];

  return (
    <>
      <h3>Produtos</h3>
      <Table columns={columns} dataSource={ordersProduct} />
    </>
  );
};

export default ListOrderProducts;
