const container = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
  const box = document.createElement(`div`);
  box.classList.add(`box`);

  let htmlValue = i;
  if (i % 15 == 0) {
    // console.log("FizzBuzz");
    htmlValue = "FizzBuzz";
    box.classList.add(htmlValue);
  } else if (i % 5 == 0) {
    // console.log("Buzz");
    htmlValue = "Buzz";
    box.classList.add(htmlValue);
  } else if (i % 3 == 0) {
    // console.log("Fizz");
    htmlValue = "Fizz";
    box.classList.add(htmlValue);
  } else {
    // console.log(i);
    htmlValue = i;
  }
  console.log(htmlValue);
  // box.innerHTML = `<div>${htmlValue}</div>`;
  box.innerHTML = `<div class="col"><div class="text-center" id="color">${htmlValue}</div></div>`;
  container.append(box);
}
