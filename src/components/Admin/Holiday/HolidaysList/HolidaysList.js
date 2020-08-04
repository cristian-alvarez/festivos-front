import React from "react";
import { List, Button, Icon, Modal, notification } from "antd";
import { getAccessTokenApi } from "../../../../api/auth";
import { deleteHolidayApi } from "../../../../api/holiday";

import "./HolidaysList.scss";

const { confirm } = Modal;

export default function HolidaysList(props) {
  const { holidays, setReloadHolidays, editHoliday, viewHoliday } = props;

  const deleteHoliday = holiday => {
    const accessToken = getAccessTokenApi();

    confirm({
      title: "Eliminando festivo",
      content: `¿Estás seguro de eliminar el festivo ${holiday.motivo}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteHolidayApi(accessToken, holiday._id)
          .then(response => {
            const typeNotification =
              response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
              message: response.message
            });
            setReloadHolidays(true);
          })
          .catch(() => {
            notification["error"]({
              message: "Error del servidor."
            });
          });
      }
    });
  };

  return (
    <div className="holidays-list">
      <List
        className="users-active"
        dataSource={holidays.docs}
        renderItem={holiday => (
          <Holiday holiday={holiday} deleteHoliday={deleteHoliday} editHoliday={editHoliday} viewHoliday={viewHoliday}/>
        )}
      />
    </div>
  );
}

function Holiday(props) {
  const { holiday, viewHoliday, deleteHoliday, editHoliday } = props;

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => viewHoliday(holiday)}>
          <Icon type="eye" />
        </Button>,
        <Button type="primary" onClick={() => editHoliday(holiday)}>
          <Icon type="edit" />
        </Button>,
        <Button type="danger" onClick={() => deleteHoliday(holiday)}>
          <Icon type="delete" />
        </Button>
      ]}
    >
      <List.Item.Meta 
        title={holiday.motivo}
        description={holiday.info} />
    </List.Item>
  );
}
