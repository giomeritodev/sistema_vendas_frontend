import { Descriptions, Divider } from 'antd';
import { useParams } from 'react-router-dom';

import Loading from '../../../shared/components/loading/Loading';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyCenter } from '../../../shared/components/styles/display.style';
import { insertMaskInCep } from '../../../shared/functions/cep';
import { insertMaskInCpf } from '../../../shared/functions/cpf';
import { convertNumberToMoney } from '../../../shared/functions/money';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import ListOrderProducts from '../components/ListOrderProduct';
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
          <Loading size="large" />
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
              {insertMaskInPhone(order?.user.phone)}
            </Descriptions.Item>
            <Descriptions.Item label="CPF" span={2}>
              {insertMaskInCpf(order?.user.cpf)}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          {/** Dados do pagamento */}
          <Descriptions title="Dados do pagamento" bordered>
            <Descriptions.Item label="Preço" span={2}>
              {convertNumberToMoney(order?.payment?.price || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Desconto" span={2}>
              {convertNumberToMoney(order?.payment?.discount || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Preço Final" span={2}>
              {convertNumberToMoney(order?.payment?.finalPrice || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Tipo de Pagamento">{order?.payment?.type}</Descriptions.Item>
            <Descriptions.Item label="Status">
              {order?.payment?.paymentStatus?.name}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          {/** Dados do endereço */}
          <Descriptions title="Dados do endereço" bordered>
            <Descriptions.Item label="Cidade" span={2}>
              {order?.address?.city?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Estado">
              {order?.address?.city?.state?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Rua" span={2}>
              Nome da Rua
            </Descriptions.Item>
            <Descriptions.Item label="Complemento" span={2}>
              {order?.address?.complement}
            </Descriptions.Item>
            <Descriptions.Item label="Número">{order?.address?.numberAddress}</Descriptions.Item>
            <Descriptions.Item label="CEP">
              {insertMaskInCep(order?.address?.cep || '')}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          {/** Produtos */}
          <ListOrderProducts ordersProduct={order.ordersProduct} />
        </>
      )}
    </Screen>
  );
};

export default OrderDetail;
