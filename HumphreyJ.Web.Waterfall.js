/*
    .waterfall ��Ԫ�������ٲ�������Ԫ��
        .waterfall .waterfall-data[data-waterfall-index] ��Ԫ������ʢ�ų�ʼ����Ԫ�أ�data-waterfall-index�������Ա���Ԫ��˳��
        .waterfall .waterfall-item ��Ԫ��������Ԫ��
        .waterfall .waterfall-row ��Ԫ������ʢ���ٲ�����
        .waterfall.waterfall - row.waterfall - column ��Ԫ�����ٲ����У���������Ļ����ʾ����Ԫ�أ���ҳ������󼰴��ڴ�С�ı�ʱ������Ԫ�ؽ�����˳����ڸ߶���С��һ���С�û��waterfall - column���Ԫ�ؽ�������
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