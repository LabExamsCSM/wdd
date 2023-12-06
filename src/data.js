export const Data = [
  {
    title: `Create a web page giving the following train details.      a) Train Name        b) Starting Place        c) Destination       
      d) Arrival and Departure time         e) Fare. Place a border for the table and use cell padding to present the cell data
      with clarity. Align the table in the center of the screen. Use a caption saying ‘Time Table and Fare List’. 
      `,
    code: `<html>
      <head>
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
            text-align: center;
          }
          table,
          th,
          td {
            border: 1px solid black;
            padding: 15px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h2>Time Table and Fare List</h2>
        <table>
          <tr>
            <th>Train Name</th>
            <th>Starting Place</th>
            <th>Destination</th>
            <th>Arrival and Departure Time</th>
            <th>Fare</th>
          </tr>
          <tr>
            <td>Vandhe Bharat</td>
            <td>Tirupati(TPTY)</td>
            <td>Guntur Junction(GNT JN)</td>
            <td>15:15 - 20:00</td>
            <td>Rs.960</td>
          </tr>
          <tr>
            <td>Jan Shatabdi</td>
            <td>Vijayawada Jn</td>
            <td>MGR Chennai Ctr</td>
            <td>15:30 - 23:30</td>
            <td>Rs.550</td>
          </tr>
        </table>
      </body>
    </html>  
      `,
  },
  {
    title: `Create a web Page for following features:  • Create an unordered list  • Create an ordered list  o Use various bullet
      styles  • Create nested lists  o Use the font tag in conjunction with lists  • Create definition lists  o Use graphics as
      bullets`,
    code: `<html>
      <head>
        <style>
          ul {
            list-style-type: none;
          }
          .circle {
            list-style-type: circle;
          }
          .square {
            list-style-type: square;
          }
          .decimal {
            list-style-type: decimal;
          }
          .lower-alpha {
            list-style-type: lower-alpha;
          }
          .upper-alpha {
            list-style-type: upper-alpha;
          }
          .nested {
            margin-left: 20px;
          }
          .definition {
            list-style-image: url("https://www.w3schools.com/cssref/sqpurple.gif");
          }
        </style>
      </head>
      <body>
        <h1><u>Lists</u></h1>
        <h2><u>Unordered List</u></h2>
        <ul>
          <li>Unordered List Item 1</li>
          <li>Unordered List Item 2</li>
          <li>Unordered List Item 3</li>
        </ul>
        <h2><u>Ordered List</u></h2>
        <ol>
          <li class="circle">Ordered List Item 1</li>
          <li class="square">Ordered List Item 2</li>
          <li class="decimal">Ordered List Item 3</li>
          <li class="lower-alpha">Ordered List Item 4</li>
          <li class="upper-alpha">Ordered List Item 5</li>
        </ol>
        <h2><u>Nested Lists with Font</u></h2>
        <ul>
          <li>
            <font size="3">Main Item 1</font>
            <ul>
              <li><font size="2">Subitem 1</font></li>
              <li><font size="2">Subitem 2</font></li>
            </ul>
          </li>
          <li><font size="3">Main Item 2</font></li>
        </ul>
        <h2><u>Definition List with Graphics</u></h2>
        <dl>
          <dt>
            <img src="bullet.png" alt="Bullet" height="15" width="15" /> Term 1
          </dt>
          <dd>Definition 1</dd>
          <dt>
            <img src="bullet.png" alt="Bullet" height="15" width="15" /> Term 2
          </dt>
          <dd>Definition 2</dd>
        </dl>
      </body>
    </html>
    `,
  },
  {
    title: ` Create a web Page to display your biodata with following features:  • Name  • Address • Photo  • Educational
      qualifications • Technical skills etc.,`,
    code: `<html>
      <head>
        <title>Dheeraj Gadde - Bio Data</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
          }
          header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 20px;
          }
          img.profile {
            display:block;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          li {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body><center>
          <h1>Dheeraj Gadde</h1>
          <h2>Student</h2>
          <img src="kakashi.jpg" alt="Profile Picture" class="profile">
            <h2><u>Personal Information</u></h2>
            <ul>
              <li><strong>Name:</strong> Dheeraj Gadde</li>
              <li><strong>Address:</strong> Guntur </li>
              <li><strong>Email:</strong> dheerajgadde3006@gmail.com</li>
              <li><strong>Phone:</strong>+91 8919489804</li>
            </ul>
            <h2><u>Educational Qualifications</u></h2>
            <ul>
              <li><strong>Bachelor of technology in computer science</strong>, RVRJCCE, Guntur</li>
            </ul>
            <h2><u>Technical Skills</u></h2>
            <ul>
              <li>Programming Languages: Java, C, Python, JavaScript</li>
              <li>Web Technologies: HTML, CSS</li>
              <li>Database Technologies: MySQL</li>
            </ul></center>
      </body>
      </html>`,
  },
  {
    title: `Write different types of (inline, embedded, and external) styles in CSS. a. Rule for a background image is left top
        of the page, tiling horizontally. The image should remain in place when the user scrolls up or down. b. All
        paragraphs text 1.5 times larger than the base font of the system and colors it red. c. Rule for all H1 & H2 elements a
        padding of 0.5em, a grooved border style and a margin of 0.5em. (Box Model) d. Demonstrate z – index property.`,
    code: `/* Inline Style */
        p {
        color: red;
        font-size: 1.5rem;
        }
        /* Embedded Style */
        <style>
            body {
                background-image: linear-gradient(to left, #f2f2f2, #d1e8e0);
                background-size: 200% 100%;
                -webkit-background-clip: text;
                color: white;
            }
        
            .container {
                width: 80%;
                margin: 0 auto;
                padding: 20px;
                background-color: rgba(255, 255, 255, 0.5);
                border-radius: 10px;
            }
        
            .info {
                margin-top: 10px;
                margin-bottom: 10px;
                text-align: center;
            }
        
            .image-container {
                margin-bottom: 10px;
            }
        
            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                border: 2px solid #fff;
            }
        
            h3 {
                padding: 0.5em;
                border-style: grooved;
                margin: 0.5em;
            }
        
            /* Z-Index Demonstration */
            .layer1 {
                position: relative;
                top: 100px;
                left: 100px;
                background-color: #f0f0f0;
                z-index: 1;
            }
        
            .layer2 {
                position: relative;
                top: 50px;
                left: 50px;
                background-color: #ff00ff;
                z-index: 2;
            }
        </style>`,
  },
  {
    title: `Write the Java Script to display the current date in words format like Saturday, January 21, 2023.`,
    code: `<html>

        <body>
            <h1 id="date" align="center"></h1>
            <script>
                var currentDate = new Date();
                var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                var day = currentDate.getDate();
                var month = currentDate.getMonth();
                var year = currentDate.getFullYear();
                var dayOfWeek = currentDate.getDay();
                var dateInWords = dayNames[dayOfWeek] + ", " + monthNames[month] + " " + day + ", " + year;
                document.getElementById("date").innerHTML = dateInWords;
            </script>
        </body>
        
        </html>`,
  },
  {
    title: `Write a java script to display the denomination of the amount deposited in the bank in terms of 100’s, 50’s, 20’s,
        10’s, 5’s, 2’s & 1’s. (Eg: If the deposited amount is Rs.163, the output should be 1-100’s, 1-50’s, 1- 10’s, 1-2’s & 1-1’s)`,
    code: `<html>

        <body>
            <center>
                <h1>Amount Denomination Converter</h1>
                <label for="amount">Enter Amount:</label>
                <input type="text" id="amount">
                <button onclick="convertAmount()">Submit</button>
                <p id="denomination"></p>
            </center>
            <script>
                function convertAmount() {
                    var amount = document.getElementById("amount").value;
                    var denominations = [
                        [100, "100's"],
                        [50, "50's"],
                        [20, "20's"],
                        [10, "10's"],
                        [5, "5's"],
                        [2, "2's"],
                        [1, "1's"]
                    ];
                    var result = "";
                    for (var i = 0; i < denominations.length; i++) {
                        var count = Math.floor(amount / denominations[i][0]);
                        if (count > 0) {
                            result += count + "-" + denominations[i][1] + ", ";
                            amount -= count * denominations[i][0];
                        }
                    }
                    document.getElementById("denomination").innerHTML = "Denomination: " + result.slice(0, -2);
                }
            </script>
        </body>
        
        </html>`,
  },
  {
    title: `Write a JavaScript to prompt the user for the radius of the sphere and call function sphere Volume to calculate
        and display the volume of the sphere. (V = 4/3πr3)`,
    code: `<html>

        <head>
            <title>Sphere Volume Calculator</title>
        </head>
        
        <body>
            <center>
                <h1>Sphere Volume Calculator</h1>
                <label for="radius">Enter the radius of the sphere:</label>
                <input type="text" id="radius">
                <button onclick="calculateVolume()">Calculate Volume</button>
                <p id="volume"></p>
            </center>
            <script>
                function calculateVolume() {
                    var radius = document.getElementById("radius").value;
                    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
                    document.getElementById("volume").innerHTML = "The volume of the sphere is: " + volume.toFixed(2);
                }
            </script>
        </body>
        
        </html>`,
  },
  {
    title: `Write a JavaScript to display a message, “HI! GOOD MORNING TO YOU” when a page is loaded and displays a
        message, “THANKS FOR VISITING OUR WEB PAGE” when a page is closed.`,
    code: `<html>

        <head>
            <title>Message Display</title>
        </head>
        
        <body>
            <h1>Hello, World!</h1>
            <script>
                window.onload = function () {
                    alert("Hi! Good Morning to You.");
                };
                window.addEventListener('unload', function (event) {
                    alert("Thanks for visiting our web page.");
                });
            </script>
        </body>
        
        </html>`,
  },
  {
    title: `Write a JavaScript for the following. Provide a text box for the user enter user name. Validate the username for the
        no. of characters (assume some no. say 6). Provide a SUBMIT button for the validation to happen.`,
    code: `<html>

        <head>
            <title>Username Validation</title>
        </head>
        
        <body>
            <center>
                <h1>Username Validation</h1>
                <label for="username">Enter your username that with more than 6 charecters:</label>
                <input type="text" id="username">
                <button onclick="validateUsername()">Submit</button>
                <p id="validation"></p>
            </center>
            <script>
                function validateUsername() {
                    var username = document.getElementById("username").value;
                    if (username.length < 6) {
                        document.getElementById("validation").innerHTML = "Username must be at least 6 characters long.";
                    } else {
                        document.getElementById("validation").innerHTML = "Username is valid.";
                    }
                }
            </script>
        </body>
        
        </html>`,
  },
  {
    title: `Write java scripts covering i. Arrays (Matrix addition, multiplication, searching, sorting) ii. Objects (String, Math,
            Date, and Window, Random).`,
    code: `
        <html>
  <body>
    <h1>JavaScript and HTML Code</h1>
    <h2>Arrays</h2>
    <p>Matrix Addition: <span id="matrixAddition"></span></p>
    <p>Matrix Multiplication: <span id="matrixMultiplication"></span></p>
    <p>Searching: <span id="searching"></span></p>
    <p>Sorting: <span id="sorting"></span></p>
    <h2>Objects</h2>
    <p>String Length: <span id="stringLength"></span></p>
    <p>Random Number: <span id="randomNumber"></span></p>
    <p>Date: <span id="date"></span></p>
    <p>Window Location: <span id="windowLocation"></span></p>
    <script>
      var matrix1 = [
        [1, 2],
        [3, 4],
      ];
      var matrix2 = [
        [5, 6],
        [7, 8],
      ];
      function matrixAddition(matrix1, matrix2) {
        let result = [[], []];
        for (let i = 0; i < matrix1.length; i++) {
          for (let j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
          }
        }
        return result;
      }
      function matrixMultiplication(matrix1, matrix2) {
        let result = [[], []];
        for (let i = 0; i < matrix1.length; i++) {
          for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
              sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
          }
        }
        return result;
      }
      var array = [1, 2, 3, 4, 5];
      var searchElement = 3;
      var sortingArray = [3, 1, 2, 5, 4];
      document.getElementById("matrixAddition").innerHTML = matrixAddition(
        matrix1,
        matrix2
      );
      document.getElementById("matrixMultiplication").innerHTML =
        matrixMultiplication(matrix1, matrix2);
      document.getElementById("searching").innerHTML =
        array.includes(searchElement);
      document.getElementById("sorting").innerHTML = sortingArray.sort();
      var string = "Hello, World!";
      var randomNumber = Math.random();
      var date = new Date();
      var windowLocation = window.location.href;
      document.getElementById("stringLength").innerHTML = string.length;
      document.getElementById("randomNumber").innerHTML = randomNumber;
      document.getElementById("date").innerHTML = date.toDateString();
      document.getElementById("windowLocation").innerHTML = windowLocation;
    </script>
  </body>
</html>

        `,
  },
  {
    title: `Demonstrate collection objects
        i. All collection
        ii. image collection
        iii. Anchor collection.`,
    code: `<html>

        <body>
            <h1>Collection Objects</h1>
            <h2>All Collection</h2>
            <ul id="allCollection">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <h2>Image Collection</h2>
            <div id="imageCollection">
                <img src="kakashi.jpg" alt="Image 1" width="150px" height="150px" style=" border-radius:50%;">
                <img src="minato.jpg" alt="Image 2" width="150px" height="150px" style=" border-radius:50%;">
                <img src="jiraiya.jpg" alt="Image 3" width="150px" height="150px" style=" border-radius:50%;">
            </div>
            <h2>Anchor Collection</h2>
            <div id="anchorCollection">
                <a href="https://www.google.com/" target="_blank">google</a>
                <a href="https://www.youtube.com/" target="_blank">youtube</a>
                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">gmail</a>
            </div>
            <script>
                var allCollection = document.getElementById("allCollection").getElementsByTagName("li");
                for (var i = 0; i < allCollection.length; i++) {
                    allCollection[i].style.color = "red";
                }
                var imageCollection = document.getElementById("imageCollection").getElementsByTagName("img");
                for (var i = 0; i < imageCollection.length; i++) {
                    imageCollection[i].style.border = "2px solid black";
                }
                var anchorCollection = document.getElementById("anchorCollection").getElementsByTagName("a");
                for (var i = 0; i < anchorCollection.length; i++) {
                    anchorCollection[i].style.backgroundColor = "yellow";
                }
            </script>
        </body>
        
        </html>`,
  },
  {
    title: `Demonstrate event model.
        i. Form events (onfocus, onblur, onload).
        ii. Mouse events.
        iii. Event bubbling.`,
    code: `<html>

        <body>
            <h1>Event Model</h1>
            <h2>Form Events</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" onfocus="focusFunction()" onblur="blurFunction()">
            </form>
            <h2>Mouse Events</h2>
            <button onclick="clickFunction()">Click Me</button>
            <img src="kakashi.jpg" alt="Image" width="150" height="150" onmouseover="mouseOverFunction()"
                onmouseout="mouseOutFunction()">
            <h2>Event Bubbling</h2>
            <div onclick="outerFunction()" style="background-color: red; padding: 20px;">
                <p onclick="innerFunction()" style="background-color: yellow; padding: 20px;">Click me!</p>
            </div>
            <script>
                function focusFunction() {
                    document.getElementById("name").style.backgroundColor = "yellow";
                }
                function blurFunction() {
                    document.getElementById("name").style.backgroundColor = "white";
                }
                function clickFunction() {
                    alert("Button clicked!");
                }
                function mouseOverFunction() {
                    document.getElementsByTagName("img")[0].style.border = "6px solid black";
                }
                function mouseOutFunction() {
                    document.getElementsByTagName("img")[0].style.border = "none";
                }
                function innerFunction() {
                    alert("Inner element clicked!");
                }
                function outerFunction() {
                    alert("Outer element clicked!");
                }
            </script>
        </body>
        
        </html>`,
  },
];
