const states = {
    alabama: "AL",
    alaska: "AK",
    arizona: "AZ",
    arkansas: "AR",
    california: "CA",
    colorado: "CO",
    connecticut: "CT",
    delaware: "DE",
    districtofcolumbia: "DC",
    florida: "FL",
    georgia: "GA",
    hawaii: "HI",
    idaho: "ID",
    illinois: "IL",
    indiana: "IN",
    iowa: "IA",
    kansas: "KS",
    kentucky: "KY",
    louisiana: "LA",
    maine: "ME",
    maryland: "MD",
    massachusetts: "MA",
    michigan: "MI",
    minnesota: "MN",
    mississippi: "MS",
    missouri: "MO",
    montana: "MT",
    nebraska: "NE",
    nevada: "NV",
    newhampshire: "NH",
    newjersey: "NJ",
    newmexico: "NM",
    newyork: "NY",
    northcarolina: "NC",
    northdakota: "ND",
    ohio: "OH",
    oklahoma: "OK",
    oregon: "OR",
    pennsylvania: "PA",
    rhodeisland: "RI",
    southcarolina: "SC",
    southdakota: "SD",
    tennessee: "TN",
    texas: "TX",
    utah: "UT",
    vermont: "VT",
    virginia: "VA",
    washington: "WA",
    westvirginia: "WV",
    wisconsin: "WI",
    wyoming: "WY",
    puertorico: "PR",
    americansamoa: "ASM",
    guam: "GU",
    unitedstatesvirginislands: "USVI",
    al: true,
    ak: true,
    az: true,
    ar: true,
    ca: true,
    co: true,
    ct: true,
    de: true,
    dc: true,
    fl: true,
    ga: true,
    hi: true,
    id: true,
    il: true,
    in: true,
    ia: true,
    ks: true,
    ky: true,
    la: true,
    ma: true,
    mi: true,
    mn: true,
    ms: true,
    mo: true,
    mt: true,
    ne: true,
    nv: true,
    nh: true,
    nj: true,
    nm: true,
    ny: true,
    nc: true,
    nd: true,
    oh: true,
    ok: true,
    or: true,
    pa: true,
    ri: true,
    sc: true,
    sd: true,
    tn: true,
    tx: true,
    ut: true,
    vt: true,
    va: true,
    wa: true,
    wv: true,
    wi: true,
    wy: true,
    pr: true,
    asm: true,
    gu: true,
    usvi: true
}


const noCap = {
    a: true,
    the: true,
    del: true,
    san: true,
    de: true,
    of: true,
    or: true
}


