define([
	"dojo/_base/array", "dojox/charting/Theme",
	"dojox/charting/themes/WatersEdge"
], function (arrayUtil, Theme, WatersEdge) {
	// Make a reference to a useful utility
	var generateGradient = Theme.generateGradient;
	// set up some default fill values
	var defaultFill = {
		type: "linear",
		space: "shape",
		x1: 0,
		y1: 0,
		x2: 0,
		y2: 100
	};

	// Clone the WatersEdge theme
	var SitePen = WatersEdge.clone();

	// Modify these settings for the SitePen theme
	SitePen.chart.fill = generateGradient(defaultFill, "#fff", "#aaa");
	SitePen.axis.tick.font = "0.7em Verdana, arial, sans-serif";
	SitePen.plotarea.fill = generateGradient(defaultFill,
		"#000", "#777");
	SitePen.series.stroke.color = "#fff";
	SitePen.series.stroke.width = "1px";

	// Create seriesThemes which use gradients derived from
	// the WatersEdge colors
	SitePen.seriesThemes = [];
	arrayUtil.forEach(SitePen.colors, function(item) {
		SitePen.seriesThemes.push({
			fill: generateGradient(defaultFill, item, "#fff"),
			shadow: { dx: 2, dy: 1, width: 3, color: [5, 5, 0, 1] }
		});
	});
	return SitePen;
});