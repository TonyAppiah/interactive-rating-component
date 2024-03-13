function selectRate(e) {
  const rate = document.querySelectorAll(".rate");

  rate.forEach((rate) => {
    rate.classList.remove("rate-selected");
  });

  if (!e.target.classList.contains("ratings")) {
    e.target.classList.add("rate-selected");
  }
}

const ratings = document.querySelector(".ratings");
ratings.addEventListener("click", selectRate);

function displayThankYouCard() {
  const mainDiv = document.querySelector(".main");
  const rateSelected = document.querySelector(".rate-selected");

  mainDiv.innerHTML = `
    <div class="center">
        <div>
          <img src="images/illustration-thank-you.svg" alt="" />
        </div>
        <div class="selected">
          <p>You selected out ${rateSelected.innerHTML} of 5</p>
        </div>
        <div class="heading"><h1>Thank you!</h1></div>
        <p class="text">
         We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>
      </div>
    `;
}

const submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", displayThankYouCard);
