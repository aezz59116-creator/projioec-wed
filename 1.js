const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const quantitySpan = document.querySelector(".asg");
let q = 1;

// ✅ Plus
plus.addEventListener("click", () => {
  q++;
  quantitySpan.textContent = q;
});

// ✅ Minus
minus.addEventListener("click", () => {
  if (q > 1) {
    q--;
    quantitySpan.textContent = q;
  }
});
