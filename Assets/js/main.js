function checkAge(event) {
  const input = document.getElementById("age").value;
  const child = document.getElementById("childCard");
  const adult = document.getElementById("adultCard");

  if (input === "") {
    child.style.display = "flex";
    adult.style.display = "flex";
  } else if (input <= 17) {
    child.style.display = "flex";
    adult.style.display = "none";
  } else {
    child.style.display = "none";
    adult.style.display = "flex";
  }
}
