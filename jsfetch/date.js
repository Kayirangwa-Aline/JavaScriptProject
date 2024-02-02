
const today = dayjs();// it will shows you current date 
const deliveryDate = today.add(7, 'days');// take current date then add 7days
console.log(deliveryDate.format('dddd, MMMM D'));// display date in format(names of the week, month and day)