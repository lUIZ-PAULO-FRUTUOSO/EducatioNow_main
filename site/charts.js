const ctx2 = document.getElementById('grafico_barras');

new Chart(ctx2,{
type:'bar',
data:{
    labels:['Vs Code','Android studio','Notepad++'],
    datasets:[{
    label: "IDEs mais populares em 2023",
    data:[30,12,17],
    borderWidth:1
    }]
}
})