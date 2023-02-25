import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'



export const DevicePage = () => {
	const device = {
        id: 1,
        name: 'a51',
        price: 10000,
        rating: 5,
        img: '2f6bec67-eab4-4632-be1e-cf49f0572d86.jpg',
        createdAt: '2023-02-23T19:18:53.769Z',
        updatedAt: '2023-02-23T19:18:53.769Z',
        typeId: 2,
        brandId: null,
      }

		const description = [
			{id: 1, title: 'Оперативная память', description: '5 гб'},
			{id: 2, title: 'поапоративная паопоапо', description: '43'},
			{id: 3, title: 'Операапопамять', description: '6599'},
			{id: 4, title: 'апоптивная память', description: '68'},
			{id: 5, title: 'Оаплая память', description: '3535'},
		]


  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.id} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}>
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}>
            <h3>От: {device.price} руб.</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-3">
			<h1>Характеристики</h1>
        {description.map((info, index) => (
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
}
