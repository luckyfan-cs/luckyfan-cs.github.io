(function () {
  "use strict";

  var widgets = document.querySelectorAll("[data-github-stars]");

  if (!widgets.length || typeof window.XMLHttpRequest !== "function") {
    return;
  }

  function updateWidget(widget) {
    var repository = widget.getAttribute("data-github-stars");
    var countElement = widget.querySelector("[data-github-star-count]");

    if (!repository || !countElement) {
      return;
    }

    var repositoryPath = repository
      .split("/")
      .map(function (part) {
        return encodeURIComponent(part);
      })
      .join("/");

    var request = new window.XMLHttpRequest();
    request.open("GET", "https://api.github.com/repos/" + repositoryPath, true);
    request.onreadystatechange = function () {
      if (request.readyState !== 4 || request.status < 200 || request.status >= 300) {
        return;
      }

      try {
        var repositoryData = JSON.parse(request.responseText);

        if (typeof repositoryData.stargazers_count !== "number") {
          return;
        }

        var starCount = repositoryData.stargazers_count;
        var formattedCount = window.Intl
          ? new Intl.NumberFormat("en-US").format(starCount)
          : String(starCount);

        countElement.textContent = formattedCount;
        widget.setAttribute(
          "aria-label",
          formattedCount + " GitHub stars for " + repository
        );
        widget.setAttribute("title", "Live GitHub star count");
      } catch (error) {
        // Keep the build-time fallback count when GitHub is unavailable or rate-limited.
      }
    };
    request.send();
  }

  for (var index = 0; index < widgets.length; index += 1) {
    updateWidget(widgets[index]);
  }
})();
