<?php
//
// booking prosses done
// 
include('../inc/top.php');
include('../inc/header.php');
$countryArray = array(
  'AD' => array(
    'country_name' => 'ANDORRA',
    'dial_code' => '376'
  ),
  'AE' => array(
    'country_name' => 'UNITED ARAB EMIRATES',
    'dial_code' => '971'
  ),
  'AF' => array(
    'country_name' => 'AFGHANISTAN',
    'dial_code' => '93'
  ),
  'AG' => array(
    'country_name' => 'ANTIGUA AND BARBUDA',
    'dial_code' => '1268'
  ),
  'AI' => array(
    'country_name' => 'ANGUILLA',
    'dial_code' => '1264'
  ),
  'AL' => array(
    'country_name' => 'ALBANIA',
    'dial_code' => '355'
  ),
  'AM' => array(
    'country_name' => 'ARMENIA',
    'dial_code' => '374'
  ),
  'AN' => array(
    'country_name' => 'NETHERLANDS ANTILLES',
    'dial_code' => '599'
  ),
  'AO' => array(
    'country_name' => 'ANGOLA',
    'dial_code' => '244'
  ),
  'AQ' => array(
    'country_name' => 'ANTARCTICA',
    'dial_code' => '672'
  ),
  'AR' => array(
    'country_name' => 'ARGENTINA',
    'dial_code' => '54'
  ),
  'AS' => array(
    'country_name' => 'AMERICAN SAMOA',
    'dial_code' => '1684'
  ),
  'AT' => array(
    'country_name' => 'AUSTRIA',
    'dial_code' => '43'
  ),
  'AU' => array(
    'country_name' => 'AUSTRALIA',
    'dial_code' => '61'
  ),
  'AW' => array(
    'country_name' => 'ARUBA',
    'dial_code' => '297'
  ),
  'AZ' => array(
    'country_name' => 'AZERBAIJAN',
    'dial_code' => '994'
  ),
  'BA' => array(
    'country_name' => 'BOSNIA AND HERZEGOVINA',
    'dial_code' => '387'
  ),
  'BB' => array(
    'country_name' => 'BARBADOS',
    'dial_code' => '1246'
  ),
  'BD' => array(
    'country_name' => 'BANGLADESH',
    'dial_code' => '880'
  ),
  'BE' => array(
    'country_name' => 'BELGIUM',
    'dial_code' => '32'
  ),
  'BF' => array(
    'country_name' => 'BURKINA FASO',
    'dial_code' => '226'
  ),
  'BG' => array(
    'country_name' => 'BULGARIA',
    'dial_code' => '359'
  ),
  'BH' => array(
    'country_name' => 'BAHRAIN',
    'dial_code' => '973'
  ),
  'BI' => array(
    'country_name' => 'BURUNDI',
    'dial_code' => '257'
  ),
  'BJ' => array(
    'country_name' => 'BENIN',
    'dial_code' => '229'
  ),
  'BL' => array(
    'country_name' => 'SAINT BARTHELEMY',
    'dial_code' => '590'
  ),
  'BM' => array(
    'country_name' => 'BERMUDA',
    'dial_code' => '1441'
  ),
  'BN' => array(
    'country_name' => 'BRUNEI DARUSSALAM',
    'dial_code' => '673'
  ),
  'BO' => array(
    'country_name' => 'BOLIVIA',
    'dial_code' => '591'
  ),
  'BR' => array(
    'country_name' => 'BRAZIL',
    'dial_code' => '55'
  ),
  'BS' => array(
    'country_name' => 'BAHAMAS',
    'dial_code' => '1242'
  ),
  'BT' => array(
    'country_name' => 'BHUTAN',
    'dial_code' => '975'
  ),
  'BW' => array(
    'country_name' => 'BOTSWANA',
    'dial_code' => '267'
  ),
  'BY' => array(
    'country_name' => 'BELARUS',
    'dial_code' => '375'
  ),
  'BZ' => array(
    'country_name' => 'BELIZE',
    'dial_code' => '501'
  ),
  'CA' => array(
    'country_name' => 'CANADA',
    'dial_code' => '1'
  ),
  'CC' => array(
    'country_name' => 'COCOS (KEELING) ISLANDS',
    'dial_code' => '61'
  ),
  'CD' => array(
    'country_name' => 'CONGO, THE DEMOCRATIC REPUBLIC OF THE',
    'dial_code' => '243'
  ),
  'CF' => array(
    'country_name' => 'CENTRAL AFRICAN REPUBLIC',
    'dial_code' => '236'
  ),
  'CG' => array(
    'country_name' => 'CONGO',
    'dial_code' => '242'
  ),
  'CH' => array(
    'country_name' => 'SWITZERLAND',
    'dial_code' => '41'
  ),
  'CI' => array(
    'country_name' => 'COTE D IVOIRE',
    'dial_code' => '225'
  ),
  'CK' => array(
    'country_name' => 'COOK ISLANDS',
    'dial_code' => '682'
  ),
  'CL' => array(
    'country_name' => 'CHILE',
    'dial_code' => '56'
  ),
  'CM' => array(
    'country_name' => 'CAMEROON',
    'dial_code' => '237'
  ),
  'CN' => array(
    'country_name' => 'CHINA',
    'dial_code' => '86'
  ),
  'CO' => array(
    'country_name' => 'COLOMBIA',
    'dial_code' => '57'
  ),
  'CR' => array(
    'country_name' => 'COSTA RICA',
    'dial_code' => '506'
  ),
  'CU' => array(
    'country_name' => 'CUBA',
    'dial_code' => '53'
  ),
  'CV' => array(
    'country_name' => 'CAPE VERDE',
    'dial_code' => '238'
  ),
  'CX' => array(
    'country_name' => 'CHRISTMAS ISLAND',
    'dial_code' => '61'
  ),
  'CY' => array(
    'country_name' => 'CYPRUS',
    'dial_code' => '357'
  ),
  'CZ' => array(
    'country_name' => 'CZECH REPUBLIC',
    'dial_code' => '420'
  ),
  'DE' => array(
    'country_name' => 'GERMANY',
    'dial_code' => '49'
  ),
  'DJ' => array(
    'country_name' => 'DJIBOUTI',
    'dial_code' => '253'
  ),
  'DK' => array(
    'country_name' => 'DENMARK',
    'dial_code' => '45'
  ),
  'DM' => array(
    'country_name' => 'DOMINICA',
    'dial_code' => '1767'
  ),
  'DO' => array(
    'country_name' => 'DOMINICAN REPUBLIC',
    'dial_code' => '1809'
  ),
  'DZ' => array(
    'country_name' => 'ALGERIA',
    'dial_code' => '213'
  ),
  'EC' => array(
    'country_name' => 'ECUADOR',
    'dial_code' => '593'
  ),
  'EE' => array(
    'country_name' => 'ESTONIA',
    'dial_code' => '372'
  ),
  'EG' => array(
    'country_name' => 'EGYPT',
    'dial_code' => '20'
  ),
  'ER' => array(
    'country_name' => 'ERITREA',
    'dial_code' => '291'
  ),
  'ES' => array(
    'country_name' => 'SPAIN',
    'dial_code' => '34'
  ),
  'ET' => array(
    'country_name' => 'ETHIOPIA',
    'dial_code' => '251'
  ),
  'FI' => array(
    'country_name' => 'FINLAND',
    'dial_code' => '358'
  ),
  'FJ' => array(
    'country_name' => 'FIJI',
    'dial_code' => '679'
  ),
  'FK' => array(
    'country_name' => 'FALKLAND ISLANDS (MALVINAS)',
    'dial_code' => '500'
  ),
  'FM' => array(
    'country_name' => 'MICRONESIA, FEDERATED STATES OF',
    'dial_code' => '691'
  ),
  'FO' => array(
    'country_name' => 'FAROE ISLANDS',
    'dial_code' => '298'
  ),
  'FR' => array(
    'country_name' => 'FRANCE',
    'dial_code' => '33'
  ),
  'GA' => array(
    'country_name' => 'GABON',
    'dial_code' => '241'
  ),
  'GB' => array(
    'country_name' => 'UNITED KINGDOM',
    'dial_code' => '44'
  ),
  'GD' => array(
    'country_name' => 'GRENADA',
    'dial_code' => '1473'
  ),
  'GE' => array(
    'country_name' => 'GEORGIA',
    'dial_code' => '995'
  ),
  'GH' => array(
    'country_name' => 'GHANA',
    'dial_code' => '233'
  ),
  'GI' => array(
    'country_name' => 'GIBRALTAR',
    'dial_code' => '350'
  ),
  'GL' => array(
    'country_name' => 'GREENLAND',
    'dial_code' => '299'
  ),
  'GM' => array(
    'country_name' => 'GAMBIA',
    'dial_code' => '220'
  ),
  'GN' => array(
    'country_name' => 'GUINEA',
    'dial_code' => '224'
  ),
  'GQ' => array(
    'country_name' => 'EQUATORIAL GUINEA',
    'dial_code' => '240'
  ),
  'GR' => array(
    'country_name' => 'GREECE',
    'dial_code' => '30'
  ),
  'GT' => array(
    'country_name' => 'GUATEMALA',
    'dial_code' => '502'
  ),
  'GU' => array(
    'country_name' => 'GUAM',
    'dial_code' => '1671'
  ),
  'GW' => array(
    'country_name' => 'GUINEA-BISSAU',
    'dial_code' => '245'
  ),
  'GY' => array(
    'country_name' => 'GUYANA',
    'dial_code' => '592'
  ),
  'HK' => array(
    'country_name' => 'HONG KONG',
    'dial_code' => '852'
  ),
  'HN' => array(
    'country_name' => 'HONDURAS',
    'dial_code' => '504'
  ),
  'HR' => array(
    'country_name' => 'CROATIA',
    'dial_code' => '385'
  ),
  'HT' => array(
    'country_name' => 'HAITI',
    'dial_code' => '509'
  ),
  'HU' => array(
    'country_name' => 'HUNGARY',
    'dial_code' => '36'
  ),
  'ID' => array(
    'country_name' => 'INDONESIA',
    'dial_code' => '62'
  ),
  'IE' => array(
    'country_name' => 'IRELAND',
    'dial_code' => '353'
  ),
  'IL' => array(
    'country_name' => 'ISRAEL',
    'dial_code' => '972'
  ),
  'IM' => array(
    'country_name' => 'ISLE OF MAN',
    'dial_code' => '44'
  ),
  'IN' => array(
    'country_name' => 'INDIA',
    'dial_code' => '91'
  ),
  'IQ' => array(
    'country_name' => 'IRAQ',
    'dial_code' => '964'
  ),
  'IR' => array(
    'country_name' => 'IRAN, ISLAMIC REPUBLIC OF',
    'dial_code' => '98'
  ),
  'IS' => array(
    'country_name' => 'ICELAND',
    'dial_code' => '354'
  ),
  'IT' => array(
    'country_name' => 'ITALY',
    'dial_code' => '39'
  ),
  'JM' => array(
    'country_name' => 'JAMAICA',
    'dial_code' => '1876'
  ),
  'JO' => array(
    'country_name' => 'JORDAN',
    'dial_code' => '962'
  ),
  'JP' => array(
    'country_name' => 'JAPAN',
    'dial_code' => '81'
  ),
  'KE' => array(
    'country_name' => 'KENYA',
    'dial_code' => '254'
  ),
  'KG' => array(
    'country_name' => 'KYRGYZSTAN',
    'dial_code' => '996'
  ),
  'KH' => array(
    'country_name' => 'CAMBODIA',
    'dial_code' => '855'
  ),
  'KI' => array(
    'country_name' => 'KIRIBATI',
    'dial_code' => '686'
  ),
  'KM' => array(
    'country_name' => 'COMOROS',
    'dial_code' => '269'
  ),
  'KN' => array(
    'country_name' => 'SAINT KITTS AND NEVIS',
    'dial_code' => '1869'
  ),
  'KP' => array(
    'country_name' => 'KOREA DEMOCRATIC PEOPLES REPUBLIC OF',
    'dial_code' => '850'
  ),
  'KR' => array(
    'country_name' => 'KOREA REPUBLIC OF',
    'dial_code' => '82'
  ),
  'KW' => array(
    'country_name' => 'KUWAIT',
    'dial_code' => '965'
  ),
  'KY' => array(
    'country_name' => 'CAYMAN ISLANDS',
    'dial_code' => '1345'
  ),
  'KZ' => array(
    'country_name' => 'KAZAKSTAN',
    'dial_code' => '7'
  ),
  'LA' => array(
    'country_name' => 'LAO PEOPLES DEMOCRATIC REPUBLIC',
    'dial_code' => '856'
  ),
  'LB' => array(
    'country_name' => 'LEBANON',
    'dial_code' => '961'
  ),
  'LC' => array(
    'country_name' => 'SAINT LUCIA',
    'dial_code' => '1758'
  ),
  'LI' => array(
    'country_name' => 'LIECHTENSTEIN',
    'dial_code' => '423'
  ),
  'LK' => array(
    'country_name' => 'SRI LANKA',
    'dial_code' => '94'
  ),
  'LR' => array(
    'country_name' => 'LIBERIA',
    'dial_code' => '231'
  ),
  'LS' => array(
    'country_name' => 'LESOTHO',
    'dial_code' => '266'
  ),
  'LT' => array(
    'country_name' => 'LITHUANIA',
    'dial_code' => '370'
  ),
  'LU' => array(
    'country_name' => 'LUXEMBOURG',
    'dial_code' => '352'
  ),
  'LV' => array(
    'country_name' => 'LATVIA',
    'dial_code' => '371'
  ),
  'LY' => array(
    'country_name' => 'LIBYAN ARAB JAMAHIRIYA',
    'dial_code' => '218'
  ),
  'MA' => array(
    'country_name' => 'MOROCCO',
    'dial_code' => '212'
  ),
  'MC' => array(
    'country_name' => 'MONACO',
    'dial_code' => '377'
  ),
  'MD' => array(
    'country_name' => 'MOLDOVA, REPUBLIC OF',
    'dial_code' => '373'
  ),
  'ME' => array(
    'country_name' => 'MONTENEGRO',
    'dial_code' => '382'
  ),
  'MF' => array(
    'country_name' => 'SAINT MARTIN',
    'dial_code' => '1599'
  ),
  'MG' => array(
    'country_name' => 'MADAGASCAR',
    'dial_code' => '261'
  ),
  'MH' => array(
    'country_name' => 'MARSHALL ISLANDS',
    'dial_code' => '692'
  ),
  'MK' => array(
    'country_name' => 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF',
    'dial_code' => '389'
  ),
  'ML' => array(
    'country_name' => 'MALI',
    'dial_code' => '223'
  ),
  'MM' => array(
    'country_name' => 'MYANMAR',
    'dial_code' => '95'
  ),
  'MN' => array(
    'country_name' => 'MONGOLIA',
    'dial_code' => '976'
  ),
  'MO' => array(
    'country_name' => 'MACAU',
    'dial_code' => '853'
  ),
  'MP' => array(
    'country_name' => 'NORTHERN MARIANA ISLANDS',
    'dial_code' => '1670'
  ),
  'MR' => array(
    'country_name' => 'MAURITANIA',
    'dial_code' => '222'
  ),
  'MS' => array(
    'country_name' => 'MONTSERRAT',
    'dial_code' => '1664'
  ),
  'MT' => array(
    'country_name' => 'MALTA',
    'dial_code' => '356'
  ),
  'MU' => array(
    'country_name' => 'MAURITIUS',
    'dial_code' => '230'
  ),
  'MV' => array(
    'country_name' => 'MALDIVES',
    'dial_code' => '960'
  ),
  'MW' => array(
    'country_name' => 'MALAWI',
    'dial_code' => '265'
  ),
  'MX' => array(
    'country_name' => 'MEXICO',
    'dial_code' => '52'
  ),
  'MY' => array(
    'country_name' => 'MALAYSIA',
    'dial_code' => '60'
  ),
  'MZ' => array(
    'country_name' => 'MOZAMBIQUE',
    'dial_code' => '258'
  ),
  'NA' => array(
    'country_name' => 'NAMIBIA',
    'dial_code' => '264'
  ),
  'NC' => array(
    'country_name' => 'NEW CALEDONIA',
    'dial_code' => '687'
  ),
  'NE' => array(
    'country_name' => 'NIGER',
    'dial_code' => '227'
  ),
  'NG' => array(
    'country_name' => 'NIGERIA',
    'dial_code' => '234'
  ),
  'NI' => array(
    'country_name' => 'NICARAGUA',
    'dial_code' => '505'
  ),
  'NL' => array(
    'country_name' => 'NETHERLANDS',
    'dial_code' => '31'
  ),
  'NO' => array(
    'country_name' => 'NORWAY',
    'dial_code' => '47'
  ),
  'NP' => array(
    'country_name' => 'NEPAL',
    'dial_code' => '977'
  ),
  'NR' => array(
    'country_name' => 'NAURU',
    'dial_code' => '674'
  ),
  'NU' => array(
    'country_name' => 'NIUE',
    'dial_code' => '683'
  ),
  'NZ' => array(
    'country_name' => 'NEW ZEALAND',
    'dial_code' => '64'
  ),
  'OM' => array(
    'country_name' => 'OMAN',
    'dial_code' => '968'
  ),
  'PA' => array(
    'country_name' => 'PANAMA',
    'dial_code' => '507'
  ),
  'PE' => array(
    'country_name' => 'PERU',
    'dial_code' => '51'
  ),
  'PF' => array(
    'country_name' => 'FRENCH POLYNESIA',
    'dial_code' => '689'
  ),
  'PG' => array(
    'country_name' => 'PAPUA NEW GUINEA',
    'dial_code' => '675'
  ),
  'PH' => array(
    'country_name' => 'PHILIPPINES',
    'dial_code' => '63'
  ),
  'PK' => array(
    'country_name' => 'PAKISTAN',
    'dial_code' => '92'
  ),
  'PL' => array(
    'country_name' => 'POLAND',
    'dial_code' => '48'
  ),
  'PM' => array(
    'country_name' => 'SAINT PIERRE AND MIQUELON',
    'dial_code' => '508'
  ),
  'PN' => array(
    'country_name' => 'PITCAIRN',
    'dial_code' => '870'
  ),
  'PR' => array(
    'country_name' => 'PUERTO RICO',
    'dial_code' => '1'
  ),
  'PT' => array(
    'country_name' => 'PORTUGAL',
    'dial_code' => '351'
  ),
  'PW' => array(
    'country_name' => 'PALAU',
    'dial_code' => '680'
  ),
  'PY' => array(
    'country_name' => 'PARAGUAY',
    'dial_code' => '595'
  ),
  'QA' => array(
    'country_name' => 'QATAR',
    'dial_code' => '974'
  ),
  'RO' => array(
    'country_name' => 'ROMANIA',
    'dial_code' => '40'
  ),
  'RS' => array(
    'country_name' => 'SERBIA',
    'dial_code' => '381'
  ),
  'RU' => array(
    'country_name' => 'RUSSIAN FEDERATION',
    'dial_code' => '7'
  ),
  'RW' => array(
    'country_name' => 'RWANDA',
    'dial_code' => '250'
  ),
  'SA' => array(
    'country_name' => 'SAUDI ARABIA',
    'dial_code' => '966'
  ),
  'SB' => array(
    'country_name' => 'SOLOMON ISLANDS',
    'dial_code' => '677'
  ),
  'SC' => array(
    'country_name' => 'SEYCHELLES',
    'dial_code' => '248'
  ),
  'SD' => array(
    'country_name' => 'SUDAN',
    'dial_code' => '249'
  ),
  'SE' => array(
    'country_name' => 'SWEDEN',
    'dial_code' => '46'
  ),
  'SG' => array(
    'country_name' => 'SINGAPORE',
    'dial_code' => '65'
  ),
  'SH' => array(
    'country_name' => 'SAINT HELENA',
    'dial_code' => '290'
  ),
  'SI' => array(
    'country_name' => 'SLOVENIA',
    'dial_code' => '386'
  ),
  'SK' => array(
    'country_name' => 'SLOVAKIA',
    'dial_code' => '421'
  ),
  'SL' => array(
    'country_name' => 'SIERRA LEONE',
    'dial_code' => '232'
  ),
  'SM' => array(
    'country_name' => 'SAN MARINO',
    'dial_code' => '378'
  ),
  'SN' => array(
    'country_name' => 'SENEGAL',
    'dial_code' => '221'
  ),
  'SO' => array(
    'country_name' => 'SOMALIA',
    'dial_code' => '252'
  ),
  'SR' => array(
    'country_name' => 'SURINAME',
    'dial_code' => '597'
  ),
  'ST' => array(
    'country_name' => 'SAO TOME AND PRINCIPE',
    'dial_code' => '239'
  ),
  'SV' => array(
    'country_name' => 'EL SALVADOR',
    'dial_code' => '503'
  ),
  'SY' => array(
    'country_name' => 'SYRIAN ARAB REPUBLIC',
    'dial_code' => '963'
  ),
  'SZ' => array(
    'country_name' => 'SWAZILAND',
    'dial_code' => '268'
  ),
  'TC' => array(
    'country_name' => 'TURKS AND CAICOS ISLANDS',
    'dial_code' => '1649'
  ),
  'TD' => array(
    'country_name' => 'CHAD',
    'dial_code' => '235'
  ),
  'TG' => array(
    'country_name' => 'TOGO',
    'dial_code' => '228'
  ),
  'TH' => array(
    'country_name' => 'THAILAND',
    'dial_code' => '66'
  ),
  'TJ' => array(
    'country_name' => 'TAJIKISTAN',
    'dial_code' => '992'
  ),
  'TK' => array(
    'country_name' => 'TOKELAU',
    'dial_code' => '690'
  ),
  'TL' => array(
    'country_name' => 'TIMOR-LESTE',
    'dial_code' => '670'
  ),
  'TM' => array(
    'country_name' => 'TURKMENISTAN',
    'dial_code' => '993'
  ),
  'TN' => array(
    'country_name' => 'TUNISIA',
    'dial_code' => '216'
  ),
  'TO' => array(
    'country_name' => 'TONGA',
    'dial_code' => '676'
  ),
  'TR' => array(
    'country_name' => 'TURKEY',
    'dial_code' => '90'
  ),
  'TT' => array(
    'country_name' => 'TRINIDAD AND TOBAGO',
    'dial_code' => '1868'
  ),
  'TV' => array(
    'country_name' => 'TUVALU',
    'dial_code' => '688'
  ),
  'TW' => array(
    'country_name' => 'TAIWAN, PROVINCE OF CHINA',
    'dial_code' => '886'
  ),
  'TZ' => array(
    'country_name' => 'TANZANIA, UNITED REPUBLIC OF',
    'dial_code' => '255'
  ),
  'UA' => array(
    'country_name' => 'UKRAINE',
    'dial_code' => '380'
  ),
  'UG' => array(
    'country_name' => 'UGANDA',
    'dial_code' => '256'
  ),
  'US' => array(
    'country_name' => 'UNITED STATES',
    'dial_code' => '1'
  ),
  'UY' => array(
    'country_name' => 'URUGUAY',
    'dial_code' => '598'
  ),
  'UZ' => array(
    'country_name' => 'UZBEKISTAN',
    'dial_code' => '998'
  ),
  'VA' => array(
    'country_name' => 'HOLY SEE (VATICAN CITY STATE)',
    'dial_code' => '39'
  ),
  'VC' => array(
    'country_name' => 'SAINT VINCENT AND THE GRENADINES',
    'dial_code' => '1784'
  ),
  'VE' => array(
    'country_name' => 'VENEZUELA',
    'dial_code' => '58'
  ),
  'VG' => array(
    'country_name' => 'VIRGIN ISLANDS, BRITISH',
    'dial_code' => '1284'
  ),
  'VI' => array(
    'country_name' => 'VIRGIN ISLANDS, U.S.',
    'dial_code' => '1340'
  ),
  'VN' => array(
    'country_name' => 'VIET NAM',
    'dial_code' => '84'
  ),
  'VU' => array(
    'country_name' => 'VANUATU',
    'dial_code' => '678'
  ),
  'WF' => array(
    'country_name' => 'WALLIS AND FUTUNA',
    'dial_code' => '681'
  ),
  'WS' => array(
    'country_name' => 'SAMOA',
    'dial_code' => '685'
  ),
  'XK' => array(
    'country_name' => 'KOSOVO',
    'dial_code' => '381'
  ),
  'YE' => array(
    'country_name' => 'YEMEN',
    'dial_code' => '967'
  ),
  'YT' => array(
    'country_name' => 'MAYOTTE',
    'dial_code' => '262'
  ),
  'ZA' => array(
    'country_name' => 'SOUTH AFRICA',
    'dial_code' => '27'
  ),
  'ZM' => array(
    'country_name' => 'ZAMBIA',
    'dial_code' => '260'
  ),
  'ZW' => array(
    'country_name' => 'ZIMBABWE',
    'dial_code' => '263'
  )
);
print "<div class='bar' > " . $title . " </div>";
?>
<center>
<?php
//	print_r( $_POST );
//connection, auth
include './auth.php';

