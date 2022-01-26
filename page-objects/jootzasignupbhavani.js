const helpers = require("../runtime/helpers");


module.exports =  {

    url: 'http://www.jootza.com',

elements: {
    login:'//*[@id="main"]/div[1]/div/div/div/a[2]',
    userName:'login-username relate-pos',
    passWord:'login-password relate-pos',
    errorMessage:'//*[@id="toast-container"]/mdb-toast-component/div',
    loginbtn:'//*[@id="btn-login"]/button'

},

clickElement:async function(keyword){
    var selector = page.jootzasignupbhavani.elements[keyword];
    await driver.sleep(2000);
    return driver.findElement(By.xpath(selector)).click();
},
enterUserName:async function(input){
    var name = page.jootzasignupbhavani.elements['userName'];
    await driver.sleep(2000);
    return driver.findElement(by.id(name)).sendKeys(input);
},
enterPassWord:async function(input1){
    var word =page.jootzasignupbhavani.elements['passWord'];
    await driver.sleep(2000);
    return driver.findElement(by.id(word)).sendKeys(input1);
},
displayMessage:async function(keyword){
    var message = page.jootzasignupbhavani.elements[keyword];
    await driver.sleep(2000);
    return driver.findElement(By.xpath(message));

},
clickButton:async function(keyword){
    var click =page.jootzasignupbhavani.elements[keyword];
    return driver.findElement(By.xpath(click)).click();
}






}