import { Tooltip as TooltipAntd } from 'antd';

import { Containerexternal, ContainerTooltip } from './tooltipe.style';

interface TooltipProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  title?: string;
}

const Tooltip = ({ children, tooltip, title }: TooltipProps) => {
  if (title) {
    <TooltipAntd title={title}>{children}</TooltipAntd>;
  }
  return (
    <ContainerTooltip>
      <Containerexternal>{tooltip}</Containerexternal>
      {children}
    </ContainerTooltip>
  );
};

export default Tooltip;