//variables 
//        $dateFrom = $_POST['date'];
//        $dateTo = date('Y-m-d', strtotime($_POST['date'] . ' + ' . $_POST['hdur'] .' days'));

$dateFrom = date('Y-m-d', strtotime($_POST['date-in']));
$dateTo = date('Y-m-d', strtotime($_POST['date-out']));
if (((int) $_POST['hdura']) < ((int) $_POST['hdurr']) ) $_POST['hdura'] = $_POST['hdurr'] ; // if big people < rooms then big people = rooms 

$hotelId = (int) $_POST['HotelID'];

$people = ((int) $_POST['hdurc']) + ((int) $_POST['hdura']);
$rooms = ((int) $_POST['hdurr']);
//xml post structure

$totalPrice = (float) $_POST['totalPrice'];
$roomID = $_POST['roomID'];
$ratePlanID = $_POST['ratePlanID'];
$quantity = $_POST['quantity'];
$totalPrice = $_POST['totalPrice'];
$firstname =  $_POST['firstname'];
$surname =  $_POST['surname'];
$email =  $_POST['email'];
$cityName = $_POST['cityName'];
$countryName =  $_POST['countryName'];
$ccType = $_POST['cctype'];
$ccNumber = preg_replace('/\D/', '', $_POST['ccnumber']);
$ccVerify = $_POST['cvc'];
$ccHolderFirstName = $_POST['ccHolderFirstName'];
$ccHolderLastName = $_POST['ccHolderLastName'];
$ccExpMonth = $_POST['ccexp_month'];
$ccExpYear = $_POST['ccexp_year'];
$AvailBookingToken = $_POST['AvailBookingToken'];
$number = preg_replace( '/(0|\+?\d{2})(\d{7,8})/', '$2', $_POST['phone']);
$internationalPrefix = '00' . $countryArray[ strtoupper($_POST['countryName'])]['dial_code'] ;
$zipCode = $_POST['zipCode'];
// $_POST['pay_at'] == "Pay Now" ? $sellingMethod = "ME" : $sellingMethod = "DA" ;
$_POST['sellingMethod'] == "ME" ? $sellingMethod = "ME" : $sellingMethod = "DA" ;

