var xhr = new XMLHttpRequest();
xhr.open('GET', 'your-url-here', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    // success
    document.querySelector('.primaryNavigation').innerHTML = xhr.responseText;
  }
};
xhr.send();
