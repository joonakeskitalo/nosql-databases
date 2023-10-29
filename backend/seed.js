const { AceBase } = require("acebase");

const db = new AceBase("my_db");

const mockData = [
  {
    id: "1",
    name: "Example burger",
    description: "example description",
    address: "Example Street 1",
    website: "examplewebsite.com",
  },
  {
    id: "2",
    name: "Example burger",
    description: "example description",
    address: "Example Street 1",
    website: "examplewebsite.com",
  },
  {
    id: "3",
    name: "Example burger",
    description: "example description",
    address: "Example Street 1",
    website: "examplewebsite.com",
  },
  {
    id: "4",
    name: "Example burger",
    description: "example description",
    address: "Example Street 1",
    website: "examplewebsite.com",
  },
  {
    id: "5",
    name: "Example burger",
    description: "example description",
    address: "Example Street 1",
    website: "examplewebsite.com",
  },
];

const seedMockData = async () => {
  await db.ref("burgers").set(mockData);
};

seedMockData();

