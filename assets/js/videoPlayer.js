const video = document.getElementById("videoPlayer");
const playPromise = video.play();
let flip = true,
  pause = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28",
  play = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26",
  $animation = $('#animation');

// export const videoPlayerCommand = () => {
//   flip = !flip;
//   $animation.attr({
//     "from": flip ? pause : play,
//     "to": flip ? play : pause
//   }).get(0).beginElement();
//   if (video.paused && playPromise !== undefined) {
//     playPromise.then(_ => {
//       // Automatic playback started!
//       // Show playing UI.
//       playPromise;
//     })
//     .catch(error => {
//       // Auto-play was prevented
//       // Show paused UI.
//     });
//   }
// }
export const videoPlayerCommand = () => {
  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
      $animation.attr({
        "from": flip ? pause : play,
      }).get(0).beginElement();
    }).catch(error => {
      // Auto-play was prevented
      // Show paused UI.
      $animation.attr({
        "to": flip ? play : pause
      }).get(0).beginElement();
    });
  }
}