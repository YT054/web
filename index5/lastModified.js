function displayLastModified() {
  const lastModified = document.lastModified;
  document.getElementById("last-modified").textContent = `网页最后修改时间: ${lastModified}`;
}

displayLastModified();