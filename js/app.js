let transcriptLine = document.querySelector('.captionWrapper').querySelectorAll('span');
const vid = document.querySelector('video');

vid.addEventListener('playing', () => {
  vid.ontimeupdate = () => {
    let timeCurrent = vid.currentTime;
    for (let i = 0; i < transcriptLine.length; i += 1) {
      if (timeCurrent > transcriptLine[i].getAttribute('data-start') && timeCurrent < transcriptLine[i].getAttribute('data-end')) {
         transcriptLine[i].style.color = '#ffad33';
      } else {
        transcriptLine[i].style.color = 'black';
      }
    }
  }
});

for (let i = 0; i < transcriptLine.length; i += 1) {
  transcriptLine[i].addEventListener('click', () => {
   vid.play(vid.currentTime = transcriptLine[i].getAttribute('data-start'));
  });
}
