import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export const store = new Vuex.Store({
  state:{
    widthRange: [6, 10],
    parcelInfo: {},
    parcelsInfo: {},
    draw: null,
    mapbox: null,
    polygons: null
  },
  getters: {
    getDraw: state => {
      return state.draw
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
