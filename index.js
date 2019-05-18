function getTimes() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1 > 9 ? date.getMonth()+1 : "0" + (date.getMonth()+1);
	var day = date.getDate() > 9 ? date.getDate()+1 : "0" + date.getDate();
	var hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
	var m = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
	var s = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
	return year + "-" + month +"-" + day + " " + hours + ":" + m + ":" + s;

}
