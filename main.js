function showResume() {
    // document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-form').style.display = 'block';
}

// function addNewField() {
//     // alert('Savdhaan');

//     let newNode = document.createElement('textarea')
//         // newNode.classList.add('form-control')
//         // newNode.classList.add('weField')

//     let weOb = document.getElementById('we');
//     let weAddButtonOb = document.getElementById('weAddButton');

//     weOb.insertBefore(newNode, weAddButtonOb);
// }

// function addNewAqField() {
//     // alert('Savdhaan');

//     let newNode = document.createElement('textarea')
//         // newNode.classList.add('form-control')
//         // newNode.classList.add('aqField')

//     let aqOb = document.getElementById('aq');
//     let aqAddButtonOb = document.getElementById('weAddButton');

//     aqOb.insertBefore(newNode, aqAddButtonOb);
// }

// function addNewProjField() {
//     // alert('Savdhaan');

//     let newNode = document.createElement('input')
//         // newNode.classList.add('form-control')
//         // newNode.classList.add('aqField')

//     let aqOb = document.getElementById('proj');
//     let aqAddButtonOb = document.getElementById('weAddButton');

//     aqOb.insertBefore(newNode, aqAddButtonOb);
// }

// function addNewSkillField() {
//     // alert('Savdhaan');

//     let newNode = document.createElement('input')
//         // newNode.classList.add('form-control')
//         // newNode.classList.add('aqField')

//     let aqOb = document.getElementById('skill');
//     let aqAddButtonOb = document.getElementById('weAddButton');

//     aqOb.insertBefore(newNode, aqAddButtonOb);
// }

// -----------------Alternateive way----------
// var countre = 1;

// function addNewField() {
//     countre += 1

//     html = '<div class="form-group" id="we' + countre + '">\
//             <textarea class="form-textarea form-control weField" name="' + countre + '" id="" cols="30" rows="10" placeholder="Work Experience"></textarea>\
//         </div>'

//     var form = document.getElementById('we')
//         // form.classList.add('form-group')
//     form.innerHTML += html

// }

//generating CV

function generateCV() {
    // console.log("Generating CV");
    // alert('savdhann');

    // let nameField = document.getElementById('nameField').value;
    // let nameT1 = document.getElementById('nameT1');

    // nameT1.innerHTML = nameField;

    document.getElementById('nameT1').innerHTML = document.getElementById('nameField').value;

    document.getElementById('titleT').innerHTML = document.getElementById('titleField').value;

    document.getElementById('numberT').innerHTML = document.getElementById('numberField').value;
    document.getElementById('addressT').innerHTML = document.getElementById('addressFiled').value;
    document.getElementById('imgT').innerHTML = document.getElementById('imgField').value;



    document.getElementById('emailT').innerHTML = document.getElementById('emailField').value;
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;
    document.getElementById('linkT').innerHTML = document.getElementById('linkedField').value;
    document.getElementById('TwT').innerHTML = document.getElementById('twitField').value;
    document.getElementById('GitT').innerHTML = document.getElementById('gitField').value;
    document.getElementById('webT').innerHTML = document.getElementById('webField').value;

    document.getElementById('SummT').innerHTML = document.getElementById('summField').value;

    document.getElementById('objT').innerHTML = document.getElementById('objField').value;

    document.getElementById('weT1').innerHTML = document.getElementById('weField1').value;
    document.getElementById('weT2').innerHTML = document.getElementById('weField2').value;

    document.getElementById('eduT1').innerHTML = document.getElementById('eduField1').value;
    document.getElementById('col1').innerHTML = document.getElementById('college1').value;

    document.getElementById('eduT2').innerHTML = document.getElementById('eduField2').value;
    document.getElementById('col2').innerHTML = document.getElementById('college2').value;

    document.getElementById('eduT3').innerHTML = document.getElementById('eduField3').value;
    document.getElementById('col3').innerHTML = document.getElementById('college3').value;

    document.getElementById('pHT1').innerHTML = document.getElementById('proj1').value;
    document.getElementById('pAT1').innerHTML = document.getElementById('proj1AB').value;

    document.getElementById('pHT2').innerHTML = document.getElementById('proj2').value;
    document.getElementById('pAT2').innerHTML = document.getElementById('proj2AB').value;

    document.getElementById('pHT3').innerHTML = document.getElementById('proj3').value;
    document.getElementById('pAT3').innerHTML = document.getElementById('proj3AB').value;

    document.getElementById('skT1').innerHTML = document.getElementById('sk1').value;
    document.getElementById('skT2').innerHTML = document.getElementById('sk2').value;
    document.getElementById('skT3').innerHTML = document.getElementById('sk3').value;


    // we
    // let wes = document.getElementsByClassName('weField')
    // let str = "";

    // for (let e of wes) {
    //     str = str + `<div class="e-section-wrapper">
    //                     <p> ${e.value} </p>
    //                 </div>`;
    // }

    // document.getElementById("weT").innerHTML = str;

    // aq
    // let aqs = document.getElementsByClassName('aqField')
    // let str1 = "";

    // for (let e of aqs) {
    //     str1 = str1 + `<div class="e-section-wrapper">
    //                     <h5> ${e.value} </h5>
    //                 </div>`;
    // }

    // document.getElementById("edu").innerHTML = str1;

    //project
    // let ps = document.getElementsByClassName('pField')
    // let str1 = "";

    // for (let e of ps) {
    //     str1 = str1 + `<div class="e-section-wrapper">
    //                     <p>${e.value}</p>
    //                 </div>`;
    // }

    // document.getElementById("weT").innerHTML = str1;


    //code for image
    let file = document.getElementById('imgField').files[0];

    console.log(file);

    let reader = new FileReader()

    reader.readAsDataURL(file);

    console.log(reader.result);

    // set the image to template
    reader.onloadend = function() {
        document.getElementById('imgT').src = reader.result;
    }

    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-template').style.display = 'block';
}

// print CV
function printCV() {
    window.print();
}
