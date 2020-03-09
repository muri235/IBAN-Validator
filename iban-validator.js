/*  IBAN-Validator
    Written by Muri @muri235 09.03.2020
    Fork me on GitHub: https://github.com/muri235/IBAN-Validator
    Version 2020.01
    Licenced CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
 */


const countries = {
    AL: {
        name: "Albania",
        length: 28
    },
    AD: {
        name: "Andorra",
        length: 24
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
    DO: {
        name: "Dominican Republic",
        length: 28
    },
    TL: {
        name: "East Timor",
        length: 23
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
    GT: {
        name: "Guatemala",
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
    IQ: {
        name: "Iraq",
        length: 23
    },
    IE: {
        name: "Ireland",
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
    MK: {
        name: "North Macedonia",
        length: 19
    },
    MT: {
        name: "Malta",
        length: 31
    },
    MR: {
        name: "Mauritania",
        length: 27
    },
    MU: {
        name: "Mauritius",
        length: 30
    },
    MC: {
        name: "Monaco",
        length: 27
    },
    MD: {
        name: "Moldova",
        length: 24
    },
    ME: {
        name: "Montenegro",
        length: 22
    },
    NL: {
        name: "Netherlands",
        length: 18
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
        name: "Palestinian territories",
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
    RO: {
        name: "Romania",
        length: 24
    },
    LC: {
        name: "Saint Lucia",
        length: 32
    },
    SM: {
        name: "San Marino",
        length: 27
    },
    SA: {
        name: "Saudi Arabia",
        length: 24
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
        name: "Slovakia",
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
    TN: {
        name: "Tunisia",
        length: 24
    },
    TR: {
        name: "Turkey",
        length: 26
    },
    AE: {
        name: "United Arab Emirates",
        length: 23
    },
    GB: {
        name: "United Kingdom",
        length: 22
    },
    VA: {
        name: "Vatican City",
        length: 22
    },
    VG: {
        name: "Virgin Islands, British",
        length: 24
    },
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
    const trimmedIban = iban.replace(/ /g,'');
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
