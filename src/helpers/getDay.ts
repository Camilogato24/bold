export const getTime = ():string => {
    let today:any = new Date();
    let dd:any = today.getDate();
    let mm:any = today.getMonth();
    let yyyy = today.getFullYear();
    const mes = mm + 1
    today = mes + '/' + dd + '/' + yyyy;
    return today
  }