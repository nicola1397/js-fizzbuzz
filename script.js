const container = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
  const box = document.createElement(`div`);
  box.classList.add(`box`);

  let htmlValue = i;
  if (i % 15 == 0) {
    htmlValue = "FizzBuzz";
    box.classList.add(htmlValue);
  } else if (i % 5 == 0) {
    htmlValue = "Buzz";
    box.classList.add(htmlValue);
  } else if (i % 3 == 0) {
    htmlValue = "Fizz";
    box.classList.add(htmlValue);
  } else {
    htmlValue = i;
  }

  console.log(htmlValue);
  box.innerHTML = `<div class="col"><div class="text-center" id="color">${htmlValue}</div></div>`;
  container.append(box);
}
