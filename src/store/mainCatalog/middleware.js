/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
import {
  getGamingMonitorsCreater,
  getDesctopsCreater,
  getLaptopsCreater,
  getTabletsCreater
} from './actionCreator';

export const getMainCatalogProducts = () => (dispatch) => {
  axios.get('/products')
    .then((data) => {
      const gamingMonitorList = []
      const desctopsList = []
      const laptopList = []
      const tabletList = []

      data.data.forEach((product) => {
        switch (product.categories) {
          case 'gamingMonitors':
            if (
              gamingMonitorList.length < 4
              && product.quantity > 0
              && product.newProduct === 'no'
            ) gamingMonitorList.push(product)
            break

          case 'desctops':
            if (
              desctopsList.length < 4
              && product.quantity > 0
              && product.newProduct === 'no'
            ) desctopsList.push(product)
            break

          case 'laptops':
            if (
              laptopList.length < 4
              && product.quantity > 0
              && product.newProduct === 'no'
            ) laptopList.push(product)
            break

          case 'tablets':
            if (
              tabletList.length < 4
              && product.quantity > 0
              && product.newProduct === 'no'
            ) tabletList.push(product)
            break

          default:
            return null
        }

        return null
      })

      dispatch(getGamingMonitorsCreater(gamingMonitorList))
      dispatch(getDesctopsCreater(desctopsList))
      dispatch(getLaptopsCreater(laptopList))
      dispatch(getTabletsCreater(tabletList))
    })
}

export default getMainCatalogProducts