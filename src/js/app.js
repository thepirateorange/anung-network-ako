var app = new Vue({
    el: '#app',
    data: {
        app_title: "Anung Network Ako?",
        message: "YOUR NETWORK IS . . .",
        mobile_placeholder: "Enter your 11-Digit mobile number (e.g. 0917 - 000 - 0000)",
        'mobile_number': ''
    },
    
    watch: {
        'mobile_number': function(val, oldVal) {
            this.message = mobilio.analyze(val);
        }
    }
});


