import { Descriptions, Divider, Spin } from 'antd';
import { useParams } from 'react-router-dom';

import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyCenter } from '../../../shared/components/styles/display.style';
import { useOrderDetail } from '../hooks/useOrderDetail';
import { OrderRoutesEnum } from '../router';

const OrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { order, loading } = useOrderDetail(orderId);

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PEDIDOS',
          navigateTo: OrderRoutesEnum.ORDER,
        },
        {
          name: 'DETALHES DO PEDIDO',
        },
      ]}
    >
      {!order || loading ? (
        <DisplayFlexJustifyCenter>
          <Spin size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <>
          <Divider />
          {/** Descrição do usuário */}
          <Descriptions title="Dados do usuário" bordered>
            <Descriptions.Item label="Nome" span={2}>
              {order?.user.name}
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>
              {order?.user.email}
            </Descriptions.Item>
            <Descriptions.Item label="Telefone" span={2}>
              {order?.user.phone}
            </Descriptions.Item>
            <Descriptions.Item label="CPF" span={2}>
              {order?.user.cpf}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          {/** Dados do pagamento */}
          <Descriptions title="Dados do pagamento" bordered>
            <Descriptions.Item label="Preço" span={2}>
              {order?.payment?.price}
            </Descriptions.Item>
            <Descriptions.Item label="Desconto" span={2}>
              {order?.payment?.discount}
            </Descriptions.Item>
            <Descriptions.Item label="Preço Final" span={2}>
              {order?.payment?.finalPrice}
            </Descriptions.Item>
            <Descriptions.Item label="Tipo de Pagamento">{order?.payment?.type}</Descriptions.Item>
            <Descriptions.Item label="Status">
              {order?.payment?.paymentStatus?.name}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          {/** Dados do endereço */}
          <Descriptions title="Dados do endereço" bordered>
            <Descriptions.Item label="Nome" span={2}>
              Giomerito Alves de Souza
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>
              giomerito.dev@gmail.com
            </Descriptions.Item>
            <Descriptions.Item label="Telefone" span={2}>
              (77)9 9966-6600
            </Descriptions.Item>
            <Descriptions.Item label="CPF" span={2}>
              014.209.555-94
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          {/** Produtos */}
          <Descriptions title="Produtos" bordered>
            <Descriptions.Item label="Nome" span={2}>
              Giomerito Alves de Souza
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>
              giomerito.dev@gmail.com
            </Descriptions.Item>
            <Descriptions.Item label="Telefone" span={2}>
              (77)9 9966-6600
            </Descriptions.Item>
            <Descriptions.Item label="CPF" span={2}>
              014.209.555-94
            </Descriptions.Item>
          </Descriptions>
        </>
      )}
    </Screen>
  );
};

export default OrderDetail;