include './template.php';

// print_r( $template[1] );
$xml_post_string = str_replace(Array("  ","   ","    ","     ","      ","       ","        ","\t","\n")," ",$template['lateroom_booking']); // remove whitespace from XML
$xml_post_string = str_replace(Array("  ","   ","    ")," ",$xml_post_string ); // remove remaning whitespace from XML

$xml_headers = array(
  "Content-type: text/xml;charset=\"utf-8\"",
  "Accept: text/xml",
  "Pragma: no-cache",
  "SOAPAction: ". $laterooms_booking_url , 
  "Content-length: ".strlen($xml_post_string),
); 

$url = $soapUrlBooking ;

// PHP cURL  for https connection with auth
$ch = curl_init();
// curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//curl_setopt($ch, CURLOPT_USERPWD, $soapUser.":".$soapPassword); // username and password - declared in auth.php
//curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
//curl_setopt($ch, CURLOPT_TIMEOUT, 10);
//curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $xml_post_string); // the SOAP request
//curl_setopt($ch, CURLOPT_HTTPHEADER, $xml_headers);
curl_setopt($ch, CURLOPT_HEADER,true); 

// converting
$response = curl_exec($ch); 

// print_r($response);
curl_close($ch);

// converting
$response1 = str_replace("<soap:Body>","",$response);
$response2 = str_replace("</soap:Body>","",$response1);

