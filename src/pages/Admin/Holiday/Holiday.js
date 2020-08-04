import React, { useState, useEffect } from "react";
import { Button, notification } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Modal from "../../../components/Modal";
import HolidaysList from "../../../components/Admin/Holiday/HolidaysList";
import Pagination from "../../../components/Pagination";
import AddEditHolidayForm from "../../../components/Admin/Holiday/AddEditHolidayForm";
import ViewHoliday from "../../../components/Admin/Holiday/ViewHoliday";
import { getHolidaysApi } from "../../../api/holiday";

import "./Holiday.scss";

function Holiday(props) {
  const { location, history } = props;
  const [holidays, setHolidays] = useState(null);
  const [reloadHolidays, setReloadHolidays] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getHolidaysApi(5, page)
      .then(response => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message
          });
        } else {
          setHolidays(response.holidays);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor."
        });
      });
    setReloadHolidays(false);
  }, [page, reloadHolidays]);

  const addHoliday = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo festivo");
    setModalContent(
      <AddEditHolidayForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadHolidays={setReloadHolidays}
        holiday={null}
      />
    );
  };

  const editHoliday = holiday => {
    setIsVisibleModal(true);
    setModalTitle("Editar festivo");
    setModalContent(
      <AddEditHolidayForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadHolidays={setReloadHolidays}
        holiday={holiday}
      />
    );
  };

  const viewHoliday = holiday => {
    setIsVisibleModal(true);
    setModalTitle("Datos del festivo");
    setModalContent(
      <ViewHoliday
        setIsVisibleModal={setIsVisibleModal}
        holiday={holiday}
      />
    );
  };

  if (!holidays) {
    return null;
  }

  return (
    <div className="holiday">
      <div className="holiday__add-holiday">
        <Button type="primary" onClick={addHoliday}>
          Nuevo festivo
        </Button>
      </div>
      <HolidaysList
        holidays={holidays}
        setReloadHolidays={setReloadHolidays}
        editHoliday={editHoliday}
        viewHoliday={viewHoliday}
      />
      <Pagination holidays={holidays} location={location} history={history} />
      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
        width="75%"
      >
        {modalContent}
      </Modal>
    </div>
  );
}

export default withRouter(Holiday);
