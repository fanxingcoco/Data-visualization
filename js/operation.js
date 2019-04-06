/*******accident-echarts1-begin*******/

(function(){

    var colors = ['#259493',  '#3470a3'];

    var xData = function() {
        var data = ['大羊坊', '马驹桥', '采育', '廊坊', '泗酒店', '杨村', '下朱庄', '宜兴埠', '金钟路', '机场', '空港', '塘沽西'];
        return data;
    }();
    option = {
        title: {
            text: '各路段事故情况',
            x: 'center',
            textStyle:{
                fontSize: '48', color: "#ddd"
            },
        },
        grid: {
            top:100,
            left: 50,
            right: 50,
        },
        legend: {
            data:['事故数','事故环比率'],
            align: 'right',
            right: 700,
            top:100,
            itemGap: 50,
            itemWidth:60,
            itemHeight:30,
            textStyle:{
                fontSize: '36', color: "#ddd"
            },
        },
        "calculable": true,
        "xAxis": [{
            "type": "category",
            "axisLine": {
                lineStyle: {
                    color: '#ddd',
                    width: 5
                }
            },
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitArea": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,
                textStyle:{
                    fontSize:36,
                    color: '#ddd'
                },
            },
            "data": xData,
        }],
        yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0],
                    width: 5
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[1],
                    width: 5
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
        ],
        series: [
        {
            name:'事故数',
            type:'bar',
            color: '#94c860',
            barWidth : 50,
            data:[756,627,998,797,978,1347,717,993,620,845,555,741]
        },
        {
            name:'事故环比率',
            color: colors[1],
            yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                            width:6,//折线宽度
                        },
                        opacity: 0.4,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 1,
                            color: '#cb5eef' // 0% 处的颜色
                        }, {
                            offset: 0,
                            color: '#f8e61b' // 100% 处的颜色
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                data:[4.5,4,6.5,4.2,5.4,9,4,7,3,6,3,4.5]
            }]
        };

        var myCharts=echarts.init(document.getElementById("accident-echarts"));
        myCharts.setOption(option);
    })();
    /*******accident-echarts1-end*******/


    /*******duty-echarts2-begin*******/
    (function(){
        var dateList = [
        ['2017-1-1', '初四', '张三,李四'],
        ['2017-1-2', '初五', '张三,李四'],
        ['2017-1-3', '初六', '张三,李四'],
        ['2017-1-4', '初七', '张三,李四'],
        ['2017-1-5', '初八', '张三,李四'],
        ['2017-1-6', '初九', '张三,李四'],
        ['2017-1-7', '初十', '张三,李四'],
        ['2017-1-8', '十一', '张三,李四'],
        ['2017-1-9', '十二', '张三,李四'],
        ['2017-1-10', '十三', '张三,李四'],
        ['2017-1-11', '十四', '张三,李四'],
        ['2017-1-12', '十五', '张三,李四'],
        ['2017-1-13', '十六', '张三,李四'],
        ['2017-1-14', '十七', '张三,李四'],
        ['2017-1-15', '十八', '张三,李四'],
        ['2017-1-16', '十九', '张三,李四'],
        ['2017-1-17', '二十', '张三,李四'],
        ['2017-1-18', '廿一', '张三,李四'],
        ['2017-1-19', '廿二', '张三,李四'],
        ['2017-1-20', '廿三', '张三,李四'],
        ['2017-1-21', '廿四', '张三,李四'],
        ['2017-1-22', '廿五', '张三,李四'],
        ['2017-1-23', '廿六', '张三,李四'],
        ['2017-1-24', '廿七', '张三,李四'],
        ['2017-1-25', '廿八', '张三,李四'],
        ['2017-1-26', '廿九', '张三,李四'],
        ['2017-1-27', '三十', '张三,李四'],
        ['2017-1-28', '正月', '张三,李四'],
        ['2017-1-29', '初二', '张三,李四'],
        ['2017-1-30', '初三', '张三,李四'],
        ['2017-1-31', '初四', '张三,李四'],
        ['2017-2-1', '初五', '张三,李四'],
        ['2017-2-2', '初六', '张三,李四'],
        ['2017-2-3', '初七', '立春'],
        ['2017-2-4', '初八', '张三,李四'],
        ['2017-2-5', '初九', '张三,李四'],
        ['2017-2-6', '初十', '张三,李四'],
        ['2017-2-7', '十一', '张三,李四'],
        ['2017-2-8', '十二', '张三,李四'],
        ['2017-2-9', '十三', '张三,李四'],
        ['2017-2-10', '十四', '张三,李四'],
        ['2017-2-11', '十五', '张三,李四'],
        ['2017-2-12', '十六', '张三,李四'],
        ['2017-2-13', '十七', '张三,李四'],
        ['2017-2-14', '十八', '张三,李四'],
        ['2017-2-15', '十九', '张三,李四'],
        ['2017-2-16', '二十', '张三,李四'],
        ['2017-2-17', '廿一', '张三,李四'],
        ['2017-2-18', '廿二','张三,李四'],
        ['2017-2-19', '廿三', '张三,李四'],
        ['2017-2-20', '廿四', '张三,李四'],
        ['2017-2-21', '廿五', '张三,李四'],
        ['2017-2-22', '廿六', '张三,李四'],
        ['2017-2-23', '廿七', '张三,李四'],
        ['2017-2-24', '廿八', '张三,李四'],
        ['2017-2-25', '廿九', '张三,李四'],
        ['2017-2-26', '二月', '张三,李四'],
        ['2017-2-27', '初二', '张三,李四'],
        ['2017-2-28', '初三', '张三,李四'],
        ['2017-3-1', '初四', '张三,李四'],
        ['2017-3-2', '初五', '张三,李四'],
        ['2017-3-3', '初六', '张三,李四'],
        ['2017-3-4', '初七', '张三,李四'],
        ['2017-3-5', '初八', '张三,李四'],
        ['2017-3-6', '初九', '张三,李四'],
        ['2017-3-7', '初十', '张三,李四'],
        ['2017-3-8', '十一', '张三,李四'],
        ['2017-3-9', '十二', '张三,李四'],
        ['2017-3-10', '十三', '张三,李四'],
        ['2017-3-11', '十四', '张三,李四'],
        ['2017-3-12', '十五', '张三,李四'],
        ['2017-3-13', '十六', '张三,李四'],
        ['2017-3-14', '十七', '张三,李四'],
        ['2017-3-15', '十八', '张三,李四'],
        ['2017-3-16', '十九', '张三,李四'],
        ['2017-3-17', '二十', '张三,李四'],
        ['2017-3-18', '廿一', '张三,李四'],
        ['2017-3-19', '廿二', '张三,李四'],
        ['2017-3-20', '廿三', '张三,李四'],
        ['2017-3-21', '廿四', '张三,李四'],
        ['2017-3-22', '廿五', '张三,李四'],
        ['2017-3-23', '廿六', '张三,李四'],
        ['2017-3-24', '廿七', '张三,李四'],
        ['2017-3-25', '廿八', '张三,李四'],
        ['2017-3-26', '廿九', '张三,李四'],
        ['2017-3-27', '三十', '张三,李四'],
        ['2017-3-28', '三月', '张三,李四'],
        ['2017-3-29', '初二', '张三,李四'],
        ['2017-3-30', '初三', '张三,李四'],
        ['2017-3-31', '初四', '张三,李四'],
        ['2017-4-1', '初五', '张三,李四'],
        ['2017-4-2', '初六', '张三,李四'],
        ['2017-4-3', '初七', '张三,李四'],
        ['2017-4-4', '初八', '张三,李四'],
        ['2017-4-5', '初九', '张三,李四'],
        ['2017-4-6', '初十', '张三,李四'],
        ['2017-4-7', '十一', '张三,李四'],
        ['2017-4-8', '十二', '张三,李四'],
        ['2017-4-9', '十三', '张三,李四'],
        ['2017-4-10', '十四', '张三,李四'],
        ['2017-4-11', '十五', '张三,李四'],
        ['2017-4-12', '十六', '张三,李四'],
        ['2017-4-13', '十七', '张三,李四'],
        ['2017-4-14', '十八', '张三,李四'],
        ['2017-4-15', '十九', '张三,李四'],
        ['2017-4-16', '二十', '张三,李四'],
        ['2017-4-17', '廿一', '张三,李四'],
        ['2017-4-18', '廿二', '张三,李四'],
        ['2017-4-19', '廿三', '张三,李四'],
        ['2017-4-20', '廿四', '张三,李四'],
        ['2017-4-21', '廿五', '张三,李四'],
        ['2017-4-22', '廿六', '张三,李四'],
        ['2017-4-23', '廿七', '张三,李四'],
        ['2017-4-24', '廿八', '张三,李四'],
        ['2017-4-25', '廿九', '张三,李四'],
        ['2017-4-26', '四月', '张三,李四'],
        ['2017-4-27', '初二', '张三,李四'],
        ['2017-4-28', '初三', '张三,李四'],
        ['2017-4-29', '初四', '张三,李四'],
        ['2017-4-30', '初五', '张三,李四'],
        ['2017-5-1', '初六', '张三,李四'],
        ['2017-5-2', '初七', '张三,李四'],
        ['2017-5-3', '初八', '张三,李四'],
        ['2017-5-4', '初九', '张三,李四'],
        ['2017-5-5', '初十', '张三,李四'],
        ['2017-5-6', '十一', '张三,李四'],
        ['2017-5-7', '十二', '张三,李四'],
        ['2017-5-8', '十三', '张三,李四'],
        ['2017-5-9', '十四', '张三,李四'],
        ['2017-5-10', '十五', '张三,李四'],
        ['2017-5-11', '十六', '张三,李四'],
        ['2017-5-12', '十七', '张三,李四'],
        ['2017-5-13', '十八', '张三,李四'],
        ['2017-5-14', '十九', '张三,李四'],
        ['2017-5-15', '二十', '张三,李四'],
        ['2017-5-16', '廿一', '张三,李四'],
        ['2017-5-17', '廿二', '张三,李四'],
        ['2017-5-18', '廿三', '张三,李四'],
        ['2017-5-19', '廿四', '张三,李四'],
        ['2017-5-20', '廿五', '张三,李四'],
        ['2017-5-21', '廿六', '张三,李四'],
        ['2017-5-22', '廿七', '张三,李四'],
        ['2017-5-23', '廿八', '张三,李四'],
        ['2017-5-24', '廿九', '张三,李四'],
        ['2017-5-25', '三十', '张三,李四'],
        ['2017-5-26', '五月', '张三,李四'],
        ['2017-5-27', '初二', '张三,李四'],
        ['2017-5-28', '初三', '张三,李四'],
        ['2017-5-29', '初四', '张三,李四'],
        ['2017-5-30', '初五', '张三,李四'],
        ['2017-5-31', '初六', '张三,李四'],
        ['2017-6-1', '初七', '张三,李四'],
        ['2017-6-2', '初八', '张三,李四'],
        ['2017-6-3', '初九', '张三,李四'],
        ['2017-6-4', '初十', '张三,李四'],
        ['2017-6-5', '十一', '张三,李四'],
        ['2017-6-6', '十二', '张三,李四'],
        ['2017-6-7', '十三', '张三,李四'],
        ['2017-6-8', '十四', '张三,李四'],
        ['2017-6-9', '十五', '张三,李四'],
        ['2017-6-10', '十六', '张三,李四'],
        ['2017-6-11', '十七', '张三,李四'],
        ['2017-6-12', '十八', '张三,李四'],
        ['2017-6-13', '十九', '张三,李四'],
        ['2017-6-14', '二十', '张三,李四'],
        ['2017-6-15', '廿一', '张三,李四'],
        ['2017-6-16', '廿二', '张三,李四'],
        ['2017-6-17', '廿三', '张三,李四'],
        ['2017-6-18', '廿四', '张三,李四'],
        ['2017-6-19', '廿五', '张三,李四'],
        ['2017-6-20', '廿六', '张三,李四'],
        ['2017-6-21', '廿七', '张三,李四'],
        ['2017-6-22', '廿八', '张三,李四'],
        ['2017-6-23', '廿九', '张三,李四'],
        ['2017-6-24', '六月', '张三,李四'],
        ['2017-6-25', '初二', '张三,李四'],
        ['2017-6-26', '初三', '张三,李四'],
        ['2017-6-27', '初四', '张三,李四'],
        ['2017-6-28', '初五', '张三,李四'],
        ['2017-6-29', '初六', '张三,李四'],
        ['2017-6-30', '初七', '张三,李四'],
        ];

        var heatmapData = [];
        var lunarData = [];
        for (var i = 0; i < dateList.length; i++) {
            heatmapData.push([
                dateList[i][0],
                Math.random() * 300
                ]);
            lunarData.push([
                dateList[i][0],
                1,
                dateList[i][1],
                dateList[i][2]
                ]);
        }

        option = {
            tooltip: {
                formatter: function (params) {
                    return '白班值班员: ' + params.value[1].toFixed(2) + '<br/>  夜班值班员: ' + params.value[1].toFixed(2);
                },
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },

            visualMap: {
                show: false,
                min: 0,
                max: 300,
                calculable: true,
                seriesIndex: [2],
                orient: 'horizontal',
                left: 'center',
                bottom: 20,
                inRange: {
                    color: ['#6c6f9e', '#393a4c'],
                    opacity: 0.9
                },
                controller: {
                    inRange: {
                        opacity: 0.3
                    }
                }
            },

            calendar: [{
                left: 'center',
                top: 'middle',
                cellSize: [240, 240],
                yearLabel: {show: false},
                orient: 'vertical',
                dayLabel: {
                    firstDay: 1,
                    nameMap: 'cn'
                },
                monthLabel: {
                    show: false
                },
                range: '2017-03'
            }],

            series: [{
                type: 'scatter',
                coordinateSystem: 'calendar',
                symbolSize: 1,
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            var d = echarts.number.parseDate(params.value[0]);
                            return d.getDate() + '\n\n' + params.value[2] + '\n\n';
                        },
                        textStyle: {
                            color: '#ddd',
                            fontSize: 36
                        }
                    }
                },
                data: lunarData
            }, {
                type: 'scatter',
                coordinateSystem: 'calendar',
                symbolSize: 1,
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            return '\n\n\n' + (params.value[3] || '');
                        },
                        textStyle: {
                            fontSize: 36,
                            fontWeight: 400,
                            color: '#94c860'
                        }
                    }
                },
                data: lunarData
            }, {
                name: '值班',
                type: 'heatmap',
                coordinateSystem: 'calendar',
                data: heatmapData,
            }]
        };

        var myCharts=echarts.init(document.getElementById("duty-echarts"));
        myCharts.setOption(option);
    })();
    /*******duty-echarts2-end*******/


    /*******staff-echarts3-beging*******/
    (function(){
        var option = {
            tooltip: {
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            legend: {
                top: 50,
                right: 80,
                itemGap: 50,
                itemWidth:60,
                itemHeight:30,
                data: ['女性', '男性'],
                textStyle: {
                    fontSize: 36,
                    color: '#ddd'
                }
            },
            radar: {
                radius: '80%',
                splitNumber: 8,
                splitLine: {
                    lineStyle: {
                        color: '#ddd',
                        opacity: .5
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: 'rgba(127,95,132,.3)',
                        opacity: 1,
                        shadowBlur: 45,
                        shadowColor: 'rgba(0,0,0,.5)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 15,
                    }
                },
                indicator: [{
                    name: '20岁以下',
                    max: 2000,
                }, {
                    name: '20-30岁',
                    max: 2000
                }, {
                    name: '30-40岁',
                    max: 2000
                }, {
                    name: '40-50岁',
                    max: 2000
                }, {
                    name: '50-60岁',
                    max: 2000
                }, {
                    name: '60以上',
                    max: 2000,
                },]
            },
            series: [{
                type: 'radar',
                symbolSize: 0,
                areaStyle: {
                    normal: {
                        shadowBlur: 13,
                        shadowColor: 'rgba(0,0,0,.2)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 10,
                        opacity: 1
                    }
                },
                data: [{
                    value: [1800, 1400, 1200, 800, 100, 100],
                    name: '女性'
                },{
                    value: [1600, 300, 300, 600, 400, 1200],
                    name: '男性'
                }]
            }],
            color: ['#e66e69', '#94bd6a']
        };

        var myCharts=echarts.init(document.getElementById("staff-echarts"));
        myCharts.setOption(option);
    })();

    /*******staff-echarts3-end*******/


    /*******staff-echarts4-beging*******/
    (function(){

        option = {
            title: {
                text: '50%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#6c7a8a',
                    fontSize: 48
                }
            },
            color: ['#e9e9e9'],
            series: [{
                name: 'Line 1',
                type: 'pie',
                clockWise: true,
                center: ['50%', '50%'],
                radius: ['65%', '85%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
            hoverAnimation: false,//去除圆环放大效果
            data: [{
                value: 50,
                name: '01',
                itemStyle: {
                    normal: {
                        color: '#6c7a8a',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '02',
                value: 50
            }]
        }]
    }

    var myCharts=echarts.init(document.getElementById("staff-echarts1"));
    myCharts.setOption(option);
})();
/*******staff-echarts4-end*******/


/*******staff-echarts4-beging*******/
(function(){

    option = {
        title: {
            text: '30%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#6c7a8a',
                fontSize: 48
            }
        },
        color: ['#e9e9e9'],
        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            center: ['50%', '50%'],
            radius: ['65%', '85%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,//去除圆环放大效果
            data: [{
                value: 30,
                name: '01',
                itemStyle: {
                    normal: {
                        color: '#0e784e',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '02',
                value: 70
            }]
        }]
    }

    var myCharts=echarts.init(document.getElementById("staff-echarts2"));
    myCharts.setOption(option);
})();
/*******staff-echarts4-end*******/



/*******staff-echarts4-beging*******/
(function(){

    option = {
        title: {
            text: '20%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#6c7a8a',
                fontSize: 48
            }
        },
        color: ['#e9e9e9'],
        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            center: ['50%', '50%'],
            radius: ['65%', '85%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,//去除圆环放大效果
            data: [{
                value: 20,
                name: '01',
                itemStyle: {
                    normal: {
                        color: '#2eb79c',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '02',
                value: 80
            }]
        }]
    }

    var myCharts=echarts.init(document.getElementById("staff-echarts3"));
    myCharts.setOption(option);
})();
/*******staff-echarts4-end*******/





/*******event-echarts1-beging*******/
(function(){

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle: {
                fontSize: 36,
                color: '#ccc'
            }
        },
        legend: {
            data:['事件1','事件2','事件3','事件4','其它'],
            itemGap: 50,
            itemWidth:60,
            itemHeight:30,
            textStyle: {
                fontSize: 34,
                color: '#ddd'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
        {
            type : 'category',
            data : ['一月份','二月份','三月份'],
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 5
                }
            },
            axisLabel: {
                textStyle:{
                    fontSize:36,
                    color: '#ddd'
                },
            },

        }
        ],
        yAxis : [
        {
            type : 'value',
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 5
                }
            },
            axisLabel: {
                textStyle:{
                    fontSize:36,
                    color: '#ddd'
                },
            },
        },
        ],
        series : [
        {
            name:'事件1',
            type:'bar',
            data:[19, 6, 6]
        },
        {
            name:'事件2',
            type:'bar',
            data:[51, 49, 32]
        },
        {
            name:'事件3',
            type:'bar',
            data:[12, 31, 42]
        },
        {
            name:'事件4',
            type:'bar',
            data:[13, 6, 10]
        },
        {
            name:'其它',
            type:'bar',
            data:[5, 8, 10],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    },
                },
                data : [
                [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        ],
        color: ['#e66e69', '#61ad9d','#94bd6a', '#d5b556','#9570be']
    };

    var myCharts=echarts.init(document.getElementById("event-echarts"));
    myCharts.setOption(option);
})();