$response_array = explode("<soap:Envelope",$response2 );
 print '<!-- back from laterooms '. print_r($response , 1 ) . ' -->';

$xml = simplexml_load_string("<soap:Envelope". $response_array[1]);

// print_r($response2); 
// $xml = simplexml_load_string($response2);
$array = json_decode(json_encode((array) $xml), 1);

// print_r($array);
//
// on page :
if ($array['XHI_HotelResRS']['@attributes']['reservationID']) {
  print 'All done Thank You for Booking with Essential Hotels. Your Reservation ID is ' . $array['XHI_HotelResRS']['@attributes']['reservationID'];

  $subject = 'Your stay at the '. $_POST['hotel'] .' details.';

  $headers = "From: " . $email_booking_to . "\r\n";
  $headers .= "Reply-To: ". $email_booking_to . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = '<html><head><meta charset="UTF-8"></head><body>';
  $message .= '<center><h3>I am pleased to confirm your reservation<br /></h3></center>';
  $message .= '<center><h3>'. strip_tags($_POST['status']).'<br /></h3></center>';
  $message .= '<center><h3>Please Check the details below and let us know if anything is incorrect<br /></h3></center>';
  $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
  $message .= "<tr><td><strong>Name of Hotel</strong> </td><td>" . strip_tags($_POST['hotel']) . "</td></tr>";
  $message .= "<tr><td><strong>Booking made under the Name</strong> </td><td>" . $array['XHI_HotelResRS']['BookingGuestDetails']['@attributes']['name'] . ' ' . $array['XHI_HotelResRS']['BookingGuestDetails']['@attributes']['surname'] . "</td></tr>";
  $message .= "<tr><td><strong>Staying</strong> </td><td>" . $_POST['date-in'] . ' to the ' . $_POST['date-out'] . "</td></tr>";
  $message .= "<tr><td><strong>Name of Hotel</strong> </td><td>" . strip_tags($_POST['hotel']) . "</td></tr>";
  $message .= "<tr><td><strong>Booking ID</strong> </td><td>" . $array['XHI_HotelResRS']['@attributes']['reservationID'] . "</td></tr>";
  $message .= "<tr><td><strong>Cost</strong> </td><td> £ " . number_format($array['XHI_HotelResRS']['BookingReservationDetails']['@attributes']['totalPrice'] , 2) . "</td></tr>";
  $message .= "<tr><td><strong>Essential Rewards</strong></td><td>As a Rewards member there’s still time to be rewarded for your upcoming stay. 
    Please reply to this email with your membership details. If you’re not already a Member, enrol today to begin earning High Street shopping vouchers.</td></tr>";
  $message .= "<tr><td><strong>Payment Method</strong></td><td>Upon departure. The credit/debit card details that you have supplied have guaranteed your reservation; no payment has been deducted from this card.</td></tr>";
  $message .= "<tr><td><strong>Cancellation Policy</strong></td><td>" . $array['XHI_HotelResRS']['CancellationPolicy']['Clause']. "</td></tr>";
  $message .= "</table>";
  $message .= '<center><h3>Thank you for booking with essentialhotels; we hope you have an enjoyable stay and would be delighted to <br />
    assist with any future bookings (UK or worldwide).  <br />
    Kind regards <br />
    Marjorie Burrington | Director of Operations<br />
    Essential Hotels<br />
    Willowmead House, Mill Lane, Padworth RG7 4JX<br /></h3></center>';
  $message .= "</body></html>";

  mail($_POST['email'], $subject, $message, $headers);
} else {
  print 'We cannot confirm this booking at the moment. Please contact us directly by phone or by email:<a href="tel:01189714700">0118 971 4700</a> or by <a href="nick@essential-hotels.com" >Email</a> or Online';

  $subject = 'Your stay at the '. $_POST['hotel'] .' details.';

  $headers = "From: " . $email_booking_to . "\r\n";
  $headers .= "Reply-To: ". $email_booking_to . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = '<html><body>';
  $message .= '<center><h3>Contact Us Direct by Phone: <a href="tel:01189714700" >0118 971 4700</a> <br /> or replay to this email</h3></center>';
  $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
  $message .= "<tr><td><strong>Name of Hotel</strong> </td><td>" . strip_tags($_POST['hotel']) . "</td></tr>";
  $message .= "<tr><td><strong>Cost</strong> </td><td>" . $array['XHI_HotelResRS']['BookingReservationDetails']['@attributes']['totalPrice'] . "</td></tr>";
  $message .= "<tr><td><strong>Essential Rewards</strong></td><td>As a Rewards member there’s still time to be rewarded for your upcoming stay. 
    Please reply to this email with your membership details. If you’re not already a Member, enrol today to begin earning High Street shopping vouchers.</td></tr>";
  $message .= "<tr><td><strong>Payment Method</strong></td><td>Upon departure. The credit/debit card details that you have supplied have guaranteed your reservation; no payment has been deducted from this card.</td></tr>";
  $message .= "</table>";
  $message .= '<center><h3>Thank you for booking with essentialhotels; we hope you have an enjoyable stay and would be delighted to </br>
    assist with any future bookings (UK or worldwide).  <br />
    Kind regards <br />
    Marjorie Burrington | Director of Operations<br />
    Essential Hotels<br />
    Willowmead House, Mill Lane, Padworth RG7 4JX<br /></h3></center>';
  $message .= "</body></html>";

  mail($_POST['email'], $subject, $message, $headers);
}
?></center>
<!-- 
<?php 
if (( isset($_POST['debug']) && $_POST['debug'] == 1) || ( isset($_GET['debug']) && $_GET['debug'] == 1) || ( isset($_SESSION['debug']) && $_SESSION['debug'] == 1 ) ) {
  // debug
  print_r($array['XHI_HotelResRS']);
  print_r($_POST);
  print ($message);
}
//
// strip card details
//
// unset($array['XHI_HotelResRS']['BookingReservationDetails']['GuaranteeDetails']);
// unset($_POST['ccHolderFirstName']);
// unset($_POST['ccHolderLastName']);
// unset($_POST['ccnumber']);
// unset($_POST['cctype']);
// unset($_POST['ccexp_month']);
// unset($_POST['ccexp_year']);
// unset($_POST['ccexp']);
// unset($_POST['cvc']);


