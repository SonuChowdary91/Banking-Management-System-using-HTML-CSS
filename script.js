var createacc = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <div style="display:flex; height: 70vh; width: 45vw; background-color: black; flex-direction: column; justify-content: space-between; align-items:center ; align-content: space-between;border-radius:50px;">
        <div id="upper" style="color: white ; font-size: 7vh;">Fill in the details</div>
        <div class="middle" style="display: flex; flex-direction: column;justify-content: space-between;align-content: space-between; height: 50vh;">
            <div class="elements1" style="display: flex; flex-direction: row;justify-content: space-between;" ><div id="name" style="color: white;">Customer name</div><div id="nameplace"><input type="text" placeholder="Customername"></div>
        </div>
            <div class="elements2" style="display: flex; flex-direction: rowjustify-content: space-between; align-items:center ; align-content: space-between; ;" ><div style="color: white;">Contact mumber</div><div id="nameplace"><input type="text" placeholder="Contact number"></div>
            </div>
            <div class="elements3" style="display: flex; flex-direction: row;" ><div id="name" style="color: white;">Gender</div>
            <div id="nameplace"><div>
                <input type="radio" id="huey" name="drone" value="huey"
                       checked>
                <label for="huey" style="color: white;">Male</label>
              </div>
          
              <div>
                <input type="radio" id="dewey" name="drone" value="dewey">
                <label for="dewey" style="color: white;">Female</label>
              </div></div>
            </div>
            <div class="elements4" style="display: flex; flex-direction: row;" ><div style="color: white;">Address</div><div id="nameplace"><input type="text" placeholder="Enter the Address"></div>
            </div>
            <div class="elements5" style="display: flex; flex-direction: row;" ><div style="color: white;">Age</div><div id="nameplace"><input type="text" placeholder="Age"></div>
            </div>
            <div class="elements6" style="display: flex; flex-direction: row;" ><div style="color: white;">Email</div><div id="nameplace"><input type="Email" placeholder="Email"></div>
            </div>
            <div class="elements7" style="display: flex; flex-direction: row;" ><div style="color: white;">Date</div><div id="nameplace"><input type="date" placeholder="Email"></div>
            </div>
            <div class="elements8" style="display: flex; flex-direction: row;" ><div id="name" style="color: white;">Gender</div>
            <div id="nameplace"><div>
                <input type="radio" id="huey" name="drone" value="huey"
                       checked>
                <label for="huey" style="color: white;">Current Account</label>
              </div>
          
              <div>
                <input type="radio" id="dewey" name="drone" value="dewey">
                <label for="dewey" style="color: white;">Savings Account</label>
              </div></div>
            </div>

            
            </div>
        </div> 
        <div id="lower" style="display:flex; flex-direction: row; justify-content: space-between;
        height: 80px; width: 45vw;">
            <div id="submit">
                <button style="height:30px; width: 150px; background-color:green;">Submit</button>
            </div>
            <div>
                <button style="height:30px; width: 150px; background-color:green;" >Reset</button>
            </div>
        
        </div>
    </div>
    
</body>
</html>`
var deleteacc=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>deleteacc</title>
</head>
<body>
    <div id="main" style="display: flex; flex-direction: column;align-content: space-between; height: 50vh; width: 30vw; justify-content: space-between; background-color: black;border-radius:20px;">
        <div id="upper" style="color: white; font-size:8vh;">Enter account number to delete</div>
        <div id="middle" style="height: 30px; width: auto; padding-left: 126px;">
            <input type="text" placeholder="Account number" style="height: 30px;">
        </div>
        <div id="lower" style="display:flex; flex-direction: row; justify-content: space-between;
        height: 80px; width: 30vw;">
            <div id="submit">
                <button style="height:30px; width: 150px; background-color:green;">Submit</button>
            </div>
            <div>
                <button style="height:30px; width: 150px; background-color:green;" >Reset</button>
            </div>
        
        </div>
    </div>
    
</body>
</html>`
var updateacc=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>deleteacc</title>
</head>
<body>
    <div id="main" style="display: flex; flex-direction: column;align-content: space-between; height: 50vh; width: 30vw; justify-content: space-between; background-color: black;border-radius:20px;">
    

        <div id="upper" style="color: white; font-size:7vh;">Enter account number to Update</div>
        <div id="middle" style="height: 30px; width: auto; padding-left: 126px;">
            <input type="text" placeholder="Account number" style="height: 30px;">
        </div>
        <div id="lower" style="display:flex; flex-direction: row; justify-content: space-between;
        height: 80px; width: 30vw;">
            <div id="submit">
                <button style="height:30px; width: 150px; background-color:green;">Submit</button>
            </div>
            <div>
                <button style="height:30px; width: 150px; background-color:green;" >Reset</button>
            </div>
        
        </div>
    </div>
    
