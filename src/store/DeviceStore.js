import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильник' },
      { id: 2, name: 'Смартфоны' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ];
    this._devices = [
      {
        id: 1,
        name: '12 pro',
        price: 10000,
        rating: 0,
        img: '222ba3ab-e66a-4183-8bf7-bd0ff270697d.jpg',
        createdAt: '2023-02-23T19:08:38.201Z',
        updatedAt: '2023-02-23T19:08:38.201Z',
        typeId: 2,
        brandId: null,
      },
      {
        id: 2,
        name: 'note pro',
        price: 10000,
        rating: 0,
        img: '2e5134e7-fac7-428a-b324-677121426528.jpg',
        createdAt: '2023-02-23T19:18:46.000Z',
        updatedAt: '2023-02-23T19:18:46.000Z',
        typeId: 2,
        brandId: null,
      },
      {
        id: 3,
        name: 'a51',
        price: 10000,
        rating: 0,
        img: '2f6bec67-eab4-4632-be1e-cf49f0572d86.jpg',
        createdAt: '2023-02-23T19:18:53.769Z',
        updatedAt: '2023-02-23T19:18:53.769Z',
        typeId: 2,
        brandId: null,
      },
      {
        id: 4,
        name: '11 pro',
        price: 10000,
        rating: 0,
        img: 'a66bea26-36e5-4315-9a4e-cdeb797dc4de.jpg',
        createdAt: '2023-02-23T19:19:13.232Z',
        updatedAt: '2023-02-23T19:19:13.232Z',
        typeId: 1,
        brandId: null,
      },
      {
        id: 5,
        name: 'Atlant',
        price: 10000,
        rating: 0,
        img: '21592d19-a538-4c84-9e5e-c5a0f1fc6f22.jpg',
        createdAt: '2023-02-23T19:19:49.117Z',
        updatedAt: '2023-02-23T19:19:49.117Z',
        typeId: 2,
        brandId: null,
      },
      {
        id: 6,
        name: 'Hgpo',
        price: 10000,
        rating: 0,
        img: '96d66b5e-0b70-4a13-921f-8d715eac04fd.jpg',
        createdAt: '2023-02-23T19:20:00.708Z',
        updatedAt: '2023-02-23T19:20:00.708Z',
        typeId: 2,
        brandId: null,
      },
      {
        id: 7,
        name: 'hdf',
        price: 10000,
        rating: 0,
        img: '36e2a5cc-4e6a-4c5e-9ebf-0d118b04ea61.jpg',
        createdAt: '2023-02-23T19:29:53.555Z',
        updatedAt: '2023-02-23T19:29:53.555Z',
        typeId: 2,
        brandId: 1,
      },
    ];
    makeAutoObservable(this);
  }

  setIsAuth(types) {
    this._types = types;
  }
  setUser(brands) {
    this._brands = brands;
  }
    setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get device() {
	return this._devices
  }
}