const countries = {
    AF: 'Afghanistan',
    AL: 'Albania',
    DZ: 'Algeria',
    AS: 'American Samoa',
    AD: 'Andorra',
    AO: 'Angola',
    AI: 'Anguilla',
    AQ: 'Antarctica',
    AG: 'Antigua and Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    BS: 'Bahamas',
    BH: 'Bahrain',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Belgium',
    BZ: 'Belize',
    BJ: 'Benin',
    BM: 'Bermuda',
    BT: 'Bhutan',
    BO: 'Bolivia',
    BQ: 'Bonaire, Sint Eustatius and Saba',
    BA: 'Bosnia and Herzegovina',
    BW: 'Botswana',
    BV: 'Bouvet Island',
    BR: 'Brazil',
    IO: 'British Indian Ocean Territory',
    BN: 'Brunei',
    BG: 'Bulgaria',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    CV: 'Cabo Verde',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    KY: 'Cayman Islands',
    CF: 'Cent. Afr. Rep.',
    TD: 'Chad',
    CL: 'Chile',
    CN: 'China',
    CX: 'Christmas Island',
    CC: 'Cocos Islands',
    CO: 'Colombia',
    KM: 'Comoros',
    CD: 'Dem. Rep. of the Congo',
    CG: 'Rep. of the Congo',
    CK: 'Cook Islands',
    CR: 'Costa Rica',
    HR: 'Croatia',
    CU: 'Cuba',
    CW: 'Curaçao',
    CY: 'Cyprus',
    CZ: 'Czechia',
    CI: "Côte d'Ivoire",
    DK: 'Denmark',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Rep.',
    EC: 'Ecuador',
    EG: 'Egypt',
    SV: 'El Salvador',
    GQ: 'Equ. Guinea',
    ER: 'Eritrea',
    EE: 'Estonia',
    SZ: 'Eswatini',
    ET: 'Ethiopia',
    FK: 'Falkland Isl.',
    FO: 'Faroe Isl.',
    FJ: 'Fiji',
    FI: 'Finland',
    FR: 'France',
    GF: 'French Guiana',
    PF: 'French Polynesia',
    TF: 'French Southern Territories',
    GA: 'Gabon',
    GM: 'Gambia',
    GE: 'Georgia',
    DE: 'Germany',
    GH: 'Ghana',
    GI: 'Gibraltar',
    GR: 'Greece',
    GL: 'Greenland',
    GD: 'Grenada',
    GP: 'Guadeloupe',
    GU: 'Guam',
    GT: 'Guatemala',
    GG: 'Guernsey',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HT: 'Haiti',
    HM: 'Heard and McDonald Isl.',
    VA: 'Vatican City',
    HN: 'Honduras',
    HK: 'Hong Kong',
    HU: 'Hungary',
    IS: 'Iceland',
    IN: 'India',
    ID: 'Indonesia',
    IR: 'Iran',
    IQ: 'Iraq',
    IE: 'Ireland',
    IM: 'Isle of Man',
    IL: 'Israel',
    IT: 'Italy',
    JM: 'Jamaica',
    JP: 'Japan',
    JE: 'Jersey',
    JO: 'Jordan',
    KZ: 'Kazakhstan',
    KE: 'Kenya',
    KI: 'Kiribati',
    KP: 'N. Korea',
    KR: 'S. Korea',
    KW: 'Kuwait',
    KG: 'Kyrgyzstan',
    LA: 'Laos',
    LV: 'Latvia',
    LB: 'Lebanon',
    LS: 'Lesotho',
    LR: 'Liberia',
    LY: 'Libya',
    LI: 'Liechtenstein',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    MO: 'Macao',
    MG: 'Madagascar',
    MW: 'Malawi',
    MY: 'Malaysia',
    MV: 'Maldives',
    ML: 'Mali',
    MT: 'Malta',
    MH: 'Marshall Isl.',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MU: 'Mauritius',
    YT: 'Mayotte',
    MX: 'Mexico',
    FM: 'Micronesia',
    MD: 'Moldova',
    MC: 'Monaco',
    MN: 'Mongolia',
    ME: 'Montenegro',
    MS: 'Montserrat',
    MA: 'Morocco',
    MZ: 'Mozambique',
    MM: 'Myanmar',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NL: 'Netherlands',
    NC: 'New Caledonia',
    NZ: 'New Zealand',
    NI: 'Nicaragua',
    NE: 'Niger',
    NG: 'Nigeria',
    NU: 'Niue',
    NF: 'Norfolk Isl.',
    MP: 'Northern Mariana Isl.',
    NO: 'Norway',
    OM: 'Oman',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestine',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PH: 'Philippines',
    PN: 'Pitcairn',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    QA: 'Qatar',
    MK: 'North Macedonia',
    RO: 'Romania',
    RU: 'Russia',
    RW: 'Rwanda',
    RE: 'Réunion',
    BL: 'Saint Barthélemy',
    SH: 'Saint Helena, Ascension and Tristan da Cunha',
    KN: 'Saint Kitts and Nevis',
    LC: 'Saint Lucia',
    MF: 'Saint Martin',
    PM: 'Saint Pierre and Miquelon',
    VC: 'Saint Vincent and the Grenadines',
    WS: 'Samoa',
    SM: 'San Marino',
    ST: 'Sao Tome and Principe',
    SA: 'Saudi Arabia',
    SN: 'Senegal',
    RS: 'Serbia',
    SC: 'Seychelles',
    SL: 'Sierra Leone',
    SG: 'Singapore',
    SX: 'Sint Maarten',
    SK: 'Slovakia',
    SI: 'Slovenia',
    SB: 'Solomon Isl.',
    SO: 'Somalia',
    ZA: 'South Africa',
    GS: 'South Georgia and the South Sandwich Isl.',
    SS: 'South Sudan',
    ES: 'Spain',
    LK: 'Sri Lanka',
    SD: 'Sudan',
    SR: 'Suriname',
    SJ: 'Svalbard and Jan Mayen',
    SE: 'Sweden',
    CH: 'Switzerland',
    SY: 'Syria',
    TW: 'Taiwan',
    TJ: 'Tajikistan',
    TZ: 'Tanzania',
    TH: 'Thailand',
    TL: 'Timor-Leste',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad and Tobago',
    TN: 'Tunisia',
    TR: 'Turkey',
    TM: 'Turkmenistan',
    TC: 'Turks and Caicos Isl.',
    TV: 'Tuvalu',
    UG: 'Uganda',
    UA: 'Ukraine',
    AE: 'United Arab Emirates',
    GB: 'UK',
    UM: 'US Minor Outlying Isl.',
    US: 'USA',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VU: 'Vanuatu',
    VE: 'Venezuela',
    VN: 'Vietnam',
    VG: 'Virgin Isl.',
    VI: 'US Virgin Isl.',
    WF: 'Wallis and Futuna',
    EH: 'Western Sahara',
    YE: 'Yemen',
    ZM: 'Zambia',
    ZW: 'Zimbabwe',
    AX: 'Åland Isl.'
}