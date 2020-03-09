# IBAN-Validator
Written by Muri [@muri235][2]

## What does it do?
The JavaScript file is usable standalone but it has a companion HTML file to use the validation out of the box.

It will validate IBANs for all standardized criteria that are:
* Usage of correct country code
* Length (depending on the country code)
* Mod-97 operation

Furthermore for convenience it will
* Remove all whitespaces for correct validation
* Validate multiple IBANs in bulk using the HTML companion (one IBAN per line)


Read more on IBAN validation at [Wikipedia: International Bank Account Number][1]

## What does it not do?
* Generate IBAN check digits
* Check if IBAN corresponds to an existing bank account
* Create IBAN out of account number and bank code
* Store anything
* Send any data anywhere

## What will it do in the future?
* I'll create a webservice that will validate your IBANs via REST call. Stay tuned!

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

## Changelog:
### 2020.02
Updated country code and length list to match https://www.iban.com/structure updated 22 January 2020
### 2020.01
Inital version. It should do the job.

[1]: https://en.wikipedia.org/wiki/International_Bank_Account_Number
[2]: https://github.com/muri235/IBAN-Validator