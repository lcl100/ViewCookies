document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.getSelected(function(tab) {
    // tab.url可以获取当前标签页的浏览器URL地址
    chrome.cookies.getAll({
      // 用url来过滤，表示过滤只显示当前url的cookie
      url: tab.url
    }, function(cookies) {
      // cookies是获取所有所有的cookie，cookies是一个数组，数组中每个元素是一个Object对象
      // alert(cookies[0].name+":"+cookies[1].value)
      var cookieText = "";
      for (var i in cookies) {
        cookieText += cookies[i].name + "=" + cookies[i].value + ";";
      }
      document.getElementById("cookie-textarea").innerText = cookieText;
    });
  })
})
