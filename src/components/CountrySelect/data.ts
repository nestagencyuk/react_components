const countries = [
  {
    label: 'Andorra',
    alpha3: 'AND',
    alpha2: 'AD',
    serviceGroup: 8
  },
  {
    label: 'United Arab Emirates',
    alpha3: 'ARE',
    alpha2: 'AE',
    serviceGroup: 3
  },
  {
    label: 'Afghanistan',
    alpha3: 'AFG',
    alpha2: 'AF',
    serviceGroup: 3
  },
  {
    label: 'Antigua And Barbuda',
    alpha3: 'ATG',
    alpha2: 'AG',
    serviceGroup: 3
  },
  {
    label: 'Anguilla',
    alpha3: 'AIA',
    alpha2: 'AI',
    serviceGroup: 3
  },
  {
    label: 'Albania',
    alpha3: 'ALB',
    alpha2: 'AL',
    serviceGroup: 8
  },
  {
    label: 'Armenia',
    alpha3: 'ARM',
    alpha2: 'AM',
    serviceGroup: 3
  },
  {
    label: 'Angola',
    alpha3: 'AGO',
    alpha2: 'AO',
    serviceGroup: 3
  },
  {
    label: 'Antarctica',
    alpha3: 'ATA',
    alpha2: 'AQ',
    serviceGroup: 3
  },
  {
    label: 'Argentina',
    alpha3: 'ARG',
    alpha2: 'AR',
    serviceGroup: 3
  },
  {
    label: 'American Samoa',
    alpha3: 'ASM',
    alpha2: 'AS',
    serviceGroup: 3
  },
  {
    label: 'Austria',
    alpha3: 'AUT',
    alpha2: 'AT',
    serviceGroup: 1
  },
  {
    label: 'Aruba',
    alpha3: 'ABW',
    alpha2: 'AW',
    serviceGroup: 3
  },
  {
    label: 'Azerbaijan',
    alpha3: 'AZE',
    alpha2: 'AZ',
    serviceGroup: 3
  },
  {
    label: 'Bosnia And Herzegowina',
    alpha3: 'BIH',
    alpha2: 'BA',
    serviceGroup: 8
  },
  {
    label: 'Barbados',
    alpha3: 'BRB',
    alpha2: 'BB',
    serviceGroup: 8
  },
  {
    label: 'Bangladesh',
    alpha3: 'BGD',
    alpha2: 'BD',
    serviceGroup: 3
  },
  {
    label: 'Belgium',
    alpha3: 'BEL',
    alpha2: 'BE',
    serviceGroup: 7
  },
  {
    label: 'Burkina Faso',
    alpha3: 'BFA',
    alpha2: 'BF',
    serviceGroup: 3
  },
  {
    label: 'Bulgaria',
    alpha3: 'BGR',
    alpha2: 'BG',
    serviceGroup: 8
  },
  {
    label: 'Bahrain',
    alpha3: 'BHR',
    alpha2: 'BH',
    serviceGroup: 3
  },
  {
    label: 'Burundi',
    alpha3: 'BDI',
    alpha2: 'BI',
    serviceGroup: 3
  },
  {
    label: 'Benin',
    alpha3: 'BEN',
    alpha2: 'BJ',
    serviceGroup: 3
  },
  {
    label: 'Bermuda',
    alpha3: 'BMU',
    alpha2: 'BM',
    serviceGroup: 3
  },
  {
    label: 'Brunei Darussalam',
    alpha3: 'BRN',
    alpha2: 'BN',
    serviceGroup: 3
  },
  {
    label: 'Bolivia',
    alpha3: 'BOL',
    alpha2: 'BO',
    serviceGroup: 3
  },
  {
    label: 'Brazil',
    alpha3: 'BRA',
    alpha2: 'BR',
    serviceGroup: 3
  },
  {
    label: 'Bahamas',
    alpha3: 'BHS',
    alpha2: 'BS',
    serviceGroup: 3
  },
  {
    label: 'Botswana',
    alpha3: 'BWA',
    alpha2: 'BW',
    serviceGroup: 3
  },
  {
    label: 'Belarus',
    alpha3: 'BLR',
    alpha2: 'BY',
    serviceGroup: 3
  },
  {
    label: 'Belize',
    alpha3: 'BLZ',
    alpha2: 'BZ',
    serviceGroup: 3
  },
  {
    label: 'Canada',
    alpha3: 'CAN',
    alpha2: 'CA',
    serviceGroup: 10
  },
  {
    label: 'Cocos (Keeling) Islands',
    alpha3: 'CCK',
    alpha2: 'CC',
    serviceGroup: 3
  },
  {
    label: 'Central African Republic',
    alpha3: 'CAF',
    alpha2: 'CF',
    serviceGroup: 3
  },
  {
    label: 'Congo',
    alpha3: 'COG',
    alpha2: 'CG',
    serviceGroup: 3
  },
  {
    label: 'Switzerland',
    alpha3: 'CHE',
    alpha2: 'CH',
    serviceGroup: 12
  },
  {
    label: "Cote D'Ivoire",
    alpha3: 'CIV',
    alpha2: 'CI',
    serviceGroup: 3
  },
  {
    label: 'Cook Islands',
    alpha3: 'COK',
    alpha2: 'CK',
    serviceGroup: 3
  },
  {
    label: 'Chile',
    alpha3: 'CHL',
    alpha2: 'CL',
    serviceGroup: 3
  },
  {
    label: 'Cameroon',
    alpha3: 'CMR',
    alpha2: 'CM',
    serviceGroup: 3
  },
  {
    label: 'China',
    alpha3: 'CHN',
    alpha2: 'CN',
    serviceGroup: 19
  },
  {
    label: 'Colombia',
    alpha3: 'COL',
    alpha2: 'CO',
    serviceGroup: 3
  },
  {
    label: 'Costa Rica',
    alpha3: 'CRI',
    alpha2: 'CR',
    serviceGroup: 3
  },
  {
    label: 'Cuba',
    alpha3: 'CUB',
    alpha2: 'CU',
    serviceGroup: 3
  },
  {
    label: 'Cape Verde',
    alpha3: 'CPV',
    alpha2: 'CV',
    serviceGroup: 3
  },
  {
    label: 'Christmas Island',
    alpha3: 'CXR',
    alpha2: 'CX',
    serviceGroup: 3
  },
  {
    label: 'Cyprus',
    alpha3: 'CYP',
    alpha2: 'CY',
    serviceGroup: 8
  },
  {
    label: 'Czech Republic',
    alpha3: 'CZE',
    alpha2: 'CZ',
    serviceGroup: 3
  },
  {
    label: 'Germany',
    alpha3: 'DEU',
    alpha2: 'DE',
    serviceGroup: 1
  },
  {
    label: 'Djibouti',
    alpha3: 'DJI',
    alpha2: 'DJ',
    serviceGroup: 3
  },
  {
    label: 'Denmark',
    alpha3: 'DNK',
    alpha2: 'DK',
    serviceGroup: 13
  },
  {
    label: 'Dominica',
    alpha3: 'DMA',
    alpha2: 'DM',
    serviceGroup: 3
  },
  {
    label: 'Dominican Republic',
    alpha3: 'DOM',
    alpha2: 'DO',
    serviceGroup: 3
  },
  {
    label: 'Algeria',
    alpha3: 'DZA',
    alpha2: 'DZ',
    serviceGroup: 3
  },
  {
    label: 'Ecuador',
    alpha3: 'ECU',
    alpha2: 'EC',
    serviceGroup: 3
  },
  {
    label: 'Estonia',
    alpha3: 'EST',
    alpha2: 'EE',
    serviceGroup: 9
  },
  {
    label: 'Egypt',
    alpha3: 'EGY',
    alpha2: 'EG',
    serviceGroup: 3
  },
  {
    label: 'Western Sahara',
    alpha3: 'ESH',
    alpha2: 'EH',
    serviceGroup: 3
  },
  {
    label: 'Eritrea',
    alpha3: 'ERI',
    alpha2: 'ER',
    serviceGroup: 3
  },
  {
    label: 'Spain',
    alpha3: 'ESP',
    alpha2: 'ES',
    serviceGroup: 8
  },
  {
    label: 'Ethiopia',
    alpha3: 'ETH',
    alpha2: 'ET',
    serviceGroup: 3
  },
  {
    label: 'Finland',
    alpha3: 'FIN',
    alpha2: 'FI',
    serviceGroup: 9
  },
  {
    label: 'Fiji',
    alpha3: 'FJI',
    alpha2: 'FJ',
    serviceGroup: 3
  },
  {
    label: 'Falkland Islands (Malvinas)',
    alpha3: 'FLK',
    alpha2: 'FK',
    serviceGroup: 3
  },
  {
    label: 'Micronesia',
    alpha3: 'FSM',
    alpha2: 'FM',
    serviceGroup: 3
  },
  {
    label: 'Faroe Islands',
    alpha3: 'FRO',
    alpha2: 'FO',
    serviceGroup: 3
  },
  {
    label: 'France',
    alpha3: 'FRA',
    alpha2: 'FR',
    serviceGroup: 4
  },
  {
    label: 'Gabon',
    alpha3: 'GAB',
    alpha2: 'GA',
    serviceGroup: 3
  },
  {
    label: 'United Kingdom',
    alpha3: 'GBR',
    alpha2: 'GB',
    serviceGroup: 2
  },
  {
    label: 'Grenada',
    alpha3: 'GRD',
    alpha2: 'GD',
    serviceGroup: 3
  },
  {
    label: 'Georgia',
    alpha3: 'GEO',
    alpha2: 'GE',
    serviceGroup: 1
  },
  {
    label: 'French Guiana',
    alpha3: 'GUF',
    alpha2: 'GF',
    serviceGroup: 8
  },
  {
    label: 'Guernsey',
    alpha3: 'GGY',
    alpha2: 'GG',
    serviceGroup: 2
  },
  {
    label: 'Ghana',
    alpha3: 'GHA',
    alpha2: 'GH',
    serviceGroup: 3
  },
  {
    label: 'Gibraltar',
    alpha3: 'GIB',
    alpha2: 'GI',
    serviceGroup: 2
  },
  {
    label: 'Greenland',
    alpha3: 'GRL',
    alpha2: 'GL',
    serviceGroup: 3
  },
  {
    label: 'Gambia',
    alpha3: 'GMB',
    alpha2: 'GM',
    serviceGroup: 3
  },
  {
    label: 'Guinea',
    alpha3: 'GIN',
    alpha2: 'GN',
    serviceGroup: 3
  },
  {
    label: 'Guadeloupe',
    alpha3: 'GLP',
    alpha2: 'GP',
    serviceGroup: 3
  },
  {
    label: 'Equatorial Guinea',
    alpha3: 'GNQ',
    alpha2: 'GQ',
    serviceGroup: 3
  },
  {
    label: 'Greece',
    alpha3: 'GRC',
    alpha2: 'GR',
    serviceGroup: 37
  },
  {
    label: 'Guatemala',
    alpha3: 'GTM',
    alpha2: 'GT',
    serviceGroup: 3
  },
  {
    label: 'Guam',
    alpha3: 'GUM',
    alpha2: 'GU',
    serviceGroup: 3
  },
  {
    label: 'Guinea-bissau',
    alpha3: 'GNB',
    alpha2: 'GW',
    serviceGroup: 3
  },
  {
    label: 'Guyana',
    alpha3: 'GUY',
    alpha2: 'GY',
    serviceGroup: 3
  },
  {
    label: 'Hong Kong',
    alpha3: 'HKG',
    alpha2: 'HK',
    serviceGroup: 3
  },
  {
    label: 'Honduras',
    alpha3: 'HND',
    alpha2: 'HN',
    serviceGroup: 3
  },
  {
    label: 'Croatia',
    alpha3: 'HRV',
    alpha2: 'HR',
    serviceGroup: 8
  },
  {
    label: 'Haiti',
    alpha3: 'HTI',
    alpha2: 'HT',
    serviceGroup: 3
  },
  {
    label: 'Hungary',
    alpha3: 'HUN',
    alpha2: 'HU',
    serviceGroup: 8
  },
  {
    label: 'Indonesia',
    alpha3: 'IDN',
    alpha2: 'ID',
    serviceGroup: 3
  },
  {
    label: 'Ireland',
    alpha3: 'IRL',
    alpha2: 'IE',
    serviceGroup: 6
  },
  {
    label: 'Israel',
    alpha3: 'ISR',
    alpha2: 'IL',
    serviceGroup: 3
  },
  {
    label: 'Isle Of Man',
    alpha3: 'IMN',
    alpha2: 'IM',
    serviceGroup: 2
  },
  {
    label: 'India',
    alpha3: 'IND',
    alpha2: 'IN',
    serviceGroup: 3
  },
  {
    label: 'British Indian Ocean Territory',
    alpha3: 'IOT',
    alpha2: 'IO',
    serviceGroup: 3
  },
  {
    label: 'Iraq',
    alpha3: 'IRQ',
    alpha2: 'IQ',
    serviceGroup: 3
  },
  {
    label: 'Iceland',
    alpha3: 'ISL',
    alpha2: 'IS',
    serviceGroup: 9
  },
  {
    label: 'Italy',
    alpha3: 'ITA',
    alpha2: 'IT',
    serviceGroup: 11
  },
  {
    label: 'Jersey',
    alpha3: 'JEY',
    alpha2: 'JE',
    serviceGroup: 2
  },
  {
    label: 'Jamaica',
    alpha3: 'JAM',
    alpha2: 'JM',
    serviceGroup: 3
  },
  {
    label: 'Jordan',
    alpha3: 'JOR',
    alpha2: 'JO',
    serviceGroup: 3
  },
  {
    label: 'Kenya',
    alpha3: 'KEN',
    alpha2: 'KE',
    serviceGroup: 3
  },
  {
    label: 'Kyrgyzstan',
    alpha3: 'KGZ',
    alpha2: 'KG',
    serviceGroup: 3
  },
  {
    label: 'Cambodia',
    alpha3: 'KHM',
    alpha2: 'KH',
    serviceGroup: 3
  },
  {
    label: 'Kiribati',
    alpha3: 'KIR',
    alpha2: 'KI',
    serviceGroup: 3
  },
  {
    label: 'Comoros',
    alpha3: 'COM',
    alpha2: 'KM',
    serviceGroup: 3
  },
  {
    label: 'Saint Kitts And Nevis',
    alpha3: 'KNA',
    alpha2: 'KN',
    serviceGroup: 3
  },
  {
    label: 'Korea',
    alpha3: 'KOR',
    alpha2: 'KR',
    serviceGroup: 3
  },
  {
    label: 'Kuwait',
    alpha3: 'KWT',
    alpha2: 'KW',
    serviceGroup: 3
  },
  {
    label: 'Cayman Islands',
    alpha3: 'CYM',
    alpha2: 'KY',
    serviceGroup: 3
  },
  {
    label: 'Kazakhstan',
    alpha3: 'KAZ',
    alpha2: 'KZ',
    serviceGroup: 1
  },
  {
    label: "Lao People's Democratic Republic",
    alpha3: 'LAO',
    alpha2: 'LA',
    serviceGroup: 3
  },
  {
    label: 'Lebanon',
    alpha3: 'LBN',
    alpha2: 'LB',
    serviceGroup: 3
  },
  {
    label: 'Saint Lucia',
    alpha3: 'LCA',
    alpha2: 'LC',
    serviceGroup: 3
  },
  {
    label: 'Liechtenstein',
    alpha3: 'LIE',
    alpha2: 'LI',
    serviceGroup: 8
  },
  {
    label: 'Sri Lanka',
    alpha3: 'LKA',
    alpha2: 'LK',
    serviceGroup: 3
  },
  {
    label: 'Liberia',
    alpha3: 'LBR',
    alpha2: 'LR',
    serviceGroup: 3
  },
  {
    label: 'Lesotho',
    alpha3: 'LSO',
    alpha2: 'LS',
    serviceGroup: 3
  },
  {
    label: 'Lithuania',
    alpha3: 'LTU',
    alpha2: 'LT',
    serviceGroup: 9
  },
  {
    label: 'Luxembourg',
    alpha3: 'LUX',
    alpha2: 'LU',
    serviceGroup: 7
  },
  {
    label: 'Latvia',
    alpha3: 'LVA',
    alpha2: 'LV',
    serviceGroup: 9
  },
  {
    label: 'Libyan Arab Jamahiriya',
    alpha3: 'LBY',
    alpha2: 'LY',
    serviceGroup: 3
  },
  {
    label: 'Morocco',
    alpha3: 'MAR',
    alpha2: 'MA',
    serviceGroup: 3
  },
  {
    label: 'Monaco',
    alpha3: 'MCO',
    alpha2: 'MC',
    serviceGroup: 8
  },
  {
    label: 'Moldova',
    alpha3: 'MDA',
    alpha2: 'MD',
    serviceGroup: 3
  },
  {
    label: 'Montenegro',
    alpha3: 'MNE',
    alpha2: 'ME',
    serviceGroup: 3
  },
  {
    label: 'Madagascar',
    alpha3: 'MDG',
    alpha2: 'MG',
    serviceGroup: 3
  },
  {
    label: 'Marshall Islands',
    alpha3: 'MHL',
    alpha2: 'MH',
    serviceGroup: 3
  },
  {
    label: 'Mali',
    alpha3: 'MLI',
    alpha2: 'ML',
    serviceGroup: 3
  },
  {
    label: 'Myanmar',
    alpha3: 'MMR',
    alpha2: 'MM',
    serviceGroup: 3
  },
  {
    label: 'Mongolia',
    alpha3: 'MNG',
    alpha2: 'MN',
    serviceGroup: 1
  },
  {
    label: 'Macau',
    alpha3: 'MAC',
    alpha2: 'MO',
    serviceGroup: 3
  },
  {
    label: 'Northern Mariana Islands',
    alpha3: 'MNP',
    alpha2: 'MP',
    serviceGroup: 3
  },
  {
    label: 'Martinique',
    alpha3: 'MTQ',
    alpha2: 'MQ',
    serviceGroup: 3
  },
  {
    label: 'Mauritania',
    alpha3: 'MRT',
    alpha2: 'MR',
    serviceGroup: 3
  },
  {
    label: 'Montserrat',
    alpha3: 'MSR',
    alpha2: 'MS',
    serviceGroup: 3
  },
  {
    label: 'Malta',
    alpha3: 'MLT',
    alpha2: 'MT',
    serviceGroup: 8
  },
  {
    label: 'Mauritius',
    alpha3: 'MUS',
    alpha2: 'MU',
    serviceGroup: 3
  },
  {
    label: 'Maldives',
    alpha3: 'MDV',
    alpha2: 'MV',
    serviceGroup: 3
  },
  {
    label: 'Malawi',
    alpha3: 'MWI',
    alpha2: 'MW',
    serviceGroup: 3
  },
  {
    label: 'Mexico',
    alpha3: 'MEX',
    alpha2: 'MX',
    serviceGroup: 3
  },
  {
    label: 'Mozambique',
    alpha3: 'MOZ',
    alpha2: 'MZ',
    serviceGroup: 3
  },
  {
    label: 'Namibia',
    alpha3: 'NAM',
    alpha2: 'NA',
    serviceGroup: 3
  },
  {
    label: 'New Caledonia',
    alpha3: 'NCL',
    alpha2: 'NC',
    serviceGroup: 3
  },
  {
    label: 'Niger',
    alpha3: 'NER',
    alpha2: 'NE',
    serviceGroup: 3
  },
  {
    label: 'Norfolk Island',
    alpha3: 'NFK',
    alpha2: 'NF',
    serviceGroup: 3
  },
  {
    label: 'Nigeria',
    alpha3: 'NGA',
    alpha2: 'NG',
    serviceGroup: 3
  },
  {
    label: 'Nicaragua',
    alpha3: 'NIC',
    alpha2: 'NI',
    serviceGroup: 3
  },
  {
    label: 'Netherlands',
    alpha3: 'NLD',
    alpha2: 'NL',
    serviceGroup: 39
  },
  {
    label: 'Norway',
    alpha3: 'NOR',
    alpha2: 'NO',
    serviceGroup: 14
  },
  {
    label: 'Nepal',
    alpha3: 'NPL',
    alpha2: 'NP',
    serviceGroup: 3
  },
  {
    label: 'Nauru',
    alpha3: 'NRU',
    alpha2: 'NR',
    serviceGroup: 3
  },
  {
    label: 'Niue',
    alpha3: 'NIU',
    alpha2: 'NU',
    serviceGroup: 3
  },
  {
    label: 'New Zealand',
    alpha3: 'NZL',
    alpha2: 'NZ',
    serviceGroup: 3
  },
  {
    label: 'Oman',
    alpha3: 'OMN',
    alpha2: 'OM',
    serviceGroup: 3
  },
  {
    label: 'Panama',
    alpha3: 'PAN',
    alpha2: 'PA',
    serviceGroup: 3
  },
  {
    label: 'Peru',
    alpha3: 'PER',
    alpha2: 'PE',
    serviceGroup: 3
  },
  {
    label: 'French Polynesia',
    alpha3: 'PYF',
    alpha2: 'PF',
    serviceGroup: 8
  },
  {
    label: 'Papua New Guinea',
    alpha3: 'PNG',
    alpha2: 'PG',
    serviceGroup: 3
  },
  {
    label: 'Philippines',
    alpha3: 'PHL',
    alpha2: 'PH',
    serviceGroup: 3
  },
  {
    label: 'Pakistan',
    alpha3: 'PAK',
    alpha2: 'PK',
    serviceGroup: 3
  },
  {
    label: 'Poland',
    alpha3: 'POL',
    alpha2: 'PL',
    serviceGroup: 36
  },
  {
    label: 'St. Pierre And Miquelon',
    alpha3: 'SPM',
    alpha2: 'PM',
    serviceGroup: 3
  },
  {
    label: 'Pitcairn',
    alpha3: 'PCN',
    alpha2: 'PN',
    serviceGroup: 3
  },
  {
    label: 'Puerto Rico',
    alpha3: 'PRI',
    alpha2: 'PR',
    serviceGroup: 3
  },
  {
    label: 'Portugal',
    alpha3: 'PRT',
    alpha2: 'PT',
    serviceGroup: 8
  },
  {
    label: 'Palau',
    alpha3: 'PLW',
    alpha2: 'PW',
    serviceGroup: 3
  },
  {
    label: 'Paraguay',
    alpha3: 'PRY',
    alpha2: 'PY',
    serviceGroup: 3
  },
  {
    label: 'Qatar',
    alpha3: 'QAT',
    alpha2: 'QA',
    serviceGroup: 3
  },
  {
    label: 'Reunion',
    alpha3: 'REU',
    alpha2: 'RE',
    serviceGroup: 3
  },
  {
    label: 'Romania',
    alpha3: 'ROU',
    alpha2: 'RO',
    serviceGroup: 8
  },
  {
    label: 'Serbia',
    alpha3: 'SRB',
    alpha2: 'RS',
    serviceGroup: 8
  },
  {
    label: 'Russian Federation',
    alpha3: 'RUS',
    alpha2: 'RU',
    serviceGroup: 8
  },
  {
    label: 'Rwanda',
    alpha3: 'RWA',
    alpha2: 'RW',
    serviceGroup: 3
  },
  {
    label: 'Saudi Arabia',
    alpha3: 'SAU',
    alpha2: 'SA',
    serviceGroup: 3
  },
  {
    label: 'Solomon Islands',
    alpha3: 'SLB',
    alpha2: 'SB',
    serviceGroup: 3
  },
  {
    label: 'Seychelles',
    alpha3: 'SYC',
    alpha2: 'SC',
    serviceGroup: 3
  },
  {
    label: 'Sweden',
    alpha3: 'SWE',
    alpha2: 'SE',
    serviceGroup: 15
  },
  {
    label: 'Singapore',
    alpha3: 'SGP',
    alpha2: 'SG',
    serviceGroup: 3
  },
  {
    label: 'St. Helena',
    alpha3: 'SHN',
    alpha2: 'SH',
    serviceGroup: 3
  },
  {
    label: 'Slovenia',
    alpha3: 'SVN',
    alpha2: 'SI',
    serviceGroup: 8
  },
  {
    label: 'Slovakia (Slovak Republic)',
    alpha3: 'SVK',
    alpha2: 'SK',
    serviceGroup: 8
  },
  {
    label: 'Sierra Leone',
    alpha3: 'SLE',
    alpha2: 'SL',
    serviceGroup: 3
  },
  {
    label: 'San Marino',
    alpha3: 'SMR',
    alpha2: 'SM',
    serviceGroup: 8
  },
  {
    label: 'Senegal',
    alpha3: 'SEN',
    alpha2: 'SN',
    serviceGroup: 3
  },
  {
    label: 'Somalia',
    alpha3: 'SOM',
    alpha2: 'SO',
    serviceGroup: 3
  },
  {
    label: 'Suriname',
    alpha3: 'SUR',
    alpha2: 'SR',
    serviceGroup: 3
  },
  {
    label: 'Sao Tome And Principe',
    alpha3: 'STP',
    alpha2: 'ST',
    serviceGroup: 3
  },
  {
    label: 'El Salvador',
    alpha3: 'SLV',
    alpha2: 'SV',
    serviceGroup: 3
  },
  {
    label: 'Swaziland',
    alpha3: 'SWZ',
    alpha2: 'SZ',
    serviceGroup: 3
  },
  {
    label: 'Turks And Caicos Islands',
    alpha3: 'TCA',
    alpha2: 'TC',
    serviceGroup: 3
  },
  {
    label: 'Chad',
    alpha3: 'TCD',
    alpha2: 'TD',
    serviceGroup: 3
  },
  {
    label: 'Togo',
    alpha3: 'TGO',
    alpha2: 'TG',
    serviceGroup: 3
  },
  {
    label: 'Thailand',
    alpha3: 'THA',
    alpha2: 'TH',
    serviceGroup: 3
  },
  {
    label: 'Tajikistan',
    alpha3: 'TJK',
    alpha2: 'TJ',
    serviceGroup: 3
  },
  {
    label: 'Tokelau',
    alpha3: 'TKL',
    alpha2: 'TK',
    serviceGroup: 3
  },
  {
    label: 'Turkmenistan',
    alpha3: 'TKM',
    alpha2: 'TM',
    serviceGroup: 3
  },
  {
    label: 'Tunisia',
    alpha3: 'TUN',
    alpha2: 'TN',
    serviceGroup: 3
  },
  {
    label: 'Tonga',
    alpha3: 'TON',
    alpha2: 'TO',
    serviceGroup: 3
  },
  {
    label: 'Turkey',
    alpha3: 'TUR',
    alpha2: 'TR',
    serviceGroup: 8
  },
  {
    label: 'Trinidad And Tobago',
    alpha3: 'TTO',
    alpha2: 'TT',
    serviceGroup: 3
  },
  {
    label: 'Tuvalu',
    alpha3: 'TUV',
    alpha2: 'TV',
    serviceGroup: 3
  },
  {
    label: 'Taiwan',
    alpha3: 'TWN',
    alpha2: 'TW',
    serviceGroup: 20
  },
  {
    label: 'Tanzania',
    alpha3: 'TZA',
    alpha2: 'TZ',
    serviceGroup: 3
  },
  {
    label: 'Ukraine',
    alpha3: 'UKR',
    alpha2: 'UA',
    serviceGroup: 1
  },
  {
    label: 'Uganda',
    alpha3: 'UGA',
    alpha2: 'UG',
    serviceGroup: 3
  },
  {
    label: 'United States',
    alpha3: 'USA',
    alpha2: 'US',
    serviceGroup: 17
  },
  {
    label: 'Uruguay',
    alpha3: 'URY',
    alpha2: 'UY',
    serviceGroup: 3
  },
  {
    label: 'Uzbekistan',
    alpha3: 'UZB',
    alpha2: 'UZ',
    serviceGroup: 3
  },
  {
    label: 'Vatican City State (Holy See)',
    alpha3: 'VAT',
    alpha2: 'VA',
    serviceGroup: 3
  },
  {
    label: 'Saint Vincent And The Grenadines',
    alpha3: 'VCT',
    alpha2: 'VC',
    serviceGroup: 3
  },
  {
    label: 'Venezuela',
    alpha3: 'VEN',
    alpha2: 'VE',
    serviceGroup: 3
  },
  {
    label: 'Virgin Islands (British)',
    alpha3: 'VGB',
    alpha2: 'VG',
    serviceGroup: 3
  },
  {
    label: 'Virgin Islands (U.S.)',
    alpha3: 'VIR',
    alpha2: 'VI',
    serviceGroup: 3
  },
  {
    label: 'Viet Nam',
    alpha3: 'VNM',
    alpha2: 'VN',
    serviceGroup: 3
  },
  {
    label: 'Vanuatu',
    alpha3: 'VUT',
    alpha2: 'VU',
    serviceGroup: 3
  },
  {
    label: 'Wallis And Futuna Islands',
    alpha3: 'WLF',
    alpha2: 'WF',
    serviceGroup: 3
  },
  {
    label: 'Samoa',
    alpha3: 'WSM',
    alpha2: 'WS',
    serviceGroup: 3
  },
  {
    label: 'Yemen',
    alpha3: 'YEM',
    alpha2: 'YE',
    serviceGroup: 3
  },
  {
    label: 'Mayotte',
    alpha3: 'MYT',
    alpha2: 'YT',
    serviceGroup: 3
  },
  {
    label: 'South Africa',
    alpha3: 'ZAF',
    alpha2: 'ZA',
    serviceGroup: 3
  },
  {
    label: 'Zambia',
    alpha3: 'ZMB',
    alpha2: 'ZM',
    serviceGroup: 3
  },
  {
    label: 'Zimbabwe',
    alpha3: 'ZWE',
    alpha2: 'ZW',
    serviceGroup: 3
  },
  {
    label: 'Netherlands Antilles',
    alpha3: 'ANT',
    alpha2: 'CS',
    serviceGroup: 3
  },
  {
    label: 'The Democratic Republic Of Congo',
    alpha3: 'DRC',
    alpha2: 'CD',
    serviceGroup: 3
  },
  {
    label: 'Serbia And Montenegro',
    alpha3: 'SCG',
    alpha2: 'RS',
    serviceGroup: 3
  },
  {
    label: 'East Timor',
    alpha3: 'TMP',
    alpha2: 'TL',
    serviceGroup: 3
  },
  {
    label: 'St. Barthelemy',
    alpha3: 'XSB',
    alpha2: 'BL',
    serviceGroup: 3
  },
  {
    label: 'St. Eustatius',
    alpha3: 'XSE',
    alpha2: 'BQ',
    serviceGroup: 3
  }
].sort((a, b) => (a.label > b.label ? 1 : -1))

export { countries }
