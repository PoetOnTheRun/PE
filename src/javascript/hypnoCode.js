window.hypnoCode={
	getHypnoImage: function() {
		var ha=[];
		var tc=0;
		for (var i=0; i < window.hypnoImages.length; i++) {
			if (window.hypnoImages[i].kinkActive()) {
				ha.push(window.hypnoImages[i]);
				tc+=window.hypnoImages[i].chance;
			}
		}
		tc=window.randomCode.getIntInclusive(1, tc);
		for (var j=0; j < ha.length; j++) {
			tc-=ha[j].chance;
			if (tc <= 0) {
				return ha[j].filename;
			}
		}
	}
},

window.hypnoImages=[
	{
		filename: "hypno_1_1.gif",
		chance: 10,
		kinkActive: function() {
			return true;
		}
	},
	{
		filename: "hypno_1_2.gif",
		chance: 10,
		kinkActive: function() {
			return true;
		}
	},
	{
		filename: "hypno_1_3.gif",
		chance: 10,
		kinkActive: function() {
			return true;
		}
	},
	{
		filename: "hypno_1_4.gif",
		chance: 10,
		kinkActive: function() {
			return true;
		}
	},
	{
		filename: "hypno_1_5.gif",
		chance: 10,
		kinkActive: function() {
			return true;
		}
	},
	{
		filename: "hypno_1_6.gif",
		chance: 10,
		kinkActive: function() {
			return true;
		}
	},
	{
		filename: "hypno_1_7.gif",
		chance: 10,
		kinkActive: function() {
			return true;
		}
	},
	{
		filename: "hypno_cum.gif",
		chance: 10,
		kinkActive: function() {
			return State.active.variables.kink.cumEating;
		}
	},
	{
		filename: "hypno_piss.gif",
		chance: 10,
		kinkActive:  function() {
			return State.active.variables.kink.watersports;
		}
	},
	{
		filename: "hypno_sph.gif",
		chance: 10,
		kinkActive: function() {
			return State.active.variables.kink.sph;
		}
	},
	{
		filename: "hypno_maso.gif",
		chance: 10,
		kinkActive: function() {
			return State.active.variables.kink.painPlay;
		}
	},
];