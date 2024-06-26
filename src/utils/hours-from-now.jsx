export const getHoursFromNow = (date) => {
    const now = new Date();
    const givenDate = new Date(date);
    const millisecondsDifference = now - givenDate;
    const hoursDifference = millisecondsDifference / (1000 * 60 * 60);
    const daysDifference = millisecondsDifference / (1000 * 60 * 60 * 24);
    const val = hoursDifference.toFixed(2);
    const minutes = Math.round(hoursDifference.toFixed(2) * 100);
    let time = minutes + `${minutes > 1 ? " minutes ago" : " minute ago"}`;
    if(val > 1){
        const h = Math.round(hoursDifference.toFixed(2));
        time =  h + `${h > 1 ? " hours ago" : " hour ago"}`;
    }
    if(val > 24){
        const h = Math.round(daysDifference.toFixed(2));
        time =  h + `${h > 1 ? " days ago" : " day ago"}`;
    }
    return time;
  }  
