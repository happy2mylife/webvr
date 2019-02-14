function onLoad() {
  const marker = document.getElementById('id-cursor');
  marker.addEventListener('animationcomplete', evt => {});

  const clickElement = document.getElementById('sample-obj');
  clickElement.addEventListener(
    'click',
    evt => {
      location.href = 'http://www.sobal.co.jp';
    },
    false
  );
}
