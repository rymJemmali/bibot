var svg2png = require('svg2png');

var D3Render = function(){
	var svgDemo = '<html><head><head><body><svg width="960" height="500"><g transform="translate(30,10)"><g class="axis axis--x" transform="translate(0,460)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle"><path class="domain" stroke="#000" d="M0.5,6V0.5H900.5V6"></path><g class="tick" opacity="1" transform="translate(0,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">2015</text></g><g class="tick" opacity="1" transform="translate(76,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">February</text></g><g class="tick" opacity="1" transform="translate(145,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">March</text></g><g class="tick" opacity="1" transform="translate(222,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">April</text></g><g class="tick" opacity="1" transform="translate(296,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">May</text></g><g class="tick" opacity="1" transform="translate(372,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">June</text></g><g class="tick" opacity="1" transform="translate(446,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">July</text></g><g class="tick" opacity="1" transform="translate(523,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">August</text></g><g class="tick" opacity="1" transform="translate(599,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">September</text></g><g class="tick" opacity="1" transform="translate(673,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">October</text></g><g class="tick" opacity="1" transform="translate(750,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">November</text></g><g class="tick" opacity="1" transform="translate(824,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">December</text></g><g class="tick" opacity="1" transform="translate(900,0)"><line stroke="#000" y2="6" x1="0.5" x2="0.5"></line><text fill="#000" y="9" x="0.5" dy=".71em">2016</text></g></g><g class="bar" transform="translate(0,439.09090909090907)"><rect x="1" width="6" height="20.909090909090935"></rect><text dy=".75em" y="6" x="3.5" text-anchor="middle">1</text></g><g class="bar" transform="translate(7,313.6363636363636)"><rect x="1" width="17" height="146.36363636363637"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">7</text></g><g class="bar" transform="translate(25,334.54545454545456)"><rect x="1" width="16" height="125.45454545454544"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">6</text></g><g class="bar" transform="translate(42,292.72727272727275)"><rect x="1" width="16" height="167.27272727272725"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">8</text></g><g class="bar" transform="translate(59,313.6363636363636)"><rect x="1" width="16" height="146.36363636363637"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">7</text></g><g class="bar" transform="translate(76,355.45454545454544)"><rect x="1" width="17" height="104.54545454545456"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">5</text></g><g class="bar" transform="translate(94,313.6363636363636)"><rect x="1" width="16" height="146.36363636363637"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">7</text></g><g class="bar" transform="translate(111,376.3636363636364)"><rect x="1" width="16" height="83.63636363636363"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">4</text></g><g class="bar" transform="translate(128,376.3636363636364)"><rect x="1" width="16" height="83.63636363636363"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">4</text></g><g class="bar" transform="translate(145,376.3636363636364)"><rect x="1" width="17" height="83.63636363636363"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">4</text></g><g class="bar" transform="translate(163,334.54545454545456)"><rect x="1" width="16" height="125.45454545454544"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">6</text></g><g class="bar" transform="translate(180,209.09090909090912)"><rect x="1" width="16" height="250.90909090909088"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">12</text></g><g class="bar" transform="translate(197,292.72727272727275)"><rect x="1" width="17" height="167.27272727272725"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">8</text></g><g class="bar" transform="translate(215,188.1818181818182)"><rect x="1" width="16" height="271.8181818181818"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">13</text></g><g class="bar" transform="translate(232,355.45454545454544)"><rect x="1" width="16" height="104.54545454545456"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">5</text></g><g class="bar" transform="translate(249,376.3636363636364)"><rect x="1" width="16" height="83.63636363636363"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">4</text></g><g class="bar" transform="translate(266,209.09090909090912)"><rect x="1" width="16" height="250.90909090909088"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">12</text></g><g class="bar" transform="translate(283,230)"><rect x="1" width="17" height="230"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">11</text></g><g class="bar" transform="translate(301,355.45454545454544)"><rect x="1" width="16" height="104.54545454545456"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">5</text></g><g class="bar" transform="translate(318,292.72727272727275)"><rect x="1" width="16" height="167.27272727272725"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">8</text></g><g class="bar" transform="translate(335,250.9090909090909)"><rect x="1" width="17" height="209.0909090909091"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">10</text></g><g class="bar" transform="translate(353,104.54545454545456)"><rect x="1" width="16" height="355.45454545454544"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">17</text></g><g class="bar" transform="translate(370,230)"><rect x="1" width="16" height="230"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">11</text></g><g class="bar" transform="translate(387,188.1818181818182)"><rect x="1" width="16" height="271.8181818181818"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">13</text></g><g class="bar" transform="translate(404,167.27272727272725)"><rect x="1" width="17" height="292.72727272727275"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">14</text></g><g class="bar" transform="translate(422,250.9090909090909)"><rect x="1" width="16" height="209.0909090909091"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">10</text></g><g class="bar" transform="translate(439,167.27272727272725)"><rect x="1" width="16" height="292.72727272727275"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">14</text></g><g class="bar" transform="translate(456,41.81818181818181)"><rect x="1" width="16" height="418.1818181818182"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">20</text></g><g class="bar" transform="translate(473,188.1818181818182)"><rect x="1" width="17" height="271.8181818181818"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">13</text></g><g class="bar" transform="translate(491,334.54545454545456)"><rect x="1" width="16" height="125.45454545454544"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">6</text></g><g class="bar" transform="translate(508,313.6363636363636)"><rect x="1" width="16" height="146.36363636363637"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">7</text></g><g class="bar" transform="translate(525,209.09090909090912)"><rect x="1" width="16" height="250.90909090909088"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">12</text></g><g class="bar" transform="translate(542,250.9090909090909)"><rect x="1" width="17" height="209.0909090909091"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">10</text></g><g class="bar" transform="translate(560,188.1818181818182)"><rect x="1" width="16" height="271.8181818181818"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">13</text></g><g class="bar" transform="translate(577,167.27272727272725)"><rect x="1" width="16" height="292.72727272727275"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">14</text></g><g class="bar" transform="translate(594,0)"><rect x="1" width="16" height="460"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">22</text></g><g class="bar" transform="translate(611,313.6363636363636)"><rect x="1" width="17" height="146.36363636363637"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">7</text></g><g class="bar" transform="translate(629,188.1818181818182)"><rect x="1" width="16" height="271.8181818181818"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">13</text></g><g class="bar" transform="translate(646,146.36363636363637)"><rect x="1" width="16" height="313.6363636363636"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">15</text></g><g class="bar" transform="translate(663,167.27272727272725)"><rect x="1" width="16" height="292.72727272727275"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">14</text></g><g class="bar" transform="translate(680,292.72727272727275)"><rect x="1" width="17" height="167.27272727272725"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">8</text></g><g class="bar" transform="translate(698,313.6363636363636)"><rect x="1" width="16" height="146.36363636363637"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">7</text></g><g class="bar" transform="translate(715,250.9090909090909)"><rect x="1" width="16" height="209.0909090909091"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">10</text></g><g class="bar" transform="translate(732,355.45454545454544)"><rect x="1" width="17" height="104.54545454545456"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">5</text></g><g class="bar" transform="translate(750,230)"><rect x="1" width="16" height="230"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">11</text></g><g class="bar" transform="translate(767,334.54545454545456)"><rect x="1" width="16" height="125.45454545454544"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">6</text></g><g class="bar" transform="translate(784,355.45454545454544)"><rect x="1" width="16" height="104.54545454545456"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">5</text></g><g class="bar" transform="translate(801,230)"><rect x="1" width="17" height="230"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">11</text></g><g class="bar" transform="translate(819,250.9090909090909)"><rect x="1" width="16" height="209.0909090909091"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">10</text></g><g class="bar" transform="translate(836,376.3636363636364)"><rect x="1" width="16" height="83.63636363636363"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">4</text></g><g class="bar" transform="translate(853,313.6363636363636)"><rect x="1" width="16" height="146.36363636363637"></rect><text dy=".75em" y="6" x="8.5" text-anchor="middle">7</text></g><g class="bar" transform="translate(870,230)"><rect x="1" width="17" height="230"></rect><text dy=".75em" y="6" x="9" text-anchor="middle">11</text></g><g class="bar" transform="translate(888,355.45454545454544)"><rect x="1" width="11" height="104.54545454545456"></rect><text dy=".75em" y="6" x="6" text-anchor="middle">5</text></g></g></svg></body>';
	return function(svg, callback){
		svg2png(new Buffer(svg || svgDemo, "utf8"), { width: 960, height: 500 })
			.then(callback);
	}
}

module.exports = D3Render;