/*******event-echarts1-end*******/




/*******event-echarts2-beging*******/
(function(){
    option = {
        grid: {
            top:30,
            left: 0,
            right: 0,
        },
        xAxis: {
            data: [],
            type:'value',
            show:false,
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            show:false,
            axisTick: {
                show: false
            }
        },
        series: [{
            type: 'bar',
            center: ['20%', '50%'],
            data:[30],
            stack: 'income',
            barWidth: 50,
        },{
            type:'bar',
            data:[70],
            stack: 'income',
            barWidth: 50,
        }],
        color: ['#2eb79c', '#bbbbbb',]
    };

    var myCharts=echarts.init(document.getElementById("event-bar-echarts1"));
    myCharts.setOption(option);
})();

/*******event-echarts2-end*******/




/*******event-echarts3-beging*******/
(function(){

    option = {
        grid: {
            top:30,
            left: 0,
            right: 0,
        },
        xAxis: {
            data: [],
            type:'value',
            show:false,
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            show:false,
            axisTick: {
                show: false
            }
        },
        series: [{
            type: 'bar',
            center: ['20%', '50%'],
            data:[30],
            stack: 'income',
            barWidth: 50,
        },{
            type:'bar',
            data:[70],
            stack: 'income',
            barWidth: 50,
        }],
        color: ['#2eb79c', '#bbbbbb',]
    };

    var myCharts=echarts.init(document.getElementById("event-bar-echarts2"));
    myCharts.setOption(option);
})();

