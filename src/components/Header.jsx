import reactImg from "../assets/react-core-concepts.png";
const reatDescription = [
  "Essential React principles you'll need for almost any application development.\n",
  "Core React concepts crucial for building most types of applications.\n",
  "Key React fundamentals that are vital for developing nearly any app.\n",
];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const dynamicDiscription = reatDescription[getRandomInt(2)];
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {dynamicDiscription} Mastering these foundational React concepts will
          not only set you up for success in building diverse and robust
          applications but also empower you to tackle more complex challenges
          with confidence and efficiency.
        </p>
      </header>
    </div>
  );
}
