'use strict';
window.renderStatistics = function (ctx, names, times) {
  var rectX = 100;
  var rectY = 10;
  var rectWidth = 420;
  var rectHeight = 270;
  var textX = 120;
  var textY = 40;

  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fillStyle = 'white';
  ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', textX, textY);
  ctx.fillText('Список результатов:', textX, textY + 20);

  var max = -1;
  var maxIndex = -1;

  var getMaxIndex = function () {
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
        maxIndex = i;
      }
    }
  };
  getMaxIndex();

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  var barWidth = 40;
  var indent = 80;
  var initialX = 140;
  var initialY = 240;
  var lineHeight = 20;

  var getHistogram = function () {
    for (var i = 0; i < times.length; i++) {
      var indentation = indent * i;
      var time = times[i];
      var name = names[i];
      if (name !== 'Вы') {
        ctx.fillStyle = 'rgba(2, 14, 134, ' + Math.random() + ')';
      } else {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      }
      ctx.fillRect(initialX + indentation, initialY, barWidth, -(time * step));
      ctx.fillStyle = 'black';
      ctx.fillText(Math.floor(time), initialX + indentation, initialY - lineHeight / 2 - time * step);
      ctx.fillText(name, initialX + indentation, initialY + lineHeight);
    }
  };
  getHistogram();
};
