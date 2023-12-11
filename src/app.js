/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
    console.log("Hello Iker from the console!");
    console.log(Math.random() * 10) + 1;
    console.log(Math.floor(Math.random() * 10) + 1);
  });
};

let generateExcuse = () => {
  let pronoun1 = ["A", "The"];
  let subject = ["cat", "lion", "jogger", "taxi driver", "clown"];
  let verb = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let pronoun2 = [
    "my glass of water",
    "my cat",
    "my nose",
    "my shirt",
    "my bike"
  ];
  let where = [
    "on the street",
    "in my house",
    "in my driveway",
    "in my backyard"
  ];

  let pronoun1index = Math.floor(Math.random() * pronoun1.length);
  let subjectindex = Math.floor(Math.random() * subject.length);
  let verbindex = Math.floor(Math.random() * verb.length);
  let pronoun2index = Math.floor(Math.random() * pronoun2.length);
  let whereindex = Math.floor(Math.random() * where.length);

  return (
    pronoun1[pronoun1index] +
    " " +
    subject[subjectindex] +
    " " +
    verb[verbindex] +
    " " +
    pronoun2[pronoun2index] +
    " " +
    where[whereindex] +
    "."
  );
};
