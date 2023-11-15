var listOfDownloads = document.getElementsByClassName('css-yu9u99')[0]
for(i = 0; i < listOfDownloads.childElementCount; i++) {
  document.getElementById('item-' + i + '-download').click()
}
/*
NOTE!!! 
 I'm annoyed that shortbox comics fair doesn't have a download all button for comic hoarders like me. 
 This garbo code is quick and dirty and doesn't work for whatever reason in firefox. 
 In chrome and edge you will need to allow popups on your order's downloads page for this to download everything. 
 This note also serves as your epilepsy warning. 
 I highly suggest your open up your order's downloads page in new window before running this.
*/
