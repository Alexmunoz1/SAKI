var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'https://media.tenor.co/images/36998c5e57eb083202f091b2783fdeb1/tenor.gif' + images[i].width + '/' + images[i].height;
}
