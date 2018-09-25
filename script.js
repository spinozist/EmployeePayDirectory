var empName = "";
var empRole = "";
var startDate = "";
var empRate = "";

window.onload = function (){
$(`button`).on(`click`, function (){
    empName = $(`#employee-name`).val();
    empRole = $(`#role`).val();
    startDate = $(`#start-date`).val();
    empRate = $(`#monthly-rate`).val();

    console.log(empName);
    console.log(empRole);
    console.log(startDate);
    console.log(empRate);
});
}