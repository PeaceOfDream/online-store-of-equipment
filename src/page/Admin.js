import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { CreateBrand } from '../components/modals/CreateBrand';
import { CreateDevice } from '../components/modals/CreateDevice';
import { CreateType } from '../components/modals/CreateType';

export const Admin = () => {
  const [brandVisible, setBrandVisible] = useState();
  const [typeVisible, setTypeVisible] = useState();
  const [deviceVisible, setDeviceVisible] = useState();

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={'outline-dark'}
        onClick={() => setTypeVisible(true)}
        className="m-2 p-2"
      >
        Добавить тип
      </Button>
      <Button
        variant={'outline-dark'}
        onClick={() => setBrandVisible(true)}
        className="m-2 p-2"
      >
        Добавить бренд
      </Button>
      <Button
        variant={'outline-dark'}
        onClick={() => setDeviceVisible(true)}
        className="m-2 p-2"
      >
        Добавить устроиство
      </Button>
      <CreateBrand
        show={brandVisible}
        onHide={() => {
          setBrandVisible(false);
        }}
      />
      <CreateDevice
        show={deviceVisible}
        onHide={() => {
          setDeviceVisible(false);
        }}
      />
      <CreateType
        show={typeVisible}
        onHide={() => {
          setTypeVisible(false);
        }}
      />
    </Container>
  );
};