if ($array['XHI_HotelResRS']['@attributes']['success'] == "true") {

  $subject = 'New Booking at the ' . $_POST['hotel'];
  $message = $_POST['firstname'].' '.$_POST['surname'] . ' has booked at the ' .$_POST['hotel'] ."
    staying on the " . $_POST['date-in'] . ' until ' . $_POST['date-out'] . ' 
    there email is '. $_POST['email']. '
    and you can phone them on ' . $_POST['phone']
    . print_r($_POST,1).'
    ' . print_r($array,1) ;
} else {
  $subject = 'Booking falled for the ' . $_POST['hotel'];
  $message = $_POST['firstname'].' '.$_POST['surname'] . ' has booked at the ' .$_POST['hotel'] ."
    staying on the " . $_POST['date-in'] . ' until ' . $_POST['date-out'] . ' 
    there email is '. $_POST['email']. '
    and you can phone them on ' . $_POST['phone'] .'
    ' . print_r($_POST,1) . '
    ' . print_r($array,1) ;
}


$headers = 'From: site@essentialhotels.co.uk' . "\r\n" .
  'Reply-To: site@essentialhotels.co.uk' . "\r\n" .
  'X-Mailer: PHP/' . phpversion();
// 
// email to essenial
//
mail($email_booking_to, $subject, $message, $headers);

