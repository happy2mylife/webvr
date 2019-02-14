function onLoad() {
  const marker = document.getElementById('id-cursor');
  marker.addEventListener('animationcomplete', evt => {});

  const clickElement = document.getElementById('link-obj');
  clickElement.addEventListener(
    'click',
    evt => {
      location.href = 'http://www.sobal.co.jp';
    },
    false
  );

  const targetElements = [];
  const targetIds = ['id-box-1', 'id-box-2'];
  targetElements.push(document.getElementById('id-box-1'));
  targetElements.push(document.getElementById('id-box-2'));

  targetElements.forEach(e => {
    e.addEventListener('click', evt => {
      const index = targetIds.findIndex(id => evt.currentTarget);
      if (index != -1) {
        targetIds.splice(0, index);
      }

      if (targetIds.length == 0) {
        location.href = 'http://mashandroom.org';
      }
    });
  });
}
