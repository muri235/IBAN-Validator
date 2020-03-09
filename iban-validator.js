/*  IBAN-Validator
    Written by Muri @muri235 09.03.2020
    Fork me on GitHub: https://github.com/muri235/IBAN-Validator
    Version 2020.01
    Licenced CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
 */


const countries = {
    AX: {
        name: "Aland Islands",
        length: 18
    },
    AL: {
        name: "Albania",
        length: 28
    },
    DZ: {
        name: "Algeria",
        length: 26
    },
    AD: {
        name: "Andorra",
        length: 24
    },
    AO: {
        name: "Angola",
        length: 25
    },
    AT: {
        name: "Austria",
        length: 20
    },
    AZ: {
        name: "Azerbaijan",
        length: 28
    },
    BH: {
        name: "Bahrain",
        length: 22
    },
    BY: {
        name: "Belarus",
        length: 28
    },
    BE: {
        name: "Belgium",
        length: 16
    },
    BJ: {
        name: "Benin",
        length: 28
    },
    BA: {
        name: "Bosnia and Herzegovina",
        length: 20
    },
    BR: {
        name: "Brazil",
        length: 29
    },
    BG: {
        name: "Bulgaria",
        length: 22
    },
    BF: {
        name: "Burkina Faso",
        length: 28
    },
    BI: {
        name: "Burundi",
        length: 16
    },
    CM: {
        name: "Cameroon",
        length: 27
    },
    IC: {
        name: "Canary Islands",
        length: 24
    },
    CV: {
        name: "Cape Verde",
        length: 25
    },
    CF: {
        name: "Central African Republic",
        length: 27
    },
    EA: {
        name: "Ceuta and Melilla",
        length: 24
    },
    TD: {
        name: "Chad",
        length: 27
    },
    KM: {
        name: "Comoros",
        length: 27
    },
    CG: {
        name: "Congo",
        length: 27
    },
    CR: {
        name: "Costa Rica",
        length: 22
    },
    HR: {
        name: "Croatia",
        length: 21
    },
    CY: {
        name: "Cyprus",
        length: 28
    },
    CZ: {
        name: "Czech Republic",
        length: 24
    },
    DK: {
        name: "Denmark",
        length: 18
    },
    DJ: {
        name: "Djibouti",
        length: 27
    },
    DO: {
        name: "Dominican Republic",
        length: 28
    },
    EG: {
        name: "Egypt",
        length: 29
    },
    SV: {
        name: "El Salvador",
        length: 28
    },
    GQ: {
        name: "Equatorial Guinea",
        length: 27
    },
    EE: {
        name: "Estonia",
        length: 20
    },
    FO: {
        name: "Faroe Islands",
        length: 18
    },
    FI: {
        name: "Finland",
        length: 18
    },
    FR: {
        name: "France",
        length: 27
    },
    GF: {
        name: "French Guyana",
        length: 27
    },
    PF: {
        name: "French Polynesia",
        length: 27
    },
    TF: {
        name: "French Southern Territories",
        length: 27
    },
    GA: {
        name: "Gabon",
        length: 27
    },
    GE: {
        name: "Georgia",
        length: 22
    },
    DE: {
        name: "Germany",
        length: 22
    },
    GI: {
        name: "Gibraltar",
        length: 23
    },
    GR: {
        name: "Greece",
        length: 27
    },
    GL: {
        name: "Greenland",
        length: 18
    },
    GP: {
        name: "Guadeloupe",
        length: 27
    },
    GT: {
        name: "Guatemala",
        length: 28
    },
    GG: {
        name: "Guernsey",
        length: 22
    },
    GW: {
        name: "Guinea-Bissau",
        length: 25
    },
    VA: {
        name: "Holy See (the)",
        length: 22
    },
    HN: {
        name: "Honduras",
        length: 28
    },
    HU: {
        name: "Hungary",
        length: 28
    },
    IS: {
        name: "Iceland",
        length: 26
    },
    IR: {
        name: "Iran",
        length: 26
    },
    IQ: {
        name: "Iraq",
        length: 23
    },
    IE: {
        name: "Ireland",
        length: 22
    },
    IM: {
        name: "Isle of Man",
        length: 22
    },
    IL: {
        name: "Israel",
        length: 23
    },
    IT: {
        name: "Italy",
        length: 27
    },
    CI: {
        name: "Ivory Coast",
        length: 28
    },
    JE: {
        name: "Jersey",
        length: 22
    },
    JO: {
        name: "Jordan",
        length: 30
    },
    KZ: {
        name: "Kazakhstan",
        length: 20
    },
    XK: {
        name: "Kosovo",
        length: 20
    },
    KW: {
        name: "Kuwait",
        length: 30
    },
    LV: {
        name: "Latvia",
        length: 21
    },
    LB: {
        name: "Lebanon",
        length: 28
    },
    LI: {
        name: "Liechtenstein",
        length: 21
    },
    LT: {
        name: "Lithuania",
        length: 20
    },
    LU: {
        name: "Luxembourg",
        length: 20
    },
    MG: {
        name: "Madagascar",
        length: 27
    },
    ML: {
        name: "Mali",
        length: 28
    },
    MT: {
        name: "Malta",
        length: 31
    },
    MQ: {
        name: "Martinique",
        length: 27
    },
    MR: {
        name: "Mauritania",
        length: 27
    },
    MU: {
        name: "Mauritius",
        length: 30
    },
    YT: {
        name: "Mayotte",
        length: 27
    },
    MD: {
        name: "Moldova",
        length: 24
    },
    MC: {
        name: "Monaco",
        length: 27
    },
    ME: {
        name: "Montenegro",
        length: 22
    },
    MA: {
        name: "Morocco",
        length: 28
    },
    MZ: {
        name: "Mozambique",
        length: 25
    },
    NL: {
        name: "Netherlands",
        length: 18
    },
    NC: {
        name: "New Caledonia",
        length: 27
    },
    NI: {
        name: "Nicaragua",
        length: 32
    },
    NE: {
        name: "Niger",
        length: 28
    },
    MK: {
        name: "North Macedonia",
        length: 19
    },
    NO: {
        name: "Norway",
        length: 15
    },
    PK: {
        name: "Pakistan",
        length: 24
    },
    PS: {
        name: "Palestine",
        length: 29
    },
    PL: {
        name: "Poland",
        length: 28
    },
    PT: {
        name: "Portugal",
        length: 25
    },
    QA: {
        name: "Qatar",
        length: 29
    },
    RE: {
        name: "Reunion",
        length: 27
    },
    RO: {
        name: "Romania",
        length: 24
    },
    BL: {
        name: "Saint Barthelemy",
        length: 27
    },
    LC: {
        name: "Saint Lucia",
        length: 32
    },
    MF: {
        name: "Saint Martin (French part)",
        length: 27
    },
    PM: {
        name: "Saint Pierre et Miquelon",
        length: 27
    },
    SM: {
        name: "San Marino",
        length: 27
    },
    ST: {
        name: "Sao Tome and Principe",
        length: 25
    },
    SA: {
        name: "Saudi Arabia",
        length: 24
    },
    SN: {
        name: "Senegal",
        length: 28
    },
    RS: {
        name: "Serbia",
        length: 22
    },
    SC: {
        name: "Seychelles",
        length: 31
    },
    SK: {
        name: "Slovak Republic",
        length: 24
    },
    SI: {
        name: "Slovenia",
        length: 19
    },
    ES: {
        name: "Spain",
        length: 24
    },
    SE: {
        name: "Sweden",
        length: 24
    },
    CH: {
        name: "Switzerland",
        length: 21
    },
    TL: {
        name: "Timor-Leste",
        length: 23
    },
    TG: {
        name: "Togo",
        length: 28
    },
    TN: {
        name: "Tunisia",
        length: 24
    },
    TR: {
        name: "Turkey",
        length: 26
    },
    UA: {
        name: "Ukraine",
        length: 29
    },
    AE: {
        name: "United Arab Emirates",
        length: 23
    },
    GB: {
        name: "United Kingdom",
        length: 22
    },
    VG: {
        name: "Virgin Islands, British",
        length: 24
    },
    WF: {
        name: "Wallis and Futuna Islands",
        length: 27
    }
};

