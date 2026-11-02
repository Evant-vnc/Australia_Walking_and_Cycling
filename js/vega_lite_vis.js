// Embeds each Vega-Lite chart (one JSON spec per chart in Visualisations/) into its div in index.html.

var vg_1 = "Visualisations/dot_matrix.vg.json";
vegaEmbed("#dot_matrix", vg_1, { actions: false }).then(function (result) {}).catch(console.error);

var vg_2 = "Visualisations/strip_plot.vg.json";
vegaEmbed("#strip_plot", vg_2, { actions: false }).then(function (result) {}).catch(console.error);

var vg_3 = "Visualisations/gender_dumbbell.vg.json";
vegaEmbed("#gender_dumbbell", vg_3, { actions: false }).then(function (result) {}).catch(console.error);

var vg_4 = "Visualisations/age_heatmap.vg.json";
vegaEmbed("#age_heatmap", vg_4, { actions: false }).then(function (result) {}).catch(console.error);

var vg_5 = "Visualisations/small_multiple_maps.vg.json";
vegaEmbed("#small_multiple_maps", vg_5, { actions: false }).then(function (result) {}).catch(console.error);

var vg_6 = "Visualisations/symbol_map.vg.json";
vegaEmbed("#symbol_map", vg_6, { actions: false }).then(function (result) {}).catch(console.error);

var vg_7 = "Visualisations/supply_dotplot.vg.json";
vegaEmbed("#supply_dotplot", vg_7, { actions: false }).then(function (result) {}).catch(console.error);

// Charts 8 and 9 are one spec: the map and scatterplot share the dropdown and the state selection.
var vg_8 = "Visualisations/supply_vs_demand.vg.json";
vegaEmbed("#supply_vs_demand", vg_8, { actions: false }).then(function (result) {}).catch(console.error);

var vg_10 = "Visualisations/waffle.vg.json";
vegaEmbed("#waffle", vg_10, { actions: false }).then(function (result) {}).catch(console.error);

var vg_11 = "Visualisations/access_lollipop.vg.json";
vegaEmbed("#access_lollipop", vg_11, { actions: false }).then(function (result) {}).catch(console.error);

var vg_12 = "Visualisations/change_bars.vg.json";
vegaEmbed("#change_bars", vg_12, { actions: false }).then(function (result) {}).catch(console.error);

var vg_13 = "Visualisations/timeline.vg.json";
vegaEmbed("#timeline", vg_13, { actions: false }).then(function (result) {}).catch(console.error);
