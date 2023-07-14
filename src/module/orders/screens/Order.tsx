import Screen from '../../../shared/components/screen/Screen';
import { useOrder } from '../hooks/useOrder';

const Order = () => {
  const { orders } = useOrder();

  console.log('', orders);

  return (
    <Screen>
      <div>Ordens</div>
    </Screen>
  );
};

export default Order;
