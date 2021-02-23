// const DOMAIN = 'https://intense-reaches-12245.herokuapp.com/api/';
// const newProduct = {
//   name: 'Комп`ютер Everest Home 4090 (4090_9104)',
//   enabled: 'true',
//   currentPrice: 27999.00,
//   previousPrice: 29999.00,
//   categories: 'Custome builds',
//   imageUrls: [
//     'https://i8.rozetka.ua/goods/20237547/copy_everest_4090_9102_5f7f661659049_images_20237547581.jpg',
//     'https://i2.rozetka.ua/goods/20237547/copy_everest_4090_9102_5f7f661659049_images_20237547711.jpg',
//     'https://i8.rozetka.ua/goods/20237547/copy_everest_4090_9102_5f7f661659049_images_20237547776.jpg'
//   ],
//   quantity: 100,
//   date: Date.now(),
//   color: 'black',
//   productUrl: '/men',
//   brand: 'Everest',
//   processor: 'Шестиядерный Intel Core i5-10400F (2.9 - 4.3 ГГц)',
// }

// axios.post('`${DOMAIN}/products`', newProduct)
//   .then((newProduct) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('error');
//   });
// const newProduct = {
//   name: 'new product for testing purposes',
//   currentPrice: 199.99,
//   previousPrice: 250,
//   categories: 'men',
//   imageUrls: [
//     'img/products/men/001.png',
//     'img/products/men/002.png',
//     'img/products/men/003.png',
//     'img/products/men/004.png'
//   ],
//   quantity: 100,
//   color: 'red',
//   brand: 'braaaand',
//   myCustomParam: 'some string or json for custom param'
// };

// fetch('https://intense-reaches-12245.herokuapp.com/api/products', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify(newProduct)
// }).then((res) => res.json())
//   .then((res) => console.log(res));