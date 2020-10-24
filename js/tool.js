function getRegDNS() {
    var dns1v4 = document.getElementById("dns1v4").value;
    var dns2v4 = document.getElementById("dns2v4").value;
    var dns1v6 = document.getElementById("dns1v6").value;
    var dns2v6 = document.getElementById("dns2v6").value;
    var ip4format = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    var ip6format = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    
    var returnstring = "<key>ServerAddresses</key>\n<array>\n";
    var dnsOverride = false;

    if (ip6format.test(dns1v6)) {
        console.log("61valid!");
        dnsOverride = true;
        returnstring += "<string>" + dns1v6 + "</string>\n";
    }
    if (ip6format.test(dns2v6)) {
        console.log("62valid!");
        dnsOverride = true;
        returnstring += "<string>" + dns2v6 + "</string>\n";
    }
    
    if (ip4format.test(dns1v4)) {
        console.log("41valid!");
        dnsOverride = true;
        returnstring += "<string>" + dns1v4 + "</string>\n";
    }
    if (ip4format.test(dns2v4)) {
        console.log("42valid!");
        dnsOverride = true;
        returnstring += "<string>" + dns2v4 + "</string>\n";
    }
        
    if (dnsOverride) {
        returnstring += "</array>\n";
        return returnstring;
    }
    else {
        return "";
    }
}
    
function createServerUrl(encValue) {
    var returnstring = "";
    
    if (encValue == "HTTPS") {
        returnstring = "https://" + document.getElementById("serverUrl").value + "\n";
    }
    else {
        returnstring = document.getElementById("serverUrl").value + "\n";
    }
    return returnstring;
}

function saveDynamicDataToFile() {
    var encryption = document.getElementsByName('encryption');
    var encValue = null;
    var provName = document.getElementById("provName").value;
    
    for (var i = 0, length = encryption.length; i < length; i++) {
        if (encryption[i].checked) {
            encValue = encryption[i].value;
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
        
    var fileString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    fileString += "<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">\n";
    fileString += "<plist version=\"1.0\">\n";
    fileString += "<dict>\n";
    fileString += "<key>PayloadContent</key>\n";
    fileString += "<array>\n";
    fileString += "<dict>\n";
    fileString += "<key>DNSSettings</key>\n";
    fileString += "<dict>\n";
    fileString += "<key>DNSProtocol</key>\n";
    fileString += "<string>" + encValue + "</string>\n";
    fileString += getRegDNS();
    fileString += "<key>ServerURL</key>\n";
    fileString += "<string>" + createServerUrl(encValue);
    fileString += "</dict>\n";
    fileString += "<key>PayloadDescription</key>\n";
    fileString += "<string>Configures device to use " + provName + " Encrypted DNS over " + encValue + "</string>\n";
    fileString += "<key>PayloadDisplayName</key>\n";
    fileString += "<string>" + provName + " DNS over " + encValue + "</string>\n";
    fileString += "<key>PayloadIdentifier</key>\n";
    fileString += "<string>com.apple.dnsSettings.managed." + uuidv4() + "\n";
    fileString += "<key>PayloadType</key>\n";
    fileString += "<string>com.apple.dnsSettings.managed</string>\n";
    fileString += "<key>PayloadUUID</key>\n";
    fileString += "<string>" + uuidv4() + "</string>\n";
    fileString += "<key>PayloadVersion</key>\n";
    fileString += "<integer>1</integer>\n";
    fileString += "<key>ProhibitDisablement</key>\n";
    fileString += "<false/>\n";
    fileString += "</dict>\n";
    fileString += "</array>\n";
    fileString += "<key>PayloadDescription</key>\n";
    fileString += "<string>Adds " + provName + " Encrypted DNS over " + encValue + " to Big Sur and iOS 14 based systems</string>\n";
    fileString += "<key>PayloadDisplayName</key>\n<string>" + provName + " DNS over " + encValue + "</string>\n";
    fileString += "<string>" + provName + " DNS over " + encValue + "</string>\n";
    fileString += "<key>PayloadIdentifier</key>\n";
    fileString += "<string>com.notjakob.apple-dns</string>\n";
    fileString += "<key>PayloadRemovalDisallowed</key>\n";
    fileString += "<false/>\n";
    fileString += "<key>PayloadType</key>\n";
    fileString += "<string>Configuration</string>\n";
    fileString += "<key>PayloadUUID</key>\n";
    fileString += "<string>" + uuidv4() + "</string>\n";
    fileString += "<key>PayloadVersion</key>\n";
    fileString += "<integer>1</integer>\n";
    fileString += "</dict>\n";
    fileString += "</plist>";

    var blob = new Blob([fileString], { type: "text/plain;charset=utf-8" });

    saveAs(blob, "dns.mobileconfig");

//TODO: Premade configs! Fill in fields
//TODO: Check for HTTPS in server field
}
        
function switchToHTTPS() {
    document.getElementById("serverUrl").placeholder = "https://example.com/query" + document.getElementById("serverUrl").value;
    document.getElementById("dohdotServerLabel").innerHTML = "DoH server URL:";
}
function switchToTLS() {
    document.getElementById("serverUrl").placeholder = "dot.example.com";
    document.getElementById("dohdotServerLabel").innerHTML = "DoT server URL:";
}