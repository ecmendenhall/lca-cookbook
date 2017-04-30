export default {
  ingredients: [
    {
      name: "Broccoli",
      toEnvironment: {
        air: [
          {
            name: "Ammonia",
            amount: 0.00029143,
            unit: "kg"
          }
        ],
        soil: [
          {
            name: "Acephate",
            amount: 3E-05,
            unit: "kg"
          }
        ],
        water: [
          {
            name: "Nitrate",
            amount: 0.015943,
            unit: "kg"
          }
        ]
      },
      fromEnvironment: {
        naturalResource: [
          {
            name: "Energy, gross calorific value, in biomass",
            amount: 2.0866,
            unit: "MJ"
          }
        ]
      },
      fromTechnoSphere: [
        {
          name: "Electricity, low voltage",
          amount: 0.045,
          unit: "kWh"
        }
      ]
    },
    {
      name: "Chicken",
      waste: [
        {
          name: "Poultry manure, fresh",
          amount: 1.9306,
          unit: "kg"
        }
      ],
      toEnvironment: {
        air: [
          {
            name: "Ammonia",
            amount: 0.014645,
            unit: "kg"
          }
        ],
        water: [
          {
            name: "Nitrate",
            amount: 0.041274,
            unit: "kg"
          }
        ]
      },
      fromEnvironment: {
        naturalResource: [
          {
            name: "Water, unspecified natural origin",
            amount: 0.00518,
            unit: "m3"
          }
        ]
      },
      fromTechnoSphere: [
        {
          name: "Electricity, high voltage",
          amount: 0.53443,
          unit: "kWh"
        }
      ]
    },
    {
      name: "Rice",
      toEnvironment: {
        air: [
          {
            name: "Ammonia",
            amount: 0.0012818,
            unit: "kg"
          }
        ],
        soil: [
          {
            name: "Lead",
            amount: 2.2581E-07,
            unit: "kg"
          }
        ],
        water: [
          {
            name: "Nitrate",
            amount: 0.046903,
            unit: "kg"
          }
        ]
      },
      fromEnvironment: {
        naturalResource: [
          {
            name: "Carbon dioxide, in air",
            amount: 1.4501,
            unit: "kg"
          },
          {
            name: "Energy, gross calorific value, in biomass",
            amount: 16.342,
            unit: "MJ"
          }
        ]
      },
      fromTechnoSphere: [
        {
          name: "Irrigation",
          amount: 0.94415,
          unit: "m3"
        }
      ]
    }
  ]
}
