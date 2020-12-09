// //დავალება [1]:
// //მოცემულია მასივი:
//  let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche"];
// // ციკლის დახმარებით, ეკრანზე გამოიტანეთ ყველა ელემენტი, დაწყებული მეორე ელემენტისგან მე-5ის ჩათვლით; 
//  for(i=1; i<5; i++){
//      console.log(cars[i])
//  }
// //დავალება [2]:
// // შექმენით სახელების მასივი და დაბეჭდეთ ის სახელები რომლისს სიმბოლების რაოდენობა 3 ზე მეტია;
//  let names = ["erti","ori","sami","otxi","tutxmeti"];
//  for(let i=0; i<names.length; i++)
//   if(names[i].length>3) {console.log(names[i])};
// //დავალება [3]:
// // შექმენით ციფრების მასივი და გამოიტანეთ მარტო ლუწი რიცხვები და მარტო კენტი რიცხვები;
//   let arr = [392,10512,8381,99913,4123512,9999];
//  for(let w = 0; w < numbs.length; w++)
//    if(numbs[w]%2==0) {console.log(numbs[w])};
//  for(let w= 0; w <numbs.length; w++)
//    if(numbs[w]%2==1) {console.log(numbs[w])};
// //დავალება [4]:
// // მოცემულია მასივი:
//  let user = ['name', 'age', 25, 50, "surname", [100, 500] ];
// // ჩადგმული მასივიდან ამოიღეთ მეორე ელემენტი; ანუ 500;
//  console.log(user[5][1])
//  // დავალება [5]:
//  // მოცემულია ობიექტი:
//  var person = {
//      firstname: "john",
//      lastname: "doe",
//      age: 50,
//      eyecolor: "blue"
//    };
// // ამოიღეთ person ცვლადის თვალის ფერი;
//  console.log(person.eyecolor);
// // დავალება [6]:
// // შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი;
// let name = [20,19,18,17,16,"tutxmeti"]
// for (let w = 0; w <name.length; w++ ) {
//     console.log(name[w])
// }
// // დავალება[7]
// // შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
// //   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
// //   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
// //   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// //   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// //   დაბეჭდეთ მასივისი ახალი ელემენტები.
// let numbers = [5, 25, 89, 120, 36]
// numbers.push("python","javascript");
// numbers.unshift("html","css");
// console.log(numbers.length)
// numbers.shift();
// numbers.pop();
// console.log(numbers);
// // დავალება[8]
// let xili = ["portoxali", "banani", "msxali"];
// console.log(xili.length);
// xili.push("vashli", "giorgisi");
// xili.unshift("sazamtro");
// console.log(xili.length);
// xili.splice(2, 0, 'mango')
// xili.shift();
// xili.pop();
// console.log(xili.length)
