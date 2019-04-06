$(document).ready(function () {
    //charge1
    (function () {
        function getVirtulData(year) {
            year = year || '2017';
            var date = +echarts.number.parseDate(year + '-01-01');
            var end = +echarts.number.parseDate((+year + 1) + '-01-01');
            var dayTime = 3600 * 24 * 1000;
            var data = [];
            for (var time = date; time < end; time += dayTime) {
                data.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),
                    Math.floor(Math.random() * 10000)
                ]);
            }
            return data;
        }

        var data = getVirtulData(2017);

        var option = {
            title: {
                top: '5%',
                text: '2018年公司每天的收入',
                left: 'center',
                textStyle: {
                    color: '#ccc',
                    fontSize: 60,
                }
            },
            tooltip: {
                trigger: 'item',
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            grid: {
                top: '10%',
            },
            legend: {
                top: '10%',
                left: '100',
                data: ['收入', 'Top 12'],
                textStyle: {
                    color: '#ccc',
                    fontSize: 48,
                }
            },
            calendar: [{
                cellSize: 100,
                top: '17%',
                left: '10%',
                right: '10%',
                bottom: '50%',
                range: ['2017-01-01', '2017-06-30'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#000',
                        width: 4,
                        type: 'solid'
                    }
                },
                yearLabel: {
                    formatter: '{start}  1st',
                    color: '#ccc',
                    fontSize: 70,
                    margin: 80,
                },
                monthLabel: {
                    fontSize: 50,
                    color: '#ccc',
                },
                dayLabel: {
                    fontSize: 50,
                    color: '#ccc',
                },
                itemStyle: {
                    normal: {
                        color: '#323c48',
                        borderWidth: 1,
                        borderColor: '#111'
                    }
                }
            }, {
                cellSize: 100,
                top: '60%',
                left: '10%',
                right: '10%',
                bottom: '7%',
                range: ['2017-07-01', '2017-12-31'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#000',
                        width: 4,
                        type: 'solid'
                    }
                },
                yearLabel: {
                    formatter: '{start}  2nd',
                    color: '#ccc',
                    fontSize: 70,
                    margin: 80,
                },
                monthLabel: {
                    fontSize: 50,
                    color: '#ccc',
                },
                dayLabel: {
                    fontSize: 50,
                    color: '#ccc'
                },
                itemStyle: {
                    normal: {
                        color: '#323c48',
                        borderWidth: 1,
                        borderColor: '#111'
                    }
                }
            }],
            series: [{
                    name: '收入',
                    type: 'scatter',
                    coordinateSystem: 'calendar',
                    data: data,
                    symbolSize: function (val) {
                        return val[1] / 100;
                    },
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    }
                },
                {
                    name: '收入',
                    type: 'scatter',
                    coordinateSystem: 'calendar',
                    calendarIndex: 1,
                    data: data,
                    symbolSize: function (val) {
                        return val[1] / 100;
                    },
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    }
                },
                {
                    name: 'Top 12',
                    type: 'effectScatter',
                    coordinateSystem: 'calendar',
                    calendarIndex: 1,
                    data: data.sort(function (a, b) {
                        return b[1] - a[1];
                    }).slice(0, 12),
                    symbolSize: function (val) {
                        return val[1] / 500;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                },
                {
                    name: 'Top 12',
                    type: 'effectScatter',
                    coordinateSystem: 'calendar',
                    data: data.sort(function (a, b) {
                        return b[1] - a[1];
                    }).slice(0, 12),
                    symbolSize: function (val) {
                        return val[1] / 500;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                }
            ]
        };

        var myCharts = echarts.init(document.getElementById("charge1"));
        myCharts.setOption(option);
        // Mock.mock('/config/charge1', option);
        // $.get('/config/charge1').done(function(option){
        // 	myCharts.setOption(JSON.parse(option));
        // });
    })();

    //charge2
    (function () {
        let data = {
            "chart": [{
                    month: "1月",
                    value: 138,
                    ratio: 14.89
                },

                {
                    month: "2月",
                    value: 114,
                    ratio: 79.49
                },

                {
                    month: "3月",
                    value: 714,
                    ratio: 75.8
                },

                {
                    month: "4月",
                    value: 442,
                    ratio: 19.8
                },

                {
                    month: "5月",
                    value: 622,
                    ratio: 44.5
                },


                {
                    month: "6月",
                    value: 528,
                    ratio: 87.3
                }

            ]
        }


        let xAxisMonth = [],
            barData = [],
            lineData = [];
        for (let i = 0; i < data.chart.length; i++) {
            xAxisMonth.push(data.chart[i].month);
            barData.push({
                "name": xAxisMonth[i],
                "value": data.chart[i].value
            });
            lineData.push({
                "name": xAxisMonth[i],
                "value": data.chart[i].ratio
            });
        }

        option = {
            title: {
                text: "前六个月收费情况",
                left: 'center',
                top: '5%',
                textStyle: {
                    color: '#ccc',
                    fontSize: 50,
                }
            },
            grid: {
                top: '25%',
                left: '10%',
                bottom: '6%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
                formatter: function (params) {
                    return params[0]["data"].name + "<br/>" + '训练人次: ' + params[1]["data"].value + "<br/>" + '合格率: ' + params[0]["data"].value;
                },
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },

            xAxis: [{
                    type: 'category',
                    show: false,
                    data: ['3月', '4月', '5月', '6月', '7月', '8月'],
                    axisLabel: {
                        textStyle: {
                            color: '#ccc',
                            fontSize: 36,
                        }
                    }
                },
                {
                    type: 'category',
                    position: "bottom",
                    data: xAxisMonth,
                    boundaryGap: true,
                    // offset: 40,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#ccc',
                            fontSize: 36,
                        }
                    }
                }

            ],
            yAxis: [{
                show: true,
                offset: 52,
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,0.2)"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ccc',
                        fontSize: 36,
                    }
                }
            }, {
                show: false,
                type: "value",
                name: "合格率(%)",
                nameTextStyle: {
                    color: '#ccc'
                },
                axisLabel: {
                    color: '#ccc'
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }],
            color: ['#e54035'],
            series: [{
                    name: '训练人次',
                    type: 'pictorialBar',
                    xAxisIndex: 1,
                    barCategoryGap: '-80%',
                    // barCategoryGap: '-5%',
                    symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                let colorList = [
                                    'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                    'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                    'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
                                ];
                                return colorList[params.dataIndex];
                            }
                        },
                        emphasis: {
                            opacity: 1
                        }
                    },
                    data: barData,
                },
                {
                    symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAGDUlEQVRogbWaPWxcRRDHf/fO92Ffgk2MrXygBEJACCiQkCgQcoPSIAVXoYCKFBRIKegpQJHSBokehIgoiBBFrEiAQuEKgoQiPiIQEIRANnFI7ODYvvP5fBQ74zdvb/e9y9keafV27+3Hf2ZnZmf2XYlulx2kClAFVqS9V57LO7mIUmmb4H2wO90/l7YLfru0LWYGAd8A1oF2dM4wFS1UB8oFc3sLbV/yMbD9kF1cd6EDNPtbuBh8BUiAVmacP09+21+kqN0XDSL5UuQZ+w2y4LqRp18fwalPVIWGckBWvIE+yJJXz2PKAg3VtV0y9TbOBgYCnwSA+4ATD7zPSAj8pgFui+1XokDqrlOx2oQkbIEnpsQYUICb5rkZ+C2kUnWp9xixL/kKbqu0Ywh44pWy97SMPQ78A9w2ADsGfEf6bRqwm/KbqlHTMJAhX/INUleVB7xsypCpPwncBO6QlbyCfQyYkz6dQMnbhULw2Xdx4EOmPCiLLRtGtK8u3hVwG15pm7plwNqFZaAsfYC4wYY8iwVeMeUO7nBpSFsZ0HEKXMG3cafoOnAMuAEsBDBYVQqS9SiNAAMxqU8CR3G6OIzzyS8DM8B9wMPAi8DzwCjwEHAROCnrjMi4FeB+w7Rv+BYLGKn74Ne9jpYBX+qTOCkq8HEB+ouA7QA/AX8BYzJmBjgF7DEMNHH6XyVVw5DnslSX+YI6H5K4gq4CNbISfwd4Hxe7q4dQr6WeZEOE0wLWgNPA18Cn0j6M80i/Sz+1Aav/yFM1ZCXvkFJGfJVRJurA2x7IESMZH3wLJ+khATkNXJL3i2S9loJWDFbC69KHEt2uH1P7qlI2gI+JhEZw278fp7Mdaasuqxoo+LYAX5N17uK807LU7wKr8r5Ferpa9+mHEwzJQr6+W10Lucgq8BZwXvo0BHxjCg6/Ac895YyWFqx/AVffhW9uOAkjoNoilBeAT2TeI8BvZFXXlzy43W0mIomiAEwZmDcMPC3jEplseAqOnIOTChygBtUT8Ox5eIV0Z4bdKxrAa6QqM0q+sWYoyXvpTXKY7A58Rurra0DtLJyouV3poQMwftoxXMP1qeJs4XtS9bxJ2FVaPCDhS0Ka4cc6an0f2Z24gjlpp+DgWHwuAI7DE2ZMWcCfM4CXcoD3UEzyscGx8Lc0FgmeLHXDYfQlD/CeAgxK5YTwnUroSP6B1OI/Bm6Zdnepj7yzFI7nIeBJIhgypMYWIj/LOYQzqC7wAc7oEiSwmoW5ecdQlL6Ea/QGYl8FGOorN02QozaHAS0jwIQsOIPb1iGcx2kBrTPweSt1uxm6DnPvwVXpq4FZGzhLNqL8L4cB+1snoTfV8iWuWz0vE6vkTgHP4NSlCazNwp9vwoUf4Q+dYAmWL8KVl5yq6UG0Jq+Pk4bFe4ED5BxKhurgJGd1VWMTO1CP6n9xJ+EIqdSmgcuYUGAWrs/C3+SfsGsyZp+Zaz9O7fpRoQrQ1MCsTjb102KzJQ3KxmWBhpRDpL69n9hmlTREWJGiO9I0zKhd6M6rcLeoKDCzybKfCWnGdAv4ELiAixSbEfDrMt/rAvYMaSyjgP10sAewJfXzvpvzt82CXyQb3t4GvsPlp9pnSfotSn0Jl3FtAI8C35JKegJ4hGwYHFIZrW8lTbEcNi+L0gjzKE5aa0h4gDO6j6RcJk1SpoFXSb1My5QJYXKBXumHdmDrMsyCt7e/NrrUE9Hqv2ZTkzjjrJLGOf3msJM4r+TreCgJj0g4BR+L64tuDypeu5/bg3Gc3i9wb7cHUfC973qZiN3bPAAcBH41fWxsMopTj2uGiXu9t6mRvakOgq+TJguD3piN4/z2z4QNfzNQt8At6B5dzwOvurtqgPsMWFvY7bvKKPV7P18KPEPhbSwDsmBit8Qh16ifeoLfrIoOKT15bdhgSS9KLWD/6YP36yEp+7cFQSqSfOh6OQ9k6LcYsCLQhTToBzUfXFG7KNGw7dA3sAiI/sHXSCPE7ByD00CSUyq6PbDUQm6qAgD6yYDyjLNC70VvIW3nO2zRx+Rdp536fB/9bhShHWF8t/574P/bY1d26X/PtooMr/p/9AAAAABJRU5ErkJggg==',
                    symbolSize: 42,
                    name: "完成率",
                    type: "line",
                    yAxisIndex: 1,
                    data: lineData,
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            color: {
                                colorStops: [{
                                        offset: 0,
                                        color: '#821eff'
                                    },

                                    {
                                        offset: 1,
                                        color: '#204fff'
                                    }
                                ],
                            }
                        }
                    }
                }
            ]
        }

        var myCharts = echarts.init(document.getElementById("charge2"));
        myCharts.setOption(option);
    })();

    //charge3
    (function () {
        var data = [53, 85, 60];
        var xMax = 100;
        var axisColor = '#ccc';
        var option = {
            tooltip: {
                show: true,
                formatter: "{b} <br> {c}件",
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            grid: {
                left: '5%',
                containLabel: true
            },
            xAxis: [{
                axisTick: {
                    show: false,
                    // color:'#ccc',
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                    fontSize: 50,
                    color: '#ccc',
                },
                splitLine: {
                    show: false,
                    color: '#ccc',
                }
            }],
            yAxis: [{
                type: 'category',
                data: ['二月', '三月', '一月'],

                axisTick: {
                    // color:'#ccc',
                    show: false,
                },
                axisLine: {
                    //  color:'#ccc',
                    show: false,

                },
                axisLabel: {
                    textStyle: {
                        color: '#ccc',
                        fontSize: 50,
                    }
                }

            }],
            series: [{
                name: ' ',
                type: 'bar',
                silent: true,
                barWidth: 70,
                itemStyle: {
                    normal: {
                        color: '#aaaaaa',
                        barBorderRadius: [0, 5, 5, 0],
                    }
                },
                barGap: '-100%',
                barCategoryGap: '50%',
                data: data.map(function (d) {
                    return xMax
                }),
            }, {
                name: ' ',
                type: 'bar',
                barWidth: 60,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        fontSize: 50,
                        color: "#ccc", //设置柱上的字
                    }
                },
                data: [{
                    value: 43,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: '#63869e', // 100% 处的颜色
                            // color: {
                            //     type: 'bar',
                            //     colorStops: [{
                            //         offset: 0,
                            //         color: 'rgba(11,42,84,.3)' // 0% 处的颜色
                            //     }, {
                            //         offset: 1,
                            //         color: '#ccc' // 100% 处的颜色
                            //     }],
                            //     globalCoord: false, // 缺省为 false
                            // }
                        }
                    }
                }, {
                    value: 39,
                    itemStyle: {
                        // normal:{color:'#b250ff',barBorderRadius:[0,10,10,0],}
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: '#eedd78', // 100% 处的颜色
                        }
                    }
                }, {
                    value: 33,
                    itemStyle: {
                        // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: '#ea7e53', // 100% 处的颜色
                        }
                    }
                }, {
                    value: 10,
                    itemStyle: {
                        // normal:{color:'#4bf3ff',barBorderRadius:[0,10,10,0],  },
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: {
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(11,42,84,.3)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#4bf3ff' // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            }
                        }

                    }
                }, ],
            }]
        };
        var myCharts = echarts.init(document.getElementById("charge3"));
        myCharts.setOption(option);
    })();


    // charge4
    (function () {
        var option = {
            title: {
                top: '4%',
                left: 'center',
                text: '2008-2018年公司收费及增长率',
                textStyle: {
                    color: '#ccc',
                    fontSize: 48,
                }
            },
            tooltip: {
                trigger: 'axis',
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            grid: {
                containLabel: true,
                top: '25%',
                left: '5%',
                right: '5%',
                bottom: '5%',
            },
            legend: {
                top: '15%',
                data: ['增速', '收费'],
                itemGap: 50,
                itemWidth: 60,
                itemHeight: 30,
                textStyle: {
                    fontSize: '36',
                    color: "#ccc"
                },
            },
            xAxis: [{
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#ccc',
                        width: '5',
                        fontSize: 35,
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#ccc',
                        fontSize: 35,
                    }
                },
                data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
            }],
            yAxis: [{
                type: 'value',
                name: '增速',
                min: 0,
                max: 50,
                position: 'right',
                axisLabel: {
                    formatter: '{value} %',
                    textStyle: {
                        color: '#ccc',
                        fontSize: 35,
                    }
                },
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#ccc',
                        width: '5',
                        fontSize: 35,
                    }
                },
                nameTextStyle: {
                    color: '#ccc',
                    fontSize: 40,
                }
            }, {
                type: 'value',
                name: '收费(亿元)',
                min: 0,
                max: 3000,
                position: 'left',
                axisLabel: {
                    textStyle: {
                        color: '#ccc',
                        fontSize: 35,
                    }
                },
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#ccc',
                        width: '2',
                        fontSize: 35,
                    }
                },
                nameTextStyle: {
                    color: '#ccc',
                    fontSize: 40,
                },

            }],
            series: [{
                name: '增速',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 25,
                    }
                },
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        width: 5,
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 10,
                        shadowOffsetY: 1,
                        color: '#60c0dd',
                    }
                },
                data: [1, 13, 37, 35, 15, 13, 25, 21, 6, 45]
            }, {
                name: '收费',
                type: 'bar',
                barWidth: 80,
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: '#fe8463',
                    }
                },
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 25,
                    }
                },
                data: [209, 1236, 1325, 1439, 1507, 1576, 1722, 1879, 1938, 2364]
            }]
        };

        var myCharts = echarts.init(document.getElementById("charge4"));
        myCharts.setOption(option);
        // Mock.mock('/config/charge4', option);
        // 	$.get('/config/charge4').done(function(option){
        // 		myCharts.setOption(JSON.parse(option));
        // 	});
    })();


    //charge5
    (function () {
        var option = {
            title: {
                text: '公司各业务收费占比',
                x: 'center',
                top: '8%',
                left: 'center',
                textStyle: {
                    color: '#ccc',
                    fontSize: 35,
                }
            },
            color: ['#fe8463', '#eedd78', '#8dc1a9', '#cccccc', '#9a9a9a'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            series: [{
                name: '业务',
                type: 'pie',
                radius: '60%',
                center: ['55%', '55%'],
                label: {
                    fontSize: 28,
                },
                data: [{
                        value: 335,
                        name: '业务1'
                    },
                    {
                        value: 310,
                        name: '业务2'
                    },
                    {
                        value: 234,
                        name: '业务3'
                    },
                    {
                        value: 135,
                        name: '业务4'
                    },
                    {
                        value: 1548,
                        name: '业务5'
                    },
                    {
                        value: 635,
                        name: '业务6'
                    },
                    {
                        value: 710,
                        name: '业务7'
                    },
                    {
                        value: 934,
                        name: '业务8'
                    },
                    {
                        value: 435,
                        name: '业务9'
                    },
                    {
                        value: 548,
                        name: '业务10'
                    },
                    {
                        value: 135,
                        name: '业务11'
                    },
                    {
                        value: 810,
                        name: '业务12'
                    },
                    {
                        value: 634,
                        name: '业务13'
                    }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        var myCharts = echarts.init(document.getElementById("charge5"));
        myCharts.setOption(option);
    })();


    //charge_5
    (function () {
        var option = {
            color: ["#8dc1a9"],
            textStyle: {
                color: '#ccc'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: "{a} <br/>{b} : {c}万元",
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            grid: {
                containLabel: true
            },
            xAxis: {

                type: 'value',
                boundaryGap: [0, 0.01],
                "axisLabel": {
                    "interval": 0,
                    fontSize: 30,
                    formatter: '{value}万元',
                }
            },
            yAxis: {
                "axisLabel": {
                    "interval": 0,
                    fontSize: 30,
                },
                type: 'category',
                data: ['业务1',
                    '业务2',
                    '业务3',
                    '业务4',
                    '业务5',
                    '业务6',
                    '业务7',
                    '业务8',
                    '业务9',
                    '业务10',
                    '业务11',
                    '业务12',
                    '业务13',
                ].reverse()
            },
            series: [{
                name: '收费排名',
                type: 'bar',
                barCategoryGap: '30%',
                data: [557, 388, 387, 384, 344, 297, 276, 212, 126, 62, 46, 45, 4].reverse(),

            }]
        };
        var myCharts = echarts.init(document.getElementById("charge_5"));
        myCharts.setOption(option);

    })();

    //charge6 
    (function () {
        var data_val = [2220, 1682, 2791, 3000, 4090, 3230, 2910],
            xAxis_val = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        var data_val1 = [0, 0, 0, 0, 0, 0, 0];
        var option = {
            grid: {
                left: '5%',
                right: '5%',
                top: '15%',
                bottom: '5%',
                containLabel: true
            },
            tooltip: {
                show: true,
                formatter: '{b}:{c}',
                extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 1)',
                borderColor: '#aaaaaa',
                borderWidth: 10,
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            legend: {
                right: '5%',
                top: '5%',
                data: ['收费'],
                itemGap: 50,
                itemWidth: 60,
                itemHeight: 30,
                textStyle: {
                    fontSize: '36',
                    color: "#ccc"
                },
            },
            title: {
                text: '本周每天的收费（万元）',
                x: '5%',
                top: '5%',
                textStyle: {
                    color: '#ccc',
                    fontSize: 40,
                }
            },
            xAxis: {
                data: xAxis_val,
                boundaryGap: false,
                axisLine: {
                    show: false,
                    color: "#ccc",
                    fontSize: 35,
                },
                axisLabel: {
                    textStyle: {
                        color: "#ccc",
                        fontSize: 35,
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                ayisLine: {
                    show: false,
                    color: "#ccc",
                    fontSize: 35,
                },
                axisLabel: {
                    textStyle: {
                        color: '#ccc',
                        fontSize: 35,
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#658c91',
                        width: 2,
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#658c91',
                        width: 2,
                    }
                }
            },

            series: [{
                    type: 'bar',
                    name: 'linedemo',
                    tooltip: {
                        show: false
                    },
                    animation: false,
                    barWidth: 1.4,
                    hoverAnimation: false,
                    data: data_val,
                    itemStyle: {
                        normal: {
                            color: '#dcb83a',
                            opacity: 0.8,
                            label: {
                                show: false
                            }
                        }
                    }
                },
                {
                    type: 'line',
                    name: '收费',

                    animation: false,
                    symbol: 'circle',

                    hoverAnimation: false,
                    data: data_val1,
                    itemStyle: {
                        normal: {
                            color: '#dcb83a',
                            opacity: 0,
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: '#384157',
                            opacity: 1
                        }
                    }
                },
                {
                    type: 'line',
                    name: 'linedemo',
                    smooth: true,
                    symbolSize: 30,
                    animation: false,
                    lineWidth: 5,
                    hoverAnimation: false,
                    data: data_val,
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#dcb83a',
                            shadowBlur: 40,
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#dcb83a',
                                    fontSize: 30,

                                }
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#dcb83a',
                            opacity: 0.3
                        }
                    }

                }
            ]
        };

        var myCharts = echarts.init(document.getElementById("charge6"));
        myCharts.setOption(option);

    })();

    //chargeFirst

    (function () {
        var option = {
            title: {
                left: '45%',
                bottom: '10%',
                text: '日均收费',
                textStyle: {
                    color: "#ccc",
                    fontSize: 40,
                },
            },
            tooltip: {
                formatter: "{a} <br/>{b} : {c}",
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            series: [{
                name: '业务指标',
                type: 'gauge',
                radius: '75%',
                center: ['60%', '55%'],
                detail: {
                    formatter: '{value}'
                },
                data: [{
                    value: 90,
                    name: '万元/日',
                }],
                title: {
                    fontWeight: 'bolder',
                    fontSize: 35,
                    fontStyle: 'italic'
                },
                axisLabel: {
                    fontSize: 25,
                },
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: 35,
                    }
                },
                detail: {
                    fontSize: 40, //中间数字的大小
                }
            }]
        };
        var myCharts = echarts.init(document.getElementById("chargeFirst"));

        setInterval(function () {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            myCharts.setOption(option, true);
        }, 2000);
    })();

    //chargeSecond

    (function () {
        var option = {
            title: {
                left: 'center',
                bottom: '10%',
                text: '日最高收费',
                textStyle: {
                    color: "#ccc",
                    fontSize: 40,
                },
            },
            tooltip: {
                formatter: "{a} <br/>{b} : {c}",
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            series: [{
                name: '业务指标',
                type: 'gauge',
                radius: '90%',
                center: ['50%', '45%'],
                detail: {
                    formatter: '{value}'
                },
                data: [{
                    value: 90,
                    name: '万元/日'
                }],
                right: 30,
                title: {
                    fontWeight: 'bolder',
                    fontSize: 45,
                    fontStyle: 'italic'
                },
                axisLabel: {
                    fontSize: 25,
                },
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: 40,
                    }
                },
                detail: {
                    fontSize: 45, //中间数字的大小
                }
            }]
        };
        var myCharts = echarts.init(document.getElementById("chargeSecond"));
        setInterval(function () {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            myCharts.setOption(option, true);
        }, 2000);
    })();

    //chargeThird


    (function () {
        var option = {
            title: {
                left: '20%',
                bottom: '10%',
                text: '日最低收费',
                textStyle: {
                    color: "#ccc",
                    fontSize: 40,
                },
            },
            tooltip: {
                formatter: "{a} <br/>{b} : {c}",
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            series: [{
                name: '业务指标',
                type: 'gauge',
                radius: '75%',
                center: ['40%', '55%'],
                detail: {
                    formatter: '{value}'
                },
                data: [{
                    value: 90,
                    name: '万元/日'
                }],
                title: {
                    fontWeight: 'bolder',
                    fontSize: 35,
                    fontStyle: 'italic'
                },
                axisLabel: {
                    fontSize: 25,
                },
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: 35,
                    }
                },
                detail: {
                    fontSize: 40, //中间数字的大小
                }
            }]
        };
        var myCharts = echarts.init(document.getElementById("chargeThird"));
        setInterval(function () {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            myCharts.setOption(option, true);
        }, 2000);
        // myCharts.setOption(option);
    })();


    //中间部分
    //chargeFirst1
    var option1 = {
        xAxis: {
            show: false,
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
            show: false,
            type: 'value'
        },
        series: [{
            data: [820, 532, 901, 734, 1290, 1330, 1320, 702, 998, 889, 400, 1100],
            type: 'line',
            symbolSize: 10,
            lineStyle: {
                width: 10,
                color: "#c3c3ab",
            }
        }]
    };
    //chargeFirst1
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst1"));
        myCharts.setOption(option1);
    }());

    //chargeFirst2
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst2"));
        myCharts.setOption(option1);
    }());

    //chargeFirst3
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst3"));
        myCharts.setOption(option1);
    }());

    //chargeFirst4
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst4"));
        myCharts.setOption(option1);
    }());

    //chargeFirst5
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst5"));
        myCharts.setOption(option1);
    }());

    //chargeFirst6
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst6"));
        myCharts.setOption(option1);
    }());

    //chargeFirst7
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst7"));
        myCharts.setOption(option1);
    }());

    //chargeFirst8
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst8"));
        myCharts.setOption(option1);
    }());

    //chargeFirst9
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst9"));
        myCharts.setOption(option1);
    }());

    //chargeFirst10
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst10"));
        myCharts.setOption(option1);
    }());

    //chargeFirst11
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst11"));
        myCharts.setOption(option1);
    }());

    //chargeFirst12
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst12"));
        myCharts.setOption(option1);
    }());

    //chargeFirst13
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst13"));
        myCharts.setOption(option1);
    }());

    //chargeFirst14
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeFirst14"));
        myCharts.setOption(option1);
    }());

    //2017年各收费站统计图
    var option2 = {
        xAxis: {
            show: false,
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
            show: false,
            type: 'value'
        },
        series: [{
            data: [900, 932, 701, 934, 1290, 1130, 1320, 1002, 998, 1089, 1300, 1100],
            type: 'line',
            symbolSize: 10,
            lineStyle: {
                width: 10,
                color: "#c3c3ab",
            }
        }]
    };

    //chargeLast1
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast1"));
        myCharts.setOption(option2);
    }());

    //chargeLast2
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast2"));
        myCharts.setOption(option2);
    }());

    //chargeLast3
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast3"));
        myCharts.setOption(option2);
    }());

    //chargeLast4
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast4"));
        myCharts.setOption(option2);
    }());

    //chargeLast5
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast5"));
        myCharts.setOption(option2);
    }());

    //chargeLast6
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast6"));
        myCharts.setOption(option2);
    }());

    //chargeLast7
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast7"));
        myCharts.setOption(option2);
    }());

    //chargeLast8
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast8"));
        myCharts.setOption(option2);
    }());

    //chargeLast9
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast9"));
        myCharts.setOption(option2);
    }());

    //chargeLast10
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast10"));
        myCharts.setOption(option2);
    }());

    //chargeLast11
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast11"));
        myCharts.setOption(option2);
    }());

    //chargeLast12
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast12"));
        myCharts.setOption(option2);
    }());

    //chargeLast13
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast13"));
        myCharts.setOption(option2);
    }());

    //chargeLast14
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeLast14"));
        myCharts.setOption(option2);
    }());

    //同比百分比增减
    var option3 = {
        xAxis: {
            show: false,
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
            show: false,
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130, 390, 120, 450, 230, 180],
            type: 'bar',
            itemStyle: {
                color: '#568db3',
            }
        }]
    };


    //chargeEqual1
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual1"));
        myCharts.setOption(option3);
    }());

    //chargeEqual2
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual2"));
        myCharts.setOption(option3);
    }());

    //chargeEqual3
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual3"));
        myCharts.setOption(option3);
    }());


    //chargeEqual4
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual4"));
        myCharts.setOption(option3);
    }());

    //chargeEqual5
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual5"));
        myCharts.setOption(option3);
    }());

    //chargeEqual6
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual6"));
        myCharts.setOption(option3);
    }());

    //chargeEqual7
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual7"));
        myCharts.setOption(option3);
    }());

    //chargeEqual8
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual8"));
        myCharts.setOption(option3);
    }());

    //chargeEqual9
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual9"));
        myCharts.setOption(option3);
    }());

    //chargeEqual10
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual10"));
        myCharts.setOption(option3);
    }());

    //chargeEqual11
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual11"));
        myCharts.setOption(option3);
    }());

    //chargeEqual12
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual12"));
        myCharts.setOption(option3);
    }());


    //chargeEqual13
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual13"));
        myCharts.setOption(option3);
    }());

    //chargeEqual14
    (function () {
        var myCharts = echarts.init(document.getElementById("chargeEqual14"));
        myCharts.setOption(option3);
    }());

    //charge9
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
            title: {
                text: '1233222',
                left: 'center',
                top: '45%',
                textStyle: {
                    fontSize: 80,
                    color: '#ccc',
                },
            },
            series: [{

                type: 'pie',
                radius: ['60%', '80%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },

                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        value: 335,
                        name: '类型1',
                        itemStyle: {
                            color: '#63859e',
                            width: 90
                        }
                    },
                    {
                        value: 210,
                        name: '类型2',
                        itemStyle: {
                            color: '#91c7af'
                        }
                    },

                ]
            }]
        };
        var mycharts = echarts.init(document.getElementById("charge9"));
        mycharts.setOption(option);
        // setInterval(function () {
        //     var text = Mock.mock({
        //         'text9|1027889-1589900': 3
        //     });
        //     Mock.mock('/config/charge9', text);
        //     $.get('/config/charge9').done(function (text) {
        //         option.title.text = JSON.parse(text).text9;
        //         mycharts.setOption(option);
        //     });
        // }, 1000);

    })();

    //charge10
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
            title: {
                text: '1233222',
                left: 'center',
                top: '45%',
                textStyle: {
                    fontSize: 80,
                    color: '#ccc',
                },
            },
            series: [{

                type: 'pie',
                radius: ['60%', '80%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },

                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        value: 335,
                        name: '类型1',
                        itemStyle: {
                            color: '#63859e',
                            width: 90
                        }
                    },
                    {
                        value: 210,
                        name: '类型2',
                        itemStyle: {
                            color: '#91c7af'
                        }
                    },

                ]
            }]
        };
        var mycharts = echarts.init(document.getElementById("charge10"));
        mycharts.setOption(option);
        // setInterval(function () {
        //     var text = Mock.mock({
        //         'text10|1127889-1889900': 3
        //     });
        //     Mock.mock('/config/charge10', text);
        //     $.get('/config/charge10').done(function (text) {
        //         option.title.text = JSON.parse(text).text10;
        //         mycharts.setOption(option);
        //     });
        // }, 1000);
    })();

    //charge11
    (function () {
        var option = {
            title: {
                top: '3%',
                left: 'center',
                text: "华北高速类型1,类型2,类型3收费统计",
                textStyle: {
                    color: "#ccc",
                    fontSize: 60,
                }
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
            // legend: {
            //     top:100,
            //     orient: 'horizontal',
            //     right: "4%",
            //     data: ['ETC', 'MTC', 'ITC'],
            //     itemGap: 50,
            //     itemWidth:60,
            //     itemHeight:30,
            //     textStyle:{
            //         fontSize: '36',
            //         color: "#ccc",
            //     },
            // },
            grid: {
                show: true,
                left: 100,
                top: 200,
                right: 100,
                bottom: 100,
                borderWidth: 1,
                borderColor: 'rgba(170,172,178,0.4)',
                backgroundColor: 'rgba(17, 34, 69, 0.3)',
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                //在（type: 'category'）中设置data有效
                data: ['00:00:00', '03:00:00', '06:00:00', '09:00:00', '12:00:00',
                    '15:00:00', '18:00:00', '21:00:00', '00:00:00'
                ],

                splitLine: { //坐标轴在 grid 区域中的分隔线；
                    show: true,
                    lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                        color: 'rgba(170,172,178,0.33)',
                        fontSize: 30,
                    }
                },
                axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                    show: true,
                    lineStyle: {
                        color: 'rgba(170,172,178,0.53)',
                        fontSize: 30,
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,0.83)',
                        fontSize: 30,
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
                        color: 'rgba(170,172,178,0.33)',
                        fontSize: 30,
                    }
                },
                axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                    show: true,
                    lineStyle: {
                        color: 'rgba(170,172,178,0.53)',
                        fontSize: 30,
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,0.83)',
                        fontSize: 30,
                    },
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['#112245', 'rgba(34,50,82,0.4)']
                    }
                }
            }],
            series: [{
                    name: 'ETC',
                    type: 'line',
                    smooth: true, //是否平滑曲线显示
                    lineStyle: { //线条样式 
                        normal: {
                            width: 1
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
                    data: [2000, 122, 3121, 54, 60, 2630, 1150, 2442, 1292]
                }, {
                    name: 'MTC',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 1
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
                    data: [1130, 812, 1134, 2361, 413, 1330, 1301, 594, 1230]
                }, {
                    name: 'ITC',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 1
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
                                color: 'rgba(255,100,100, 0.8)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(255,100,162, 0.4)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.9)',
                            shadowBlur: 10
                        }
                    },
                    data: [1220, 1132, 1421, 2114, 954, 620, 132, 190, 540]
                },

            ] //series结束
        }; // option结束

        var myCharts = echarts.init(document.getElementById("charge11"));
        myCharts.setOption(option);

    })();

    //charge12
    (function () {

        var option = {
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
            color: ['#fe8463', '#eedd78', '#8dc1a9'],
            legend: {
                top: '5%',
                data: ['ETC', 'MTC', 'ITC'],
                itemGap: 50,
                itemWidth: 60,
                itemHeight: 30,
                textStyle: {
                    fontSize: '36',
                    color: "#ccc"
                },
            },
            grid: {
                top: '10%',
                left: '3%',
                bottom: '3%',
                containLabel: true
            },
            label: {
                normal: {
                    fontSize: 25,
                }
            },
            xAxis: {
                type: 'value',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#ccc',
                        fontSize: 40,
                    },
                },
                axisLabel: {
                    fontSize: 40,
                    color: '#ccc',
                    fontSize: 40,
                }
            },
            yAxis: {
                type: 'category',
                data: ['业务1',
                    '业务2',
                    '业务3',
                    '业务4',
                    '业务5',
                    '业务6',
                    '业务7',
                    '业务8',
                    '业务9',
                    '业务10',
                    '业务11',
                    '业务12',
                    '业务13'
                ],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#ccc',
                        fontSize: 40,
                    },
                },
                axisLabel: {
                    fontSize: 30,
                    color: '#ccc',
                    fontSize: 40,
                },
            },
            series: [{
                    name: '类型1',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 50,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight',
                            fontSize: 25,

                        }
                    },
                    data: [320, 302, 301, 334, 390, 330, 320, 340, 380, 290, 310, 280, 450]
                },
                {
                    name: '类型2',
                    type: 'bar',
                    stack: '总量',
                    // itemStyle:{
                    //     color:'#e99a9a',
                    // },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight',
                            fontSize: 25,

                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210, 450, 230, 340, 280, 300, 450]
                },
                {
                    name: '类型3',
                    type: 'bar',
                    stack: '总量',
                    // itemStyle:{
                    //     color:'#73b6ba',
                    // },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight',
                            fontSize: 25,

                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310, 280, 360, 490, 370, 180, 450]
                },

            ]
        };
        var myCharts = echarts.init(document.getElementById("charge12"));
        myCharts.setOption(option);
    })();

    //charge13
    (function () {
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                textStyle: {
                    fontSize: 36,
                    color: '#ccc'
                }
            },
            //    legend: {
            //     top:80,
            //     orient: 'vertical',
            //     x: 'left',
            //        itemGap: 50,
            //        itemWidth:60,
            //        itemHeight:30,
            //        textStyle:{
            //            fontSize: '36', color: "#ccc"
            //        },
            //     data:['ETC','MTC','ITC']
            // },
            color: ['#fe8463', '#eedd78', '#8dc1a9'],
            series: [{
                name: '各类收费比例',
                type: 'pie',
                radius: ['50%', '70%'],
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
                        name: 'ETC'
                    },
                    {
                        value: 310,
                        name: 'MTC'
                    },
                    {
                        value: 234,
                        name: 'ITC'
                    }
                ]
            }]
        };
        var myCharts = echarts.init(document.getElementById("charge13"));
        myCharts.setOption(option);
    })();

    // charge14
    (function () {
        var dataMap = {};

        function dataFormatter(obj) {
            var pList = ['业务1',
                '业务2',
                '业务3',
                '业务4',
                '业务5',
                '业务6',
                '业务7',
                '业务8',
                '业务9',
                '业务10',
                '业务11',
                '业务12',
                '业务13',
            ];
            var temp;
            for (var year = 2008; year <= 2017; year++) {
                var max = 0;
                var sum = 0;
                temp = obj[year];
                for (var i = 0, l = temp.length; i < l; i++) {
                    max = Math.max(max, temp[i]);
                    sum += temp[i];
                    obj[year][i] = {
                        name: pList[i],
                        value: temp[i]
                    }
                }
                obj[year + 'max'] = Math.floor(max / 100) * 100;
                obj[year + 'sum'] = sum;
            }
            return obj;
        }

        dataMap.dataCar = dataFormatter({
            //max : 60000,
            2017: [16251.93, 11307.28, 24515.76, 11237.55, 14359.88, 22226.7, 10568.83, 12582, 19195.69, 49110.27, 32318.85, 15300.65, 17560.18],
            2016: [14113.58, 9224.46, 20394.26, 9200.86, 11672, 18457.27, 8667.58, 10368.6, 17165.98, 41425.48, 27722.31, 12359.33, 14737.12],
            2015: [12153.03, 7521.85, 17235.48, 7358.31, 9740.25, 15212.49, 7278.75, 8587, 15046.45, 34457.3, 22990.35, 10062.82, 12236.53],
            2014: [11115, 6719.01, 16011.97, 7315.4, 8496.2, 13668.58, 6426.1, 8314.37, 14069.87, 30981.98, 21462.69, 8851.66, 10823.01],
            2013: [9846.81, 5252.76, 13607.32, 6024.45, 6423.18, 11164.3, 5284.69, 7104, 12494.01, 26018.48, 18753.73, 7360.92, 9248.53],
            2012: [8117.78, 4462.74, 11467.6, 4878.61, 4944.25, 9304.52, 4275.12, 6211.8, 10572.24, 21742.05, 15718.47, 6112.5, 7583.85],
            2011: [6969.52, 3905.64, 10012.11, 4230.53, 3905.03, 8047.26, 3620.27, 5513.7, 9247.66, 18598.69, 13417.68, 5350.17, 6554.69],
            2010: [6033.21, 3110.97, 8477.63, 3571.37, 3041.07, 6672, 3122.01, 4750.6, 8072.83, 15003.6, 11648.7, 4759.3, 5763.35],
            2009: [5007.21, 2578.03, 6921.29, 2855.23, 2388.38, 6002.54, 2662.08, 4057.4, 6694.23, 12442.87, 9705.02, 3923.11, 4983.67],
            2008: [4315, 2150.76, 6018.28, 2324.8, 1940.94, 5458.22, 2348.54, 3637.2, 5741.03, 10606.85, 8003.67, 3519.72, 4467.55]
        });

        dataMap.dataBus = dataFormatter({
            //max : 4000,
            2017: [16251.93, 11307.28, 24515.76, 11237.55, 14359.88, 22226.7, 10568.83, 12582, 19195.69, 49110.27, 32318.85, 15300.65, 17560.18],
            2016: [14113.58, 9224.46, 20394.26, 9200.86, 11672, 18457.27, 8667.58, 10368.6, 17165.98, 41425.48, 27722.31, 12359.33, 14737.12],
            2015: [12153.03, 7521.85, 17235.48, 7358.31, 9740.25, 15212.49, 7278.75, 8587, 15046.45, 34457.3, 22990.35, 10062.82, 12236.53],
            2014: [11115, 6719.01, 16011.97, 7315.4, 8496.2, 13668.58, 6426.1, 8314.37, 14069.87, 30981.98, 21462.69, 8851.66, 10823.01],
            2013: [9846.81, 5252.76, 13607.32, 6024.45, 6423.18, 11164.3, 5284.69, 7104, 12494.01, 26018.48, 18753.73, 7360.92, 9248.53],
            2012: [8117.78, 4462.74, 11467.6, 4878.61, 4944.25, 9304.52, 4275.12, 6211.8, 10572.24, 21742.05, 15718.47, 6112.5, 7583.85],
            2011: [6969.52, 3905.64, 10012.11, 4230.53, 3905.03, 8047.26, 3620.27, 5513.7, 9247.66, 18598.69, 13417.68, 5350.17, 6554.69],
            2010: [6033.21, 3110.97, 8477.63, 3571.37, 3041.07, 6672, 3122.01, 4750.6, 8072.83, 15003.6, 11648.7, 4759.3, 5763.35],
            2009: [5007.21, 2578.03, 6921.29, 2855.23, 2388.38, 6002.54, 2662.08, 4057.4, 6694.23, 12442.87, 9705.02, 3923.11, 4983.67],
            2008: [4315, 2150.76, 6018.28, 2324.8, 1940.94, 5458.22, 2348.54, 3637.2, 5741.03, 10606.85, 8003.67, 3519.72, 4467.55]
        });

        dataMap.dataTruck = dataFormatter({
            //max : 26600,
            2017: [16251.93, 11307.28, 24515.76, 11237.55, 14359.88, 22226.7, 10568.83, 12582, 19195.69, 49110.27, 32318.85, 15300.65, 17560.18],
            2016: [14113.58, 9224.46, 20394.26, 9200.86, 11672, 18457.27, 8667.58, 10368.6, 17165.98, 41425.48, 27722.31, 12359.33, 14737.12],
            2015: [12153.03, 7521.85, 17235.48, 7358.31, 9740.25, 15212.49, 7278.75, 8587, 15046.45, 34457.3, 22990.35, 10062.82, 12236.53],
            2014: [11115, 6719.01, 16011.97, 7315.4, 8496.2, 13668.58, 6426.1, 8314.37, 14069.87, 30981.98, 21462.69, 8851.66, 10823.01],
            2013: [9846.81, 5252.76, 13607.32, 6024.45, 6423.18, 11164.3, 5284.69, 7104, 12494.01, 26018.48, 18753.73, 7360.92, 9248.53],
            2012: [8117.78, 4462.74, 11467.6, 4878.61, 4944.25, 9304.52, 4275.12, 6211.8, 10572.24, 21742.05, 15718.47, 6112.5, 7583.85],
            2011: [6969.52, 3905.64, 10012.11, 4230.53, 3905.03, 8047.26, 3620.27, 5513.7, 9247.66, 18598.69, 13417.68, 5350.17, 6554.69],
            2010: [6033.21, 3110.97, 8477.63, 3571.37, 3041.07, 6672, 3122.01, 4750.6, 8072.83, 15003.6, 11648.7, 4759.3, 5763.35],
            2009: [5007.21, 2578.03, 6921.29, 2855.23, 2388.38, 6002.54, 2662.08, 4057.4, 6694.23, 12442.87, 9705.02, 3923.11, 4983.67],
            2008: [4315, 2150.76, 6018.28, 2324.8, 1940.94, 5458.22, 2348.54, 3637.2, 5741.03, 10606.85, 8003.67, 3519.72, 4467.55]
        });
        var option = {
            baseOption: {
                timeline: {
                    bottom: '5%',
                    axisType: 'category',
                    // realtime: false,
                    // loop: false,
                    autoPlay: true,
                    // currentIndex: 2,
                    playInterval: 1000,
                    lineStyle: {
                        width: 5,
                        color: "#8dc1aa"
                    },
                    symbolSize: 30,
                    itemStyle: {
                        color: '#dcb83a', //设置时间轴的图像样式
                    },
                    checkpointStyle: {
                        symbolSize: 30,
                    },
                    controlStyle: {
                        itemSize: 60,
                        borderWidth: 8,
                        label: {
                            color: "#8dc1aa",
                        }

                    },
                    data: ['2008-01-01', '2009-01-01', '2010-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', ],
                    label: {
                        formatter: function (s) {
                            return (new Date(s)).getFullYear();
                        },
                        fontSize: 40,
                        color: '#ccc',
                    }
                },
                calculable: true,
                grid: {
                    top: '10%',
                    bottom: '15%',
                    left: '7%',
                    right: '4%',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            label: {
                                show: true,
                                formatter: function (params) {
                                    return params.value.replace('\n', '');
                                }
                            }
                        },
                        textStyle: {
                            fontSize: 36,
                            color: '#ccc'
                        }
                    }
                },
                xAxis: [{
                    type: 'category',
                    axisLabel: {
                        'interval': 0
                    },
                    data: [
                        '业务1',
                        '业务2',
                        '业务3',
                        '业务4',
                        '业务5',
                        '业务6',
                        '业务7',
                        '业务8',
                        '业务9',
                        '业务10',
                        '业务11',
                        '业务12',
                        '业务13',
                    ],
                    axisLine: {
                        lineStyle: {
                            color: '#ccc',
                            width: 3,
                        }
                    },
                    axisLabel: {
                        fontSize: 40,
                    },
                }],
                yAxis: {
                    type: 'value',
                    name: '收费（亿元）',
                    nameGap: 80,
                    splitLine: {
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: ['#aaa', '#ddd'],
                            type: 'dashed',
                            width: 3,
                        }
                    },
                    axisLine: { //设置坐标轴的颜色
                        lineStyle: {
                            color: '#ccc',
                            width: 3,
                            top: 100,
                        }
                    },
                    axisLabel: {
                        fontSize: 40,
                    },
                    nameTextStyle: {
                        color: '#ccc',
                        fontSize: 40,
                    }
                },
                series: [{
                        name: '轿车',
                        type: 'bar',
                        itemStyle: {
                            color: '#8dc1a9'
                        }
                    },
                    {
                        name: '客车',
                        type: 'bar',
                        itemStyle: {
                            color: '#ea7e53'
                        }
                    },
                    {
                        name: '货车',
                        type: 'bar',
                        itemStyle: {
                            color: '#eedd78'
                        }
                    },
                ]
            },
            options: [{
                    title: {
                        text: '2008不同业务的收费情况',
                        top: '5%',
                        left: 'center',
                        textStyle: {
                            color: '#ccc',
                            fontSize: 60,
                        }
                    },
                    series: [{
                            data: dataMap.dataCar['2008']
                        },
                        {
                            data: dataMap.dataBus['2008']
                        },
                        {
                            data: dataMap.dataTruck['2008']
                        },

                    ]
                },
                {
                    title: {
                        text: '2009不同业务的收费情况',
                        top: '5%',
                        left: 'center',
                        textStyle: {
                            color: '#ccc',
                            fontSize: 60,
                        }
                    },
                    series: [{
                            data: dataMap.dataCar['2009']
                        },
                        {
                            data: dataMap.dataBus['2009']
                        },
                        {
                            data: dataMap.dataTruck['2009']
                        },

                    ]
                },
                {
                    title: {
                        text: '2010不同业务的收费情况',
                        top: '5%',
                        left: 'center',
                        textStyle: {
                            color: '#ccc',
                            fontSize: 60,
                        }
                    },
                    series: [{
                            data: dataMap.dataCar['2010']
                        },
                        {
                            data: dataMap.dataBus['2010']
                        },
                        {
                            data: dataMap.dataTruck['2010']
                        },

                    ]
                },
                {
                    title: {
                        text: '2011不同业务的收费情况',
                        top: '5%',
                        left: 'center',
                        textStyle: {
                            color: '#ccc',
                            fontSize: 60,
                        }
                    },
                    series: [{
                            data: dataMap.dataCar['2011']
                        },
                        {
                            data: dataMap.dataBus['2011']
                        },
                        {
                            data: dataMap.dataTruck['2011']
                        },
                    ]
                },
                {
                    title: {
                        text: '2012不同业务的收费情况',
                        top: '5%',
                        left: 'center',
                        textStyle: {
                            color: '#ccc',
                            fontSize: 60,
                        }
                    },
                    series: [{
                            data: dataMap.dataCar['2012']
                        },
                        {
                            data: dataMap.dataBus['2012']
                        },
                        {
                            data: dataMap.dataTruck['2012']
                        },

                    ]
                },
                {
                    title: {
                        text: '2013不同业务的收费情况',
                        top: '5%',
                        left: 'center',
                        textStyle: {
                            color: '#ccc',
                            fontSize: 60,
                        }
                    },
                    series: [{
                            data: dataMap.dataCar['2013']
                        },
                        {
                            data: dataMap.dataBus['2013']
                        },
                        {
                            data: dataMap.dataTruck['2013']
                        },

                    ]
                },
                {
                    title: {
                        text: '2014不同业务的收费情况',
                        top: '5%',
                        left: 'center',
                        textStyle: {
                            color: '#ccc',
                            fontSize: 60,
                        }
                    },
                    series: [{
                            data: dataMap.dataCar['2014']
                        },
                        {
                            data: dataMap.dataBus['2014']
                        },
                        {
                            data: dataMap.dataTruck['2014']
                        },

                    ]
                },
                {
                    title: {
                        text: '2015不同类型车的收费情况',
                        top: '5%',
                        left: 'center',
                        textStyle: {
                            color: '#ccc',
                            fontSize: 60,
                        }
                    },
                    series: [{
                            data: dataMap.dataCar['2015']
                        },
                        {
                            data: dataMap.dataBus['2015']
                        },
                        {
                            data: dataMap.dataTruck['2015']
                        },
                    ]
                },
                {
                    title: {
                        text: '2016不同类型车的收费情况',
                        top: '5%',
                        left: 'center',
                        textStyle: {
                            color: '#ccc',
                            fontSize: 60,
                        }
                    },
                    series: [{
                            data: dataMap.dataCar['2016']
                        },
                        {
                            data: dataMap.dataBus['2016']
                        },
                        {
                            data: dataMap.dataTruck['2016']
                        },

                    ]
                },
                {
                    title: {
                        text: '2017不同类型车的收费情况',
                        top: '5%',
                        left: 'center',
                        textStyle: {
                            color: '#ccc',
                            fontSize: 60,
                        }
                    },
                    series: [{
                            data: dataMap.dataCar['2017']
                        },
                        {
                            data: dataMap.dataBus['2017']
                        },
                        {
                            data: dataMap.dataTruck['2017']
                        },

                    ]
                }
            ]
        };
        var myCharts = echarts.init(document.getElementById("charge14"));
        myCharts.setOption(option);
    })();

    setTimeout(function () {
        location.replace("http://local.com/highway/maintanance.html");
    }, t);

});