window.ALAD_CONFIG = {
  "stageWidth": 1920,
  "stageHeight": 1080,
  "fitMode": "cover",
  "bgColor": "#000000",
  "transition": 0.8,
  "backgroundFade": true,
  "clockTimezone": "America/Lima",
  "projectId": "p_muojvzsl1d8lpy",
  "backgrounds": [
    {
      "id": "b_muojy4drg5554m",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_muojvzsl1d8lpy/1790800424766_pantalla-d1553-halls-plantilla.mp4",
      "duration": 8,
      "breakpoints": null,
      "condition": null
    }
  ],
  "resources": [
    {
      "id": "r_muojyhcqpm5d59",
      "type": "weather",
      "lat": -12.0464,
      "lon": -77.0428,
      "city": "Lima",
      "unit": "celsius",
      "tokenPrefix": "clima-halls"
    }
  ],
  "weather": {
    "enabled": true,
    "lat": -12.0464,
    "lon": -77.0428,
    "city": "Lima",
    "unit": "celsius",
    "refresh": 15
  },
  "apiRefreshMin": 1,
  "breakpoints": [
    {
      "id": "bp_muojxffgrkdr5w",
      "maxWidth": 1920,
      "width": 1920,
      "height": 1080
    }
  ],
  "elements": [
    {
      "id": "e_muojyqzbkw87dm",
      "resourceId": "r_muojyhcqpm5d59",
      "type": "weather",
      "enabled": true,
      "x": 70.2,
      "y": 18.7,
      "width": 20.1,
      "height": 29.8,
      "align": "center",
      "zIndex": 2,
      "fontSize": 92,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "Anton-Regular",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {
        "bp_muojxffgrkdr5w": {
          "x": 66.8,
          "y": 23.3,
          "width": 31.5,
          "height": 28.1,
          "fontSize": 111
        }
      },
      "showWeatherIcon": false,
      "showWeatherTemp": true,
      "showWeatherCity": false,
      "showWeatherCondition": false
    },
    {
      "id": "e_muok23mxx6mglr",
      "resourceId": "",
      "type": "text",
      "enabled": true,
      "x": 40,
      "y": 7.3,
      "width": 80,
      "height": null,
      "align": "center",
      "zIndex": 2,
      "fontSize": 114,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "Anton-Regular",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {
        "bp_muojxffgrkdr5w": {
          "x": 41.4,
          "y": 7.2,
          "fontSize": 143
        }
      },
      "text": "LIMA"
    }
  ]
};
