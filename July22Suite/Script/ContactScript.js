function ContactXL()
{
  //Browsers.Item(btChrome).Navigate("https://bearstore-testsite.smartbear.com/");
  Project.Variables.ContactData.Reset();
  for(; !Project.Variables.ContactData.IsEOF();)
  {
    Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
    Aliases.browser.pageContactus.Wait();
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.SetText(Project.Variables.ContactData.Value("Name"));
    Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail.SetText(Project.Variables.ContactData.Value("Email"));
    Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys(Project.Variables.ContactData.Value("Inquiry"));
    //Delay(5000, "You can create manual and conditional delays!!!");
    Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
    aqObject.CheckProperty(Aliases.browser.pageContactus.sectionContent.panelYourEnquiryHasBeen, "Exists", cmpEqual, true);
    Project.Variables.ContactData.Next();
  }
  Aliases.browser.BrowserWindow.Close();
}

function ContactGen()
{
  //Browsers.Item(btChrome).Navigate("https://bearstore-testsite.smartbear.com/");
  Project.Variables.ContactInfo.Iterator.Reset();
  for(; !Project.Variables.ContactInfo.Iterator.IsEOF();)
  {
    Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
    Aliases.browser.pageContactus.Wait();
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.SetText(Project.Variables.ContactInfo.Iterator.Value("Name"));
    Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail.SetText(Project.Variables.ContactInfo.Iterator.Value("Email"));
    Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys(Project.Variables.ContactInfo.Iterator.Value("Inquiry"));
    //Delay(5000, "You can create manual and conditional delays!!!");
    Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
    aqObject.CheckProperty(Aliases.browser.pageContactus.sectionContent.panelYourEnquiryHasBeen, "Exists", cmpEqual, true);
    Project.Variables.ContactInfo.Iterator.Next();
  }
  Aliases.browser.BrowserWindow.Close();
}