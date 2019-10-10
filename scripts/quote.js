//Products object for quote referral

// var screens = {
//     qLine: {
//         model: 'Q-Line',
//         features: ['touch screen', 'networking'],
//         costPerUnit: 1000,
//     },
//     dLine: {
//         model: 'D-Line',
//         features: ['touch screen', 'interactive'],
//         costPerUnit: 2000,
//     }
// };
// alert('Hello');

// function check() {
//     let screens = document.getElementsById('myCheck');
//     alert(screens[0]);
// }


//  function check() {
//     "use_strict";
//      let displays = [];
//     // let models = form.displays;
    //  let checkBox = document.getElementById("myCheck");
    //  if(checkBox.checked == true) {
    //      displays.push(getElementByTag('input[name]'));
    // } alert(displays);
//     // for(let i = 0; i < models.length; i++) {
//     //     if(models[i].checked) {
//     //         displays.push(models[i].value);
//     //     }
//     // } alert('displays: ' + displays.join(', '));
//     // console.log(models);
    //  }

// function check() {
//     "use_strict";
//     let screens = getElementByClassName('MyCheck');
//     let selection = [];
//     for(let i = 0; i < 3; i++) {
//         if(screens[i].checked === true) {
//             selection.push(screens[i]);
//         }
//     } console.log(screens);
// }

//Array sort function to eliminate duplicates in list, returns new list without duplicates
var results = ['cat', 'dog', 'mouse', 'cat', 'rat', 'bird', 'dog'];

function arrSort(list) {
    let arr = [];
    let jsList = Array.from(list);  //expected output ['cat', 'dog', 'mouse', 'rat', 'bird']
    for(let i = 0; i < jsList.length; i++) {
        if(arr.includes(jsList[i]) === false) {
            arr.push(jsList[i]);
        }
     } return arr;
 }

console.log(arrSort(results));