const assert = require('assert');

const log = console.log;

class Inspector {

  constructor() {
    this.ruleList = {
      nations: {},
      documents: {},
      vaccinations: {},
      blacklists: [],
    };

    this.nations = ['Arstotzka', 'Antegria', 'Impor', 'Kolechia', 'Obristan', 'Republia', 'United Federation'];
    this.homeNation = 'Arstotzka';
    this.foreignNations = this.nations.filter(nation => nation !== this.homeNation);

    this.nations.forEach(nation => {
      let obj = {};
      if (this.homeNation.includes(nation)) {
        obj = {
          home: true,
          allowed: true,
        };
      }
      if (this.foreignNations.includes(nation)) {
        obj = {
          foreignNation: true,
          allowed: false
        };
      }
      this.ruleList.nations[nation] = obj;
    })
  }

  receiveBulletin(bulletin) {

    log('\n\nNew Bulletin');
    log(bulletin);

    // clear blacklist for each day 
    this.ruleList.blacklists = [];

    const records = bulletin.toLowerCase().split('\n');

    records.forEach(record => {

      // Rule 1. Allow/Deny nations
      const ruleAllowDeny = ['allow', 'deny'];
      if (new RegExp(ruleAllowDeny.join('|')).test(record)) {
        const stats = record.substr(0, record.indexOf(' '));

        // change the allowed status of the nation
        this.nations.forEach(nation => {
          if (record.includes(nation.toLowerCase())) {
            const allowed = (stats === 'allow') ? true : false;
            this.ruleList.nations[nation].allowed = allowed;
          }
        })
      }

      // Rule 2. updates to requires docs and 
      // Rule 3. updates required vaccinations
      let kw = 'require';
      if (new RegExp(kw).test(record)) {

        // check if rule is required or not
        let required;
        let splitword;
        let kw2 = 'no longer';
        if (new RegExp(kw2).test(record)) {
          required = false;
          splitword = kw2 + ' ' + kw;
        } else {
          required = true;
          splitword = kw;
        }

        // preprocessing
        const splits = record.split(splitword);
        let subject = splits[0].trim();
        let docName = splits[1].trim();

        // separate required documents from vaccinations
        let type;
        kw = 'vaccination';
        if (new RegExp(kw).test(docName)) {
          type = 'vaccinations';
          docName = docName.replace(kw, '').trim();
        } else {
          type = 'documents';
        }

        // replace entrants with 'all'
        kw = 'entrants';
        if (new RegExp(kw).test(subject)) {
          subject = subject.replace(kw, 'all');
        }

        // creates array to carry permission if the type of document does not exist
        if (!(docName in this.ruleList[type])) {
          this.ruleList[type][docName] = [];
        }

        // after keyword: 'citizens of' can be one or more nation
        // or the rule belongs to a certain group
        let obj = {};
        kw = 'citizens of';
        if (new RegExp(kw).test(subject)) {
          this.nations.forEach(nation => {
            if (subject.includes(nation.toLowerCase())) {
              obj = {
                nation,
                required
              };
              // check if rule exist, if not, we push it in.
              const target = this.ruleList[type][docName];
              const found = target.find(el => el.nation === obj.nation)
              if (found) { found.required = required; }
              else { this.ruleList[type][docName].push(obj); }
            }
          })
        } else {
          obj = {
            group: subject,
            required
          };
          // check if rule exist, if not, we push it in.
          const target = this.ruleList[type][docName];
          const found = target.find(el => el.group === obj.group);
          if (found) { found.required = required; }
          else { this.ruleList[type][docName].push(obj); }
        }
      }

      // Rule 4. wanted criminals
      kw = 'wanted by the state:';
      if (new RegExp(kw).test(record)) {
        let name = record.replace(kw, '').trim();
        this.ruleList.blacklists.push(name);
      }
    })

    log('\n\nRuleList');
    log(JSON.stringify(this.ruleList, null, 2));

  }

