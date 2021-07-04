import { scaleLinear } from 'd3-scale';
import React, { useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker, ZoomableGroup
} from 'react-simple-maps';
import world50m from '../../../assets/geo-data/world-50m.json';
import cities from '../../../assets/geo-data/world-most-populous-cities.json';

const WorldMap = () => {
    const [Cities, setCities] = useState(cities);
    console.log(Cities);
    const cityScale = scaleLinear()
        .domain([0, 37843000])
        .range([1, 25]);
    const secondaryColor = "#4357db";
    const lightColor = "#cbcccc";
    return (
        <ComposableMap
            // projectionConfig={{ scale: 205 }}
            width={980}
            height={551}
            style={{
                width: '100%',
                height: 'auto',
            }}
        >
            <ZoomableGroup center={[0, 20]} disablePanning>
                <Geographies geography={world50m}>
                    {({ geographies, projection }) =>
                        geographies.map(
                            (geography, i) =>
                                geography.id !== 'ATA' && (
                                    <Geography
                                        key={i}
                                        geography={geography}
                                        // projection={projection}
                                        style={{
                                            default: {
                                                fill: lightColor,
                                                stroke: lightColor,
                                                strokeWidth: 0.75,
                                                outline: 'none',
                                            },
                                            hover: {
                                                fill: secondaryColor,
                                                stroke: secondaryColor,
                                                strokeWidth: 0.75,
                                                outline: 'none',
                                            },
                                            pressed: {
                                                fill: secondaryColor,
                                                stroke: secondaryColor,
                                                strokeWidth: 0.75,
                                                outline: 'none',
                                            },
                                        }}
                                    />
                                ),
                        )
                    }
                </Geographies>
               
                {Cities.map(({ name, coordinates, population }) => (
                    <Marker key={name} coordinates={coordinates}>
                        
                            <circle
                                    cx={0}
                                    cy={0}
                                    r={10}
                                    fill={secondaryColor}
                                    stroke={secondaryColor}
                                    strokeWidth="2"
                                />
                       
                        <text
                            textAnchor="middle"
                            y={25 }
                            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}
                
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default WorldMap;