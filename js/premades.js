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