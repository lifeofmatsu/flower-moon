// seeds/users.js
const { User } = require("../models")

const users = [
    {
      id: 1,
      name: "tealover123",
      email: "tealover123@example.com",
      password: "hashedpassword123",
      shippingAddress: "123 Teastreet, Teacity",
    },
    {
      id: 2,
      name: "greenteaguru",
      email: "greenteaguru@example.com",
      password: "hashedpassword456",
      shippingAddress: "456 Greentea Lane, Greenvalley",
    },
    {
      id: 3,
      name: "oolongfanatic",
      email: "oolongfanatic@example.com",
      password: "hashedpassword789",
      shippingAddress: "789 Oolong Road, Oolongtown",
    },
    
    // {
    //   userId: 4,
    //   username: "whiteteaenthusiast",
    //   email: "whiteteaenthusiast@example.com",
    //   password: "hashedpassword987",
    //   shippingAddress: "987 Whitetea Street, Whitetown",
    // },
    // {
    //   userId: 5,
    //   username: "puerhlover",
    //   email: "puerhlover@example.com",
    //   password: "hashedpassword654",
    //   shippingAddress: "654 Pu-erh Avenue, Pu-erhville",
    // },
    // {
    //   userId: 6,
    //   username: "aromaticjasmine",
    //   email: "aromaticjasmine@example.com",
    //   password: "hashedpassword321",
    //   shippingAddress: "321 Jasmine Lane, Jasminecity",
    // },
    // {
    //   userId: 7,
    //   username: "oolongexplorer",
    //   email: "oolongexplorer@example.com",
    //   password: "hashedpassword012",
    //   shippingAddress: "012 Oolong Street, Oolongville",
    // },
    // {
    //   userId: 8,
    //   username: "herbalmaster",
    //   email: "herbalmaster@example.com",
    //   password: "hashedpassword876",
    //   shippingAddress: "876 Herbal Road, Herbalcity",
    // },

  ];
  
  const user = () => User.bulkCreate(users);


  module.exports = user;
  