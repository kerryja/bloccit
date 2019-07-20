"use strict";

const faker = require("faker");

let topics = [];

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
var today = new Date();

for (let i = 1; i <= 15; i++) {
  topics.push({
    title: faker.hacker.noun(),
    description: faker.hacker.phrase(),
    createdAt: today.toLocaleDateString("en-US", options),
    updatedAt: new Date()
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Topics", topics, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Topics", null, {});
  }
};