  inspect(entrant) {

    log(entrant);

    let today = new Date(1982, 11 - 1, 22);
    let ids = [];   // for storing cleanup id data from entrant
    let name, nationality, idNumber;

    // start inspecting
    try {

      function cleanIncomingData(context) {
        for (let id in entrant) {

          let detail = {};

          // translate colon separated strings into object
          entrant[id].split('\n').forEach(entry => {
            let e = entry.split(':');
            detail[e[0].toLowerCase()] = e[1].trim();
          });

          // clean up the field name of each piece of id
          let id_name = id.toLowerCase().replace(/\_/g, ' ');

          let n = detail.name.split(',');
          detail.name = n[1].trim() + ' ' + n[0].trim();

          // Check Black List
          if (context.ruleList.blacklists.includes(detail.name.toLowerCase())) {
            throw new Error('Detainment: Entrant is a wanted criminal.');
          }

          // Check consistency across all ids
          function checkConsistency() {

            // check name
            if (name === undefined) {
              name = detail.name;
            }
            if (detail.name !== name) {
              throw new Error('Detainment: name mismatch.');
            }

            // check nationality
            if (nationality === undefined) {
              nationality = detail.nation;
            }
            if (detail.nation !== undefined) {
              if (nationality !== detail.nation) {
                throw new Error('Detainment: nationality mismatch.');
              }
            }

            // check id number
            if (idNumber === undefined) {
              idNumber = detail['id#'];
            }
            if (detail['id#'] !== undefined) {
              if (idNumber !== detail['id#']) {
                throw new Error('Detainment: ID number mismatch.');
              }
            }
          }
          checkConsistency();

          let date;
          if (detail.exp) {
            date = detail.exp;
            date = date.split('.');
            detail.exp = new Date(date[0], date[1] - 1, date[2]);
          }

          if (detail.dob) {
            date = detail.dob;
            date = date.split('.');
            detail.dob = new Date(date[0], date[1] - 1, date[2]);
          }

          ids.push({
            type: id_name,
            detail,
          })
        }
      }
      cleanIncomingData(this);

      let isForeigner = (nationality === this.homeNation) ? false : true;
      // log(ids)
      log('\nname: ', name);
      log('nation: ', nationality);
      log('is Foreigner? ', isForeigner);

      // Get different IDs
      const getPassport = () => ids.find(id => id.type === 'passport');
      const getCertOfVac = () => ids.find(id => id.type === 'certificate of vaccination')
      const getIDCard = () => ids.find(id => id.type === 'id card');
      const getAccessPermit = () => ids.find(id => id.type === 'access permit');
      const getWorkPass = () => ids.find(id => id.type === 'work pass');
      const getGrantOfAsylum = () => ids.find(id => id.type === 'grant of asylum');
      const getDiplomaticAuth = () => ids.find(id => id.type === 'diplomatic authorization');

      const passport = getPassport();
      const certOfVac = getCertOfVac();
      const idCard = getIDCard();
      const accessPermit = getAccessPermit();
      const workPass = getWorkPass();
      const grantOfAsylum = getGrantOfAsylum();
      const diplomaticAuth = getDiplomaticAuth();


      // Check if entrant carries a passport      
      if (passport === undefined) {
        throw new Error('Entry denied: missing required passport.');
      }


      // Check Banned nations
      if (!this.ruleList.nations[nationality]['allowed']) {
        throw new Error('Entry denied: citizen of banned nation.');
      }


      // Check id for expiry date
      function checkExpiry() {
        for (let id of ids) {
          if (id.detail.exp < today) {
            throw new Error(`Entry denied: ${id.type} expired.`);
          }
        }
      }
      checkExpiry();


      // Gather a list of Required Documents
      function gatherRequiredDocuments(context) {
        const list = [];
        for (let doc in context.ruleList.documents) {
          let arr = context.ruleList.documents[doc];
          outer: for (let rule of arr) {
            if (rule.required) {
              if ((rule.group === 'all') ||
                (isForeigner && rule.group === 'foreigners') ||
                (rule.nation === nationality)) {
                list.push(doc);
                break outer;
              }
            }
          }
        }
        return list;
      }
      let docList = gatherRequiredDocuments(this);
      log('required docs: ', docList);


      // Gather a list of Required vaccination requirement
      function gatherRequiredVaccinations(context) {
        const list = [];
        for (let doc in context.ruleList.vaccinations) {
          let arr = context.ruleList.vaccinations[doc];
          outer: for (let rule of arr) {
            if (rule.required) {
              if ((rule.group === 'all') ||
                (isForeigner && rule.group === 'foreigners') ||
                (rule.nation === nationality)) {
                list.push(doc);
                break outer;
              }
            }
          }
        }
        return list;
      }
      let vacList = gatherRequiredVaccinations(this);
      log('required vac: ', vacList);


      function checkAgainstVacList() {
        if (!vacList.length) return;
        if (!certOfVac) {
          throw new Error('Entry denied: missing required certificate of vaccination.');
        }

        for (let disease of vacList) {
          let vaccineHistory = certOfVac.detail.vaccines.toLowerCase().split(',').map(v => v.trim());
          if (!vaccineHistory.includes(disease)) {
            throw new Error('Entry denied: missing required vaccination.');
          }
        }
      }
      checkAgainstVacList();


      function checkAgainstDocList(context) {

        // if entrant has 'grant of asylum' or 'diplomatic authorization', which 
        // are acceptable in lieu of an access_permit
        if (grantOfAsylum || diplomaticAuth) {
          let idx = docList.findIndex(doc => doc === 'access permit');
          docList.splice(idx, 1);
        }

        for (let doc of docList) {
          let found = ids.find(id => id.type === doc);
          if (!found) {
            let str = (doc === 'id card') ? 'ID card' : doc;
            throw new Error(`Entry denied: missing required ${str}.`);
          }
        }

        // check diplomatic auth if it must includes Arstotzka as one of the list of
        // nations that can be accessed. 
        if (diplomaticAuth) {
          let accessNation = diplomaticAuth.detail.access.split(',');
          if (!(accessNation.includes(context.homeNation))) {
            throw new Error('Entry denied: invalid diplomatic authorization.');
          }
        }
      }
      checkAgainstDocList(this);


      function checkWorkerStatus() {
        if (isForeigner) {
          if (accessPermit !== undefined && accessPermit.detail.purpose.toLowerCase() === 'work') {
            if (!workPass) {
              throw new Error('Entry denied: missing required work pass.');
            }
            return true;
          }
        }
        return false;
      }
      let isWorker = checkWorkerStatus();
      log('isWorker: ', isWorker);

      // Finally
      return (!isForeigner) ? 'Glory to Arstotzka.' : 'Cause no trouble.';
    } catch (err) {
      return err.message;
    }
  }
}

