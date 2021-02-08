import "./styles.css";
import webpack from "./assets/webpack.svg";
import gemini from "./assets/saga-kanon.png";
import data from "./data.json";
import { HelloWorld } from "./components/HelloWorld";

const arr = [1, 2, 3, 4, 5],
  codeESNext = () => console.log(...arr);

console.log("Hola desde webpack con configuración 👍");

codeESNext();

const d = document,
  $app = d.getElementById("app"),
  $h1 = d.createElement("h1"),
  $logo = d.createElement("img"),
  $image = d.createElement("img"),
  $nav = d.createElement("nav");

let $menu = "";
const hello = new HelloWorld("Vanilla JS").greet();

$h1.textContent = hello;
$logo.src = webpack;
$logo.classList.add("logo");
$image.src = gemini;
$image.classList.add("gemini");

data.links.forEach((el) => ($menu += `<a href="${el[1]}">${el[0]}</a>`));
$nav.innerHTML = $menu;

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
// $app.appendChild($image);
