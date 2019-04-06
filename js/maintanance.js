$(document).ready(function(){
//maintanance1
(function(){
    var option = {
        grid:{
            top:150,
            bottom:200,
            left:200,
            right:200,
        },
        xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel:{
                fontSize:40,
                color:'#ccc',
            },
            axixLine:{
                lineStyle:{
                    width:3,
                    color:'#ccc',
                },
            }
        }
        ],
        yAxis: [
        {
            type: 'value',
            name:' 养护花费（万元）',
            nameTextStyle:{
                fontSize:50,
                color:'#ccc',
                padding:[0,0,20,100],

            },

            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
                // formatter: '{value} 万元',
                fontSize:40,
                color:'#ccc',
            },
            axisLine:{
                lineStyle:{
                    width:3,
                    color:'#ccc',
                },
            },
        }
        ],
        series: [
        {
            name:'基础设施花费',
            type:'bar',
            itemStyle:{
                color:'#eb7c77',
            },
            data:[20.0, 40.9, 17.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 60.0, 50.4, 30.3]
        },
        {
            name:'绿化花费',
            type:'bar',
            itemStyle:{
                color:'#79bcc7',
            },
            data:[20.6, 50.9, 19.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 60.0, 20.3]
        },
        {
            name:'其他花费',
            type:'bar',
            itemStyle:{
                color:'#a3c778',
            },
            data:[48.6, 39.9, 19.0, 16.4, 18.7, 50.7, 20.6, 90.2, 18.7, 18.8, 26.0, 22.3]
        }
        ]
    };
    var myCharts=echarts.init(document.getElementById("maintanance1"));
    myCharts.setOption(option);
})();

//maintanance2
(function(){

    function getDataY() {
        var dataY = [80, 78, 96, 88, 56, 30, 130, 78, 66, 89, 56, 87];
        return dataY;
    }

    function getDataX() {
        var dataX = ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月',  '10月', '11月', '12月'];
        return dataX;
    }

// 指定图表的配置项和数据
    var option;
    option = {
        grid:{
            top:150,
            bottom:150,
            left:150,
            right:150,
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: getDataX(),
            axisLabel: {
                fontSize:40,
                color:'#ccc',
            },
            axisLine:{
                lineStyle:{
                    width:3,
                    color:'#ccc',
                },
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                fontSize:40,
                color:'#ccc',
            },
            axisLine:{
                lineStyle:{
                    width:3,
                    color:'#ccc',
                },
            },
        }],
        series: [{
            name: '成交',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    },
                    color:'#5baf8b',
                }
            },
            data: getDataY()
        }]
    };

    var myCharts=echarts.init(document.getElementById("maintanance2"));
    myCharts.setOption(option);
})();

