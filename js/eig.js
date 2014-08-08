     function loadConfiguration() {
            var cfgPhoneNumber = localStorage.getItem('cfgPhoneNumber') || '555 555-5555';
            document.getElementById('cfgPhoneNumber').value = cfgPhoneNumber;
            var cfgClickDial = localStorage.getItem('cfgClickDial') || 'Dial';
            document.getElementById('cfgClickDial').value = cfgClickDial;
            var cfgWaitTime = localStorage.getItem('cfgWaitTime') || 30;
            document.getElementById('cfgWaitTime').value = cfgWaitTime;

            var cfgEntryType = localStorage.getItem('cfgEntryType') || 'entryPoint1.html';
            var radio = $("#config input:radio[value='"+cfgEntryType+"']").prop("checked", true);

            var cfgPreferred = localStorage.getItem('cfgPreferred');
            if (cfgPreferred) { $('#cfgPreferred').prop('checked', true); }
        }

        function persistConfiguration() {
            localStorage.setItem('cfgPhoneNumber', document.getElementById('cfgPhoneNumber').value);
            localStorage.setItem('cfgClickDial', document.getElementById('cfgClickDial').value);
            localStorage.setItem('cfgWaitTime', document.getElementById('cfgWaitTime').value);

            var cfgEntryTypeRadio = $("#config input:radio[name='cfgEntryType']:checked");

            var cfgPreferredCheck = $('#cfgPreferred').is(':checked');
            if (cfgPreferredCheck) {
                localStorage.setItem('cfgPreferred', cfgPreferredCheck);
            }
            else {
                localStorage.removeItem('cfgPreferred');
            }
            var location = cfgEntryTypeRadio.val();
            localStorage.setItem('cfgEntryType', location);
            window.location.href = location;
        }

        function resetConfiguration() {
            localStorage.removeItem('cfgPhoneNumber');
            localStorage.removeItem('cfgEntryType');
            localStorage.removeItem('cfgClickDial');
            localStorage.removeItem('cfgWaitTime');
            localStorage.removeItem('cfgPreferred');
            loadConfiguration();
        }
		
		function getWaitTime() {
			return localStorage.getItem('cfgWaitTime');
		}
	
	function dial() {
		window.location = 'tel:5555555555';
	}
	
        function openModal() {
		var m;
            var cfgClickDial = localStorage.getItem('cfgClickDial');
			
			if (cfgClickDial == 'Dial'){
				window.location = 'tel:'+localStorage.getItem('cfgPhoneNumber');
				return;
			}
			
            if (cfgClickDial == 'Low Wait'){
                m = $('#under10');
            }
            else if (cfgClickDial == 'Long Wait'){
                m = $('#over10');
            }
            else if (cfgClickDial == 'Closed'){
                m = $('#closed');
            }

			// timout modal in 30 seconds (from note on pate 7)
			m.modal('show');
			window.setTimeout(function() {m.modal('hide');}, 30000);
			
        }
		

function startSpinner() {
  var opts = {
  lines: 13, // The number of lines to draw
  length: 20, // The length of each line
  width: 10, // The line thickness
  radius: 30, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb or array of colors
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: '50%', // Top position relative to parent
  left: '50%' // Left position relative to parent
};
	var target = document.getElementById('spinnerDiv');
	var spinner = new Spinner(opts);
	spinner.spin(target);
	window.setTimeout(function() { spinner.stop(); }, 1000);
}





