function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);

    // Set AdMobAds options:
    admob.setOptions({
        publisherId:          "pub-5254100662880661",  // Required
        adSize: admob.AD_SIZE.SMART_BANNER,
        overlap: true,
        isTesting: true
        /*
        interstitialAdId:     "ca-app-pub-XXXXXXXXXXXXXXXX/IIIIIIIIII",  // Optional
        tappxIdiOS:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        tappxShare:           0.5                                        // Optional
        */
    });
    
    $(document).ready(function() {
        
        admob.createBannerView({
            isTesting: true
        });
        
    });

}

document.addEventListener("deviceready", onDeviceReady, false);
