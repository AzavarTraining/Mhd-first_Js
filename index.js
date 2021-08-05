 function greet(name) {
     console.log(`Hello ${name}`);
 }

 function square(num) {
     return num * num
 }

 function pass(mark) {
     console.log(mark >= 60 ? 'pass' : 'fail')
 }
 greet('Mohammad')

 console.log(square(4))

 console.log(2 ** 5)

 pass(65)
 pass(59)

 console.log(true || true)


 function time(hour) {
     if (hour >= 6 && hour < 12) {
         console.log('good morning')
     } else if (hour > 12 && hour <= 18) {
         console.log('good night')
     } else {
         console.log('good evning')
     }
 }

 time(7)
 time(13)
 time(20)

 let names = ['mohammad', '3bood']
 for (let m in names)
     console.log(m)

 for (let m of names)
     console.log(m)


 function max(num1, num2) {
     return (num1 > num2) ? num1 : num2

 }

 console.log(max(5, 3))