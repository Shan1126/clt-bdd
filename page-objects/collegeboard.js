
const helpers = require("../runtime/helpers");
module.exports ={

    url:'https://www.collegeboard.org/',

elements:{
    signUp:'//*[@id="profile"]/div/div[5]/div/div[2]/div/div/div/div/div[3]/div/p[1]/a',
    student:'//*[@id="#content"]/div/div/div[1]/div/div/div[2]/div/div/div[1]/div[1]/a/div',
    firstName:'//*[@name="person.firstName"]',
    lastName:'//*[@name="person.lastName"]',
    //gender:'//*[@id="registerAccount"]/div[4]/fieldset/legend',
    female:'//*[@id="registerAccount"]/div[4]/fieldset/div[1]/label',
    month:'//*[@name="person.birthMonth"]',
    june:'//*[@id="birthdayMonth"]/option[7]',
    day:'//*[@name="person.birthDay"]',
    fifteen:'//*[@id="day"]/option[16]',
    year:'//*[@name="person.birthYear"]',
    birthYear:'//*[@id="birthdayYr"]/option[17]',
    email:'//*[@name="person.email"]',
    confirmEmail:'//*[@name="person.confirmEmail"]',
    graduatingMonth:'//*[@name="person.gradMonth"]',
    may:'//*[@id="graduationMonth"]/option[6]',
    graduatingYear:'//*[@name="person.gradYear"]',
    gradyear:'//*[@id="graduationYear"]/option[7]',
    zipCode:'//*[@name="person.zipPostalCode"]',
    school:'//*[@name="person.affiliatedOrgText"]',
    mySchoolIsNotListed:'//label[@for="schoolNotListed"]',
    userName:'//*[@name="person.userName"]',
    password:'//*[@id="passwordField"]',
    confirmPassword:'//*[@id="confirmPasswordField"]',
    securityQuestion:'//*[@id="securityQuestionField"]',
    petname:'//*[@id="securityQuestionField"]/option[4]',
    answer:'//*[@id="securityAnswerField"]',
    addressLine1:'//*[@name="person.address.street1"]',
    addressLine2:'//*[@name="person.address.street2"]',
    city:'//*[@name="person.address.city"]',
    state:'//*[@id="stateCodeField"]',
    //checkbox:'//*[contains(text(),"Send me information about College Board programs.")]',
    NJ:'//*[@id="stateCodeField"]/option[39]',
    click:'//*[contains(text(),"I agree with the Terms & Conditions.")]',
    next:'//*[@id="form-submit"]',
    fName:'//label[@for="confirm-first-name"]',
    lName:'//label[@for="confirm-last-name"]',
    gender:'//label[@for="confirm-gender"]',
    DOB:'//label[@for="confirm-birthday"]',
    confirm:'//*[@id="registerAccount"]',
    signin:'//*[contains(text(),"Sign In")]',
    uName:'//*[@id="username"]',
    PW:'//*[@id="password"]',
    submit:'//button[@class="btn btn-width-label btn-sm btn-primary cb-xs-btn-fluid _2B5cHEcGX9NUrROfLuw97V"]',
    errorMessage:'//*[@class="alert alert-danger cb-alert-heading"]',
    forgotUserName:'//*[@id="profile"]/div/div[5]/div/div[2]/div/div/div/div/div[3]/div/p[2]/a[1]',
    emailAddress:'//*[@id="email"]',
    send:'//*[@name="sendUsername"]',
    error:'//*[@id="#content"]/div/div/div[1]/div/div/div[1]/div/div/h2',
    successMessage:'//*[@id="#content"]/div/div/div[1]/div/div/div[1]/div/div/h2',
    forgotPassword:'//*[@id="profile"]/div/div[5]/div/div[2]/div/div/div/div/div[3]/div/p[2]/a[2]',
    UserName:'//*[@id="username"]',
    Email:'//*[@id="email"]',
    Next:'//button[@name="resetPassword"]',
    yourAnswer:'//*[@id="security"]',
    NEXT:'//button[@name="verifyPassword"]',
    createANewPassword:'//*[@id="#content"]/div/div/div[1]/div/div/div[1]/div/h2',
    UpcomingSATDatesAndDeadlines:'//*[@id="cb-cta_s"]/ul[1]/li[1]/a/div[2]/h4',
    gettingScores:'//*[@id="block-apricot-theme-content"]/div[1]/div/div/div/div/div/h1',
    standOutEarnAndSave:'//*[@id="cb-cta_s"]/ul[1]/li[2]/a/div[2]/h4',
    gettingCreditAndPlacement:'//*[@id="block-welcomemat"]/div/div/div/div/div/h1',
    unlockScholarshipMatches:'//*[@id="cb-cta_s"]/ul[1]/li[3]/a/div[2]/h4',
    welcomeBack:'//*[@id="#content"]/div/div/div[1]/div/div/div[1]/div/h2',
    nameInTheHeader:'//span[@class="OHYx4pfmhf0MrQbqKGyX1"]'

   

},

clickButton:async function(objectkey){
    var selector = page.collegeboard.elements[objectkey]
    await driver.sleep(5000)
    return driver.findElement(By.xpath(selector)).click()
},

inputData:async function(objectkey,value){
    var selector = page.collegeboard.elements[objectkey]
    await driver.sleep(2000)
    return driver.findElement(By.xpath(selector)).sendKeys(value)
},

clickElement:async function(objectkey,value){
    var selector =page.collegeboard.elements[objectkey]
    var input = page.collegeboard.elements[value]
    driver.findElement(By.xpath(selector)).click()
    await driver.sleep(2000)
    return driver.findElement(By.xpath(input)).click()
},

clickCheckBox:async function(objectkey,value){
    var selector = page.collegeboard.elements[objectkey]
    var input =page.collegeboard.elements[value]
    await driver.sleep(2000) 
    driver.findElement(By.xpath(selector))
    return driver.findElement(By.xpath(input)).click()

},

elementExists:async function(objectkey){
    var selector =page.collegeboard.elements[objectkey]
    await driver.sleep(2000)
    return driver.findElement(By.xpath(selector))
}






}