//maintanance3
(function(){

    option = {
        legend: {
            bottom: 20,
            data: ['消耗量', '总存贮'],
            itemGap: 50,
            itemWidth:60,
            itemHeight:30,
            textStyle:{
                fontSize: '36', color: "#ccc"
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },

        tooltip: {
            show:"true",
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)',
            borderColor:'#454649',
            borderWidth:6,
            textStyle: {
                fontSize: 36,
                color: '#ccc'
            }
        },
        xAxis:  {
            type: 'value',
            axisTick : {show: false},
            axisLine: {
                show: false,
                lineStyle:{
                    color:'#ccc',
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                fontSize:36,
                color:'#ccc',
            },
        },
        yAxis: [
            {
                type: 'category',
                axisTick : {show: false},
                axisLine: {
                    show: true,
                    lineStyle:{
                        width:3,
                        color:'#ccc',
                    }
                },
                axisLabel: {
                    show: true,
                    fontSize:50,
                    color:'#ccc',
                },
                data: ['资材1', '资材2', '资材3', '资材4', '资材5', '资材6', '资材7','资材8', '资材9', '资材10']
            },
            {
                type: 'category',
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel: {show:false},
                splitArea: {show:false},
                splitLine: {show:false},
                data: ['资材1', '资材2', '资材3', '资材4', '资材5', '资材6', '资材7','资材8', '资材9', '资材10']
            },

        ],
        series: [
            {
                grid: {
                    left: '5%',  //如果离左边太远就用这个......
                    right: '3%',
                    bottom: '3%',
                    top: '3%',
                    containLabel: true
                },
                name: '消耗量',
                type: 'bar',
                yAxisIndex:1,
                barWidth: 50, //统计条宽度
                lable:{
                    textStyle:{
                        fontSize:36,
                        color:'#ccc',
                    }
                },
                itemStyle:{
                    normal: {
                        show: true,
                        color: '#838383',
                        barBorderRadius:50,
                        borderWidth:0,
                        borderColor:'#333',
                    }
                },
                barGap:'0%',
                barCategoryGap:'50%',
                data: [120, 132, 101, 134, 90, 230, 210, 125, 231, 132]
            },
            {
                name:  '总存贮',
                type: 'bar',
                itemStyle:{
                    normal: {
                        show: true,
                        color: '#e27673',
                        barBorderRadius:50,
                        borderWidth:0,
                        borderColor:'#333',
                    }
                },
                barGap:'0%',
                barCategoryGap:'50%',
                data: [32, 52, 41, 64, 15, 10, 32, 25, 210, 32]
            }

        ]
    };

    var myCharts=echarts.init(document.getElementById("maintanance3"));
    myCharts.setOption(option);
})();

//maintanance4
(function(){
    var option = {
        grid:{
            top:200,
            bottom:100,
            left:200,
            right:100,
        },
        title:{
            text:'养护费用',
            top:80,
            left:800,
            textStyle:{
                color:'#ccc',
                fontSize:70,
            },
        },
        xAxis: {
            type: 'category',
            axisLine:{
                show:true,
                color:'#ccc',
                width:2,
            },
            axisLabel:{
                color:'#ccc',
                fontSize:50,
            },
            splitLine:{
                show:true,
                lineStyle:{
                    width:3,
                    color:'#acacb4'
                },
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            min:0,
            max:200,
            axisLine:{
                show:true,
                color:'#ccc',
                width:2,
            },
            axisLabel:{
                color:'#ccc',
                fontSize:50,
            },
            splitLine:{
                show:true,
                interval:2,
                lineStyle:{
                    width:3,
                    color:'#acacb4'
                },
            },
        },
        series: [{
            data: [120, 180, 150, 80, 70, 110, 130],
            type: 'line',
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                normal: {
                    color: '#ddd',
                    width: 10,
                    type: 'solid'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    color: '#fff',
                }
            }
        }]
    };
    var myCharts=echarts.init(document.getElementById("maintanance4"));
    myCharts.setOption(option);
})();

//maintanance5
(function(){
   var option = {
    grid:{
        top:'10%',
        bottom:'10%',
        left:'8%',
        right:'8%',
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)',
        borderColor:'#454649',
        borderWidth:6,
        textStyle: {
            fontSize: 36,
            color: '#ccc'
        }
    },
    legend: {
        top:50,
        data: ['养护事件1', '养护事件2','养护事件3'],
        itemGap: 50,
        itemWidth:60,
        itemHeight:30,
        textStyle:{
            fontSize: '36', color: "#ccc"
        },
    },
    xAxis:  {
        type: 'value',
        axisLine:{
            show:true,
            color:'#ccc',
            width:3,
        },
        axisLabel:{
            color:'#ccc',
            fontSize:50,
        },
    },
    yAxis: {
        type: 'category',
        axisLine:{
            color:'#ccc',
            width:3,
        },
        axisLabel:{
            color:'#ccc',
            fontSize:50,
        },
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    series: [
    {
        name: '养护事件1',
        type: 'bar',
        stack: '总量',
        barWidth:100,
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                color:'#ccc',
                fontSize:45,
            }
        },
        itemStyle:{
            color:"#eb7c77",
        },
        data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
        name: '养护事件2',
        type: 'bar',
        stack: '总量',
        barWidth:100,
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                color:'#ccc',
                fontSize:45,
            }
        },
        itemStyle:{
            color:"#4eb7cd"
        },
        data: [220, 232, 201, 234, 190, 330, 210]
    },
    {
        name: '养护事件3',
        type: 'bar',
        stack: '总量',
        barWidth:100,
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                color:'#ccc',
                fontSize:45,
            }
        },
        itemStyle:{
            color:"#a0d468"
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    }
    ]
};
var myCharts=echarts.init(document.getElementById("maintanance5"));
myCharts.setOption(option);
})();

//maintanance6
(function(){
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)',
            borderColor:'#454649',
            borderWidth:6,
            textStyle: {
                fontSize: 36,
                color: '#ccc'
            }
        },
        title:{
            text:'养护事件数\n\r1233222',
            left:'center',
            top:'45%',
            textStyle:{
                fontSize:80,
                color:'#ccc',
            },
        },
        series: [
        {
            name:'访问来源',
            type:'pie',
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
            data:[
            {value:335, name:'计划型',itemStyle:{color:'#a0d468'}},
            {value:310, name:'临时型',itemStyle:{color:'#4eb7cd'}},
            {value:234, name:'应急型',itemStyle:{color:'#11ab89'}},
            {value:135, name:'其他',itemStyle:{color:'#e27673'}}
            ]
        }
        ]
    };
    var myCharts=echarts.init(document.getElementById("maintanance6"));
    myCharts.setOption(option);
})();

//中间底部的轮播
var i=0;
var  timer=setInterval(function(){
    if(i>5){
        i=0;
    }
    $(".middle>i").eq(i).addClass("middleColor").siblings().removeClass("middleColor");
    var node=$(".pics").children().eq(0);
    $(".pics").children().eq(0).remove();
    $(".pics").append(node);
    i++;
},2000);

function switchLeft(){
    var node=$(".pics").children().eq(0);
    $(".pics").children().eq(0).remove();
    $(".pics").append(node);
}
$("#left").hover(function(){
    clearInterval(timer);
});
$("#left").click(function(){
    switchLeft();
    
});

function switchRight(){
    var node=$(".pics").children().eq(5);
    $(".pics").children().eq(5).remove();
    $(".pics").prepend(node);
}
$("#right").hover(function(){
    clearInterval(timer);
});
$("#right").click(function(){
    switchRight();
    var index=$(".middle>.middleColor").index();
    index++;
    if(index==5){
        index=0;
    }
    $(".middle>i").eq(index).addClass(".middleColor").siblings().removeClass(".middleColor");
});


setTimeout(function(){
  location.replace("http://local.com/highway/operation.html");  
},t);

});