const exampleUser = {
  thumbnail: 'https://randomuser.me/api/portraits/men/44.jpg',
  name: 'Tim Wright',
  userName: 'tinykoala227',
  email: 'tim.wright@example.com',
  cell: '0479-199-052',
  street: 'Bollinger Rd 4155',
  city: 'Sunshine Coast',
  state: 'Queensland',
  postcode: '1046',
  phone: '05-3370-8052',
  id: '1',
};

export default {
  users: [
    { ...exampleUser, id: Math.random().toString(36).substr(2, 9) },
    { ...exampleUser, id: Math.random().toString(36).substr(2, 9) },
    { ...exampleUser, id: Math.random().toString(36).substr(2, 9) },
    { ...exampleUser, id: Math.random().toString(36).substr(2, 9) },
    { ...exampleUser, id: Math.random().toString(36).substr(2, 9) },
    { ...exampleUser, id: Math.random().toString(36).substr(2, 9) },
    { ...exampleUser, id: Math.random().toString(36).substr(2, 9) },
    { ...exampleUser, id: Math.random().toString(36).substr(2, 9) },
  ],
};
