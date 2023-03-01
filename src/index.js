import { sum } from "./modules/sum";

const root = document.querySelector('#root');
root.textContent = sum(45, -3).toString();

