console.log("users.js")

window.addEventListener("load", () => {
  // Get the response as JSON :
  const form = document.querySelector("#ajax-form");
  const ajaxDiv = document.querySelector("#ajax-result-display")

  form.addEventListener("ajax:success", (event) => {
    const [_data, _status, xhr] = event.detail;
    ajaxDiv.innerHTML = "<p>User ID: " + _data.id + "</p><p>User name: " + _data.name + "</p>";
  });
  form.addEventListener("ajax:error", () => {
    ajaxDiv.innerHTML = "<p>Something went wrong!</p>";
  });

  // Get the response as HTML :
  const htmlForm = document.querySelector("#ajax-html-form");
  const ajaxHtmlDiv = document.querySelector("#ajax-html-result-display");

  htmlForm.addEventListener("ajax:success", (event) => {
    const [_data, _status, xhr] = event.detail;
    const paragraphs = _data.querySelector("div");
    ajaxHtmlDiv.innerHTML = paragraphs.innerHTML;
  });
  htmlForm.addEventListener("ajax:error", () => {
    ajaxHtmlDiv.innerHTML = "<p>Something went wrong!</p>";
  });
});
