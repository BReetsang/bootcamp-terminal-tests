export default function yearsAgo(date){
    var currentDate = new Date();
      //console.log(date);
      //console.log(currentDate.getFullYear());
      //console.log(currentDate.getFullYear() - date);
    var extractCurrentYear = currentDate.getFullYear();
      //console.log(extractCurrentYear);
    return extractCurrentYear-date;
    }
    console.log(yearsAgo(1999));