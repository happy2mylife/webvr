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

  document.getElementById('id-box-2').addEventListener('animationend', () => {});
  document.getElementById('sample-video').addEventListener('click', evt => {
    document.getElementById('sample-video').paly();
  });
  /*
  ブロックを２個clickしたらリンク移動
  targetElements.forEach(e => {
    e.addEventListener('click', evt => {
      const id = evt.currentTarget.getAttribute("id");
      let targetIndex;
      const filtered = targetIds.filter((targetId, index) => {
        targetIndex = index;
        return targetId == id;
      });
      if (!filtered.length) {
        return;
      }
      
      targetIds.splice(targetIndex - 1, 1);

      if (targetIds.length == 0) {
        location.href = 'http://mashandroom.org';
      }
    });
  });
*/
}