/*******event-echarts3-end*******/



/*******traffic-echarts6-beging*******/
(function(){
    option = {
        tooltip: {
            trigger: 'axis',
            textStyle: {
                fontSize: 36,
                color: '#ccc'
            }
        },
        grid: {
            left: '3%',
            right: '5%',
            containLabel: true
        },
        calculable: true,
        yAxis: [{
            type: 'category',
            data: ['大羊坊至马驹桥路段', '马驹桥至采育路段' , '采育至廊坊路段' , '廊坊至泗酒店路段' ,
            '泗酒店至杨村路段' , '杨村至下朱庄路段' , '下朱庄至宜兴埠路段 ', '宜兴埠至金钟路路段' ,
            '金钟路至机场路段', '机场至空港路段', '空港至塘沽西路段,', '塘沽西至塘沽路段',],
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 5
                }
            },
            axisLabel: {
                textStyle:{
                    fontSize:36,
                    color: '#ddd'
                },
            },
        }],
        xAxis: [{
            type: 'value',
            position: 'top',
            max:1500,
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 5
                }
            },
            axisLabel: {
                textStyle:{
                    fontSize:36,
                    color: '#ddd'
                },
            },
        }],
        series: [{
            name: '阻断时长',
            type: 'bar',
            data: [101,221, 432, 541, 765, 831, 882, 890, 970, 998, 1000, 1100,],
            markLine: { //平均值
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }
        ],
        color: ['#8ab923']
    };

    var myCharts=echarts.init(document.getElementById("traffic-block-echarts"));
    myCharts.setOption(option);
})();
/*******traffic-echarts6-end*******/


