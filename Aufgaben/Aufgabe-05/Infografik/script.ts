var continent1: string = "Africa";
var continent2: string = "South America";
var continent3: string = "Europe";
var continent4: string = "North America";
var continent5: string = "Asia";
var continent6: string = "Australia";

var continent1_2008: number = 1.208;
var continent2_2008: number = 1.132.6;
var continent3_2008: number = 4.965.7;
var continent4_2008: number = 6.600.4;
var continent5_2008: number = 12.954.7;
var continent6_2008: number = 1.993;

var continent1_2018: number = 1.235.5;
var continent2_2018: number = 1.261.5;
var continent3_2018: number = 4.209.3;
var continent4_2018: number = 6.305.6;
var continent5_2018: number = 16.274.1;
var continent6_2018: number = 2.100.5;

var totalContinent_2018: number = Math.round(continent1_2018 + continent2_2018 + continent3_2018 + continent4_2018 + continent5_2018 + continent5_2018*100)/100;

var continentTotalAfrica: number = Math.round((continent1_2018 *100 / totalContinent_2018) *100) / 100;
var continentTotalSouthAmerica: number = Math.round((continent2_2018 *100 / totalContinent_2018) *100) / 100;
var continentTotalEurope: number = Math.round((continent3_2018 *100 / totalContinent_2018) *100) / 100;
var continentTotalNorthAmerica: number = Math.round((continent4_2018 *100 / totalContinent_2018) *100) / 100;
var continentTotalAsia: number = Math.round((continent5_2018 *100 / totalContinent_2018) *100) / 100;
var continentTotalAustralia: number = Math.round((continent6_2018 *100 / totalContinent_2018) *100) / 100;

var Africa2008_2018: number = Math.round(100-(continent1_2018 *100 / continent1_2008));
var SouthAmerica2008_2018: number = Math.round(100-(continent2_2018 *100 / continent2_2008));
var Europe2008_2018: number = Math.round(100-(continent3_2018 *100 / continent3_2008));
var NorthAmerica2008_2018: number = Math.round(100-(continent4_2018 *100 / continent4_2008));
var Asia2008_2018: number = Math.round(100-(continent5_2018 *100 / continent5_2008));

var continent1_2008_2018: number = Math.round(continent1_2018 - continent1_2008);
var continent2_2008_2018: number = Math.round(continent2_2018 - continent2_2008);
var continent3_2008_2018: number = Math.round(continent3_2018 - continent3_2008);
var continent4_2008_2018: number = Math.round(continent4_2018 - continent4_2008);
var continent5_2008_2018: number = Math.round(continent5_2018 - continent5_2008);
var continent6_2008_2018: number = Math.round(continent6_2018 - continent6_2008);