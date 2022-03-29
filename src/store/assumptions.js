export const assumptions = {
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
    }
  }
