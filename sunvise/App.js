import React from 'react';
import { BarChart } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from "react-native-svg";
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
      const data = [
        {
            value: 5,
            svg: {
              fill: '#FFD500',
            },
        },
        {
            value: 10,
            svg: {
                fill: '#FFA447',
            },
        },
        {
            value: 15,
            svg: {
                fill: '#FF8B47',
            },
        },
        {
            value: 20,
            svg: {
                fill: '#FF3300',
            },
        },
        {
            value: 25,
            svg: {
                fill: '#FF0000',
            },
        },
    ]

    return (
      <BarChart
          style={{ height: 200 }}
          data={data}
          gridMin={0}
          svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
          yAccessor={({ item }) => item.value}
          contentInset={{ top: 20, bottom: 20 }}
      />
    )
  }
}