</body>
</html>`
var allacc=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>allacc</title>
</head>
<body>
    <div id="main" style="Background-color:white;">
        <div id="upper" style="font-size: 7vh;">Displaying all accounts</div>
        <div id="lower" style="padding-top:28px ;">
            <table border="3px solid black">
                <tr>
                <th>Account number</th>
                <th>Customer name</th>
                <th>Contact number</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Age</th>
                <th>Mail-id</th>
                <th>Date</th>
                <th>Account type</th>
                <th>Balance</th>
                </tr>
                <tr>
                    <td>10001</td>
                    <td>Harsha Sha</td>
                    <td>9063111137</td>
                    <td>Male</td>
                    <td>Shapur nagar</td>
                    <td>22</td>
                    <td>harshasha@gmail.com</td>
                    <td>22-4-2022</td>
                    <td>Savings</td>
                    <td>510000000</td>
                </tr>
                <tr>
                    <td>10001</td>
                    <td>Gouri Vara Prasad</td>
                    <td>8919105148</td>
                    <td>Male</td>
                    <td>Shapur nagar</td>
                    <td>22</td>
                    <td>gouriprasad@gmail.com</td>
                    <td>12-8-2022</td>
                    <td>Savings</td>
                    <td>3001020000</td>
                </tr>
            </table>
        </div>
    </div>
    
</body>
</html>`
var singleacc=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>singleacc</title>
</head>
<body>
    <div id="main" style="display: flex; flex-direction: column;align-content: space-between; height: 50vh; width: 30vw; justify-content: space-between; background-color: black;border-radius:20px;">
        <div id="upper" style="color: white; font-size:7vh;">Enter account number to show details</div>
        <div id="middle" style="height: 30px; width: auto; padding-left: 126px;">
            <input type="text" placeholder="Account number" style="height: 30px;">
        </div>
        <div id="lower" style="display:flex; flex-direction: row; justify-content: space-between;
        height: 80px; width: 30vw;">
            <div id="submit">
                <button style="height:30px; width: 150px; background-color:green;">Submit</button>
            </div>
            <div>
                <button style="height:30px; width: 150px; background-color:green;" >Reset</button>
            </div>
        
        </div>
    </div>
    
</body>
</html>`
var withdraw=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>withdraw</title>
</head>
<body>
    <div id="main" style="height: 50vh; width: 70vh; background-color:gray;display: flex
    ; flex-direction: column;align-items: center;justify-content: space-between;border-radius:20px;">
        <div><span id="accountnumber" style="color: white; font-size: 3vh;">Account number</span>
        <span id="input"><input type="text" placeholder="Account number"></span>
        </div>
    <div>
        <span style="color: white
        ;font-size: 3vh;">Enter amount to withdraw</span>
        <span><input type="text" placeholder="Amount"></span>
    </div>
    <div>
        <button style="height:30px; width: 150px; background-color:green;">Deposit</button>
        <button style="height:30px; width: 150px; background-color:green;">Clear</button>
    </div>
    
    
</body>
</html>`
var deposit=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>withdraw</title>
</head>
<body>
    <div id="main" style="height: 50vh; width: 70vh; background-color:gray;display: flex
    ; flex-direction: column;align-items: center;justify-content: space-between;border-radius:50px;">
        <div><span id="accountnumber" style="color: white; font-size: 3vh;">Account number</span>
        <span id="input"><input type="text" placeholder="Account number"></span>
        </div>
    <div>
        <span style="color: white
        ;font-size: 3vh;">Enter amount to deposit</span>
        <span><input type="text" placeholder="Amount"></span>
    </div>
    <div>
        <button style="height:30px; width: 150px; background-color:green;">Deposit</button>
        <button style="height:30px; width: 150px; background-color:green;">Clear</button>
    </div>
    
    
</body>
</html>`
var transfer=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>transfer</title>
</head>
<body>
    <div id="main" style="height: 50vh; width: 70vh; background-color:gray;display: flex
    ; flex-direction: column;align-items: center;justify-content: space-between;border-radius:50px;">
        <div><span id="accountnumber" style="color: white; font-size: 3vh;">Account number</span>
        <span id="input"><input type="text" placeholder="Account number"></span>
        </div>
    
    <div>
        <span style="color: white
        ;font-size: 3vh;">Transfer's account number</span>
        <span><input type="text" placeholder="Account number"></span>
    </div>
    <div>
        <span style="color: white
        ;font-size: 3vh;">Enter amount to Transfer</span>
        <span><input type="text" placeholder="Amount"></span>
    </div>
    <div>
        <button style="height:30px; width: 150px; background-color:green;">Deposit</button>
        <button style="height:30px; width: 150px; background-color:green;">Clear</button>
    </div>
    
</body>
</html>`
var pages = {
    'createacc' : createacc,
    'deleteacc' : deleteacc,
    'updateacc' : updateacc,
    'allacc' : allacc,
    'singleacc' : singleacc,
    'withdraw' : withdraw,
    'deposit' : deposit,
    'transfer' : transfer,
};
function getPageContent(page){
    var contentToReturn;
    switch(page){
        case 'createacc':
            contentToReturn=pages.createacc;
            break;
        case 'deleteacc':
            contentToReturn=pages.deleteacc;
            break;
        case 'updateacc':
            contentToReturn=pages.updateacc;
            break;
        case 'allacc':
            contentToReturn=pages.allacc;
            break;
        case 'singleacc':
            contentToReturn=pages.singleacc;
            break;
        case 'withdraw':
            contentToReturn=pages.withdraw;
            break;
        case 'deposit':
            contentToReturn=pages.deposit;
            break;
        case 'transfer':
            contentToReturn=pages.transfer;
            break;    
        default:
            contentToReturn=pages.createacc;
            break;
        
    }
    document.getElementById('content').innerHTML=contentToReturn;
}