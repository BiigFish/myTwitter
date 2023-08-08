async function fetchData() {
    try {
        const response = await fetch('posts.json');
        const jsonData = await response.json();
        const dataList = document.getElementById('content');

        jsonData.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'mb-4';
            listItem.innerHTML = `
                <li class="bg-gray-200 rounded-lg p-2">
                  <h2 class="font-bold text-sm text-red-400 italic">${item.date}</h2>
                  <p id="${item.date}" class="transition-all	 duration-200 line-clamp-3">${item.text}</p>
                  <button id="${item.date}Button" class="text-blue-500 hover:text-blue-600">Show more</button>
                </li>
            `;
            dataList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
  }
  window.addEventListener('load', fetchData);


document.addEventListener("DOMContentLoaded", function() {
  const title = document.getElementById("test2");
  const toggleButton = document.getElementById("showMoreButton");

  toggleButton.addEventListener("click", function() {
    title.classList.toggle("line-clamp-3");

    if (title.classList.contains("line-clamp-3")) {
      toggleButton.textContent = "Show more";
    } else {
      toggleButton.textContent = "Show less";
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const title = document.getElementById("test2");
  const toggleButton = document.getElementById("showMoreButton");


  if (title) {
    const lineHeight = parseInt(getComputedStyle(title).lineHeight);
    const maxHeight = lineHeight * 3;
    const actualHeight = title.offsetHeight;
    if (actualHeight < maxHeight) {
      toggleButton.classList.add("hidden");
    }
  }
});