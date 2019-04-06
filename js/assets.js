$(document).ready(function () {

    //assets1
    (function () {
        var labelTop = {
            normal: {
                label: {
                    show: true,
                    position: 'center',
                    formatter: '{b}',
                    textStyle: {
                        baseline: 'bottom'
                    }
                },
                labelLine: {
                    show: false
                }
            }
        };
        var labelFromatter = {
            normal: {
                label: {
                    formatter: function (params) {
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        baseline: 'top',
                        color: '#eee',
                    }
                }
            },
        }
        var labelBottom = {
            normal: {
                color: '#ccc',
                label: {
                    show: true,
                    position: 'center'
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        var radius = [150, 200];
        var option = {
            legend: {
                x: 'center',
                y: 'center',
                itemWidth: 100,
                itemHeight: 20,
                itemGap: 30,
                textStyle: {
                    color: '#eee',
                    fontSize: 30,
                },
                data: [
                    '摄像头', '车检器', '情报板', '交通标识', 'ETC电机', '自动栏杆', '测速仪', '照明设备	', '车道控制器', '读卡器'
                ]
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                width: '20%',
                                height: '30%',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            formatter: function (params) {
                                                return 'other\n' + params.value + '%\n'
                                            },
                                            textStyle: {
                                                baseline: 'middle'
                                            }
                                        }
                                    },
                                }
                            }
                        }
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
                    type: 'pie',
                    center: ['10%', '20%'],
                    radius: radius,
                    x: '0%', // for funnel
                    itemStyle: labelFromatter,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    data: [{
                            name: 'other',
                            value: 75,
                            itemStyle: labelBottom
                        },
                        {
                            name: '摄像头',
                            value: 25,
                            itemStyle: labelTop
                        }
                    ]
                },
                {
                    type: 'pie',
                    center: ['30%', '20%'],
                    radius: radius,
                    x: '20%', // for funnel
                    itemStyle: labelFromatter,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    data: [{
                            name: 'other',
                            value: 76,
                            itemStyle: labelBottom
                        },
                        {
                            name: '车检器',
                            value: 24,
                            itemStyle: labelTop
                        }
                    ]
                },
                {
                    type: 'pie',
                    center: ['50%', '20%'],
                    radius: radius,
                    x: '40%', // for funnel
                    itemStyle: labelFromatter,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    data: [{
                            name: 'other',
                            value: 86,
                            itemStyle: labelBottom
                        },
                        {
                            name: '情报板',
                            value: 14,
                            itemStyle: labelTop
                        }
                    ]
                },
                {
                    type: 'pie',
                    center: ['70%', '20%'],
                    radius: radius,
                    x: '60%', // for funnel
                    itemStyle: labelFromatter,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    data: [{
                            name: 'other',
                            value: 89,
                            itemStyle: labelBottom
                        },
                        {
                            name: '交通标识',
                            value: 11,
                            itemStyle: labelTop
                        }
                    ]
                },
                {
                    type: 'pie',
                    center: ['90%', '20%'],
                    radius: radius,
                    x: '80%', // for funnel
                    itemStyle: labelFromatter,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    data: [{
                            name: 'other',
                            value: 73,
                            itemStyle: labelBottom
                        },
                        {
                            name: 'ETC电机',
                            value: 27,
                            itemStyle: labelTop
                        }
                    ]
                },
                {
                    type: 'pie',
                    center: ['10%', '80%'],
                    radius: radius,
                    y: '55%', // for funnel
                    x: '0%', // for funnel
                    itemStyle: labelFromatter,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    data: [{
                            name: 'other',
                            value: 85,
                            itemStyle: labelBottom
                        },
                        {
                            name: '自动栏杆',
                            value: 15,
                            itemStyle: labelTop
                        }
                    ]
                },
                {
                    type: 'pie',
                    center: ['30%', '80%'],
                    radius: radius,
                    y: '55%', // for funnel
                    x: '20%', // for funnel
                    itemStyle: labelFromatter,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    data: [{
                            name: 'other',
                            value: 46,
                            itemStyle: labelBottom
                        },
                        {
                            name: '测速仪',
                            value: 54,
                            itemStyle: labelTop
                        }
                    ]
                },
                {
                    type: 'pie',
                    center: ['50%', '80%'],
                    radius: radius,
                    y: '55%', // for funnel
                    x: '40%', // for funnel
                    itemStyle: labelFromatter,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    data: [{
                            name: 'other',
                            value: 74,
                            itemStyle: labelBottom
                        },
                        {
                            name: '照明设备',
                            value: 26,
                            itemStyle: labelTop
                        }
                    ]
                },
                {
                    type: 'pie',
                    center: ['70%', '80%'],
                    radius: radius,
                    y: '55%', // for funnel
                    x: '60%', // for funnel
                    itemStyle: labelFromatter,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    data: [{
                            name: 'other',
                            value: 75,
                            itemStyle: labelBottom
                        },
                        {
                            name: '车道控制器',
                            value: 25,
                            itemStyle: labelTop
                        }
                    ]
                },
                {
                    type: 'pie',
                    center: ['90%', '80%'],
                    radius: radius,
                    y: '55%', // for funnel
                    x: '80%', // for funnel
                    itemStyle: labelFromatter,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    data: [{
                            name: 'other',
                            value: 72,
                            itemStyle: labelBottom
                        },
                        {
                            name: '读卡器',
                            value: 28,
                            itemStyle: labelTop
                        }
                    ]
                }
            ]
        };
        var myCharts = echarts.init(document.getElementById("assets1"));
        myCharts.setOption(option);
    })();

    //assets5
    (function () {
        var option = {
            title: {
                text: '收入支出统计',
                top: '8%',
                left: 100,
                textStyle: {
                    fontSize: 60,
                    color: '#eee'
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            grid: {
                top: '18%',
                bottom: '13%',
                left: '10%',
                right: '8%',
            },
            legend: {
                top: '8%',
                itemWidth: 80,
                itemHeight: 40,
                itemGap: 60,
                textStyle: {
                    color: '#eee',
                    fontSize: 35,
                },
                data: ['利润', '支出', '收入']
            },
            calculable: true,
            xAxis: [{
                type: 'value',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#eee',
                        width: 1,
                    },
                },
                axisLabel: {
                    color: '#eee',
                    fontSize: 40,
                }
            }],
            yAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#eee',
                        width: 1,
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: '#eee',
                        fontSize: 40,
                    },
                }
            }],
            series: [{
                    name: '利润',
                    type: 'bar',
                    barWidth: 50, //柱状图的柱条宽度
                    itemStyle: { //设置柱条填充的颜色
                        normal: {
                            label: {
                                show: true,
                                position: 'inside',
                                textStyle: {
                                    color: '#eee', //设置柱状图上的文字的颜色
                                    fontSize: 30, //设置柱状图上的文字的大小
                                }
                            },
                            color: '#fe8463',

                        }
                    },
                    data: [200, 170, 240, 244, 200, 220, 210]
                },
                {
                    name: '收入',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 30,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                color: '#eee',
                                fontSize: 30,
                            },
                            color: '#fad860',
                        }
                    },
                    data: [320, 302, 341, 374, 390, 450, 420]
                },
                {
                    name: '支出',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'left',
                                color: '#eee',
                                fontSize: 30,
                            },
                            color: '#9bca63',

                        }
                    },
                    data: [-120, -132, -101, -134, -190, -230, -210]
                }
            ]
        };
        var myCharts = echarts.init(document.getElementById("assets5"));
        myCharts.setOption(option);
    })();

    //assets8
    (function () {
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '100%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        value: 335,
                        name: '直接访问',
                        itemStyle: {
                            color: '#1aa7b0'
                        }
                    },
                    {
                        value: 100,
                        name: '邮件营销',
                        itemStyle: {
                            color: '#e1ebc6'
                        }
                    },

                ]
            }]
        };

        var myCharts = echarts.init(document.getElementById("assets8"));
        myCharts.setOption(option);

    })();

    //assets11
    (function () {
        var colors = ['rgba(251,210,73,0.7)', 'rgba(251,210,73,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(124,213,253,0.7)', 'rgba(181,236,69,0.7)', 'rgba(181,236,69,0.7)', 'rgba(136,243,227,0.7)', 'rgba(136,243,227,0.7)', 'rgba(136,243,227,0.7)', 'rgba(136,243,227,0.7)'];
        var aCategorys = ['', '大\n\r羊\n\r坊', '马\n\r驹\n\r桥', '采\n\r育', '廊\n\r坊', '泗\n\r酒\n\r店', '杨\n\r村', '下\n\r朱\n\r庄', '宜\n\r兴\n\r埠', '金\n\r钟\n\r路', '机\n\r场', '空\n\r港', ' 塘\n\r沽', ' 塘\n\r沽\n\r西', ''];
        var topdata = [0, 96, 96, 97, 95, 98, 94, 89, 94, 80, 67, 90, 94, 90]; //峰值data
        var aSeries = [{
            name: '男',
            type: 'line',
            symbol: 'circle',
            symbolSize: 20,
            itemStyle: {
                normal: {
                    color: '#F6A623',
                    borderColor: "#eee",
                    borderWidth: 2
                }
            },
            lineStyle: {
                normal: {
                    opacity: 0
                }
            },

            data: ['-', 96, 96, 97, 95, 98, 94, 89, 94, 80, 52, 75, 90, 89, '-']
        }, {
            name: '女',
            type: 'line',
            symbol: 'circle',
            symbolSize: 20,
            lineStyle: {
                normal: {
                    opacity: 0
                }
            },
            itemStyle: {
                normal: {
                    color: '#A5A7AD',
                    borderColor: "#eee",
                    borderWidth: 8
                }
            },

            data: ['-', 77, 89, 79, 70, 69, 60, 80, 91, 69, 67, 90, 70, 69, '-']
        }];

        aCategorys.forEach(function (v, i, a) {
            var name = v;
            if (v !== '') {
                var data = [];
                for (var j = 0; j < aCategorys.length; j++) {
                    data.push('-');
                }
                data[i - 1] = 0;
                data[i] = topdata[i];
                data[i + 1] = 0;
                aSeries.push({
                    name: name,
                    type: 'pictorialBar',
                    smooth: false,
                    legendHoverLink: false,
                    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                    barCategoryGap: '-130%',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: colors[i - 1] // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: colors[i - 1] // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    },
                    data: data,
                });
            }
        });

        var option = null;
        var option = {
            title: {
                text: '职工性别统计',
                top: '8%',
                left: 100,
                textStyle: {
                    fontSize: 60,
                    color: '#eee'
                },
            },
            color: colors,
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    console.log(params)
                    var rValue = params[0].name + '<br>';
                    params.forEach(function (v, i, a) {
                        if (v.data !== 0 && v.data !== "-" && v.seriesType == "line") {
                            rValue += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + v.color + '"></span>' + v.seriesName + ':' + v.data + '<br>';
                        }
                    })
                    return rValue;
                },
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            legend: {
                icon: 'circle',
                top: '8%',
                itemWidth: 50,
                itemHeight: 50,
                itemGap: 15,
                data: ['男', '女'],
                right: 100,
                textStyle: {
                    fontSize: 35,
                    color: '#eee'
                }
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: aCategorys,
                axisLabel: {
                    textStyle: {
                        fontSize: 50,
                        color: '#eee'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#f7f7f7'
                    }
                }
            }],
            grid: {
                top: '20%',
                left: '5%',
                right: '5%',
                bottom: '8%',
                containLabel: true
            },
            yAxis: [{
                type: 'value',
                axisLabel: {
                    textStyle: {
                        fontSize: 50,
                        color: '#eee',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#f7f7f7'
                    }
                }
            }],
            series: aSeries
        };
        var myCharts = echarts.init(document.getElementById("assets11"));
        myCharts.setOption(option);
    })();

    setTimeout(function () {
        location.replace("http://local.com/highway/analysis.html");
    }, t);

});