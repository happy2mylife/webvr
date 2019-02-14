function onLoad() {
  const marker = document.getElementById('id-cursor');
  marker.addEventListener('click', evt => {
    alert('click.');
  });
}
