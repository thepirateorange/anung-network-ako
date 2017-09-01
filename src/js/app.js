// Change Standby Message
mobilio.options.standby_message = ". . .";

// Data
var data = {
    app_title: "Anung Network Ako?",
    app_desc: "A simple tool to find out what network your mobile number is.",
    app_contact: "thepirateorange@gmail.com",
    message: mobilio.options.standby_message,
    mobile_placeholder: "Enter your number",
    mobile_number: mobilio.analyze('')
}

// Initiate Vue
var app = new Vue({
    el: '#app',
    data: data,
    
    watch: {
        'mobile_number': function(val, oldVal) {
            this.message = mobilio.analyze(val);
        }
    }
});