const inspector = new Inspector();
const bulletin2 = 'Entrants require passport\nAllow citizens of Arstotzka, Obristan';

const bulletin3 = `
Allow citizens of Obristan
Deny citizens of Kolechia, Republia 
Foreigners require access permit
Citizens of Arstotzka require ID card
Citizens of Arstotzka no longer require ID card
Workers require work pass
Citizens of Antegria, Republia, Obristan require polio vaccination
Entrants no longer require tetanus vaccination
Wanted by the State: Hubert Popovic
`;

const bulletin = `
Allow citizens of Impor, United Federation
Deny citizens of Kolechia
Entrants no longer require cholera vaccination
Foreigners require measles vaccination
Workers require work pass
Wanted by the State: Lars Tsarnaeva
`;
// Deny citizens of Republia
// Citizens of United Federation, Antegria, Obristan, Kolechia require typhus vaccination

inspector.receiveBulletin(bulletin3);

const josef = {
  passport: 'ID#: GC07D-FU8AR\nNATION: Arstotzka\nNAME: Costanza, Josef\nDOB: 1933.11.28\nSEX: M\nISS: East Grestin\nEXP: 1983.03.15'
};
const guyovich = {
  access_permit: 'NAME: Guyovich, Russian\nNATION: Obristan\nID#: TE8M1-V3N7R\nPURPOSE: WORK\nDURATION: 14 DAYS\nHEIGHT: 159cm\nWEIGHT: 60kg\nEXP: 1983.07.13'
};
const roman = {
  passport: 'ID#: WK9XA-LKM0Q\nNATION: United Federation\nNAME: Dolanski, Roman\nDOB: 1933.01.01\nSEX: M\nISS: Shingleton\nEXP: 1983.05.12',
  grant_of_asylum: 'NAME: Dolanski, Roman\nNATION: United Federation\nID#: Y3MNC-TPWQ2\nDOB: 1933.01.01\nHEIGHT: 176cm\nWEIGHT: 71kg\nEXP: 1983.09.20',
};