/*******traffic-echarts6-beging*******/
(function(){
    option = {
        tooltip: {
            show: true,
            textStyle: {
                fontSize: 36,
                color: '#ccc'
            }
        },
        series: [{
            type: 'pie',
            center: ['50%', '50%'],
            symbolSize: 20,
            radius: ['50%', '80%'],
            roseType: 'area',
            zlevel: 2,
            tooltip: {
                formatter: '{b}: {d}%',
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            label: {
                normal:{
                    show: true,
                    formatter: '{b}\n{d}%'
                },
                normal : {
                    textStyle : {
                        fontWeight : 'normal',
                        fontSize : 36
                    },
                },
            },
            labelLine:{
                normal:{
                    lineStyle: {
                        color: '#ddd',
                        width: 3
                    }
                }
            },
            data: [{
                value: 14.7,
                name: '维修阻断'
            },
            {
                value: 10.4,
                name: '养护阻断'
            },
            {
                value: 6.3,
                name: '天气阻断'
            },
            {
                value: 21.6,
                name: '事故阻断'
            },
            {
                value: 7.6,
                name: '其他'
            }
            ]
        }],
        color: ['#e66e69', '#61ad9d','#94bd6a', '#d5b556','#9570be']
    };

    var myCharts=echarts.init(document.getElementById("traffic-block-echarts1"));
    myCharts.setOption(option);
})();
/*******traffic-echarts6-end*******/


/*******call-echarts7-beging*******/
(function(){
    option = {

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            textStyle: {
                fontSize: 36,
                color: '#ccc'
            }
        },
        series : [
        {
            name: '电话来源',
            type: 'pie',
            radius : '90%',
            center: ['50%', '50%'],
            data:[
            {value:20, name:'服务区'},
            {value:30, name:'交警'},
            {value:30, name:'收费站'},
            {value:20, name:'社会'},
            ],
            label: {
                normal: {
                    position: 'inner',
                    textStyle : {
                        fontWeight : 'normal',
                        fontSize : 36
                    },
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
            },
        }
        ],
        color: ['#dcdfe0', '#90c05f','#6c7a8a', '#29ae94']
    };

    var myCharts=echarts.init(document.getElementById("call-ranking-echarts"));
    myCharts.setOption(option);
})();
/*******call-echarts7-end*******/



/*******call-echarts8-beging*******/
(function(){

    option = {
        toolbox: {
            show: false,
            feature: {
                mark: {
                    show: true
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            name: "指标",
            type: "gauge",
            startAngle: 180, //总的360，设置180就是半圆
            endAngle: 0,
            center: ['50%', '90%'], //整体的位置设置
            radius: 300,
            axisLine: {
                lineStyle: {
                    width: 80, //柱子的宽度
                    color: [[0.6, "#36ce9b"], [1, "#576d85"]] //0.298是百分比的比例值（小数），还有对应两个颜色值
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            },
            pointer: {
                width: 16, //指针的宽度
                length: "70%", //指针长度，按照半圆半径的百分比
                color: "#576d85"
            },
            title: {
                show: true,
                offsetCenter: [0, "-20%"], //标题位置设置
                textStyle: { //标题样式设置
                    color: "#ddd",
                    fontSize: 48,
                }
            },
            detail: {
                "show": false
            },
            data: [{ //显示数据
                value: 60,
                name: "人均通话次数"
            }]
        }]
    };

    var myCharts=echarts.init(document.getElementById("call-analysis-echarts1"));
    myCharts.setOption(option);
})();

/*******call-echarts8-end*******/





/*******call-echarts9-beging*******/
(function(){


    option = {
        toolbox: {
            show: false,
            feature: {
                mark: {
                    show: true
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            name: "指标",
            type: "gauge",
            startAngle: 180, //总的360，设置180就是半圆
            endAngle: 0,
            center: ['50%', '90%'], //整体的位置设置
            radius: 300,
            axisLine: {
                lineStyle: {
                    width: 80, //柱子的宽度
                    color: [[0.6, "#36ce9b"], [1, "#576d85"]] //0.298是百分比的比例值（小数），还有对应两个颜色值
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            },
            pointer: {
                width: 16, //指针的宽度
                length: "70%", //指针长度，按照半圆半径的百分比
                color: "#576d85"
            },
            title: {
                show: true,
                offsetCenter: [0, "-20%"], //标题位置设置
                textStyle: { //标题样式设置
                    color: "#ddd",
                    fontSize: 48,
                }
            },
            detail: {
                show: false
            },
            data: [{ //显示数据
                value: 60,
                name: "人均通话时长"
            }]
        }]
    };


    var myCharts=echarts.init(document.getElementById("call-analysis-echarts2"));
    myCharts.setOption(option);
})();

/*******call-echarts9-end*******/




/*******center-echarts1-beging*******/
(function(){
    option = {
        /*title: {
            text: 'Awesome Chart'
        },*/
        grid: {
            left: '3%',
            right: '3%',
            top: '5%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 5
                }
            },
            axisLabel: {
                textStyle:{
                    fontSize:30,
                    color: '#ddd'
                },
            },
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 5
                }
            },
            axisLabel: {
                textStyle:{
                    fontSize:30,
                    color: '#ddd'
                },
            },
        },
        series: [{
            type: 'bar',
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                normal: {
                    color: function(params) {
                        //首先定义一个数组
                        var colorList = ['#b3b3b3','#94c860','#b3b3b3','#b3b3b3'];
                        return colorList[params.dataIndex]
                    },
                    //以下为是否显示
                    label: {
                        show: false
                    }
                }
            }
        }],
    };


    var myCharts=echarts.init(document.getElementById("center-information-echarts"));
    myCharts.setOption(option);
})();

