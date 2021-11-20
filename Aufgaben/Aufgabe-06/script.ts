namespace Aufgabe06 {

    var continent1: string = "Africa";
    var continent2: string = "South America";
    var continent3: string = "Europe";
    var continent4: string = "North America";
    var continent5: string = "Asia";
    var continent6: string = "Australia";

    var continent1_2008: number = 1028;
    var continent2_2008: number = 1132.6;
    var continent3_2008: number = 4965.7;
    var continent4_2008: number = 6600.4;
    var continent5_2008: number = 12954.7;
    var continent6_2008: number = 1993;

    var continent1_2018: number = 1235.5;
    var continent2_2018: number = 1261.5;
    var continent3_2018: number = 4209.3;
    var continent4_2018: number = 6035.6;
    var continent5_2018: number = 16274.1;
    var continent6_2018: number = 2100.5;

    var totalContinent_2018: number = (continent1_2018 + continent2_2018 + continent3_2018 + continent4_2018 + continent5_2018 + continent6_2018);

    var continentTotalAfrica: number = Math.round((continent1_2018 *100) / totalContinent_2018);
    var continentTotalSouthAmerica: number = Math.round((continent2_2018 *100) / totalContinent_2018);
    var continentTotalEurope: number = Math.round((continent3_2018 *100) / totalContinent_2018);
    var continentTotalNorthAmerica: number = Math.round((continent4_2018 *100) / totalContinent_2018);
    var continentTotalAsia: number = Math.round((continent5_2018 *100) / totalContinent_2018);
    var continentTotalAustralia: number = Math.round((continent6_2018 *100) / totalContinent_2018);

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





