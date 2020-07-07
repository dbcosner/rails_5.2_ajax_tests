console.log("users.js")

window.addEventListener("load", () => {
  const element = document.querySelector("#ajax-form");
  element.addEventListener("ajax:success", (event) => {
    const [_data, _status, xhr] = event.detail;
    element.insertAdjacentHTML("beforeend", "<p>User ID: " + _data.id + "</p><p>User name: " + _data.name + "</p>");
  });
  element.addEventListener("ajax:error", () => {
    element.insertAdjacentHTML("beforeend", "<p>Something went wrong!</p>");
  });
});
