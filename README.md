Chrome Extension Trigger Refresh
================================

This is an unpublished* Chrome Extension to trigger tab refresh for selected pages on CTRL+S key combo.

*unpublished because I can't be bothered to pay a $5 fee for publishing this super simple extension.

Quick Installation
================================

* Download the 'trigger refresh.crx' file and drag it to the [chrome://extensions/](chrome://extensions/)



Installation (as an unpacked extension - for temporary tryout)
================================

* Download files from this repository and extract them in a folder
* On Windows in Google Chrome navigate to Tools -> Extensions
* Enable Developer mode and click Load unpacked extension
![Alt text](http://i.imgur.com/Gedglp3.png)
* A Dialog box will appear. Choose the folder where you extracted all the files and press OK
![Alt text](http://i.imgur.com/MjZbXGo.png)
* Once loaded, your extension should look like this
![Alt text](http://i.imgur.com/QT9MMt6.png)

Usage Scenario
================================
Let's say you are developing inside the browser and want to reload the result page each time you apply the changes to the development page.
In this case you would go to the result page, click on the extension page and capture the tab URL. Now you can navigate to any other tab or window and from there refresh the result tab by pressing CTRL+S.

Here's an example with Codepen.io:

* Grab the URL of the result page
![Alt text](http://i.imgur.com/wKt1qUY.png)
* Paste in the URL into a new tab (or simply navigate to it)
  * press the extension button
  * press the Capture! button
  * that's it (you'll see the URL below of teh captured tab if everything worked)
![Alt text](http://i.imgur.com/xB2uxt7.png)
* It is very convenient in a dual monitor scenario - having code on monitor #1 and reload page - on monitor #2
![Alt text](http://i.imgur.com/Ihsk1zJ.png)
