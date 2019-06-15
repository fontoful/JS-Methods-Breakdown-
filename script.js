const ages = [1, 5, 26, 60, 40];

const olderThan18 = ages.filter(age => age >= 18);
console.log(olderThan18);

const cities = [
  {
    name: "tupi",
    distancia: 132354435
  },
  {
    name: "tuga",
    distancia: 324243
  },
  {
    name: "tuma",
    distancia: 32424556
  }
];

const citylist = document.querySelector("#citylist");

cities
  .map(city => {
    let newCity = {
      name: city.name.charAt(0).toUpperCase() + city.name.slice(1)
    };
    return newCity;
  })
  .forEach(city => {
    let node = document.createElement("li");
    node.innerHTML = city.name;
    citylist.appendChild(node);
  });
