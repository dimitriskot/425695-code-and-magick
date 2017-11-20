'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.bezierCurveTo(90, 40, 110, 10, 160, 20);
  ctx.bezierCurveTo(160, 20, 190, 5, 220, 10);
  ctx.bezierCurveTo(220, 10, 255, 0, 290, 7);
  ctx.bezierCurveTo(290, 7, 305, 0, 350, 15);
  ctx.bezierCurveTo(350, 15, 375, 0, 410, 15);
  ctx.bezierCurveTo(410, 15, 440, 5, 470, 10);
  ctx.bezierCurveTo(470, 10, 520, 10, 510, 70);
  ctx.bezierCurveTo(510, 70, 540, 100, 515, 170);
  ctx.bezierCurveTo(515, 170, 550, 190, 530, 250);
  ctx.bezierCurveTo(530, 250, 620, 275, 400, 280);
  ctx.bezierCurveTo(400, 280, 250, 300, 200, 282);
  ctx.bezierCurveTo(200, 282, 10, 275, 70, 250);
  ctx.bezierCurveTo(70, 250, 60, 190, 90, 170);
  ctx.bezierCurveTo(90, 170, 65, 100, 95, 70);
  ctx.bezierCurveTo(95, 70, 85, 60, 90, 40);
  ctx.closePath();
  ctx.fill();
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
