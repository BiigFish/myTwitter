async function fetchData() {
  try {
    const response = await fetch("posts.json");
    const jsonData = await response.json();
    const dataList = document.getElementById("content");

    jsonData.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.className = "mb-4";
      listItem.innerHTML = `
                <li id="${item.date}" class="bg-gray-200 rounded-lg p-2">
                  <div class="flex justify-between">
                    <h2 class="font-bold text-sm text-red-400 w-fit">${item.title}</h2>
                    <button onClick="copyFunction('https://x.ratnotebook.com#${item.date}')" class="bg-slate-100 rounded-full px-1 text-sm text-slate-600">share post</button>
                  </div>
                  <p class="text-xs italic text-gray-600">${item.date}</p>
                  <div id="${item.date}LineClamp" class="transition-all duration-200 line-clamp-3 space-y-2">${item.text}</div>
                  <button id="${item.date}Button" class="text-blue-500 hover:text-blue-600">Show more</button>
                </li>
            `;
      dataList.appendChild(listItem);
      const text = document.getElementById(item.date + "LineClamp");
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

function copyFunction(text) {
  navigator.clipboard.writeText(text);
}
