import { Injectable } from '@angular/core';
import { ICar } from './cars';
import { CarReserveService } from '../car-reserve/car-reserve-api.service';
import { HttpClient } from '@angular/common/http';


// const cars: ICar[] = [{
//   id: 1,
//   name: 'Toyota Camry',
//   imgUrl: 'assets/images/extracted/2010-toyota-camry-hybrid-sedan-front-view.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sedan',
//   capacity: '4 seats',
//   models: [
//     {
//       year: 2010,
//       imgUrl: 'assets/images/extracted/2010-toyota-camry-hybrid-sedan-front-view.png',
//       price: 18000
//     },
//     {
//       year: 2012,
//       imgUrl: 'assets/images/extracted/toyota-camry-2012-sideView.png',
//       price: 25000
//     },
//     {
//       year: 2014,
//       imgUrl: 'assets/images/extracted/toyota_camry_2014.jpg',
//       price: 30000
//     },
//   ]
// },
// {
//   id: 2,
//   name: 'Dodge Charger',
//   imgUrl: 'assets/images/extracted/2012_dodge_charger_angularfront.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sedan',
//   capacity: '2 seats',
//   models: [
//     {
//       year: 2012,
//       imgUrl: 'assets/images/extracted/2012_dodge_charger_angularfront.png',
//       price: 35000
//     },
//   ]
// },
// {
//   id: 3,
//   name: 'Acura Mdx',
//   imgUrl: 'assets/images/extracted/2014_acura_mdx_angularfront.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sedan',
//   capacity: '2 seats',
//   models: [
//     {
//       year: 2014,
//       imgUrl: 'assets/images/extracted/2014_acura_mdx_angularfront.png',
//       price: 35000
//     },
//   ]
// },

// {
//   id: 4,
//   name: 'Toyota Corolla',
//   imgUrl: 'assets/images/extracted/toyota_corolla_2010.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sedan',
//   capacity: '2 seats',
//   models: [
//     {
//       year: 2010,
//       imgUrl: 'assets/images/extracted/toyota_corolla_2010.png',
//       price: 18000
//     },
//     {
//       year: 2012,
//       imgUrl: 'assets/images/extracted/toyota_corolla_2012.jpg',
//       price: 25000
//     },
//     {
//       year: 2014,
//       imgUrl: 'assets/images/extracted/toyota_corolla_2014.jpg',
//       price: 30000
//     },
//     {
//       year: 2016,
//       imgUrl: 'assets/images/extracted/toyota_corolla_2016.jpg',
//       price: 35000
//     },
//   ]
// },

// {
//   id: 5,
//   name: 'Honda Accord',
//   imgUrl: 'assets/images/extracted/2014_honda_accord_coupe_angularfront.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2014,
//   price: 30000
// },
// {
//   id: 6,
//   name: 'Lexus ES 350',
//   imgUrl: 'assets/images/extracted/2014_lexus_es_angularfront.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2014,
//   price: 35000
// },
// {
//   id: 7,
//   name: 'Lexus LX',
//   imgUrl: 'assets/images/extracted/2014_lexus_lx_angularfront.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2014
// },
// {
//   id: 8,
//   name: 'Nissan PathFinder',
//   imgUrl: 'assets/images/extracted/2014_nissan_pathfinder_angularfront.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2014
// },
// {
//   id: 9,
//   name: 'Toyota Land Cruiser',
//   imgUrl: 'assets/images/extracted/2014_toyota_land_cruiser_angularfront.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2014,
//   price: 65000
// },
// {
//   id: 10,
//   name: 'Lexus LS 460',
//   imgUrl: 'assets/images/extracted/2014-Lexus-LS-460-Sedan-Base-4dr-Rear-wheel-Drive-Sedan-Photo-1.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2014,
// },
// {
//   id: 11,
//   name: 'Toyota Sequoia',
//   imgUrl: 'assets/images/extracted/2016_toyota_sequoia_angularfront.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2016
// },

// {
//   id: 12,
//   name: 'Ford Explorer',
//   imgUrl: 'assets/images/extracted/2014_ford_explorer_angularfront.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2014,
//   price: 35000
// },


// {
//   id: 13,
//   name: 'Ford Explorer',
//   imgUrl: 'assets/images/extracted/2018_ford_explorer_angularfront.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2018,
//   price: 45000
// },
// {
//   id: 14,
//   name: 'Kia Rio',
//   imgUrl: 'assets/images/extracted/2018_kia_rio_angularfront.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2018,
//   price: 22000
// },
// {
//   id: 15,
//   name: 'Ford Focus',
//   imgUrl: 'assets/images/extracted/2018-ford-focus.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2018,
//   price: 22000
// },
// {
//   id: 16,
//   name: 'Toyota Camry',
//   imgUrl: 'assets/images/extracted/toyota-camry-2012-sideView.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2012,
//   price: 25000
// },
// {
//   id: 17,
//   name: 'Toyota Camry',
//   imgUrl: 'assets/images/extracted/Toyota-Camry-2015.png',
//   condition: 'In perfect working condition',
//   transition: 'Automatic',
//   bodyType: 'Sports',
//   capacity: '2 seats',
//   model: 2014,
//   price: 30000
// },
// ];

@Injectable()

export class CarService {
  cars: ICar[];
  constructor(private reserveCar: CarReserveService, private http: HttpClient) { }
}
