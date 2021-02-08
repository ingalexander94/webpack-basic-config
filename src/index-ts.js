import webpack from "./assets/webpack.svg";
import data from "./data.json";
import { HelloWorld } from "./components/HelloWorld.ts";
import "./styles.css";

const d = document,
  $app = d.getElementById("app"),
  $h1 = d.createElement("h1"),
  $logo = d.createElement("img"),
  $nav = d.createElement("nav");

let $menu = "";
const hello = new HelloWorld("TypeScript").greet();
$h1.textContent = hello;
$logo.src = webpack;
$logo.classList.add("logo");

data.links.forEach((el) => ($menu += `<a href="${el[1]}">${el[0]}</a>`));
$nav.innerHTML = $menu;

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
