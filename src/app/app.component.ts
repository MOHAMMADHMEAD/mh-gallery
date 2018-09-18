import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // image=[
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   {photo:"https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178"},
  //   ]
  image=[
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    "https://cdn.shopify.com/s/files/1/1683/2873/products/Real_Madrid_logo_LOGO_touch_3D_lamp_colorful_Nightlight_lamp4_900x.JPG?v=1527292178",
    ]








}
