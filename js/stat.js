'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  var barWidth = 40;
  var indent = 80;
  var initialX = 140;
  var initialY = 240;
  var lineHeight = 20;

  for(var i = 0; i < times.length; i++) {
    if (names[i] != 'Вы') {
      ctx.fillStyle = 'rgba(2, 14, 134, ' + Math.random() +')';
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    };
    ctx.fillRect(initialX + indent * i, initialY, barWidth, -(times[i] * step));
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[i]), initialX + indent * i, initialY - lineHeight / 2 - times[i] * step);
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight);
  }
};
