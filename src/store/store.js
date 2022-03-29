import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export const store = new Vuex.Store({
  state:{
    accessToken:
      "pk.eyJ1IjoibmljaG9sYXNtYXJ0aW5vIiwiYSI6ImNrMjVhOGphOTAzZGUzbG8wNHJhdTZrMmYifQ.98uDMnGIvn1zrw4ZWUO35g",
    widthRange: [6, 10],
    parcelInfo: {},
    parcelsInfo: {},
    visibleParcels: {'pids': [
      "009721771",
      "004236131",
      "004934750",
      "003999696",
      "000615358",
      "008578796",
      "007857705",
      "009721525",
      "009721801",
      "004946561",
      "002322927",
      "004498372",
      "009721762",
      "009487271",
      "027660770",
      "010167749",
      "009721746",
      "009721819",
      "000546348",
      "011448491",
      "000781495",
      "000498882",
      "009723617",
      "009184813",
      "010330071",
      "019180438",
      "027457214",
      "002246538",
      "002314673",
      "000913936",
      "009767312",
      "004247175",
      "009905880",
      "010330089",
      "009142525",
      "009723331",
      "011384573",
      "011384549",
      "012997684",
      "011384310",
      "023122471",
      "003632547",
      "011206161",
      "008767432",
      "014504162",
      "026601958",
      "015224104",
      "001665570",
      "002217236",
      "009573763",
      "009864903",
      "006122183",
      "009884769",
      "009884793",
      "000857009",
      "009905847",
      "000499315",
      "003127583",
      "010166505",
      "011384859",
      "002986825",
      "018401589",
      "009864873",
      "001843711",
      "009936688",
      "000500534",
      "009884807",
      "001448871",
      "009937129",
      "014123509",
      "009937188",
      "003391205",
      "006193234",
      "009573747",
      "007789335",
      "009884831",
      "009936769",
      "009905863",
      "009767347",
      "009937200",
      "009149864",
      "011384883",
      "011385006",
      "009723153",
      "009936653",
      "009864938",
      "009767444",
      "014504251",
      "001659189",
      "009723188",
      "011384328",
      "027660770",
      "007441312",
      "009864911",
      "009937102",
      "014582864",
      "011384620",
      "005062900",
      "011384301",
      "003543200",
      "000546348",
      "001996851",
      "027457214",
      "001665596",
      "023122471",
      "011432446",
      "001809849",
      "001665570",
      "023392487",
      "002561026",
      "002402254",
      "011437740",
      "000842923",
      "002298619",
      "001478419",
      "000539040",
      "010048898",
      "010049002",
      "024847038",
      "012326771",
      "007305168",
      "000758523",
      "018700365",
      "002292611",
      "004588495",
      "007328591",
      "027925854",
      "026693518",
      "003658503",
      "009525025",
      "010048952",
      "000576646",
      "027428443",
      "030807972",
      "007567171",
      "010168044",
      "010168079",
      "001743627",
      "009858474",
      "009858504",
      "024847046",
      "009467769",
      "002037645",
      "009764348",
      "004595921",
      "003999696",
      "029968018",
      "029968992",
      "010195424",
      "010048936",
      "010048871",
      "010049029",
      "030861926",
      "030034035",
      "012326712",
      "026997398",
      "004433980",
      "010049011",
      "028651910",
      "010167978",
      "010092081",
      "004299051",
      "009858458",
      "008526753",
      "009858539",
      "005315808",
      "012326747",
      "012326666",
      "004498372",
      "006993567",
      "027660770",
      "010048928",
      "010048901",
      "009858440",
      "005084407",
      "026290855",
      "001857894",
      "030861918",
      "030807956",
      "010168036",
      "000949299",
      "010167749",
      "010167951",
      "004056345",
      "010195432",
      "012326691",
      "010048987",
      "010048995",
      "010048961",
      "010048979",
      "010465961",
      "009764356",
      "008768056",
      "010167927",
      "029996562",
      "007481250",
      "012326810",
      "000546348",
      "010246045",
      "010245804",
      "010245901",
      "002880865",
      "009472444",
      "009472495",
      "009472525",
      "009723617",
      "007613172",
      "002725444",
      "010480781",
      "002970431",
      "001568507",
      "000645869",
      "009752951",
      "010188924",
      "019180438",
      "005703441",
      "001898639",
      "008614636",
      "007066881",
      "010048847",
      "009588001",
      "007087594",
      "010048863",
      "010048898",
      "007159021",
      "008537232",
      "011424184",
      "011424133",
      "013375881",
      "009603140",
      "009351876",
      "031463436",
      "029572215",
      "024847038",
      "009457992",
      "005596793",
      "001319272",
      "009320369",
      "002246538",
      "007723130",
      "009472517",
      "009704540",
      "009686592",
      "000596647",
      "002884992",
      "010245979",
      "001153331",
      "025198521",
      "009753613",
      "010188886",
      "009686568",
      "009767312",
      "009767134",
      "009686541",
      "002366631",
      "009753125",
      "009686479",
      "023201312",
      "012215562",
      "007066902",
      "009858393",
      "010040587",
      "003658503",
      "009525025",
      "006128254",
      "010333363",
      "000659924",
      "000511285",
      "003826392",
      "009603042",
      "009603026",
      "007362765",
      "031463428",
      "029572223",
      "003514994",
      "008454612",
      "003142426",
      "002150204",
      "010245936",
      "002809354",
      "000929859",
      "009723587",
      "009704604",
      "001068920",
      "008767432",
      "009753591",
      "009686525",
      "009752935",
      "002296071",
      "009767401",
      "009704434",
      "009704400",
      "024393789",
      "009704396",
      "001920618",
      "001898612",
      "009723391",
      "000562050",
      "009858351",
      "008058644",
      "001678108",
      "002083965",
      "010040544",
      "010013938",
      "003658490",
      "010092048",
      "000658677",
      "010013954",
      "030607264",
      "000716642",
      "008908672",
      "005257310",
      "031463452",
      "005199395",
      "024847046",
      "009467769",
      "003018369",
      "005127912",
      "007527195",
      "000439398",
      "010245910",
      "002217236",
      "005574536",
      "009767126",
      "001068903",
      "026184389",
      "003096670",
      "009472584",
      "006568874",
      "009753583",
      "009704442",
      "010534253",
      "009753133",
      "010188797",
      "006024084",
      "002588561",
      "007097506",
      "009767151",
      "009683259",
      "001898621",
      "010166505",
      "004513037",
      "005433169",
      "002772477",
      "001816390",
      "007087047",
      "009858415",
      "010048880",
      "010048936",
      "010048871",
      "005137365",
      "016703341",
      "006107877",
      "009351795",
      "002442922",
      "007362331",
      "031463444",
      "029572207",
      "008578915",
      "008987530",
      "001678981",
      "000818330",
      "010245847",
      "000774774",
      "009472401",
      "009753575",
      "026184371",
      "010480765",
      "008665290",
      "009472550",
      "009704485",
      "001551477",
      "006569951",
      "001452045",
      "009752986",
      "010188746",
      "000648205",
      "009683241",
      "009723439",
      "004513045",
      "009351949",
      "009362355",
      "009858369",
      "009858385",
      "030685257",
      "010040609",
      "010048910",
      "004566432",
      "009858423",
      "010333339",
      "007096976",
      "008498954",
      "004576608",
      "009603115",
      "025417070",
      "015597652",
      "002334038",
      "028651910",
      "008454574",
      "009472380",
      "001310046",
      "011530201",
      "009472541",
      "005912784",
      "004192958",
      "009686584",
      "009752901",
      "009753168",
      "010188771",
      "009767347",
      "027178960",
      "001702998",
      "000546569",
      "009752978",
      "009352147",
      "012215571",
      "030685265",
      "001678094",
      "010040579",
      "010092081",
      "001309617",
      "008494991",
      "011424150",
      "001016768",
      "013227726",
      "007047959",
      "003826333",
      "011424010",
      "023209721",
      "008919071",
      "007977590",
      "010264230",
      "002303949",
      "009472428",
      "009472479",
      "009753559",
      "009686622",
      "010245944",
      "010245995",
      "000699861",
      "009753605",
      "010534245",
      "009767282",
      "009767266",
      "009686509",
      "009767444",
      "009686487",
      "009725989",
      "009352007",
      "000710865",
      "009587934",
      "010040471",
      "009723188",
      "009858407",
      "001440667",
      "010048944",
      "003936597",
      "027660770",
      "010048928",
      "010048901",
      "009858440",
      "029037182",
      "008538051",
      "008279039",
      "009682163",
      "009351833",
      "004863917",
      "011341751",
      "007450761",
      "030454964",
      "007537689",
      "026290855",
      "009467599",
      "015661067",
      "000510963",
      "010245766",
      "005294011",
      "007329105",
      "010245812",
      "000439371",
      "009103015",
      "000682292",
      "009753567",
      "009686657",
      "010245987",
      "005170494",
      "009767231",
      "010188835",
      "006559778",
      "009752919",
      "009767371",
      "000927228",
      "001405021",
      "009726004",
      "011088486",
      "009351973",
      "010040510",
      "009588027",
      "002098296",
      "011424214",
      "000443549",
      "008633801",
      "024906841",
      "001050516",
      "002172275",
      "030364132",
      "030364141",
      "030958512",
      "015661083",
      "005596840",
      "010459014",
      "000546348",
      "010480781",
      "001996851",
      "005596793",
      "001319272",
      "009320369",
      "005127947",
      "010330038",
      "002311500",
      "011437642",
      "011437693",
      "011310570",
      "030958504",
      "006336680",
      "003018369",
      "005127912",
      "007527195",
      "000842923",
      "010405739",
      "008578915",
      "008987530",
      "010480765",
      "001974629",
      "006286216",
      "008120358",
      "010480749",
      "011530201",
      "017386829",
      "011437723",
      "008919071",
      "007977590",
      "010264230",
      "002303949",
      "011310472",
      "000539040",
      "000658758",
      "008987564",
      "015661067",
    ]},
    rootFolder: "file:///Volumes/GoogleDrive/My Drive/Grasshopper/Architecture",
    assumptions: {
      landCost: {
        label: "LAND PRICE",
        value: 3.5,
        unit: "$M/acre"
      },
      baseSale: {
        label: "SALE PRICE",
        value: 450,
        unit: "$/sq.ft."
      },
      proposedSiteCoverage: {
        label: "PROPOSED SITE COVERAGE",
        value: 40,
        unit: "%"
      },
      developmentPeriod: {
        label: "DEVELOPMENT PERIOD",
        value: 18,
        unit: "months"
      },

      softCosts: {
        subtotal: "$ 629,064",
        contingency: "$ 62,906",
        gst: "$ 34,599",
        total: "$ 726,569",
        inputs: {
          // Consultants – A&E
          consultantsArchEng: {
            label: "CONSULTANTS - A&E",
            total: "$ 214,402",
            inputs: {
              consultantCosts: {
                label: "KRAHN GROUP (A,S,M,E,C,L)",
                value: 7,
                unit: "$/sq.ft.",
                unitSuffix: "x Total Building Area",
                total: "$ 115,000"
              },
              otherConsultantCosts: {
                label: "OTHER CONSULT. COSTS",
                value: 10,
                unit: "% of Krahn Group",
                total: "$ 11,400"
              },
              fieldReviews: {
                label: "FIELD REVIEWS",
                value: 12.5,
                unit: "% of Krahn + Other",
                total: "$ 15,454"
              },
            }
          },
          // Permits, DCC's & Rezoning
          permitsRezoning: {
            label: "PERMITS, DCCs & REZONING",
            total: "$ 267,314",
            inputs: {
              rezoningFees: {
                label: "REZONING FEES (if reqd)",
                value: 0,
                unit: "",
                total: "$ 0"
              },
              developmentPermitFees: {
                label: "DP FEES",
                value: 0.0845418482148664,
                unit: "$/sq.ft.",
                unitSuffix: "x Gross Bldg Footprint + Base Fee",
                total: "$ 6,545"
              },
              buildingPermitFees: {
                label: "BP FEES",
                value: 0,
                unit: "% of Total Hard",
                total: "$ 57,654"
              },
              dccDeveloped: {
                label: "DCC'S (DEVELOPED AREA)",
                value: 167419,
                unit: "$/acre",
                unitSuffix: "x Total Developed Area",
                total: "$ 171,853"
              },
              dccFloorMezz: {
                label: "DCC'S (FLOOR/MEZZ AREA)",
                value: 1.74,
                unit: "$/sq.ft.",
                total: "$ 3,167"
              },
              otherPermitFees: {
                label: "OTHER FEES",
                value: 5,
                unit: "% of BP Fees",
                total: "$ 2,893"
              },
            }

          },
          // Lenders
          lenders: {
            label: "LENDERS",
            total: "$ 31,555",
            inputs: {
              appraisalQS: {
                label: "APPRAISAL & QS",
                value: 25000,
                unit: "",
                total: "$ 25,000"
              },
              otherLenderFees: {
                label: "OTHER FEES",
                value: 5,
                unit: "% of Total Consultants - A&E",
                total: "$ 6,555"
              },
            }
          },
          // Legal & Insurance
          legalInsurance: {
            label: "LEGAL & INSURANCE",
            total: "$ 27,488",
            inputs: {
              legalFees: {
                label: "LEGAL FEES",
                value: 5,
                unit: "% of Krahn Group",
                total: "$ 5,655"
              },
              cocInsurance: {
                label: "COC INSURANCE",
                value: 0.25,
                unit: "% of Total Hard",
                total: "$ 20,414"
              },
              otherLegalFees: {
                label: "OTHER FEES",
                value: 5,
                unit: "% of Total Legal & Insurance",
                total: "$ 1,302"
              },
            }
          },
          // Admin & Misc
          adminMisc: {
            label: "ADMIN & MISC",
            total: "$ 88,000",
            inputs: {
              advertisingPromotion: {
                label: "ADVERTISING/ PROMOTION",
                value: 25000,
                unit: "",
                total: "$ 25,000"
              },
              accounting: {
                label: "ACCOUNTING",
                value: 20000,
                unit: "",
                total: "$ 20,000"
              },
              overhead: {
                label: "OVERHEAD",
                value: 10000,
                unit: "",
                total: "$ 10,000"
              },
              hydroGasFees: {
                label: "HYDRO & GAS FEES",
                value: 25000,
                unit: "",
                total: "$ 25,000"
              },
              otherAdminFees: {
                label: "OTHER FEES",
                value: 10,
                unit: "% of Total Admin & Misc.",
                total: "$ 8,000"
              },
            }
          }
        },
      },

      hardCosts: {
        subtotal: "$ 6,529,064",
        contingency: "$ 62,906",
        gst: "$ 34,599",
        total: "$ 8,165,569",
        inputs: {
          baseBuilding: {
            label: "BASE BUILDING",
            total: "$ 6,135,414",
            inputs: {
              baseBuildingCosts: {
                label: "BASE CONSTRUCTION",
                value: 230,
                unit: "$/sq.ft.",
                unitSuffix: "x Gross Building Footprint",
                total: "$ 5,780,563"
              },
              officeCosts: {
                label: "FLOOR/ MEZZ CONSTRUCTION",
                value: 90,
                unit: "$/sq.ft.",
                unitSuffix: "x Floor/Mezz Area",
                total: "$ 180,563"
              },
            }
          },
          offsitesOnsitesLandscape: {
            label: "OFFSITES/ONSITES & LANDSCAPE",
            total: "$ 635,414",
            inputs: {
              offsiteCosts: {
                label: "OFFSITE COSTS",
                value: 5,
                unit: "% of Base Construction",
                total: "$ 278,563"
              },
              onsiteCosts: {
                label: "ONSITE COSTS",
                value: 10,
                unit: "% of Base Construction",
                total: "$ 578,563"
              },
              landscaping: {
                label: "LANDSCAPE & MISC.",
                value: 2.5,
                unit: "% of Base Construction",
                total: "$ 128,563"
              },
            }
          }
        }

      },


      contingencyCoeff: {
        label: "CONTINGENCY",
        value: 10,
        unit: "%",
        unitSuffix: " of Subtotal"
      },
      commonGrossAreaCoeff: {
        label: "GROSS UP FACTOR",
        value: 5,
        unit: "%"
      },
      additionalOfficeMezzAreaCoeff: {
        label: "FLOOR/MEZZ. AREA",
        value: 10,
        unit: "%"
      },
      utilities: {
        label: "UTILITIES",
        value: "",
        unit: ""
      },
      administrative: {
        label: "ADMINISTRATIVE",
        value: "",
        unit: ""
      },
      requiredInvestment: {
        label: "REQD. PROPERTY INVESTMENT",
        value: 20,
        unit: "%"
      },
      workingCapital: {
        label: "WORKING CAPITAL",
        value: 10,
        unit: "%"
      },
      interestCost: {
        label: "INTEREST RATE",
        value: 5,
        unit: "%"
      },

      GST: {
        label: "GST",
        value: 5,
        unit: "%",
        unitSuffix: "of Subtotal + Contingency"
      },
      costInflation: {
        label: "COST INFLATION",
        value: 2,
        unit: "%"
      },
      salesAppreciation: {
        label: "SALES APPRECIATION",
        value: 7,
        unit: "%"
      },

      baseFloor: {
        value: 10,
      },
      realtorCommission: {
        label: "REALTOR COMMISSION",
        value: 2.5,
        unit: "% of Sales Revenue"
      },
      inducements: {
        label: "INDUCEMENTS",
        value: 1.5,
        unit: "% of Sales Revenue"
      },
      brokerFee: {
        label: "BROKER FEE",
        value: 1,
        unit: "% of Total Construction Costs"
      },
      bankFee: {
        label: "BANK FEE",
        value: 1,
        unit: "% of Total Construction Costs"
      },
    },
    costAssumptions: {
      consultantsArchEngInputs: [
        'consultantCosts', 
        'otherConsultantCosts', 
        'fieldReviews'
      ],
      permitsRezoningInputs: [
        'rezoningFees', 
        'developmentPermitFees', 
        'buildingPermitFees',
        'dccDeveloped',
        'dccFloorMezz',
        'otherPermitFees'
      ],
      lendersInputs: [
        'appraisalQS', 
        'otherLenderFees'
      ],
      legalInsuranceInputs: [
        'legalFees',
        'cocInsurance',
        'otherLegalFees'
      ],
      adminMiscInputs: [
        'advertisingPromotion',
        'accounting',
        'overhead',
        'hydroGasFees',
        'otherAdminFees'
      ],
      baseBuildingInputs: [
        'baseBuildingCosts',
        'officeCosts',
      ],
      offsitesOnsitesLandscapeInputs: [
        'offsiteCosts',
        'onsiteCosts',
        'landscaping',
      ],
    },
    draw: null,
    mapbox: null,
    polygons: null
  },
  getters: {
    getDraw: state => {
      return state.draw
    },
    getSelectedParcel: state => {
      return state.parcelInfo
    },
    getParcelsInfo: state => {
      return state.parcelsInfo
    },
    getMap: (state) => {
      return state.mapbox
    },
    
    getClickedFeaturesFromState: (state, e) => {
      // Set `bbox` as 5px reactangle area around clicked point.
      const bbox = [
        [e.point.x - 5, e.point.y - 5],
        [e.point.x + 5, e.point.y + 5]
      ];

      // Find features intersecting the bounding box.
      const selectedFeatures = state.mapbox.queryRenderedFeatures(bbox, {
        layers: ['property-parcel-polygons-surrey']
      })
      return selectedFeatures
    }
  },
  mutations: {
    setRange: (state, value) => {
      state.widthRange = value
    },
    setAssumption: (state, assumption) => {
      state.assumptions[assumption['name']]['value'] = parseFloat(assumption['value'])
    },
    setAssumptionByArray: (state, assumption) => {
      let address = state.assumptions
      for (let i = 0; i < assumption.name.length; i++) {
        address = address[assumption.name[i]]
      }
      address['value'] = parseFloat(assumption['value'])
    },
    selectParcel: (state, parcelInfo) => {
      state.parcelInfo = parcelInfo
    },
    setParcelsInfo: (state, parcelsInfo) => {
      state.parcelsInfo = parcelsInfo
    },
    setVisibleParcels: (state, pids) => {
      state.visibleParcels['pids'] = pids
    },
    setDraw: (state, draw) => {
      state.draw = draw
    },
    loadMap: (state, mapbox) => {
      state.mapbox = mapbox
    },
    generatePolygons: (state, polygons) => {
      updateDraw(state.mapbox, state.draw, state.widthRange)
      state.polygons = polygons
    }
  },
  actions: {
    loadMap (context) {
      mapboxgl.accessToken = this.state.accessToken
      var mapbox = new mapboxgl.Map({
        container: "map",
        interactive: true,
        style:  "mapbox://styles/mapbox/light-v10",
        zoom: 15,
        center: [-122.845317, 49.191616],
        pitch: 45,
        bearing: 360,
        antialias: false,
        attributionControl: false
      }).on("style.load", () => {
        window.tb = new Threebox(
          mapbox,
          mapbox.getCanvas().getContext("webgl"), {
            defaultLights: true,
          }
        );

        if (mapbox.getLayer("custom_layer") == null) {

          mapbox.on('load', () => {

            // Add parcels layer source (Surrey)
            mapbox.addSource('property-parcel-polygons-surrey-src', {
              'type': 'geojson',
              'data': '/data/property-parcel-surrey-zn-bv-fc.geojson'
            })

            // Add Surrey parcels layer to map
            mapbox.addLayer({
              'id': 'property-parcel-polygons-surrey',
              'type': 'fill',
              'source': 'property-parcel-polygons-surrey-src',
              'paint': {
                  'fill-color': {
                    'type': 'identity',
                    'property': 'fill-color'
                  },
                  'fill-opacity': 0.3
                  // [
                  //     'case',
                  //     ['boolean', ['feature-state', 'hover'], false],
                  //     1,
                  //     0.5
                  //   ]
              }
            })

            mapbox.addLayer({
              'id': 'property-parcel-polygons-surrey-highlighted',
              'type': 'fill',
              'source': 'property-parcel-polygons-surrey-src',
              'paint': {
                'fill-outline-color': '#484896',
                'fill-color': '#6e599f',
                'fill-opacity': 0.75
              },
              'minzoom': 24
              // 'filter': ['in', 'PID', '']
            })

            // // Add CoV parcels layer to map
            // mapbox.addLayer({
            //   'id': 'property-parcel-polygons-shp',
            //   'type': 'fill',
            //   'source': 'property-parcel-polygons',
            //   'paint': {
            //     'fill-color': '#0000ff', // blue color fill
            //     'fill-opacity': 0.2,
            //   },
            // });

            // The 'building' layer in the Mapbox Streets
            // vector tileset contains building height data
            // from OpenStreetMap.
            mapbox.addLayer({
              'id': 'add-3d-buildings',
              'source': 'composite',
              'source-layer': 'building',
              'filter': ['==', 'extrude', 'true'],
              'type': 'fill-extrusion',
              'minzoom': 15,
              'paint': {
                'fill-extrusion-color': '#aaa',

                // Use an 'interpolate' expression to
                // add a smooth transition effect to
                // the buildings as the user zooms in.
                // 'fill-extrusion-height': [
                //   'interpolate',
                //   ['linear'],
                //   ['zoom'],
                //   9,
                //   0,
                //   15.05,
                //   ['get', 'height']
                // ],
                // 'fill-extrusion-base': [
                //   'interpolate',
                //   ['linear'],
                //   ['zoom'],
                //   9,
                //   0,
                //   15.05,
                //   ['get', 'min_height']
                // ],

                'fill-extrusion-height': ['get', 'height'],
                'fill-extrusion-opacity': 0.8,
              },
            });
          });

          // // Add spheres to map
          // const _this = this
          // mapbox.addLayer({
          //   id: "custom_layer",
          //   type: "custom",
          //   renderingMode: "3d",
          //
          //   onAdd: function (map, mbxContext) {
          //     window.tb.add(_this.sphere(-123.1068658, 49.2626982));
          //     window.tb.add(_this.sphere(-123.1088658, 49.2626982));
          //     console.log(map)
          //     console.log(mbxContext)
          //     let pulseObj = window.tb
          //       .Object3D({ obj: pulse, units: "meters" })
          //       .setCoords([-123.1068658, 49.2626982, 0]);
          //
          //     pulseObj.setAnchor("bottom-left");
          //
          //     window.tb.add(pulseObj);
          //   },
          //   render: function (gl, matrix) {
          //     window.tb.update();
          //     _this.animatePulse();
          //     console.log(gl)
          //     console.log(matrix)
          //   },
          // });

        }
      });

      context.commit('loadMap', mapbox)
    },
    setDraw (context) {
      // Add draw controls
      const draw = new MapboxDraw({
        displayControlsDefault: false,
          controls: {
            polygon: true,
            trash: true
        },
        defaultMode: 'draw_polygon'
      });
      // this.state.mapbox.addControl(draw, 'top-right');
      // context.commit('setDraw', draw)
    },
    
  }
})
