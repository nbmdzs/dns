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
    fileString += "<string>" + document.getElementById("serverUrl").value + "</string>\n";
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
    fileString += "<key>PayloadDisplayName</key>\n";
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
}
        
function switchToHTTPS() {
    document.getElementById("serverUrl").placeholder = "https://example.com/query" + document.getElementById("serverUrl").value;
    document.getElementById("dohdotServerLabel").innerHTML = "DoH server URL:";
}
function switchToTLS() {
    document.getElementById("serverUrl").placeholder = "dot.example.com";
    document.getElementById("dohdotServerLabel").innerHTML = "DoT server URL:";
}
function loadPremade() {
    var provName = document.getElementById("provName");
    var checkDoH = document.getElementById("doh");
    var checkDoT = document.getElementById("dot");
    var dns1v4 = document.getElementById("dns1v4");
    var dns2v4 = document.getElementById("dns2v4");
    var dns1v6 = document.getElementById("dns1v6");
    var dns2v6 = document.getElementById("dns2v6");
    var serverUrl = document.getElementById("serverUrl");
    
    switch(document.getElementById("premades").value) {
        case "adguard-https":
            provName.value = "AdGuard";
            checkDoH.checked = true;
            dns1v4.value = "94.140.14.14";
            dns2v4.value = "94.140.15.15";
            dns1v6.value = "2a10:50c0::ad1:ff";
            dns2v6.value = "2a10:50c0::ad2:ff";
            serverUrl.value = "https://dns.adguard.com/dns-query";
            break;
        case "alibaba-https":
            provName.value = "Alibaba";
            checkDoH.checked = true;
            dns1v4.value = "223.5.5.5";
            dns2v4.value = "223.6.6.6";
            dns1v6.value = "2400:3200::1";
            dns2v6.value = "2400:3200:baba::1";
            serverUrl.value = "https://dns.alidns.com/dns-query";
            break;
        case "applied-privacy-https":
            provName.value = "Applied Privacy";
            checkDoH.checked = true;
            dns1v4.value = "146.255.56.98";
            dns2v4.value = "";
            dns1v6.value = "2a02:1b8:10:234::2";
            dns2v6.value = "";
            serverUrl.value = "https://doh.applied-privacy.net/query";
            break;
        case "applied-privacy-tls":
            provName.value = "Applied Privacy";
            checkDoT.checked = true;
            dns1v4.value = "146.255.56.98";
            dns2v4.value = "";
            dns1v6.value = "2a02:1b8:10:234::2";
            dns2v6.value = "";
            serverUrl.value = "dot1.applied-privacy.net";
            break;
        case "cloudflare-https":
            provName.value = "Cloudflare";
            checkDoH.checked = true;
            dns1v4.value = "1.1.1.1";
            dns2v4.value = "1.0.0.1";
            dns1v6.value = "2606:4700:4700::1111";
            dns2v6.value = "2606:4700:4700::1001";
            serverUrl.value = "https://cloudflare-dns.com/dns-query";
            break;
        case "cloudflare-tls":
            provName.value = "Cloudflare";
            checkDoT.checked = true;
            dns1v4.value = "1.1.1.1";
            dns2v4.value = "1.0.0.1";
            dns1v6.value = "2606:4700:4700::1111";
            dns2v6.value = "2606:4700:4700::1001";
            serverUrl.value = "cloudflare-dns.com";
            break;
        case "cloudflare-security-https":
            provName.value = "Cloudflare Security";
            checkDoH.checked = true;
            dns1v4.value = "1.1.1.2";
            dns2v4.value = "1.0.0.2";
            dns1v6.value = "2606:4700:4700::1112";
            dns2v6.value = "2606:4700:4700::1002";
            serverUrl.value = "https://security.cloudflare-dns.com/dns-query";
            break;
        case "cloudflare-security-tls":
            provName.value = "Cloudflare Security";
            checkDoT.checked = true;
            dns1v4.value = "1.1.1.2";
            dns2v4.value = "1.0.0.2";
            dns1v6.value = "2606:4700:4700::1112";
            dns2v6.value = "2606:4700:4700::1002";
            serverUrl.value = "security.cloudflare-dns.com";
            break;
        case "cloudflare-family-https":
            provName.value = "Cloudflare Family";
            checkDoH.checked = true;
            dns1v4.value = "1.1.1.3";
            dns2v4.value = "1.0.0.3";
            dns1v6.value = "2606:4700:4700::1113";
            dns2v6.value = "2606:4700:4700::1003";
            serverUrl.value = "https://family.cloudflare-dns.com/dns-query";
            break;
        case "cloudflare-family-tls":
            provName.value = "Cloudflare Family";
            checkDoT.checked = true;
            dns1v4.value = "1.1.1.3";
            dns2v4.value = "1.0.0.3";
            dns1v6.value = "2606:4700:4700::1113";
            dns2v6.value = "2606:4700:4700::1003";
            serverUrl.value = "family.cloudflare-dns.com";
            break;
        case "dnspod-https":
            provName.value = "DNSPOD";
            checkDoH.checked = true;
            dns1v4.value = "162.14.21.56";
            dns2v4.value = "162.14.21.178";
            dns1v6.value = "";
            dns2v6.value = "";
            serverUrl.value = "https://doh.pub/dns-query";
            break;
        case "google-https":
            provName.value = "Google";
            checkDoH.checked = true;
            dns1v4.value = "8.8.8.8";
            dns2v4.value = "8.8.4.4";
            dns1v6.value = "2001:4860:4860::8888";
            dns2v6.value = "2001:4860:4860::8844";
            serverUrl.value = "https://dns.google/dns-query";
            break;
        case "google-tls":
            provName.value = "Google";
            checkDoT.checked = true;
            dns1v4.value = "8.8.8.8";
            dns2v4.value = "8.8.4.4";
            dns1v6.value = "2001:4860:4860::8888";
            dns2v6.value = "2001:4860:4860::8844";
            serverUrl.value = "dns.google";
            break;
        case "opendns-https":
            provName.value = "OpenDNS";
            checkDoH.checked = true;
            dns1v4.value = "208.67.220.220";
            dns2v4.value = "208.67.222.222";
            dns1v6.value = "2620:119:35::35";
            dns2v6.value = "2620:119:53::53";
            serverUrl.value = "https://doh.opendns.com/dns-query";
            break;
        case "quad9-https":
            provName.value = "";
            checkDoH.checked = true;
            dns1v4.value = "9.9.9.9";
            dns2v4.value = "149.112.112.112";
            dns1v6.value = "2620:fe::fe";
            dns2v6.value = "2620:fe::9";
            serverUrl.value = "https://dns.quad9.net/dns-query";
            break;
        case "quad9-tls":
            provName.value = "";
            checkDoT.checked = true;
            dns1v4.value = "9.9.9.9";
            dns2v4.value = "149.112.112.112";
            dns1v6.value = "2620:fe::fe";
            dns2v6.value = "2620:fe::9";
            serverUrl.value = "dns.quad9.net";
            break;
        default:
            provName.value = "";
            checkDoH.checked = true;
            dns1v4.value = "";
            dns2v4.value = "";
            dns1v6.value = "";
            dns2v6.value = "";
            serverUrl.value = "";
    }
}