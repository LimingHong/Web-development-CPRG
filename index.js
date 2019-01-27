//create img with relative path. Open it onclick by new tab and close in 2s   
var Img1 = document.createElement('img');
Img1.src = 'image/1.jpg';
Img1.style.border = '1px solid black';
Img1.style.height = "20rem";
Img1.style.width = "30rem";

Img1.addEventListener('click', function (event) {
    var pic1 = window.open("image/1.jpg");
    setTimeout(function () {
        pic1.close();
    }, 2000);
});


var Img2 = document.createElement('img');
Img2.src = 'image/2.png';
Img2.style.border = '1px solid black';
Img2.style.height = "20rem";
Img2.style.width = "30rem";

Img2.addEventListener('click', function (event) {
    var pic2 = window.open("image/2.png");
    setTimeout(function () {
        pic2.close();
    }, 2000);
});
var Img3 = document.createElement('img');
Img3.src = 'image/3.jpg';
Img3.style.border = '1px solid black';
Img3.style.height = "20rem";
Img3.style.width = "30rem";

Img3.addEventListener('click', function (event) {
    var pic3 = window.open("image/3.jpg");
    setTimeout(function () {
        pic3.close();
    }, 2000);
});
var Img4 = document.createElement('img');
Img4.src = 'image/4.jpg';
Img4.style.border = '1px solid black';
Img4.style.height = "20remx";
Img4.style.width = "30rem";

Img4.addEventListener('click', function (event) {
    var pic4 = window.open("image/4.jpg");
    setTimeout(function () {
        pic4.close();
    }, 2000);
});
var Img5 = document.createElement('img');
Img5.src = 'image/5.jpg';
Img5.style.border = '1px solid black';
Img5.style.height = "20rem";
Img5.style.width = "30rem";

Img5.addEventListener('click', function (event) {
    var pic5 = window.open("image/5.jpg");
    setTimeout(function () {
        pic5.close();
    }, 2000);
});



//create 3 arrays for images, description and URL 

var array1 = [Img1, Img2, Img3, Img4, Img5];
var array2 = ["Best forest ", "Pure green lake", "Great water fall", "Beautiful Blue lake", "Coconut world"];
var array3 = ["https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjh3ITQ54ngAhXLCDQIHQ9hBxsQjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Fen%2Fphotos%2Fbeautiful%2520natural%2520scenery%2F&psig=AOvVaw29Ywf4BcUOa4-H6Mp3bAsD&ust=1548535812934438", "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjq9MuR6IngAhVnJTQIHQlVB7MQjRx6BAgBEAU&url=https%3A%2F%2Fwww.videoblocks.com%2Fvideo%2Fvibrant-nature-environment-landscape-scenery-background-rvacuhhqlizzn9zmp&psig=AOvVaw29Ywf4BcUOa4-H6Mp3bAsD&ust=1548535812934438", "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi64YDb6IngAhWKIjQIHfVECGEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_87804856_landscape-scenery-view-of-a-waterfall-in-china.html&psig=AOvVaw29Ywf4BcUOa4-H6Mp3bAsD&ust=1548535812934438", "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiPto786IngAhXcFjQIHQsdAZ0QjRx6BAgBEAU&url=https%3A%2F%2Funsplash.com%2Fcollections%2F762489%2Fnature-scenery&psig=AOvVaw29Ywf4BcUOa4-H6Mp3bAsD&ust=1548535812934438", "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj6hvSV6YngAhVCFzQIHWLjAvoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTdpBRZ0dZhw&psig=AOvVaw29Ywf4BcUOa4-H6Mp3bAsD&ust=1548535812934438"]

// get the reference for the main
var main = document.getElementsByTagName('main')[0];

// creates a table element, a row element, 3 header, and text inside the header    
var tbl = document.createElement("table");
var row = document.createElement("tr");
var head1 = document.createElement("th");
var head2 = document.createElement("th");
var head3 = document.createElement("th");
var image = document.createTextNode('Image');
var description = document.createTextNode('Description');
var URL = document.createTextNode("URL")

// appendChild header text to header, header to row, row to table
head1.appendChild(description);
head2.appendChild(URL);
head3.appendChild(image);
row.appendChild(head3);
row.appendChild(head1);
row.appendChild(head2);
tbl.appendChild(row);

//Make a table with loop the array create data content, data, row 
// and appendChild them as above for 3 arrays.
for (i = 0; i < 5; i = i + 1) {
    var row = document.createElement('tr');
    var cell1 = document.createElement('td');
    var image1to5 = document.createElement('img');
    var image1to5 = array1[i];
    cell1.appendChild(image1to5);
    row.appendChild(cell1);


    var cell2 = document.createElement('td');
    var p = document.createElement('p');
    var cellText2 = document.createTextNode(array2[i]);
    p.appendChild(cellText2);
    cell2.appendChild(p);
    row.appendChild(cell2);



    var cell3 = document.createElement('td');
    var p2 = document.createElement('P');
    var cellText3 = document.createTextNode(array3[i]);

    p2.appendChild(cellText3);
    cell3.appendChild(p2);
    row.appendChild(cell3);

    tbl.appendChild(row);
}
// appendChild table to reference of main
main.appendChild(tbl);