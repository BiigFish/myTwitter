async function fetchData() {
  try {
    const response = await fetch("posts.json");
    const jsonData = await response.json();
    const dataList = document.getElementById("content");

    jsonData.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.className = "mb-4";
      listItem.innerHTML = `
                <li class="bg-gray-200 rounded-lg p-2">
                  <h2 class="font-bold text-sm text-red-400">${item.title}</h2>
                  <h2 class="text-xs italic text-gray-600">${item.date}</h2>
                  <div id="${item.date}" class="transition-all duration-200 line-clamp-3">${item.text}</div>
                  <button id="${item.date}Button" class="text-blue-500 hover:text-blue-600">Show more</button>
                </li>
            `;
      dataList.appendChild(listItem);
      const text = document.getElementById(item.date);
      const toggleButton = document.getElementById(item.date + "Button");

      toggleButton.addEventListener("click", function () {
        text.classList.toggle("line-clamp-3");

        if (text.classList.contains("line-clamp-3")) {
          toggleButton.textContent = "Show more";
        } else {
          toggleButton.textContent = "Show less";
        }
      });

      if (text) {
        // const lineHeight = parseInt(getComputedStyle(text).lineHeight);
        const maxHeight = 24 * 3;
        const actualHeight = text.offsetHeight;
        if (actualHeight < maxHeight) {
          toggleButton.classList.add("hidden");
        }
      }
    });
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}
window.addEventListener("load", fetchData);
