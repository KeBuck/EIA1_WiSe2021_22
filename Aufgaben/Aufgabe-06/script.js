var Aufgabe06;
(function (Aufgabe06) {
    var continent1 = "Africa";
    var continent2 = "South America";
    var continent3 = "Europe";
    var continent4 = "North America";
    var continent5 = "Asia";
    var continent6 = "Australia";
    var continent1_2008 = 1028;
    var continent2_2008 = 1132.6;
    var continent3_2008 = 4965.7;
    var continent4_2008 = 6600.4;
    var continent5_2008 = 12954.7;
    var continent6_2008 = 1993;
    var continent1_2018 = 1235.5;
    var continent2_2018 = 1261.5;
    var continent3_2018 = 4209.3;
    var continent4_2018 = 6035.6;
    var continent5_2018 = 16274.1;
    var continent6_2018 = 2100.5;
    var totalContinent_2018 = (continent1_2018 + continent2_2018 + continent3_2018 + continent4_2018 + continent5_2018 + continent6_2018);
    var continentTotalAfrica = Math.round((continent1_2018 * 100) / totalContinent_2018);
    var continentTotalSouthAmerica = Math.round((continent2_2018 * 100) / totalContinent_2018);
    var continentTotalEurope = Math.round((continent3_2018 * 100) / totalContinent_2018);
    var continentTotalNorthAmerica = Math.round((continent4_2018 * 100) / totalContinent_2018);
    var continentTotalAsia = Math.round((continent5_2018 * 100) / totalContinent_2018);
    var continentTotalAustralia = Math.round((continent6_2018 * 100) / totalContinent_2018);
    var Africa2008_2018 = Math.round((continent1_2018 * 100 / continent1_2008) - 100);
    var SouthAmerica2008_2018 = Math.round((continent2_2018 * 100 / continent2_2008) - 100);
    var Europe2008_2018 = Math.round((continent3_2018 * 100 / continent3_2008) - 100);
    var NorthAmerica2008_2018 = Math.round((continent4_2018 * 100 / continent4_2008) - 100);
    var Asia2008_2018 = Math.round((continent5_2018 * 100 / continent5_2008) - 100);
    var Austrilia2008_2018 = Math.round((continent6_2018 * 100 / continent6_2008) - 100);
    var continent1_2008_2018 = Math.round(continent1_2018 - continent1_2008);
    var continent2_2008_2018 = Math.round(continent2_2018 - continent2_2008);
    var continent3_2008_2018 = Math.round(continent3_2018 - continent3_2008);
    var continent4_2008_2018 = Math.round(continent4_2018 - continent4_2008);
    var continent5_2008_2018 = Math.round(continent5_2018 - continent5_2008);
    var continent6_2008_2018 = Math.round(continent6_2018 - continent6_2008);
    window.addEventListener("load", handlefunction);
    function handlefunction() {
        document.querySelector(".africa").addEventListener("click", function () { myFunction(continent1, continent1_2018); });
    }
    function myFunction(continent, number2018) {
        document.querySelector(".nameContinent").innerHTML = continent;
        document.querySelector(".emissionNumber").innerHTML = number2018.toString();
        Balken();
    }
    //atribute
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map