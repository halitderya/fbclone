export default function ScrollBarToggle() {
const midColumnElement = document.getElementById("MidColumn");
if (midColumnElement?.classList.contains("no-scroll")) {
  midColumnElement.classList.remove("no-scroll");

}
else if (!midColumnElement?.classList.contains("no-scroll")) {
  midColumnElement?.classList.add("no-scroll");
}};