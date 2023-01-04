// console.log("Hey this is working");

let url = "https://kontests.net/api/v1/all";
let arr = [];
let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((contests) => {
    // console.log(contests);
    ihtml = "";
    for (item in contests) {
      //   console.log(contests[item]);
      arr.push(contests[item].name);
      ihtml += `
        <div class="card mx-2 my-2" id="${contests[item].name}" style="width: 22rem;">
                <img src="https://t3.ftcdn.net/jpg/03/43/43/72/360_F_343437244_HrxIVZWbfh29tgxuRlxbPXEpHMSmfkAn.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contests[item].name}</h5>
                    <p class="card-text">Status is ${contests[item].status} and site is ${contests[item].site}</p>
                    <p class="card-text">In 24 Hours? ${contests[item].in_24_hours}</p>
                    <p>Start at: ${contests[item].start_time}</p>
                    <p>End at: ${contests[item].end_time}</p>
                    <a href="${contests[item].url}" class="btn btn-primary my-2">Visit Here</a>
                </div>
            </div>
        `;
    }
    cardContainer.innerHTML = ihtml;
  });

// console.log(arr);
// arr.splice(arr.indexOf("Codeforces Round (Div. 2)"), 1)
// console.log(arr);

// -----------------------------------------------------

const searchFun = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();
  // console.log(filter);
  // console.log(arr);
  for (let item2 = 0; item2 < arr.length; item2++) {
    let sear = arr[item2];

    // console.log(sear);
    // if (sear) { // if (sear) == textValue (Both are same)
    let textValue = sear;
    // console.log(textValue);

    if (textValue && textValue.toUpperCase().indexOf(filter) > -1) {
      // console.log("if");
      let a = document.getElementById(sear);
      // console.log(sear);
      // console.log(a);
    } else {
      //  console.log("else");
      let a = document.getElementById(sear);
      // console.log(sear);
      // console.log(a);
      a.style.display = "none";
    }
    // }
  }
};
