//task1
<!DOCTYPE html>
<head>
    <title>Variable and DataType</title>
</head>
<body>
    <button onclick="myFun()"> Click me!! </button><br>
    <div id="demo"></div><br>
    <script>
        function myFun(){
            //Use of var keyword
            var num1=15;
            var num2=71;
            var result=num1+num2;
            console.log(result);

            //Use of let keyword
            let firstName="Rohan";
            let lastName="Sharma";
            let name=firstName.concat(" ",lastName);
            console.log(name);

            //Use of const keyword
            const arr=[12,'Ahmedabad',24,'Vadodara']
            console.log(arr);

            //Display content
            var outputElement = document.getElementById("demo");
            outputElement.innerHTML = "Using Var keyword and Integer datatype: "+ result + "<br>";
            outputElement.innerHTML += "Using Let keyword and String datatype: "+ name + "<br>";
            outputElement.innerHTML += "Using Const keyword and Array datatype: "+ arr + "<br>";
        }
    </script>
</body>
</html>

// task 2
<!DOCTYPE html>
<head>
    <title>Operators and Expression</title>
</head>
<body>
    Enter number1 : <input type="text" id="numId1"><br>
    Enter number2 : <input type="text" id="numId2"><br><br>
    <button onclick="myMath()"> Calculate me!! </button><br>
    <div id="demo"></div><br>
    <script>
        function myMath(){
            let num1=parseInt(document.getElementById('numId1').value);
            let num2=parseInt(document.getElementById('numId2').value);
            let sum=num1+num2;
            let diff=num1-num2;
            let product=num1*num2;
            let quotient=num1/num2;

            //Display content
            var output = document.getElementById("demo");
            output.innerHTML += "Sum of number: "+ sum + "<br>";
            output.innerHTML += "Difference of number: "+ diff + "<br>";
            output.innerHTML += "Product of number: "+ product + "<br>";
            output.innerHTML += "Quotient of number: "+ quotient + "<br>";
        }
    </script>
</body>
</html>

//task 3
<!DOCTYPE html>
<head>
    <title>Operators and Expression</title>
</head>
<body>
    Enter your age: <input type="text" id="ageId">
    <button onclick="displayAge()">Check</button>
    <p id="demo"></p>
    <script>
        function displayAge() {
            var age = parseInt(document.getElementById('ageId').value);
            var message;
            if (age < 18) {
                message = "You are a minor!!";
              } else if (age >= 18 && age <= 65) {
                message = "You are an adult!!";
              } else {
                message = "You are a senior citizen!!";
              }
            var outputElement = document.getElementById("demo");
            outputElement.innerHTML = message;
        }
    </script>
  </body>
  </html>

//task 4
<!DOCTYPE html>
<head>
    <title>Functions</title>
</head>
<body>
    <div id="demo"></div>
    <div id="salaryId"></div>
    <script>
        function findSalary(salaries) {
          var minSalary = Math.min(...salaries);
          var maxSalary = Math.max(...salaries);
          return {
            min: minSalary,
            max: maxSalary
          };
        }
        var salaries = [15000, 30000, 22000, 14000, 43000];
        var result = findSalary(salaries);
        var array=document.getElementById("demo");
        array.innerHTML="Salary:"+ salaries +"<br>";
        var output=document.getElementById("salaryId");
        output.innerHTML="Maximum salary:"+ result.max+"<br>";
        output.innerHTML+="Minimum salary:"+ result.min+"<br>";
        console.log("Minimum salary:", result.min);
        console.log("Maximum salary:", result.max);
      </script>
  </body>
</html>

//task5
<!DOCTYPE html>
<html>
<head>
  <title>Favorite Books</title>
  </head>
  <body>
  <button onclick="displayBooks(['Maths', 'Science', 'Hindi', 'Sanskrit', 'Social Science'])">Display Books</button>
  <div id="bookId"></div>
  <script>
    function displayBooks(books) {
      var booksContainer = document.getElementById("bookId");
      booksContainer.innerHTML = "";

      for (var i = 0; i < books.length; i++) {
        var book = books[i];
        var bookElement = document.createElement("p");
        bookElement.textContent = book;
        booksContainer.appendChild(bookElement);
      }
    }
  </script>
</body>
</html>

//task 6
<!DOCTYPE html>
<html>
<head>
  <title>Scope and Hosting</title>
  </head>
  <body>
    <div id="demoId"></div>
    <script>
        let carName;
        function display() {
            carName="Swift Desire";
        }
        display();
        console.log(carName);
        document.getElementById('demoId').innerHTML+="The car name is "+carName+'<br>';
    </script>
</body>
</html>

//task 7
<!DOCTYPE html>
<html>
<head>
  <title>DOM Manipulation</title>
  </head>
  <body>
    <button id="btn">Click me!!</button><br>
    <script>
        const button=document.getElementById('btn');
        button.addEventListener('click',function displayContent(){
            let initialText="Click me";
            if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
                button.textContent = 'Button clicked';
            } 
            else {
                button.textContent = initialText;
        };
        });
    </script>
</body>
</html>

//task8
<!DOCTYPE html>
<head>
    <title>Error Handling</title>
</head>
<body>
    Enter any number : <input type="text" id="numId"><br>
    <button onclick="mydisplay()"> Display !! </button><br>
    <div id="demoId"></div><br>
    <script>
        function mydisplay(){
            let num=parseInt(document.getElementById('numId').value);
            let msg=document.getElementById('demoId');
            msg.innerHTML="";
            function throwAnError() {
                if(num<0)
                throw new Error('You entered negative number!!');
            }
            try {
                throwAnError();
            } catch (error) {
                msg.innerHTML=error.message+'<br>';
                msg.innerHTML+=error.name;
                console.log(error.message);
                console.log(error.name); // Error
            }
        }
    </script>
</body>
</html>

//task9
<!DOCTYPE html>
<head>
    <title>Asynchronous JavaScript</title>
</head>
<body>
    <div id="demo"></div>
    <script>
        function myDisplayer(some) {
            document.getElementById("demo").innerHTML = "The multiplication of two numbers: "+some+'<br>';
          }
          
          function myCalculator(num1, num2) {
            let sum = num1 * num2;
            myDisplayer(sum);
          }
          
          myCalculator(15, 5);
          setTimeout(myFunction, 2000);

        function myFunction() {
            document.getElementById("demo").innerHTML += "Welcome to the world!!";
        }
    </script>
</body>
</html>