?>
-->

</body>
</html><?php
$fp = fopen("./.ht.booking", "a");
fwrite($fp, json_encode(Array("from-client" => $_POST,"XML Header" => $xml_headers,"Posted to URL" => $url,"Raw posted XML" => $xml_post_string, "from-venere" => $array, "Raw" => $response , )));
fwrite($fp, PHP_EOL);
fclose($fp);

/*
 *
 * 
 <!-- $array['XHI_HotelResRS']['@attributes']['reservationID'] 
 $array['XHI_HotelResRS']['BookingReservationDetails']['@attributes']['start']
 $array['XHI_HotelResRS']['BookingReservationDetails']['@attributes']['numNights']
 $array['XHI_HotelResRS']['BookingReservationDetails']['@attributes']['totalPrice'] 
 $array['XHI_HotelResRS']['BookingReservationDetails']['@attributes']
 $array['XHI_HotelResRS']['BookingReservationDetails']['@attributes']
 $array['XHI_HotelResRS']['BookingGuestDetails']['@attributes']['email']
Array
(
  [@attributes] => Array
  (
    [reservationID] => 19960952
  )

  [BookingReservationDetails] => Array
  (
    [@attributes] => Array
    (
      [start] => 2014-02-21
      [end] => 2014-02-22
      [totalPrice] => 371.0
      [currencyCode] => GBP
      [numNights] => 1
      [averageDailyRates] => true
      [propertyID] => 27625
    )

    [GuaranteeDetails] => Array
    (
      [@attributes] => Array
      (
        [ccNumber] => 4602020220202000
      )

    )

    [BookingRoomsDetails] => Array
    (
      [@attributes] => Array
      (
        [size] => 1
      )

      [BookingRoomDetails] => Array
      (
        [@attributes] => Array
        (
          [roomID] => 70126
          [roomName] => Executive Room
          [quantity] => 1
          [price] => 371.0
        )

      )

    )

  )

  [BookingGuestDetails] => Array
  (
    [@attributes] => Array
    (
      [guestID] => 14644104
      [name] => debug
      [surname] => Hitchins
      [city] => penzance
      [email] => marcus7777@gmail.com
      [countryCode] => GB
      [zipCode] => TR18 4DZ
      [langID] => en
    )

    [0] => Array
    (
      [@attributes] => Array
      (
        [number] => 7541386427
        [internationalPrefix] => 0044
      )

    )

  )

  [CancellationPolicy] => Array
  (
    [Clause] => In order to provide our customers with very competitive rates, Venere may offer some room types whose payment cannot be refunded. The room you have booked is not refundable, this means that in case of cancellations or no-shows you will be charged the total amount of the reservation.
  )

)
Array
(
  [HotelID] => 27625
  [roomID] => 70126
  [totalPrice] => 371.0
  [ratePlanID] => 7341
  [quantity] => 1
  [date-in] => 2014-02-21
  [date-out] => 2014-02-22
  [pay_at] => 
  [AvailBookingToken] => ZfU/gnVo/g+N+z3OKHDyQWkRq/vfIzpP9Ze65GDPG7Jr/5wQlGX28Cvtc20a/PVrKtXembyk0vOj/ri48Pn46nQsAqYuYGcfvtKE0H6+4M9HYRHe/DQZrlAzUw0GNa/TZ0RHkQ8v6B2fK8ypt7+JpUN8S6GL4h+AZV5km6vaeLwykwhYa918bHru/sbGS1SEy2FZlaxKM89OHzUrVkAGz62fXzNEFUqUZ1aPOAwptrJk3jiKDykwLLEkJ1xHMk5kDoGo7kT9UBMWHxSF7YODNkin0yH8BTUGfivlG7HkOC5AdRCXmQJPotA+dlObU5DkJR789ccmrObTSUE5fLvLOGRXqQbgQaUUa8ZOvPC4vQi3RBkLcuRbvZOxgGOW9XFYYHF2EGuGaCHKAvxKIaUMoqiGw/vXDWSemPipyP62+u8Xzu5ijnAR7EY6yGXoed/jzbJ+zpr4WNr53gF7WVhCGE9IqP4aZiqfdEnZMOdUBYgzUm+CM1DdLSlp3BFTIoOiUdxA0bvpdryrYUGBh1PqQEv6fvNAvuCAyaP0EdW9iYNCW+QWU6UvRn3h75XSFiqwBROcappkhpu7qK6Wt4Rk9ieOvj/iocIlkLModWV+UOtghD/X0ptm4dT4S1+tpufAb8l4f4s9eQFR3EDRu+l2vGdt2RqmbkA8XwuNpP23jVfbYLmbXgv+Tp+wjuRuOoBnGSk/cwDMBK1p/8nP0A1SL4OGDZj6NoSEZWudzadVQZn2+AWw21DHrp6FncjU0oI+1ddMrVcO+KDEI5ZpyL1Wy5aCtSBWOGa9nWW4IqoEGhZHYRHe/DQZrlAzUw0GNa/T1VXCjDGuzQc8GWJ6kqEtEtEl0HpPO2ylN3PO1MiomNQTgVGWq58foCdvVqbYA5cYnyvMqbe/iaXg218Crok9Q7vJTlUjtGPHw8jrlBr+t787KdKVJ8VDie2WVNbmziOrYou9krO1/gmJ+PfzIX3VfJYPqOyY/nMMqk7dG9mviChft6NG27dhxwk16KSPQLJlPR1Zi8Bh8WURlbuz8lCiDLofSVRI4Us0qk7dG9mviChUncrlMejaFVd371QebnxrdRwX40CF06ZlL9zaBrXPxZk4s4xVDYu+lBrxrYAntlxR4Xz3R+8PJjgBMMaEOgjb5R/MPi0Vm+MiwGosY5YzcWBp9zmx4AhnhR9YLO8AvMg+cIrX6lSib3965QTkuqNQsnPNGw2nW+zuwPYhx2zzDdJl/hIo1+0vhBPW1y1NmTxQhU5CefoA0m6gbonCYlHIDqxBwBI/RLS8+yUX2v6+P3XSGDFNEcTIkD7HU2fXJOOojqvWhM+TQTEigUK9DuateKbj4ExuQpTdJN9g2k/7+FI+mEkVYAhgCNtDEa7KhQ+zPBZ6XIGfdCjcmLrIo/iB
  [sellingMethod] => DA
  [hotel] => 41
  [booking_key] => 
  [total_people] => 
  [tour] => 
  [channel] => 
  [firstname] => debug
  [surname] => Hitchins
  [email] => marcus7777@gmail.com
  [phone] => 07541386427
  [cityName] => penzance
  [zipCode] => TR18 4DZ
  [countryName] => GB
  [ccHolderFirstName] => DEBUG
  [ccHolderLastName] => HITCHINS
  [ccnumber] => 4602 0202 2020 2000
  [cctype] => VI
  [ccexp_month] => 01
  [ccexp_year] => 14
  [ccexp] => 
  [cvc] => 123
  [submit] => book
)            
--> */


