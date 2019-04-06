
/**
 *
 * DATA SOURCE:  http://www.census.gov/foreign-trade/statistics/country/
 *
 */

function fetchData() {
    d3.csv("data/ustrade_2000-20131.csv", function(csv) {
        //console.log(csv);
        var normalized=[];

        for (var i=0; i < csv.length; i++)  {
            var row=csv[i];
            //console.log(row);
            for (var y=1; y < 13; y++) {
                // if (row.CTY_CODE < "1000") continue;  //Remove Aggregated Continent Data
                var newRow={};
                newRow.Year=row.year;
                newRow.Country=row.CTYNAME;
                newRow.Month=(y < 10) ? "0" + String(y) : String(y);
                newRow.Imports=Number(row["I_" + String(y)]);
                newRow.Exports=Number(row["E_" + String(y)]);
                normalized.push(newRow);
            }
        }
        console.log(normalized);
        countriesGrouped = d3.nest()
            .key(function(d) { return d.Year; })
            .key(function(d) { return d.Month; })
            .entries(normalized);
        console.log(countriesGrouped);
        //Sum total deficit for each month
        var totalImport=0;
        var totalExport=0;
        // console.log(countriesGrouped);
        for (var y=0; y < countriesGrouped.length; y++) {
            var yearGroup=countriesGrouped[y];//yearGroup对应的某年份的各项数据
            for (var m=0; m < yearGroup.values.length; m++) {//m<12 
                var monthGroup=yearGroup.values[m];
                for (var c=0; c < monthGroup.values.length; c++) {//c<246 246个国家
                    var country=monthGroup.values[c];//得到的是246个国家各个国家某年某月的进出口
                    totalImport= Number(totalImport) + Number(country.Imports)*10000000;//某月246国家总的进出口额
                    totalExport=Number(totalExport) + Number(country.Exports)*10000000;
                }
                //    console.log("totalExport=" + String(totalExport));
                monthlyExports.push(totalExport);
                monthlyImports.push(totalImport);//某年246国家总的进出口额
            }

        }

        //Start running
        run();
        refreshIntervalId = setInterval(run, delay);
        // run();

    });

}