const test = {
  passport:
    'ID#: XJB77-DGH6M\nNATION: Impor\nNAME: Nilsson, Gloria\nDOB: 1945.02.03\nSEX: F\nISS: Tsunkeido\nEXP: 1984.08.08',
  access_permit:
    'NAME: Nilsson, Gloria\nNATION: Impor\nID#: XJB77-DGH6M\nPURPOSE: WORK\nDURATION: 1 YEAR\nHEIGHT: 164cm\nWEIGHT: 68kg\nEXP: 1984.12.03',
  work_pass:
    'NAME: Nilsson, Gloria\nFIELD: Construction\nEXP: 1983.10.23'
}



inspector.ruleList = {
  "nations": {
    "Arstotzka": {
      "home": true,
      "allowed": true
    },
    "Antegria": {
      "foreignNation": true,
      "allowed": true
    },
    "Impor": {
      "foreignNation": true,
      "allowed": true
    },
    "Kolechia": {
      "foreignNation": true,
      "allowed": true
    },
    "Obristan": {
      "foreignNation": true,
      "allowed": true
    },
    "Republia": {
      "foreignNation": true,
      "allowed": true
    },
    "United Federation": {
      "foreignNation": true,
      "allowed": true
    }
  },
  "documents": {
    "passport": [
      {
        "group": "all",
        "required": true
      }
    ],
    "access permit": [
      {
        "group": "foreigners",
        "required": true
      }
    ]
  },
  "vaccinations": {},
  "blacklists": [
    "calum quinn"
  ]
}


// log(inspector.inspect(josef));
// log(inspector.inspect(guyovich));
// log(inspector.inspect(roman));
log(inspector.inspect(test));
// const entrant_tests = [
//   [josef, 'Josef Costanza', 'Glory to Arstotzka.'],
//   [guyovich, 'Russian Guyovich', 'Entry denied: missing required passport.'],
//   [roman, 'Roman Dolanski', 'Detainment: ID number mismatch.']
// ];

// for (let [entrant, name, res] of entrant_tests) {
//   it(`Inspecting "${name}"`, function () {
//     const user = inspector.inspect(entrant);
//     assert(user === res, `Expected: ${res}\nGot: ${user}`)
//   });
// }
// });






// old code --------
      // let name = passport.detail.name;
      // let nationality = passport.detail.nation;
      // let isForeigner = (nationality === this.homeNation) ? false : true;

      // Check if name on ids are consistent
      // function checkConsistency() {
      //   ids.forEach(id => {
      //     if (id.detail.name !== name) {
      //       throw new Error('Detainment: ID number mismatch.');
      //     }
      //     if (id.type === 'grant of asylum' || id.type === 'access permit') {
      //       if (passport.detail['id#'] !== id.detail['id#']) {
      //         throw new Error('Detainment: ID number mismatch.');
      //       }
      //     }
      //     if (id.detail.nation !== undefined && id.detail.nation !== nationality) {
      //       throw new Error('Detainment: nationality mismatch.');
      //     }
      //   })
      // }
      // checkConsistency();