function accToggle(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function createCookie (provName, doh, dns1v4, dns2v4, dns1v6, dns2v6, serverUrl) {
    var d = new Date();
    d.setTime(d.getTime() + (3600000)); //expires in 1h
    var expires = "expires="+ d.toUTCString();
    document.cookie = "provName=" + provName + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = "doh=" + doh + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = "dns1v4=" + dns1v4 + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = "dns2v4=" + dns2v4 + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = "dns1v6=" + dns1v6 + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = "dns2v6=" + dns2v6 + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = "serverUrl=" + serverUrl + ";" + expires + ";path=/; SameSite=Strict; Secure";
    
    window.location.href = "/tool.html"
}