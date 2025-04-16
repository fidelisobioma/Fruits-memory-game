import { useState } from "react";

function Cards() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple", img: "src/assets/apple.png" },
    { id: 2, name: "Cucumber", img: "src/assets/cucumber.png" },
    { id: 3, name: "Mango", img: "src/assets/mango.png" },
    { id: 4, name: "Pineapple", img: "src/assets/pineapple.png" },
    { id: 5, name: "Banana", img: "src/assets/banana.png" },
    { id: 6, name: "Grape", img: "src/assets/grape.png" },
    { id: 7, name: "Cashew", img: "src/assets/cashew.png" },
    { id: 8, name: "Cherry", img: "src/assets/cherry.png" },
    { id: 9, name: "Pawpaw", img: "src/assets/pawpaw.png" },
    { id: 10, name: "Strawberry", img: "src/assets/berry.png" },
    { id: 11, name: "Watermelon", img: "src/assets/melon.png" },
    { id: 12, name: "Coconut", img: "src/assets/coconut.png" },
  ]);
  const [basket, setBasket] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const handleClick = (index, fruitname) => {
    const newFruits = [...fruits];
    const randomNumber = Math.floor(Math.random() * fruits.length);

    [newFruits[index], newFruits[randomNumber]] = [
      newFruits[randomNumber],
      newFruits[index],
    ];
    setFruits(newFruits);
    //score logic
    if (score > bestScore && basket.includes(fruitname)) {
      //   setBasket([]);
      setBestScore(score);
    }

    if (basket.includes(fruitname)) {
      setBasket([]);
    }
    basket.push(fruitname);
    setScore(basket.length);
  };

  return (
    <>
      <div className="p-3 bg-white">
        <h1 className="font-bold text-2xl">Fruits memory game</h1>
        <br /> <br />
        <p>Score: {basket.length}</p>
        <br />
        <p>Best Score: {bestScore}</p>
        <br /> <br />
        <p>
          Gain point by clicking on a card, you are not allowed to click on
          image twice
        </p>
      </div>
      <div className="bg-red-200 grid grid-rows-6 md:grid-rows-4 grid-flow-col gap-4 p-3">
        {fruits.map((fruit, index) => (
          <div
            className="border-solid border-2 border-slate-700 p-5 rounded"
            key={fruit.id}
            onClick={() => handleClick(index, fruit.name)}
          >
            {fruit.name}
            <img src={fruit.img} alt={fruit.name} className="w-full" />
          </div>
        ))}
      </div>
    </>
  );
}
export default Cards;