const characters = {
    'A': '10',
    'B': '11',
    'C': '12',
    'D': '13',
    'E': '14',
    'F': '15',
    'G': '16',
    'H': '17',
    'I': '18',
    'J': '19',
    'K': '20',
    'L': '21',
    'M': '22',
    'N': '23',
    'O': '24',
    'P': '25',
    'Q': '26',
    'R': '27',
    'S': '28',
    'T': '29',
    'U': '30',
    'V': '31',
    'W': '32',
    'X': '33',
    'Y': '34',
    'Z': '35'
};

function checkLength(iban) {
    const country_code = iban.substring(0, 2);
    return countries[country_code] ? iban.length === countries[country_code].length : false;
}

function integerize(iban) {
    const replacedString = (iban.substring(4) + iban.substring(0, 4)).replace(/[A-Z]/g, function (c) {
        return characters[c];
    });
    return (BigInt(replacedString));
}

function checkMod97(integerizedIban) {
    return integerizedIban % 97n === 1n;
}

// main function
function validateIban(iban) {
    const trimmedIban = iban.replace(/ /g, '');
    return checkLength(trimmedIban) && checkMod97(integerize(trimmedIban));
}

/* ####################################
   # The following is only for the UI #
   #################################### */

window.onload = function () {
    document.getElementById('validStatus').style.display = "none";
    document.getElementById('invalidStatus').style.display = "none";
    document.getElementById('validateButton').addEventListener('click', function () {
        let valid = validateIban(document.getElementById('ibanInput').value);
        document.getElementById('validStatus').style.display = valid ? "block" : "none";
        document.getElementById('invalidStatus').style.display = valid ? "none" : "block";
    });
    document.getElementById('bulkValidateButton').addEventListener('click', function () {
        const lines = document.getElementById('bulkIbanInput').value.split('\n');
        const table = document.getElementById('bulkResults');
        table.innerHTML = "";
        for (var i = 0; i < lines.length; i++) {
            let valid = validateIban(lines[i]);
            table.innerHTML += "<tr><td>" + lines[i] + "</td><td>" + (valid ? '<span id="validStatus" class="valid">VALID</span>' : '<span id="invalidStatus" class="invalid">INVALID</span>') + "</td></tr>";
        }
    });
};
