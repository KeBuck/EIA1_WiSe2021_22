var continent1: string = "Africa";
var continent2: string = "South America";
var continent3: string = "Europe";
var continent4: string = "North America";
var continent5: string = "Asia";
var continent6: string = "Australia";

var continent1_2008: number = 1208;
var continent2_2008: number = 1132.6;
var continent3_2008: number = 4965.7;
var continent4_2008: number = 6600.4;
var continent5_2008: number = 12954.7;
var continent6_2008: number = 1993;

var continent1_2018: number = 1235.5;
var continent2_2018: number = 1261.5;
var continent3_2018: number = 4209.3;
var continent4_2018: number = 6305.6;
var continent5_2018: number = 16274.1;
var continent6_2018: number = 2100.5;

var totalContinent_2018: number = Math.round(continent1_2018 + continent2_2018 + continent3_2018 + continent4_2018 + continent5_2018 + continent5_2018);

var continentTotalAfrica: number = (continent1_2018 *100 / totalContinent_2018);
var continentTotalSouthAmerica: number = Math.round((continent2_2018 *100 / totalContinent_2018) *100) / 100;
var continentTotalEurope: number = Math.round((continent3_2018 *100 / totalContinent_2018) *100) / 100;
var continentTotalNorthAmerica: number = Math.round((continent4_2018 *100 / totalContinent_2018) *100) / 100;
var continentTotalAsia: number = Math.round((continent5_2018 *100 / totalContinent_2018) *100) / 100;
var continentTotalAustralia: number = Math.round((continent6_2018 *100 / totalContinent_2018) *100) / 100;

var Africa2008_2018: number = Math.round((continent1_2018 *100 / continent1_2008) - 100);
var SouthAmerica2008_2018: number = Math.round((continent2_2018 *100 / continent2_2008) - 100);
var Europe2008_2018: number = Math.round((continent3_2018 *100 / continent3_2008) - 100);
var NorthAmerica2008_2018: number = Math.round((continent4_2018 *100 / continent4_2008) - 100);
var Asia2008_2018: number = Math.round((continent5_2018 *100 / continent5_2008) - 100);
var Austrilia2008_2018: number = Math.round((continent6_2018 *100 / continent6_2008) - 100);

var continent1_2008_2018: number = Math.round(continent1_2018 - continent1_2008);
var continent2_2008_2018: number = Math.round(continent2_2018 - continent2_2008);
var continent3_2008_2018: number = Math.round(continent3_2018 - continent3_2008);
var continent4_2008_2018: number = Math.round(continent4_2018 - continent4_2008);
var continent5_2008_2018: number = Math.round(continent5_2018 - continent5_2008);
var continent6_2008_2018: number = Math.round(continent6_2018 - continent6_2008);

console.log ("Die Emission von " + continent1 +  " ist: " + continent1_2018 + " kg CO2.");
console.log ("Die Emission von " + continent2 +  " ist: " + continent2_2018 + " kg CO2.");
console.log ("Die Emission von " + continent3 +  " ist: " + continent3_2018 + " kg CO2.");
console.log ("Die Emission von " + continent4 +  " ist: " + continent4_2018 + " kg CO2.");
console.log ("Die Emission von " + continent5 +  " ist: " + continent5_2018 + " kg CO2.");
console.log ("Die Emission von " + continent6 +  " ist: " + continent6_2018 + " kg CO2.");

console.log ("Relativ zur Gesamtemission der Welt verursacht " + continent1 + " damit " + continentTotalAfrica + " %.");
console.log ("Relativ zur Gesamtemission der Welt verursacht " + continent2 + " damit " + continentTotalSouthAmerica + " %.");
console.log ("Relativ zur Gesamtemission der Welt verursacht " + continent3 + " damit " + continentTotalEurope + " %.");
console.log ("Relativ zur Gesamtemission der Welt verursacht " + continent4 + " damit " + continentTotalNorthAmerica + " %.");
console.log ("Relativ zur Gesamtemission der Welt verursacht " + continent5 + " damit " + continentTotalAsia + " %.");
console.log ("Relativ zur Gesamtemission der Welt verursacht " + continent6 + " damit " + continentTotalAustralia + " %.");

console.log ("Für " + continent1 + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Africa2008_2018 + " % verändert. ");
console.log ("Für " + continent2 + " hat sich 2018 im Vergleich zu 2008 die Emission um " + SouthAmerica2008_2018 + " % verändert. ");
console.log ("Für " + continent3 + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Europe2008_2018 + " % verändert.");
console.log ("Für " + continent4 + " hat sich 2018 im Vergleich zu 2008 die Emission um " + NorthAmerica2008_2018 + " % verändert.");
console.log ("Für " + continent5 + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Asia2008_2018 + " % verändert.");
console.log ("Für " + continent6 + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Austrilia2008_2018 + " % verändert.");


console.log ("Für " + continent1 + " 2018 im Vergleich zu 2008 das " + continent1_2008_2018 + " kg CO2.");
console.log ("Für " + continent2 + " 2018 im Vergleich zu 2008 das " + continent2_2008_2018 + " kg CO2.");
console.log ("Für " + continent3 + " 2018 im Vergleich zu 2008 das " + continent3_2008_2018 + " kg CO2.");
console.log ("Für " + continent4 + " 2018 im Vergleich zu 2008 das " + continent4_2008_2018 + " kg CO2.");
console.log ("Für " + continent5 + " 2018 im Vergleich zu 2008 das " + continent5_2008_2018 + " kg CO2.");
console.log ("Für " + continent6 + " 2018 im Vergleich zu 2008 das " + continent6_2008_2018 + " kg CO2.");

console.log ("Total Continent" + totalContinent_2018)
