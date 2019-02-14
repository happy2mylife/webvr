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
  const targetIds = [];
  targetIds.push('id-box-1');
  targetIds.push('id-box-2');
  targetElements.push(document.getElementById('id-box-1'));
  targetElements.push(document.getElementById('id-box-2'));

  targetElements.forEach(e => {
    e.addEventListener('click', evt => {
      const id = evt.currentTarget.getAttribute("id");
      const index = targetIds.findIndex(id);
      if (index != -1) {
        targetIds.splice(index, 1);
      }

      if (targetIds.length == 0) {
        location.href = 'http://mashandroom.org';
      }
    });
  });
}
