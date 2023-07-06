let searchInputEl = document.getElementById("input");
let resultsEl = document.getElementById("resultContainer");
let spinnerEl = document.getElementById("spinner");
let generateButton = document.getElementById("generateButton");
let searchInputVal = "";
let Images = [];
async function onChangeSearchInput(event) {
  event.preventDefault();
  spinnerEl.classList.remove("d-none");
  searchInputVal = event.target.value;
  searchInputEl.textContent = searchInputVal;
  console.log(searchInputEl.value);
  await getImages(searchInputEl.value);
  spinnerEl.classList.add("d-none");
  displaySearchResults(Images);
}
const Api = "https://api.openai.com/v1/images/generations";
const Access_Token = "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";

const getImages = async (topic) => {
  // request body
  const requestBody = {
    prompt: `${topic}`,
    n: 3,
    size: "1024x1024",
  };

  // request options
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Access_Token}`,
    },
    body: JSON.stringify(requestBody),
  };

  // making API call and parsing response

  const response = await fetch(Api, requestOptions);
  const data = await response.json();
  console.log(data.data[0].url);
  Images = await data.data;
  return Images;
};

async function createAndAppendItem(item) {
  let ImageContainer = document.createElement("div");
  ImageContainer.classList.add("image-card", "mt-10px");
  resultsEl.appendChild(ImageContainer);

  let imageEl = document.createElement("img");
  imageEl.src = item.url;
  imageEl.classList.add("image");
  ImageContainer.appendChild(imageEl);
}
function displaySearchResults(Images) {
  resultsEl.textContent = "";
  for (let item of Images) {
    createAndAppendItem(item);
  }
}

generateButton.addEventListener("click", onChangeSearchInput);
