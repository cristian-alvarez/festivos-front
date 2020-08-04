import React from "react";
import { Descriptions} from "antd";


import "./ViewHoliday.scss";

export default function ViewHoliday(props) {
  const { holiday } = props;


  return (
    <div>
      <Holiday
        holiday={holiday}
      />
    </div>
  );
}

function Holiday(props) {
  const { holiday } = props;

  return (

    <Descriptions layout="vertical">
      <Descriptions.Item label="Motivo">{holiday.motivo}</Descriptions.Item>
      <Descriptions.Item label="Código">{holiday.id}</Descriptions.Item>
      <Descriptions.Item label="Tipo">{holiday.tipo}</Descriptions.Item>
      <Descriptions.Item label="Wiki" span={2}>{holiday.info}</Descriptions.Item>
      <Descriptions.Item label="Día">Día: {holiday.dia} / Mes: {holiday.mes + 1}</Descriptions.Item>
    </Descriptions>
  );
}
