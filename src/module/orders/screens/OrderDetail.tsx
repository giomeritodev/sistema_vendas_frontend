import { Descriptions, Divider } from 'antd';

import Screen from '../../../shared/components/screen/Screen';
import { OrderRoutesEnum } from '../router';

const OrderDetail = () => {
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
      <Divider />
      {/** Descrição do usuário */}
      <Descriptions title="Dados do usuário" bordered>
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
      {/** Dados do pagamento */}
      <Descriptions title="Dados do pagamento" bordered>
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
    </Screen>
  );
};

export default OrderDetail;
