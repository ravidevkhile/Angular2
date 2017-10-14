import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
declare var ol: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ol: any;
  map:any;
  raster = new ol.layer.Tile({
        source: new ol.source.OSM()
      });
      source = new ol.source.Vector();

      vector;
sketch;
helpTooltipElement;
helpTooltip;
measureTooltipElement;
measureTooltip;
draw; // global so we can remove it later

typeSelect:string='line';
continuePolygonMsg = 'Click to continue drawing the polygon';
continueLineMsg = 'Click to continue drawing the line';
ngOnInit(): void {
  let objComp=this;
       this.vector = new ol.layer.Vector({
        source: this.source,
        style: new ol.style.Style({
          fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
          }),
          stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2
          }),
          image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
              color: '#ffcc33'
            })
          })
        })
      });
    	 this.map = new ol.Map({
        layers: [objComp.raster, objComp.vector],
        target: 'map',
        view: new ol.View({
          center: [-11000000, 4600000],
          zoom: 15
        })
      });

      this.map.on('pointermove', function(evt) {
        if (evt.dragging) {
          return;
        }
        /** @type {string} */
        var helpMsg = 'Click to start drawing';

        if (objComp.sketch) {
          var geom = (objComp.sketch.getGeometry());
          if (geom instanceof ol.geom.Polygon) {
            helpMsg = objComp.continuePolygonMsg;
          } else if (geom instanceof ol.geom.LineString) {
            helpMsg = objComp.continueLineMsg;
          }
        }

        objComp.helpTooltipElement.innerHTML = helpMsg;
        objComp.helpTooltip.setPosition(evt.coordinate);

        objComp.helpTooltipElement.classList.remove('hidden');
      },this);
 this.map.getViewport().addEventListener('mouseout', function() {
        objComp.helpTooltipElement.classList.add('hidden');
      });
      this.addInteraction();
}

     
     formatLength(line) {
        var length = ol.Sphere.getLength(line);
        var output;
        if (length > 100) {
          output = (Math.round(length / 1000 * 100) / 100) +
              ' ' + 'km';
        } else {
          output = (Math.round(length * 100) / 100) +
              ' ' + 'm';
        }
        return output;
      };


      
      formatArea(polygon) {
        var area = ol.Sphere.getArea(polygon);
        var output;
        if (area > 10000) {
          output = (Math.round(area / 1000000 * 100) / 100) +
              ' ' + 'km<sup>2</sup>';
        } else {
          output = (Math.round(area * 100) / 100) +
              ' ' + 'm<sup>2</sup>';
        }
        return output;
      };
    addInteraction() {
      let objComp=this;
        var type = (this.typeSelect == 'area' ? 'Polygon' : 'LineString');
        this.draw = new ol.interaction.Draw({
          source: this.source,
          type: /** @type {ol.geom.GeometryType} */ (type),
          style: new ol.style.Style({
            fill: new ol.style.Fill({
              color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new ol.style.Stroke({
              color: 'rgba(0, 0, 0, 0.5)',
              lineDash: [10, 10],
              width: 2
            }),
            image: new ol.style.Circle({
              radius: 5,
              stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0.7)'
              }),
              fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)'
              })
            })
          })
        });
        this.map.addInteraction(this.draw);

        this.createMeasureTooltip();
        this.createHelpTooltip();

        var listener;
        objComp.draw.on('drawstart',
            function(evt) {
              // set sketch
              objComp.sketch = evt.feature;

              /** @type {ol.Coordinate|undefined} */
              var tooltipCoord = evt.coordinate;

              listener = objComp.sketch.getGeometry().on('change', function(evt) {
                var geom = evt.target;
                var output;
                if (geom instanceof ol.geom.Polygon) {
                  output = objComp.formatArea(geom);
                  tooltipCoord = geom.getInteriorPoint().getCoordinates();
                } else if (geom instanceof ol.geom.LineString) {
                  output = objComp.formatLength(geom);
                  tooltipCoord = geom.getLastCoordinate();
                }
                objComp.measureTooltipElement.innerHTML = output;
                objComp.measureTooltip.setPosition(tooltipCoord);
              });
            }, objComp);

        objComp.draw.on('drawend',
            function() {
             objComp.measureTooltipElement.className = 'tooltip tooltip-static';
              objComp.measureTooltip.setOffset([0, -7]);
              // unset sketch
              objComp.sketch = null;
              // unset tooltip so that a new one can be created
              objComp.measureTooltipElement = null;
              objComp.createMeasureTooltip();
              ol.Observable.unByKey(listener);
            }, objComp);
      }
      /**
       * Creates a new help tooltip
       */
      createHelpTooltip() {        
        if (this.helpTooltipElement) {
          this.helpTooltipElement.parentNode.removeChild(this.helpTooltipElement);
        }
        this.helpTooltipElement = document.createElement('div');
        this.helpTooltipElement.className = 'tooltip hidden';
        this.helpTooltip = new ol.Overlay({
          element: this.helpTooltipElement,
          offset: [15, 0],
          positioning: 'center-left'
        });
        this.map.addOverlay(this.helpTooltip);
      }


      /**
       * Creates a new measure tooltip
       */
      createMeasureTooltip() {
        if (this.measureTooltipElement) {
          this.measureTooltipElement.parentNode.removeChild(this.measureTooltipElement);
        }
        this.measureTooltipElement = document.createElement('div');
        this.measureTooltipElement.className = 'tooltip tooltip-measure';
        this.measureTooltip = new ol.Overlay({
          element: this.measureTooltipElement,
          offset: [0, -15],
          positioning: 'bottom-center'
        });
        this.map.addOverlay(this.measureTooltip);
      }

typeChange()
{
  this.map.removeInteraction(this.draw);
        this.addInteraction();
}


}
