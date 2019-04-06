$(document).ready(function () {

    //index1 
    (function () {
        var xData = function () {
            var data = [
                '类型1',
                '类型1',
                '类型1',
                '类型1',
                '类型1',
                '类型1',
                '类型1',
                '类型1',
                '类型1',
                '类型1',
                '类型1',
                '类型1',
                '类型1',
            ];
            return data;
        }();

        var option = {
            "tooltip": {
                "trigger": "axis",
                "axisPointer": {
                    "type": "shadow",
                    textStyle: {
                        color: "#eee"
                    }
                },
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            grid: {
                borderWidth: 0,
                top: '10%',
                bottom: '10%',
                right: '3%',
                left: '8%',
                textStyle: {
                    color: "#eee"
                }
            },
            legend: {
                left: 600,
                top: 50,
                itemWidth: 100,
                itemHeight: 50,
                itemGap: 100,
                textStyle: {
                    color: '#eee',
                    fontSize: 38,
                },
                "data": ['出', '入', '总数']
            },

            calculable: true,
            xAxis: [{
                "type": "category",
                "axisLine": {
                    lineStyle: {
                        color: '#eee',
                        width: 3
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
                    color: "#eee",
                    fontSize: 38,
                },
                "data": xData,
            }],
            "yAxis": [{
                "type": "value",
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    lineStyle: {
                        color: '#eee',
                        width: 3
                    }
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,
                    color: "#eee",
                    fontSize: 38,

                },
                "splitArea": {
                    "show": false
                },

            }],
            "series": [{
                    "name": "出",
                    "type": "bar",
                    "stack": "总量",
                    "barGap": 40,
                    barWidth: 90,
                    "itemStyle": {
                        "normal": {
                            "color": "rgba(255,144,128,1)",
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#eee",
                                    fontSize: 38,
                                },
                                "position": "insideTop",
                                formatter: function (p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    "data": [
                        709,
                        1917,
                        2455,
                        2610,
                        1719,
                        1433,
                        1544,
                        3285,
                        5208,
                        3372,
                        2484,
                        4078,
                        3290
                    ],
                },
                {
                    "name": "入",
                    "type": "bar",
                    "stack": "总量",
                    "itemStyle": {
                        "normal": {
                            "color": "rgba(0,191,183,1)",
                            "barBorderRadius": 0,
                            "label": {
                                "show": true,
                                "position": "top",
                                color: '#eee',
                                fontSize: 38,
                                formatter: function (p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    "data": [
                        327,
                        1776,
                        507,
                        1200,
                        800,
                        482,
                        204,
                        1390,
                        1001,
                        951,
                        381,
                        220,
                        890
                    ]
                }, {
                    "name": "总数",
                    "type": "line",
                    "stack": "总量",
                    symbolSize: 20,
                    symbol: 'circle',
                    lineStyle: {
                        width: 5,
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "rgba(252,230,48,1)",
                            "barBorderRadius": 0,
                            "label": {
                                "show": true,
                                "position": "top",
                                color: "#eee",
                                fontSize: 38,
                                formatter: function (p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    "data": [
                        1036,
                        3693,
                        2962,
                        3810,
                        2519,
                        1915,
                        1748,
                        4675,
                        6209,
                        4323,
                        2865,
                        4298,
                        1239
                    ]
                },
            ]
        }
        var myCharts = echarts.init(document.getElementById("index1"));
        myCharts.setOption(option);
    })();

    //index2
    (function () {
        var option = {
            grid: {
                top: '15%',
                bottom: '15%',
                left: '10%',
                right: '5%',
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    fontSize: 38,
                    color: '#eee',
                },
                axisLine: {
                    lineStyle: {
                        width: 3,
                        color: '#eee',
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 3,
                    }
                },
                data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00,', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
            },
            yAxis: {
                type: 'value',
                nameGap: 50,
                name: "万辆",
                nameTextStyle: {
                    color: '#eee',
                    fontSize: 36,
                },
                axisLabel: {
                    fontSize: 36,
                    color: '#eee',
                },
                axisLine: {
                    lineStyle: {
                        width: 3,
                        color: '#eee',
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 3,
                    }
                },
            },
            series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320, 780, 650, 430, 890, 860, 720, 532, 1101, 1034, 390, 1330, 1320, 580, 650, 930, 290, 660],
                    type: 'line',
                    lineStyle: {
                        color: "#8be6fb",
                        width: 5,
                    },

                },
                {
                    data: [220, 732, 1201, 534, 1090, 830, 920, 1080, 1050, 930, 1090, 560, 820, 432, 501, 934, 1190, 1230, 1020, 580, 250, 930, 690, 560],
                    type: 'line',
                    lineStyle: {
                        color: "#ff6b07",
                        width: 5,
                    },
                }
            ]
        };
        var myCharts = echarts.init(document.getElementById('index2'));
        myCharts.setOption(option);

    })();

    //index3
    (function () {
        var option = {
            title: {
                text: '2017年\n\r五月',
                top: '43%',
                left: '40%',
                textStyle: {
                    color: "#eee",
                    fontSize: 70,
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            series: [{
                name: '各类车辆占比',
                type: 'pie',
                radius: ['50%', '80%'],
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
                        name: '轿车',
                        itemStyle: {
                            color: '#e64c66'
                        }
                    },
                    {
                        value: 310,
                        name: '客车',
                        itemStyle: {
                            color: '#11ab89'
                        }
                    },
                    {
                        value: 234,
                        name: '大货车',
                        itemStyle: {
                            color: '#4fc5f7'
                        }
                    },
                    {
                        value: 135,
                        name: '小货车',
                        itemStyle: {
                            color: '#fbb150'
                        }
                    },

                ]
            }]
        };
        var myCharts = echarts.init(document.getElementById('index3'));
        myCharts.setOption(option);
    })();

    //index5
    (function () {
        var option = {
            color: ['#00ffff', '#00ffa2', '#f0e750'],
            tooltip: {
                trigger: 'axis',
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            legend: {
                orient: 'horizontal',
                right: 100,
                top: 30,
                itemGap: 100,
                itemWidth: 80,
                itemHeight: 20,
                symbolKeepAspect: true,
                data: ['普通事件', '一般事件', '特殊事件'],
                textStyle: {
                    color: '#eee',
                    fontSize: 38,
                }
            },
            grid: {
                show: true,
                left: 180,
                top: 100,
                right: 60,
                bottom: 100,
                borderWidth: 3,
                borderColor: 'rgba(170,172,178,0.33)',
                backgroundColor: 'rgba(17, 34, 69, 0.24)',
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                //在（type: 'category'）中设置data有效
                data: ['1', '2', '3', '4', '5',
                    '6', '7', '8', '9', '10', '11', '12'
                ],

                splitLine: { //坐标轴在 grid 区域中的分隔线；
                    show: true,
                    lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                        color: 'rgba(170,172,178,0.33)'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#eee',
                        width: 2,
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: '#eee',
                        fontSize: 38,
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 4000,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(170,172,178,0.33)'
                    }
                },
                axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#eee',
                        width: 2,
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: '#eee',
                        fontSize: 38,
                    },
                },
                // splitArea: {
                //     show: true,
                //     areaStyle: {
                //         color: ['#112245', 'rgba(34,50,82,0.4)']
                //     }
                // }
            }],
            series: [{
                    name: '普通事件',
                    type: 'line',
                    smooth: true, //是否平滑曲线显示
                    lineStyle: { //线条样式 
                        normal: {
                            width: 5,
                        }
                    },
                    areaStyle: { //区域填充样式
                        normal: {
                            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 255, 255, 0.9)'
                            }, {
                                offset: 0.7,
                                color: 'rgba(0, 255, 255, 0.6)'
                            }], false),

                            shadowColor: 'rgba(0, 0, 0, 0.9)', //阴影颜色
                            shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                        }
                    },
                    itemStyle: { //折现拐点标志的样式
                        normal: {
                            color: 'rgb(0,255,255)'
                        }
                    },
                    data: [2000, 122, 3121, 540, 600, 2630, 1150, 900, 300, 1500, 1800, 200]
                }, {
                    name: '一般事件',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 5,
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(240, 231, 80, 0.9)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(240, 231, 80, 0.4)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.9)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgb(240,231,80)'

                        }
                    },
                    data: [1130, 812, 134, 2361, 413, 1330, 1301, 760, 1600, 320, 670, 900]
                }, {
                    name: '特殊事件',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 5,
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgb(0,255,162)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0,255,162, 0.8)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0,255,162, 0.4)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.9)',
                            shadowBlur: 10
                        }
                    },
                    data: [1220, 132, 1421, 2114, 954, 620, 132, 1400, 900, 1700, 1200, 300]
                },

            ] //series结束
        }; // option结束
        var myCharts = echarts.init(document.getElementById('index5'));
        myCharts.setOption(option);
    })();

    //index6
    (function () {
        var option = {
            grid: {
                top: 100,
                bottom: 100,
                left: 200,
                right: 100,
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        width: 2,
                        color: '#eee'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#eee',
                        fontSize: 38,
                    }
                },

                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        width: 2,
                        color: '#eee'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#eee',
                        fontSize: 38,
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 3,
                    }
                },
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                symbolSize: 20,
                itemStyle: {
                    color: '#eee',
                    borderColor: 'red',
                    borderWidth: 3,
                },
                lineStyle: {
                    width: 10,
                    color: '#eee'
                },
            }]
        };
        var myCharts = echarts.init(document.getElementById('index6'));
        myCharts.setOption(option);
    })();

    //index7
    (function () {
        var option = {
            title: {
                text: '不同车型占比',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            color: ['#22d8db', '#32d4b1', '#38a1da', '#87c087', '#8976b8', '#cdc282', '#e08695', '#cccccc'],
            calculable: true,
            series: [{
                    type: 'pie',
                    radius: [100, 450],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    label: {
                        normal: {
                            show: true,
                            formatter: "{c}%",
                            textStyle: {
                                fontSize: 36,

                            },
                            position: 'outside'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 10,
                            lineStyle: {
                                width: 3
                            }
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [{
                            value: 20,
                            name: '小型货车'
                        },
                        {
                            value: 30,
                            name: '小型客车'
                        },
                        {
                            value: 45,
                            name: '拖挂客车'
                        },
                        {
                            value: 25,
                            name: '中型货车'
                        },
                        {
                            value: 40,
                            name: '拖挂货车'
                        },
                        {
                            value: 35,
                            name: '大型货车'
                        },
                        {
                            value: 50,
                            name: '大型客车'
                        },
                        {
                            value: 40,
                            name: '其他'
                        }
                    ]
                }

            ]
        };
        // var option = {
        //     tooltip: {
        //         trigger: 'axis',
        //         axisPointer: { // 坐标轴指示器，坐标轴触发有效
        //             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        //         },
        //         textStyle: {
        //             fontSize: 36,
        //             color: '#ccc'
        //         }
        //     },
        //     legend: {
        //         top: 50,
        //         itemWidth: 60,
        //         itemHeight: 20,
        //         itemGap: 70,
        //         textStyle: {
        //             color: '#eee',
        //             fontSize: 38,
        //         },
        //         data: ['小型货车', '小型客车', '拖挂客车', '中型货车', '拖挂货车', '大型货车', '大型客车', '其他']
        //     },
        //     grid: {
        //         left: 100,
        //         right: 100,
        //         bottom: 70,
        //         top: 120,
        //         containLabel: true
        //     },
        //     xAxis: {
        //         type: 'value',
        //         min: 0,
        //         max: 9000,
        //         interval: 1000,
        //         axisLabel: {
        //             fontSize: 38,
        //             color: "#eee",
        //         },
        //         axisLine: {
        //             lineStyle: {
        //                 width: 3,
        //                 color: '#eee'
        //             }
        //         },
        //     },
        //     yAxis: {
        //         type: 'category',
        //         axisLabel: {
        //             fontSize: 38,
        //             color: "#eee",
        //         },
        //         axisLine: {
        //             lineStyle: {
        //                 width: 3,
        //                 color: '#eee'
        //             }
        //         },
        //         data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        //     },
        //     series: [{
        //             name: '小型货车',
        //             type: 'bar',
        //             stack: '总量',
        //             itemStyle: {
        //                 color: '#b8b2ce'
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'insideRight',
        //                     fontSize: 38,
        //                     color: '#eee'
        //                 }
        //             },
        //             data: [320, 302, 301, 334, 390, 330, 320]
        //         },
        //         {
        //             name: '小型客车',
        //             type: 'bar',
        //             stack: '总量',
        //             itemStyle: {
        //                 color: '#b671aa'
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'insideRight',
        //                     fontSize: 38,
        //                     color: '#eee'
        //                 }
        //             },
        //             data: [120, 132, 101, 134, 90, 230, 210]
        //         },
        //         {
        //             name: '拖挂客车',
        //             type: 'bar',
        //             stack: '总量',
        //             itemStyle: {
        //                 color: '#48b4a4'
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'insideRight',
        //                     fontSize: 38,
        //                     color: '#eee',
        //                 }
        //             },
        //             data: [220, 182, 191, 234, 290, 330, 310]
        //         },
        //         {
        //             name: '中型货车',
        //             type: 'bar',
        //             stack: '总量',
        //             itemStyle: {
        //                 color: '#9acfd3'
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'insideRight',
        //                     fontSize: 38,
        //                     color: '#eee'
        //                 }
        //             },
        //             data: [150, 212, 201, 154, 190, 330, 410]
        //         },
        //         {
        //             name: '拖挂货车',
        //             type: 'bar',
        //             stack: '总量',
        //             itemStyle: {
        //                 color: '#83a1c5'
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'insideRight',
        //                     fontSize: 38,
        //                     color: '#eee'
        //                 }
        //             },
        //             data: [820, 832, 901, 934, 1290, 1330, 1320]
        //         },
        //         {
        //             name: '大型客车',
        //             type: 'bar',
        //             stack: '总量',
        //             itemStyle: {
        //                 color: "#91c7ae"
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'insideRight',
        //                     fontSize: 38,
        //                     color: '#eee'
        //                 }
        //             },
        //             data: [820, 832, 901, 934, 1290, 1330, 1320]
        //         },
        //         {
        //             name: '大型货车',
        //             type: 'bar',
        //             stack: '总量',
        //             itemStyle: {
        //                 color: '#bca299'
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'insideRight',
        //                     fontSize: 38,
        //                     color: '#eee'
        //                 }
        //             },
        //             data: [820, 832, 901, 934, 1290, 1330, 1320]
        //         },
        //         {
        //             name: '其他',
        //             type: 'bar',
        //             stack: '总量',
        //             itemStyle: {
        //                 color: '#518990'
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'insideRight',
        //                     fontSize: 38,
        //                     color: '#eee'
        //                 }
        //             },
        //             data: [820, 832, 901, 934, 1290, 1330, 1320]
        //         }

        //     ]
        // };
        var myCharts = echarts.init(document.getElementById("index7"));
        myCharts.setOption(option);
    })();

    //index8
    (function () {
        var option = {
            grid: {
                top: '16%',
                bottom: '10%',
                left: '5%',
                right: '5%',
            },
            xAxis: [{
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    fontSize: 38,
                    color: '#eee',
                },
                axixLine: {
                    lineStyle: {
                        width: 3,
                        color: '#eee',
                    },
                }
            }],
            yAxis: [{
                type: 'value',
                name: '来源（次数）',
                nameTextStyle: {
                    fontSize: 50,
                    color: '#eee',
                    padding: [0, 0, 20, 300],

                },

                min: 0,
                max: 100,
                interval: 10,
                axisLabel: {
                    // formatter: '{value} 万元',
                    fontSize: 38,
                    color: '#eee',
                },
                axisLine: {
                    lineStyle: {
                        width: 3,
                        color: '#eee',
                    },
                },
            }],
            series: [{
                    name: '市民',
                    type: 'bar',
                    itemStyle: {
                        color: '#22d8db',
                    },
                    data: [20.0, 40.9, 17.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 60.0, 50.4, 30.3]
                },
                {
                    name: '用户',
                    type: 'bar',
                    itemStyle: {
                        color: '#32d4b1',
                    },
                    data: [20.6, 50.9, 19.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 60.0, 20.3]
                },
                {
                    name: '社会',
                    type: 'bar',
                    itemStyle: {
                        color: '#38a1da',
                    },
                    data: [48.6, 39.9, 19.0, 16.4, 18.7, 50.7, 20.6, 90.2, 18.7, 18.8, 26.0, 22.3]
                }
            ]
        };
        var myCharts = echarts.init(document.getElementById("index8"));
        myCharts.setOption(option);
    })();


    //定时切换页面
    setTimeout(function () {
        location.replace("http://local.com/highway/charge.html");
    }, t);

});