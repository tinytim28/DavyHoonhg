/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ctx;
var ctx2;
var myChart;
var myChart2;
var person;
var month;

$(document).ready(function () {
    var date = new Date().getMonth();
    var startMonth = 0;
    var array = "";
    var htmlcode = "Horizon:  <select id=\"selectMonth\" onchange=\"dropdownChangeMonth();dropdownChangeYTD();\"><option value=\"YTD\"selected>Year-To-Date<\/option>";
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    for (var i = startMonth; i <= date; i++) {
        array += monthNames[i] + ",";
    }
    var array1 = array.split(",");
    for (var i = 0; i < array1.length - 1; i++) {
        var temp = i + 1;
        htmlcode += "<option value=" + temp + ">" + array1[i] + "<\/option>";

    }
    htmlcode += "<\/select>";
    $("#trans_table").html(htmlcode);
    display();


});
function dropdownChangeYTD() {
    month = document.getElementById("selectMonth").value;
    myChart.destroy();
    myChart2.destroy();
    if (month === "YTD") {
        var data = {
            type: "managerTeamOverviewYTD"
        };
        $.ajax({
            type: "POST",
            url: "/Savvy0.2/OverviewServlet",
            datatype: 'json',
            data: data,
            success: function (responseJson) {               
                var strings = responseJson.split(",");
                var index = (strings.length - 1) / 2;
                var labels = [];
                var dataPoints = [];
                var totalYTDsales = strings[strings.length - 1];
                var htmlcode = "<th>Total Year-to-Date Sales:  <\/th><td>" + totalYTDsales + "<\/td>";
                $("#trans_table3").html(htmlcode);
                for (var i = 0; i < index; i++) {
                    labels[i] = strings[i];
                }
                for (var j = index; j < strings.length - 1; j++) {
                    dataPoints[j - index] = strings[j];
                }
                ctx = document.getElementById('smallMyChart1').getContext('2d');
                ctx2 = document.getElementById('smallMyChart2').getContext('2d');
                myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: labels,
                        datasets: [{
                                backgroundColor: [
                                    "#2ecc71",
                                    "#3498db",
                                    "#95a5a6",
                                    "#9b59b6",
                                    "#f1c40f",
                                    "#e74c3c",
                                    "#34495e"
                                ],
                                data: dataPoints
                            },
                        ]
                    }
                });
                myChart2 = new Chart(ctx2, {
                    type: 'horizontalBar',
                    data: {
                        labels: labels,
                        datasets: [{
                                label: 'Closed Sales',
                                backgroundColor: [
                                    "#2ecc71",
                                    "#3498db",
                                    "#95a5a6",
                                    "#9b59b6",
                                    "#f1c40f",
                                    "#e74c3c",
                                    "#34495e"
                                ],
                                data: dataPoints
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{stacked: true}],
                            yAxes: [{stacked: true}]
                        }
                    }
                });

            },
            error: function (xhr, status, error) {
                alert(error);
            }

        });
        var data = {
            month: month,
            type: "managerRetrieveCaseBreakdownYTD"
        };
        $.ajax({
            type: "POST",
            url: "/Savvy0.2/OverviewServlet",
            datatype: 'json',
            data: data,
            success: function (responseJson) {
                alert(responseJson);
                var strings = responseJson.split(",");
                var htmlcode = "";
                htmlcode += "<tr>";
                htmlcode += "<th>Life<\/th>";
                htmlcode += "<th>Investment<\/th>";
                htmlcode += "<th>Savings<\/th>";
                htmlcode += "<th>Hospitalisation<\/th>";
                htmlcode += "<th>Retirement<\/th>";
                htmlcode += "<th>Others<\/th>";
                htmlcode += "<\/tr>";

                for (var i = 0; i < strings.length; i++) {
                    htmlcode += "<td class='numberOf' id='numberOf" + i + "'>" + strings[i] + "<\/td>";
                }
                htmlcode += "<\/select>";
                $("#trans_table2").html(htmlcode);




            },
            error: function (xhr, status, error) {
                alert(error);
            }
        });
    }
}
function dropdownChangeMonth() {
    myChart.destroy();
    myChart2.destroy();
    month = document.getElementById("selectMonth").value;
    if (month !== "YTD") {
        var data = {
            month: month,
            type: "managerTeamOverviewOneMonth"
        }
        $.ajax({
            type: "POST",
            url: "/Savvy0.2/OverviewServlet",
            datatype: 'json',
            data: data,
            success: function (responseJson) {
                var strings = responseJson.split(",");
                var index = (strings.length - 1) / 2;
                var labels = [];
                var dataPoints = [];
                var totalYTDsales = strings[strings.length - 1];
                var htmlcode = "<th>Total Month Sales:  <\/th><td>" + totalYTDsales + "<\/td>";
                $("#trans_table3").html(htmlcode);
                for (var i = 0; i < index; i++) {
                    labels[i] = strings[i];
                }
                for (var j = index; j < strings.length - 1; j++) {
                    dataPoints[j - index] = strings[j];
                }
                ctx = document.getElementById('smallMyChart1').getContext('2d');
                ctx2 = document.getElementById('smallMyChart2').getContext('2d');
                myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: labels,
                        datasets: [{
                                backgroundColor: [
                                    "#2ecc71",
                                    "#3498db",
                                    "#95a5a6",
                                    "#9b59b6",
                                    "#f1c40f",
                                    "#e74c3c",
                                    "#34495e"
                                ],
                                data: dataPoints
                            },
                        ]
                    }
                });
                myChart2 = new Chart(ctx2, {
                    type: 'horizontalBar',
                    data: {
                        labels: labels,
                        datasets: [{
                                label: 'Closed Sales',
                                backgroundColor: [
                                    "#2ecc71",
                                    "#3498db",
                                    "#95a5a6",
                                    "#9b59b6",
                                    "#f1c40f",
                                    "#e74c3c",
                                    "#34495e"
                                ],
                                data: dataPoints
                            },
                        ]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{stacked: true}],
                            yAxes: [{stacked: true}]
                        }
                    }
                });

            },
            error: function (xhr, status, error) {
                alert(error);
            }

        });
        var data = {
            month: month,
            type: "managerRetrieveCaseBreakdownMonth"
        };
        $.ajax({
            type: "POST",
            url: "/Savvy0.2/OverviewServlet",
            datatype: 'json',
            data: data,
            success: function (responseJson) {
                var strings = responseJson.split(",");
                var htmlcode = "";
                htmlcode += "<tr>";
                htmlcode += "<th>Life<\/th>";
                htmlcode += "<th>Investment<\/th>";
                htmlcode += "<th>Savings<\/th>";
                htmlcode += "<th>Hospitalisation<\/th>";
                htmlcode += "<th>Retirement<\/th>";
                htmlcode += "<th>Others<\/th>";
                htmlcode += "<\/tr>";

                for (var i = 0; i < strings.length; i++) {
                    htmlcode += "<td class='numberOf' id='numberOf" + i + "'>" + strings[i] + "<\/td>";
                }
                htmlcode += "<\/select>";
                $("#trans_table2").html(htmlcode);




            },
            error: function (xhr, status, error) {
                alert(error);
            }
        });
    }

}


