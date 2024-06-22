google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['HTML', 8],
        ['CSS', 7],
        ['Javascript', 5],
        ['PHP', 2],
        ['MySQL ',1]
    ]);
    var options = { 'title': 'language skills', 'width': 550, 'height': 400, backgroundColor: 'black', titleTextStyle: {
        color: 'white'
    },legend: {
        textStyle: {
            color: 'white'
        }
    }};
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}