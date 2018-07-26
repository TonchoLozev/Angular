import {CarClass} from "./app/components/home/CarClass";
import {OwnerClass} from "./app/components/owners/OwnerClass";

let cars = [
  {
    id: 1,
    image: 'https://cdn.bringatrailer.com/wp-content/uploads/2017/10/59e0d4f11e488_Exterior7-940x701.jpg',
    make: 'BMW',
    model: 'M3',
    date: '2014-04-03',
    engine: 'V8, 5000 Liters, 546 HP',
    owner: 'Stoqn'
  },
  {
    id: 2,
    image: 'https://cdn-ds.com/media/websites/1773/content/2016_C-Class_Sedan.jpg?s=95784',
    make: 'Mercedes',
    model: 'C class',
    date: '2016-07-22',
    engine: 'V6, 3000 Liters, 257 HP',
    owner: 'Gosho'
  },
  {
    id: 3,
    image: 'https://dmi3w0goirzgw.cloudfront.net/gallery-images/840x560/411000/600/411633.jpg',
    make: 'Mitsubishi',
    model: 'Evo',
    date: '2011-02-19',
    engine: 'V6, 3000 Liters, 315 HP',
    owner: 'Stoqn'
  },
  {
    id: 4,
    image: 'https://img03.carview.co.jp/trade/img06/cars/2455216/21515124/japan%20car/2007+subaru+impreza+wrx+sti/01w.jpg',
    make: 'Subaru',
    model: 'Impreza WRX',
    date: '2007-01-03',
    engine: 'V4, 2000 Liters, 200 HP',
    owner: 'Ivan'
  },
  {
    id: 5,
    image: 'https://www.nationwidevehiclecontracts.co.uk/m/0/audi-a5-sportback-exterior-grey-front-2.jpg',
    make: 'Audi',
    model: 'A5',
    date: '2016-12-12',
    engine: 'V4, 2000 Liters, 225 HP',
    owner: 'Ivan'
  },
  {
    id: 6,
    image: 'https://cdn.shopify.com/s/files/1/1724/5219/articles/silver-tesla-model-s-19-inch-tst-wheels-brilliant-silver-1.jpg?v=1495134943',
    make: 'Tesla',
    model: 'S',
    date: '2015-07-05',
    engine: 'Full electric and is equal to 518 HP',
    owner: 'Pesho'
  }
];

let owners = [
  {
    id: 1,
    name: 'Gosho',
    age: 35,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTkkVHyWI53saoTLWBHItwNe7Q9w2tJZSE8FKXWPt2aav6ZNI',
    profession: 'Drug dealer'
  },
  {
    id: 2,
    name: 'Pesho',
    age: 17,
    image: 'https://i49.vbox7.com/o/5cf/5cf4d5a6170.jpg',
    profession: 'Assassin'
  },
  {
    id: 3,
    name: 'Ivan',
    age: 21,
    image: 'https://vignette.wikia.nocookie.net/sawfilms/images/2/2b/Ivan20001.jpg/revision/latest?cb=20101129121129',
    profession: 'Just Vankata'
  },
  {
    id: 4,
    name: 'Stoqn',
    age: 62,
    image: 'https://fakti.bg/img/news/12/256612/850f1c9c32a4cf549f50217e0b34bc84_big.jpg',
    profession: 'Businessman'
  }
];

const dataService = {
  getAllCars: () => {
    return new Promise<Array<CarClass>>((res, rej) => {
      res(cars);
    })
  },
  getCarById: (id: Number) => {
    return new Promise<CarClass>((res, rej) => {
      res(cars.filter(c => id === c.id)[0])
    })
  },
  getAllOwners: () => {
    return new Promise<Array<OwnerClass>>((res, rej) => {
      res(owners);
    })
  },
  getOwnerByName: (name) => {
    return new Promise<OwnerClass>((res, rej) => {
      res(owners.filter(o => name === o.name)[0])
    })
  },
  getCarsByOwner: (name) => {
    return new Promise<Array<CarClass>>((res, rej) => {
      res(cars.filter(c => name === c.owner));
    })
  }
};

export default dataService;
