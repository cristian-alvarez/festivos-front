import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Icon,
  Input,
  Select,
  Button,
  notification
} from "antd";
import { getAccessTokenApi } from "../../../../api/auth";
import { addHolidayApi, updateHolidayApi } from "../../../../api/holiday";
import { months } from "../../../../config/properties";

import "./AddEditHolidayForm.scss";

export default function AddEditHolidayForm(props) {
  const { setIsVisibleModal, setReloadHolidays, holiday } = props;
  const [holidayData, setHolidayData] = useState({});

  useEffect(() => {
    if (holiday) {
      setHolidayData(holiday);
    } else {
      setHolidayData({});
    }
  }, [holiday]);

  const processHoliday = e => {
    e.preventDefault();
    const { id, tipo, info, motivo, dia, mes } = holidayData;

    if (!id || !tipo || !info || !motivo || !dia || !mes) {
      notification["error"]({
        message: "Todos los campos son obligatorios."
      });
    } else {
      if (!holiday) {
        addHoliday();
      } else {
        updateHoliday();
      }
    }
  };

  const addHoliday = () => {
    const token = getAccessTokenApi();

    addHolidayApi(token, holidayData)
      .then(response => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message
        });
        setIsVisibleModal(false);
        setReloadHolidays(true);
        setHolidayData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor."
        });
      });
  };

  const updateHoliday = () => {
    const token = getAccessTokenApi();
    updateHolidayApi(token, holiday._id, holidayData)
      .then(response => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message
        });
        setIsVisibleModal(false);
        setReloadHolidays(true);
        setHolidayData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor."
        });
      });
  };

  return (
    <div className="add-edit-holiday-form">
      <AddEditForm
        holidayData={holidayData}
        setHolidayData={setHolidayData}
        holiday={holiday}
        processHoliday={processHoliday}
      />
    </div>
  );
}

function AddEditForm(props) {
  const { holidayData, setHolidayData, holiday, processHoliday } = props;
  const { Option } = Select;

  return (
    <Form className="add-edit-holiday-form" layout="inline" onSubmit={processHoliday}>
      <Row gutter={24}>
        <Col span={8}>
          <Input
            prefix={<Icon type="edit" />}
            placeholder="Motivo del festivo"
            value={holidayData.motivo}
            onChange={e => setHolidayData({ ...holidayData, motivo: e.target.value })}
          />
        </Col>
        <Col span={8}>
          <Input
            prefix={<Icon type="edit" />}
            placeholder="Código del festivo"
            value={holidayData.id}
            onChange={e => setHolidayData({ ...holidayData, id: e.target.value })}
          />
        </Col>

         <Col span={8}>
          <Select
            placeholder="Seleccione un tipo"
            onChange={e => setHolidayData({ ...holidayData, tipo: e })}
            value={holidayData.tipo}>
            <Option value="admin">inamovible</Option>
            <Option value="editor">puente</Option>
            <Option value="reviwer">trasladable</Option>
          </Select>
        </Col>

      </Row>
      <Row gutter={24}>
        <Col span={8}>
          <Input
            prefix={<Icon type="link" />}
            placeholder="Enlace wiki"
            value={holidayData.info}
            onChange={e =>
              setHolidayData({
                ...holidayData,
                info: transformTextToUrl(e.target.value)
              })
            }
          />
        </Col>
        <Col span={8}>

         <Select
            placeholder="Seleccione el mes"
            onChange={e => setHolidayData({ ...holidayData, mes: e })}
            value={holidayData.mes}>
            {months.map((month, index) =>
            <option value={index}>{month}</option>)}
          </Select>
        
        </Col>
        <Col span={8}>
          <Input
            prefix={<Icon type="calendar" />}
            type="text" pattern="[0-9]*"
            placeholder="Día"
            value={holidayData.dia}
            onChange={e =>
              setHolidayData({ ...holidayData, dia: e.target.value })}
          />
        </Col>
      </Row>

      <Button type="primary" htmlType="submit" className="btn-submit">
        {holiday ? "Actualizar festivo" : "Crear festivo"}
      </Button>
    </Form>
  );
}

function transformTextToUrl(text) {
  const url = text.replace(" ", "-");
  return url.toLowerCase();
}