/*******center-echarts1-end*******/




/*******center-echarts2-beging*******/
(function(){

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            textStyle: {
                fontSize: 36,
                color: '#ccc'
            }
        },
        series: [{
            name: '库存情况',
            type: 'pie',
            radius: '90%',
            center: ['50%', '50%'],
            clockwise: false,
            data: [{
                value: 45,
                name: '轻微事故'
            }, {
                value: 25,
                name: '小事故'
            }, {
                value: 15,
                name: '大事故'
            }, {
                value: 8,
                name: '重大事故'
            }],
            label: {
                normal: {
                    textStyle: {
                        color: '#ddd',
                        fontSize: 30,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }],
        color: [
        '#2eb79c',
        '#b3b3b3',
        ],
    };

    var myCharts=echarts.init(document.getElementById("center-accident-echarts"));
    myCharts.setOption(option);
})();

/*******center-echarts2-end*******/



/*******center-echarts3-beging*******/
(function(){

    var data = [12,35,54,35,47,75,89,34,95,72,68,45];
    var labelData = [];
    for (var i = 0; i < 12; ++i) {
        labelData.push({
            value: 1,
            name: i+1 + '月',
        });
    }

    option = {
        color: ['#b3b3b3'],
        series: [{
            type: 'pie',
            data: data,
            roseType: 'area',
            itemStyle: {
                normal: {
                    color: '#668d31',
                    borderColor: 'white'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                }
            }
        }, {
            type: 'pie',
            data: labelData,
            radius: ['75%', '100%'],
            zlevel: -2,
            itemStyle: {
                normal: {
                    color: '#b3b3b3',
                    borderColor: 'white'
                }
            },
            label: {
                normal: {
                    position: 'inside',
                    textStyle: {
                        fontSize: 30,
                        fontWeight: 400,
                        color: '#fff'
                    }
                }
            }
        }],
    };

    var myCharts=echarts.init(document.getElementById("center-call-echarts"));
    myCharts.setOption(option);
})();

/*******center-echarts3-end*******/



/*******center-echarts4-beging*******/
(function(){

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            },
            textStyle: {
                fontSize: 36,
                color: '#ccc'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color: ['#b3b3b3'],
        xAxis: {
            type : 'category',
            splitLine: {show:false},
            data : ['总数量','收费站','养护站','服务站','中心','其他'],
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 5
                }
            },
            axisLabel: {
                textStyle:{
                    fontSize:30,
                    color: '#ddd'
                },
            },
        },
        yAxis: {
            type : 'value',
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 5
                }
            },
            axisLabel: {
                textStyle:{
                    fontSize:30,
                    color: '#ddd'
                },
            },
        },
        series: [
        {
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)',
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
            },
            data: [0, 1700, 1400, 1200, 300, 0],
        },
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            label: {
                show: false,
            },
            data:[2900, 1200, 300, 200, 900, 300],
            itemStyle: {
                normal: {
                    color: function(params) {
                            //首先定义一个数组
                            var colorList = ['#00714c','#b3b3b3','#b3b3b3'];
                            return colorList[params.dataIndex]
                        },
                        //以下为是否显示
                        label: {
                            show: false
                        }
                    }
                }
            }
            ]
        };


        var myCharts=echarts.init(document.getElementById("center-staff-echarts"));
        myCharts.setOption(option);
    })();
    /*******center-echarts4-end*******/



    /*******center-echarts5-beging*******/
    (function(){

        option = {
            tooltip : {
                trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle: {
                fontSize: 36,
                color: '#ccc'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '3%',
            containLabel: true
        },
        color: ['#b3b3b3','#8ab923'],
        xAxis:  {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 5
                }
            },
            axisLabel: {
                textStyle:{
                    fontSize:30,
                    color: '#ddd'
                },
            },
        },
        yAxis: {
            type: 'category',
            data: ['一月','二月','三月','四月','五月','六月'],
            axisLine: {
                lineStyle: {
                    color: '#ddd',
                    width: 5
                }
            },
            axisLabel: {
                textStyle:{
                    fontSize:30,
                    color: '#ddd'
                },
            },
        },
        series: [
        {
            name: '事故',
            type: 'bar',
            stack: '总量',
            label: {
                show: false
            },
            data: [320, 302, 301, 334, 390, 330]
        },
        {
            name: '养护',
            type: 'bar',
            stack: '总量',
            label: {
                show: false
            },
            data: [220, 182, 191, 234, 290, 330]
        },
        {
            name: '其他',
            type: 'bar',
            stack: '总量',
            label: {
                show: false
            },
            data: [820, 832, 901, 934, 1290, 1330]
        }
        ]
    };

    var myCharts=echarts.init(document.getElementById("center-block-echarts"));
    myCharts.setOption(option);
})();

/*******center-echarts5-end*******/



