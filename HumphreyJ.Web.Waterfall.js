/*
    .waterfall 此元素声明瀑布流容器元素
        .waterfall .waterfall-data[data-waterfall-index] 此元素用来盛放初始数据元素，data-waterfall-index属性用以表明元素顺序
        .waterfall .waterfall-item 此元素是数据元素
        .waterfall .waterfall-row 此元素用来盛放瀑布流列
        .waterfall.waterfall - row.waterfall - column 此元素是瀑布流列，用以在屏幕上显示数据元素，当页面载入后及窗口大小改变时，数据元素将按照顺序放在高度最小的一列中。没有waterfall - column类的元素将被忽略
*/

$(function () {

    (window.onresize = window.waterfall = function () {
        var data = $('.waterfall .waterfall-data');
        var columns = $('.waterfall .waterfall-row .waterfall-column');
        var items = (function () {
            var a = [];
            $('.waterfall .waterfall-item').each(function (i, e) {
                var _e = $(e);
                if (!_e.attr('data-waterfall-index')) {
                    _e.attr('data-waterfall-index', i);
                }
                a.push(e);
            });
            return a.sort(function (x, y) {
                return x.getAttribute('data-waterfall-index') - y.getAttribute('data-waterfall-index')
            });
        })();

        function getMinHeightColumn() {
            var min = Infinity;
            var col = undefined;
            for (var i = 0; i < columns.length; i++) {
                var e = $(columns[i]); if (e.width() == 0) { continue; } else {
                    var height = e.height(); if (min > height) {
                        min = height;
                        col = e;
                    }
                }
            }
            return col;
        }

        $(items).appendTo(data);
        for (var i = 0; i < items.length; i++) {
            getMinHeightColumn().append(items[i]);
        }

    })();

});