function display() {
    var data = {
        month: month,
        type: "managerRetrieveCaseBreakdownYTD"
    };
    $.ajax({
        type: "POST",
        url: "/Savvy0.2/OverviewServlet",
        datatype: 'json',
        data: data,
        success: function (responseJson) {
            var strings = responseJson.split(",");
            var htmlcode = "";
            htmlcode += "<tr>";
            htmlcode += "<th>Life<\/th>";
            htmlcode += "<th>Investment<\/th>";
            htmlcode += "<th>Savings<\/th>";
            htmlcode += "<th>Hospitalisation<\/th>";
            htmlcode += "<th>Retirement<\/th>";
            htmlcode += "<th>Others<\/th>";
            htmlcode += "<\/tr>";

            for (var i = 0; i < strings.length; i++) {
                htmlcode += "<td class='numberOf' id='numberOf" + i + "'>" + strings[i] + "<\/td>";
            }
            htmlcode += "<\/select>";
            $("#trans_table2").html(htmlcode);




        },
        error: function (xhr, status, error) {
            alert(error);
        }
    });
    //both single month and YTD methods for servlet working
    $.get("/Savvy0.2/OverviewServlet?type=managerTeamOverviewYTD", {
        "_": $.now()
    }, function (responseJson) {
        var strings = responseJson.split(",");
        var index = (strings.length - 1) / 2;
        var labels = [];
        var dataPoints = [];
        var totalYTDsales = strings[strings.length - 1];
        var htmlcode = "<th>Total Year-to-Date Sales:  <\/th><td>" + totalYTDsales + "<\/td>";
        $("#trans_table3").html(htmlcode);
        for (var i = 0; i < index; i++) {
            labels[i] = strings[i];
        }
        for (var j = index; j < strings.length - 1; j++) {
            dataPoints[j - index] = strings[j];
        }
        ctx = document.getElementById('smallMyChart1').getContext('2d');
        ctx2 = document.getElementById('smallMyChart2').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                        backgroundColor: [
                            "#2ecc71",
                            "#3498db",
                            "#95a5a6",
                            "#9b59b6",
                            "#f1c40f",
                            "#e74c3c",
                            "#34495e"
                        ],
                        data: dataPoints
                    },
                ]
            }
        });
        myChart2 = new Chart(ctx2, {
            type: 'horizontalBar',
            data: {
                labels: labels,
                datasets: [{
                        label: 'Closed Sales',
                        backgroundColor: [
                            "#2ecc71",
                            "#3498db",
                            "#95a5a6",
                            "#9b59b6",
                            "#f1c40f",
                            "#e74c3c",
                            "#34495e"
                        ],
                        data: dataPoints
                    },
                ]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{stacked: true}],
                    yAxes: [{stacked: true}]
                }
            }
        });
    });
}



