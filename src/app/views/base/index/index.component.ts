import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  carouselList = [
    {
      bannerImg: "./assets/banner_img/img_1.jpg",
      title: "Apple iPhone",
      description: "Explore iPhone, the world's most powerful personal device",
    },
    {
      bannerImg: "./assets/banner_img/img_3.jpg",
      title: "Never Settle - OnePlus",
      description:
        " OnePlus creates beautifully designed products with premium build quality & brings the best technology to users around the world",
    },
    {
      bannerImg: "./assets/banner_img/img_4.jpg",
      title: "Google Pixel",
      description: "Discover a better way to capture, store, and see the world",
    },
  ];



  apiData: PhotosApi[] = [
    {
      albumId: 1,
      id: 1,
      title: "Apple iPhone",
      url: "./assets/banner_img/img_1.jpg",
      thumbnailUrl: "./assets/banner_img/img_1.jpg"
    },
    {
      albumId: 1,
      id: 2,
      title: "Never Settle - OnePlus",
      url: "./assets/banner_img/img_3.jpg",
      thumbnailUrl: "./assets/banner_img/img_3.jpg"
    },
    {
      albumId: 1,
      id: 3,
      title: "Google Pixel",
      url: "./assets/banner_img/img_4.jpg",
      thumbnailUrl: "./assets/banner_img/img_4.jpg"
    }
  ]
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

  constructor() {}

  ngOnInit() {}
}
